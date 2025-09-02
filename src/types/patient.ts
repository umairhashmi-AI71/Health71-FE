import { ProcessStep } from "@/components/HealthcareCard";
import { int } from "zod";

 
export interface PatientListProps {
  initialPatients?: PatientPersona[];
}



// Define types for each part of the user persona
interface PatientProfile {
  name: string;
  surname: string;
  emiratesId: string;
  sex: "Male" | "Female";
  dateOfBirth: string; // YYYY-MM-DD format
  nationality: string;
  language: string;
  phoneNumber: string;
  email: string;
  age: number;
  
}
 

export interface MedicalCodingDetail {
  label: string;
  value:  string | number;
}

export type StatusType = 'approved' | 'inprogress' | 'pending' | 'rejected' | 'covered' | 'paused' | "completed" | "current"  ;


interface MedicalCoding {
  status: StatusType
  details: MedicalCodingDetail[];  // Array of label-value pairs
}

interface PriorAuthorizationDetail {
  label: string;
  value: string;
}
 
interface PriorAuthorization {
  status: StatusType;  // Status of prior authorization
  details: PriorAuthorizationDetail[];  // Array of label-value pairs
}

export interface ClaimStep {
  id: string;
  label: string;
  status: StatusType;
}

type processStepStatusType = 'completed' | 'current' | 'pending' | 'paused';


interface ClaimSubmission {
  status: processStepStatusType
  steps: ClaimStep[];  // Array of steps for claim submission
}

interface DenialManagement {
  status: processStepStatusType
  steps: ClaimStep[];  // Array of steps for denial management
}

interface PostPayment {
  status: processStepStatusType
  steps: ClaimStep[];  // Array of steps for post-payment process
}

export interface Attachment {
  fileName: string;
  fileSize: string;
  ecgImageUrl: string;
}

export interface ICDCode {
  id: string;
  code: string;
  confidence?: number;
  isApproved?: boolean;
  desc?: string;
}

export interface InsuranDetials {
   insuranceProvider: string,
        imageUrl: string,
        policyNumber: string,
}
export interface EligibilityCheck {
  status: StatusType,
  insuranDetials: InsuranDetials,
  details: MedicalCodingDetail[]
}

// Main User Persona Interface that integrates all the sections
export interface PatientPersona {
  id: string;
  profileCreatedDate: string;
  isSubmitted: boolean;
  agentDetails?: {
    agentIssue: string;
    agentSuggestion: string;
    coT: string; // Chain of Thought
  };
  profile: PatientProfile;
  eligibilityCheck: EligibilityCheck;
  medicalCoding: MedicalCoding;
  priorAuthorization: PriorAuthorization;
  claimSubmission: ClaimSubmission;
  denialManagement: DenialManagement;
  postPayment: PostPayment;
  attachments?: Attachment[];
  markdown?: string; // Markdown content for the patient notes
  icdCodes?: ICDCode[];
  cptCode?:ICDCode[];
  claimStepStatus?:ProcessStep[]
  postPaymentStatus?:ProcessStep[]
  dentalManagementStatus?:ProcessStep[]
}


export interface PatientTableRow {
  id: string;
  name: string;
  age: number;
  agentIssue: string;
  agentSuggestion: string;
  cot: string;
}