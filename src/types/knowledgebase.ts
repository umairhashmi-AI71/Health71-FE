// Backend Knowledgebase API Types

export enum DocumentStatus {
  PROCESSING = 'processing',
  UPLOADED = 'uploaded',
  REJECTED = 'rejected',
}

export interface UploadDocumentResponse {
  id: string;
  documentId: string;
  filename: string;
  originalName: string;
  fileSize: number;
  mimeType: string;
  status: DocumentStatus;
  message: string;
  uploadedAt: string;
}

export interface KnowledgebaseDocument {
  id: string;
  documentId: string;
  filename: string;
  originalName: string;
  filePath: string;
  fileSize: number;
  mimeType: string;
  status: DocumentStatus;
  processingError?: string;
  aiServiceResponse?: string;
  uploadedToAiAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface KnowledgebaseStats {
  totalDocuments: number;
  processingDocuments: number;
  uploadedDocuments: number;
  rejectedDocuments: number;
}
