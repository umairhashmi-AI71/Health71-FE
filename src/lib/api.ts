import { LoginRequest, LoginResponse, ApiError } from '@/types/auth';
import { PatientFhirResponse } from '@/types/patient';
import { 
  UploadDocumentResponse, 
  KnowledgebaseDocument, 
  KnowledgebaseStats 
} from '@/types/knowledgebase';
import { 
  DiagnosisSearchRequest, 
  DiagnosisSearchResponse,
  ICD10Code,
  ICD10CodeResult
} from '@/types/medical-coding';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
const AI_API_BASE_URL = process.env.NEXT_PUBLIC_AI_API_URL || 'http://localhost:8000';

class ApiClient {
  private baseURL: string;
  private aiBaseURL: string;

  constructor(baseUrl: string, aiBaseUrl: string) {
    this.baseURL = baseUrl;
    this.aiBaseURL = aiBaseUrl;
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({
        message: 'An unexpected error occurred',
        statusCode: response.status,
      }));
      
      throw {
        message: errorData.message || 'An unexpected error occurred',
        statusCode: response.status,
        error: errorData.error,
      } as ApiError;
    }

    return response.json();
  }

  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await fetch(`${this.baseURL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    return this.handleResponse<LoginResponse>(response);
  }

  async checkAuthHealth(): Promise<{ status: string; message: string }> {
    const response = await fetch(`${this.baseURL}/auth/health`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return this.handleResponse<{ status: string; message: string }>(response);
  }

  async getPatientFhirData(patientId: string): Promise<PatientFhirResponse> {
    const response = await fetch(`${this.baseURL}/patient/${encodeURIComponent(patientId)}/fhir-data`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      },
    });

    return this.handleResponse<PatientFhirResponse>(response);
  }

  // Backend Knowledgebase API Methods
  async uploadDocument(file: File): Promise<UploadDocumentResponse> {
    const formData = new FormData();
    formData.append('document', file);

    const response = await fetch(`${this.baseURL}/knowledgebase/upload`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      },
      body: formData,
    });

    return this.handleResponse<UploadDocumentResponse>(response);
  }

  async getAllDocuments(): Promise<KnowledgebaseDocument[]> {
    const response = await fetch(`${this.baseURL}/knowledgebase/documents`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      },
    });

    return this.handleResponse<KnowledgebaseDocument[]>(response);
  }

  async getKnowledgebaseStats(): Promise<KnowledgebaseStats> {
    const response = await fetch(`${this.baseURL}/knowledgebase/stats`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      },
    });

    return this.handleResponse<KnowledgebaseStats>(response);
  }

  async getDocument(documentId: string): Promise<KnowledgebaseDocument> {
    const response = await fetch(`${this.baseURL}/knowledgebase/document/${encodeURIComponent(documentId)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      },
    });

    return this.handleResponse<KnowledgebaseDocument>(response);
  }

  async checkKnowledgebaseHealth(): Promise<{ status: string; message: string; aiServiceUrl: string }> {
    const response = await fetch(`${this.baseURL}/knowledgebase/health`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return this.handleResponse<{ status: string; message: string; aiServiceUrl: string }>(response);
  }

  // Medical Coding API Methods
  async searchDiagnosisCodes(diagnosisRequests: DiagnosisSearchRequest[]): Promise<{ diagnosis: string; suggestedCodes: ICD10Code[] }[]> {
    // Create array with correct length, filled with default values
    const responses: { diagnosis: string; suggestedCodes: ICD10Code[] }[] = new Array(diagnosisRequests.length);
    
    // Process each request and maintain exact index mapping
    const promises = diagnosisRequests.map(async (request, index) => {
      try {
        console.log(`Processing diagnosis ${index + 1}/${diagnosisRequests.length}:`, request.chief_complaint);
        
        const response = await fetch(`${this.baseURL}/medical-coding/diagnosis-search`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          },
          body: JSON.stringify(request),
        });

        const result = await this.handleResponse<DiagnosisSearchResponse>(response);
        
        // Convert the actual API response to the format expected by the UI
        const suggestedCodes: ICD10Code[] = result.results.map((codeResult: ICD10CodeResult) => ({
          code: codeResult.icd10_code,
          description: codeResult.description,
          category: codeResult.metadata.category,
          subcategory: codeResult.metadata.type,
          confidence: codeResult.similarity_score,
        }));
        
        // Store response at exact same index as request
        responses[index] = {
          diagnosis: result.query,
          suggestedCodes,
        };
        
        console.log(`Successfully processed diagnosis ${index + 1}:`, result.query, `(${suggestedCodes.length} codes)`);
      } catch (error) {
        console.error(`Failed to search codes for diagnosis ${index + 1}: ${request.chief_complaint}`, error);
        // Store error response at exact same index as request
        responses[index] = {
          diagnosis: request.chief_complaint,
          suggestedCodes: [],
        };
      }
    });
    
    // Wait for all requests to complete
    await Promise.all(promises);
    
    return responses;
  }
}

export const apiClient = new ApiClient(API_BASE_URL, AI_API_BASE_URL);
