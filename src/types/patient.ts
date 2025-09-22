import { int } from "zod";
import { ErrorType } from "./error";

export interface PatientListProps {
  initialPatients?: PatientPersona[];
}

// Define types for each part of the user persona
export interface PatientProfile {
  name: string;
  surname: string;
  emiratesId: string;
  sex: "Male" | "Female";
  dateOfBirth: string; // YYYY-MM-DD format
  nationality: string;
  language: string;
  phoneNumber: number;
  email: string;
  age: number;
  profilePhoto: string;
  mrn?: number | string
  eid?: string
  dob?: number
}

export interface MedicalCodingDetail {
  label: string;
  value: string | number;
}

export type StatusType =
  | "approved"
  | "inprogress"
  | "pending"
  | "rejected"
  | "covered"
  | "paused"
  | "completed"
  | "current"
  | "done"
  | "submitted"
  | "received"
  | "notinvoked"
  | "denied"
  | "notvalid"
  | "valid"
  | "waiting";

export interface MedicalCoding {
  status: StatusType;
  details: MedicalCodingDetail[]; // Array of label-value pairs
  steps: ProcessSteps[]
  isError: boolean;
  errorDetails? :{
    errorType: ErrorType,
  }
}

export interface PriorAuthorizationDetail {
  label: string;
  value: string;
}

export interface PriorAuthorization {
  status: StatusType; // Status of prior authorization
  details: PriorAuthorizationDetail[]; // Array of label-value pairs
  steps: ProcessSteps[]
  isError: boolean;
  errorDetails? :{
    errorType: ErrorType,
  }
}

export interface ProcessSteps {
  id: string;
  label: string;
  status: StatusType;
}

type processStepStatusType =
  | "completed"
  | "current"
  | "pending"
  | "paused"
  | "inprogress"
  | "done"
  | "received"
  | "notinvoked"
  | "submitted"
  | "waiting";

export interface ClaimAttempts {
  claimRound?: string;
  date: string;
  claimAmount: string;
  claimId: string;
  rejectionCode: string;
}
export interface ClaimSubmission {
  status: processStepStatusType;
  steps: ProcessSteps[]; // Array of steps for claim submission
  claimAttempts?: ClaimAttempts[];
  isError: boolean;
  errorDetails? :{
    errorType: ErrorType,
  }
}

export interface DenialAttempts {
  claimRound: string
  claimId: string;
  denialId: string;
  denialAmount: string;
  denialCode: string;
}

export interface DenialManagement {
  status: processStepStatusType;
  steps: ProcessSteps[]; // Array of steps for denial management
  denialAttempts?: DenialAttempts[];
  isError: boolean;
  errorDetails? :{
    errorType: ErrorType,
  }
}

export interface PaymentDetails {
  date: string;
  paymentFile: number;
  claimId: string;
  ar?: number;
  difference?:number;
}
export interface PostPayment {
  status: StatusType;
  steps: ProcessSteps[]; // Array of steps for post-payment process
  details?: PaymentDetails
  isError: boolean;
  errorDetails? :{
    errorType: ErrorType,
  }
}

export interface Attachment {
  fileName: string;
  fileSize: string;
  ecgImageUrl: string;
}

export interface ICDCode {
  code: string;
  newCode?: string;
  status: string;
  confidence?: number;
  isApproved?: boolean;
  description?: string;
  suggestion?: string
  suggestionCode?:string
}
 export interface InsuranDetials {
  insuranceProvider: string;
  imageUrl: string;
  policyNumber: string;
  insurance?: string;
  number?: string;
  network?: string;
  coverage?: string;
  idType?: string;
  IdNumber?: string;
  Clinician?: string;
  serviceCategory?: string;
  planType?: string;
  portalURL?: string;
  coverageStartDate?: string;
  coverageEndDate?: string;
  treatingProvider?: string;
  IntendedDOS?: string;
   error?: string
}
export interface EligibilityCheck {
  status: StatusType;                  // ✅ "waiting"
  insuranDetials: InsuranDetials;      // ✅ object with provider, policy, etc.
  details: MedicalCodingDetail[];      // ✅ array of label/value pairs
  steps: ProcessSteps[];               // ✅ array of process steps
  isError: boolean;                      // (optional, stored inside insuranDetials)
  errorDetails?: { errorType: ErrorType } // (optional, not included)
}

// Main User Persona Interface that integrates all the sections

export interface Information {
  infoType: string;
  infoCode: string,
  infoMessage: string
}
export interface PatientPersona {
  id: string;
  profileCreatedDate: string;

  isSubmitted: boolean;
  agentDetails?: {
     agents: string[]
     currentProcess?:string;
     agentAction?:string;
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
  medicalReports? :Attachment[];
  attachments?: Attachment[];
  information?:Information;
  otherErrors? :Information[];
  markdown?: string; // Markdown content for the patient notes
  icdCodes: ICDCode[];
  cptCode: ICDCode[];
  drugCode: ICDCode[];
  ProcessStepsStatus?: ProcessSteps[];
  postPaymentStatus?: ProcessSteps[];
  dentalManagementStatus?: ProcessSteps[];
}

export interface PatientTableRow {
  id: string;
  name: string;
  surname: string;
  age: number;
  agents: string[];
  agentAction?:string;
  currentProcess?:string;
  agentSuggestion: string;
  cot: string;
  lastUpdated: string;
  selected: boolean;
}
