 
export interface PatientListProps {
  initialPatients?: PatientPersona[];
}



// Define types for each part of the user persona
interface PatientProfile {
  name: string;
  emiratesId: string;
  sex: "Male" | "Female";
  dateOfBirth: string; // YYYY-MM-DD format
  nationality: string;
  language: string;
  phoneNumber: string;
  email: string;
  age: number;
  
}

interface EligibilityCheck {
  network: string;  // Yes or No
  coverage: string; // e.g., "100%"
  insuranceProvider: string;
  policyNumber: string;
  status: string;  // e.g., "Covered", "Pending", "Rejected"
  imageUrl: string; // URL to the insurance provider's logo
}

interface MedicalCodingDetail {
  label: string;
  value: string;
}

type StatusType = 'approved' | 'inprogress' | 'pending' | 'rejected' | 'covered' ;


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

interface ClaimStep {
  id: string;
  label: string;
  status: "pending" | "completed" | "failed" | "in-progress";
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

// Main User Persona Interface that integrates all the sections
export interface PatientPersona {
  id: string;
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
}


export interface PatientTableRow {
  id: string;
  name: string;
  age: number;
  agentIssue: string;
  agentSuggestion: string;
  cot: string;
}