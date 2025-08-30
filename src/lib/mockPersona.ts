import { LoginResponse } from "@/types/auth";
import {  PatientPersona } from "@/types/patient";

  const mockLoginResponse: LoginResponse = {
  access_token: 'mock_access_token_123456',
  token_type: 'Bearer',
  expires_in: 3600,
  user: {
    id: 'user_001',
    email: 'jane.doe@example.com',
    firstName: 'Jane',
    lastName: 'Doe',
    isActive: true,
    lastLoginAt: new Date('2025-08-26T10:00:00Z'),
  },
};

export const mockFetchSuccessResponse = new Response(JSON.stringify(mockLoginResponse), {
  status: 200,
  headers: {
    'Content-Type': 'application/json',
  },
});
  


export const patientPersona: PatientPersona[] = [{
  id: '9389300',
  agentDetails: {
    agentIssue: 'Eligibility',
    agentSuggestion: 'Coverage expired → verify new policy',
    coT: 'Payer API returned inactive coverage; agent halted claim until renewal.',
  },
  profile: {
    name: "Sara Al Nuaimi",
    age: 55,
    emiratesId: "748-1985-2233445-4",
    sex: "Female",
    dateOfBirth: "1985-07-21", // YYYY-MM-DD format
    nationality: "UAE",
    language: "Arabic",
    phoneNumber: "97155467830",
    email: "Sara.nuaimi@gmail.com",
  },
  eligibilityCheck: {
    network: "Yes",
    coverage: "100%",
    insuranceProvider: "Daman-AUH-001",
    imageUrl: "/images/daman-logo.png",
    policyNumber: "42122566",
    status: "covered",  // Coverage status
  },
  medicalCoding: {
    status: "inprogress",  // Medical coding status
    details: [
      { label: "Encounter Date", value: "2025-08-30" },
      { label: "Encounter Type", value: "Outpatient" },
      { label: "Physician", value: "Dr. Al Shamsi" },
      { label: "Department", value: "Orthopaedics" },
    ],
  },
  priorAuthorization: {
    status: "approved",  // Prior authorization status
    details: [
      { label: "Encounter ID", value: "ENC-2025-0789" },
      { label: "CPT Code", value: "29880" },
      { label: "ICD Code", value: "M23.2" },
      { label: "Physician", value: "Dr. Al Shamsi" },
      { label: "Prior Auth ID", value: "PA-556677" },
      { label: "Drug Codes", value: "NDC-0002" },
    ],
  },
  claimSubmission: {
    status: "paused",  // Current status of the claim submission process
    steps: [
      { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
      { id: "2", label: "XML File Generated", status: "in-progress" },
      { id: "3", label: "Claim Posted", status: "completed" },
      { id: "4", label: "Claim ID Received & Updated", status: "pending" },
    ],
  },
  denialManagement: {
    status: "paused",  // Current status of the denial management process
    steps: [
      { id: "1", label: "Denial Code Analyzed", status: "completed" },
      { id: "2", label: "Suggested Edits", status: "pending" },
      { id: "3", label: "Appeal Generated", status: "failed" },
      { id: "4", label: "Appeal Submitted", status: "in-progress" },
    ],
  },
  postPayment: {
    status: "paused",  // Current status of the post-payment process
    steps: [
      { id: "1", label: "Payment Retrieved", status: "pending" },
      { id: "2", label: "Payment Matched", status: "completed" },
      { id: "3", label: "Adjustments Applied", status: "in-progress" },
      { id: "4", label: "Ledger Updated", status: "completed" },
    ],
  },
},
{
  id: '9389333',
  agentDetails: {
    agentIssue: 'Eligibility',
    agentSuggestion: 'Coverage expired → verify new policy',
    coT: 'Payer API returned inactive coverage; agent halted claim until renewal.',
  },
  profile: {
    name: "Mohammed Zayed",
    age: 55,
    emiratesId: "748-1985-2233445-4",
    sex: "Female",
    dateOfBirth: "1985-07-21", // YYYY-MM-DD format
    nationality: "UAE",
    language: "Arabic",
    phoneNumber: "97155467830",
    email: "Sara.nuaimi@gmail.com",
  },
  eligibilityCheck: {
    network: "Yes",
    coverage: "100%",
    insuranceProvider: "Daman-AUH-001",
    imageUrl: "/images/daman-logo.png",
    policyNumber: "42122566",
    status: "covered",  // Coverage status
  },
  medicalCoding: {
    status: "inprogress",  // Medical coding status
    details: [
      { label: "Encounter Date", value: "2025-08-30" },
      { label: "Encounter Type", value: "Outpatient" },
      { label: "Physician", value: "Dr. Al Shamsi" },
      { label: "Department", value: "Orthopaedics" },
    ],
  },
  priorAuthorization: {
    status: "approved",  // Prior authorization status
    details: [
      { label: "Encounter ID", value: "ENC-2025-0789" },
      { label: "CPT Code", value: "29880" },
      { label: "ICD Code", value: "M23.2" },
      { label: "Physician", value: "Dr. Al Shamsi" },
      { label: "Prior Auth ID", value: "PA-556677" },
      { label: "Drug Codes", value: "NDC-0002" },
    ],
  },
  claimSubmission: {
    status: "paused",  // Current status of the claim submission process
    steps: [
      { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
      { id: "2", label: "XML File Generated", status: "in-progress" },
      { id: "3", label: "Claim Posted", status: "completed" },
      { id: "4", label: "Claim ID Received & Updated", status: "pending" },
    ],
  },
  denialManagement: {
    status: "paused",  // Current status of the denial management process
    steps: [
      { id: "1", label: "Denial Code Analyzed", status: "completed" },
      { id: "2", label: "Suggested Edits", status: "pending" },
      { id: "3", label: "Appeal Generated", status: "failed" },
      { id: "4", label: "Appeal Submitted", status: "in-progress" },
    ],
  },
  postPayment: {
    status: "paused",  // Current status of the post-payment process
    steps: [
      { id: "1", label: "Payment Retrieved", status: "pending" },
      { id: "2", label: "Payment Matched", status: "completed" },
      { id: "3", label: "Adjustments Applied", status: "in-progress" },
      { id: "4", label: "Ledger Updated", status: "completed" },
    ],
  },
},
]