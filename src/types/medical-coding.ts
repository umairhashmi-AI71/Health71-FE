// Medical Coding API Types

export interface DiagnosisSearchRequest {
  chief_complaint: string;
}

export interface ICD10CodeMetadata {
  icd10_code: string;
  type: string;
  parent: string;
  children: string[];
  chapter: string;
  block: string;
  category: string;
  includes: string[];
  excludes1: string[];
  excludes2: string[];
  is_billable: boolean;
  document_id: string;
}

export interface ICD10CodeResult {
  icd10_code: string;
  description: string;
  similarity_score: number;
  metadata: ICD10CodeMetadata;
}

export interface DiagnosisSearchResponse {
  success: boolean;
  query: string;
  total_results: number;
  results: ICD10CodeResult[];
  processing_time: number;
}

// Legacy interface for UI compatibility
export interface ICD10Code {
  code: string;
  description: string;
  category?: string;
  subcategory?: string;
  confidence?: number;
}

export interface MedicalCodingError {
  message: string;
  statusCode: number;
  error?: string;
}

// Extended diagnosis interface with ICD10 code field
export interface DiagnosisWithICD10 {
  id: string;
  resourceType: string;
  identifier?: Array<{
    use?: string;
    system?: string;
    value?: string;
  }>;
  clinicalStatus?: {
    coding?: Array<{
      system?: string;
      code?: string;
      display?: string;
    }>;
    text?: string;
  };
  verificationStatus?: {
    coding?: Array<{
      system?: string;
      code?: string;
      display?: string;
    }>;
    text?: string;
  };
  category?: Array<{
    coding?: Array<{
      system?: string;
      code?: string;
      display?: string;
    }>;
    text?: string;
  }>;
  severity?: {
    coding?: Array<{
      system?: string;
      code?: string;
      display?: string;
    }>;
    text?: string;
  };
  code?: {
    coding?: Array<{
      system?: string;
      code?: string;
      display?: string;
    }>;
    text?: string;
  };
  subject: {
    reference?: string;
    display?: string;
  };
  encounter?: {
    reference?: string;
    display?: string;
  };
  onsetDateTime?: string;
  recordedDate?: string;
  recorder?: {
    reference?: string;
    display?: string;
  };
  asserter?: {
    reference?: string;
    display?: string;
  };
  // Added field for ICD10 coding
  icd10Code?: string;
  suggestedCodes?: ICD10Code[];
}
