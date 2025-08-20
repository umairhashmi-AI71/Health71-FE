// FHIR Base Types
export interface FhirReference {
  reference?: string;
  display?: string;
}

export interface FhirCoding {
  system?: string;
  code?: string;
  display?: string;
}

export interface FhirCodeableConcept {
  coding?: FhirCoding[];
  text?: string;
}

export interface FhirPeriod {
  start?: string;
  end?: string;
}

export interface FhirIdentifier {
  use?: string;
  system?: string;
  value?: string;
}

// Patient Types
export interface FhirName {
  use?: string;
  family?: string;
  given?: string[];
  prefix?: string[];
  suffix?: string[];
}

export interface FhirAddress {
  use?: string;
  type?: string;
  line?: string[];
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
}

export interface FhirTelecom {
  system?: string;
  value?: string;
  use?: string;
}

export interface FhirPatient {
  id: string;
  resourceType: string;
  identifier?: FhirIdentifier[];
  active?: boolean;
  name?: FhirName[];
  telecom?: FhirTelecom[];
  gender?: string;
  birthDate?: string;
  address?: FhirAddress[];
  maritalStatus?: {
    coding?: Array<{
      system?: string;
      code?: string;
      display?: string;
    }>;
  };
  contact?: Array<{
    relationship?: Array<{
      coding?: Array<{
        system?: string;
        code?: string;
        display?: string;
      }>;
    }>;
    name?: FhirName;
    telecom?: FhirTelecom[];
    address?: FhirAddress;
  }>;
}

// Coverage Types
export interface FhirCoverageClass {
  type?: FhirCodeableConcept;
  value?: string;
  name?: string;
}

export interface FhirCoverage {
  id: string;
  resourceType: string;
  identifier?: Array<{
    system?: string;
    value?: string;
  }>;
  status?: string;
  type?: FhirCodeableConcept;
  policyHolder?: FhirReference;
  subscriber?: FhirReference;
  beneficiary: FhirReference;
  dependent?: string;
  relationship?: FhirCodeableConcept;
  period?: FhirPeriod;
  payor: FhirReference[];
  class?: FhirCoverageClass[];
  order?: number;
  network?: string;
}

// Encounter Types
export interface FhirEncounterDiagnosis {
  condition: FhirReference;
  use?: FhirCodeableConcept;
  rank?: number;
}

export interface FhirEncounter {
  id: string;
  resourceType: string;
  identifier?: FhirIdentifier[];
  status: string;
  class?: FhirCodeableConcept;
  type?: FhirCodeableConcept[];
  subject: FhirReference;
  period?: FhirPeriod;
  diagnosis?: FhirEncounterDiagnosis[];
  serviceProvider?: FhirReference;
}

// Diagnosis Types
export interface FhirDiagnosis {
  id: string;
  resourceType: string;
  identifier?: FhirIdentifier[];
  clinicalStatus?: FhirCodeableConcept;
  verificationStatus?: FhirCodeableConcept;
  category?: FhirCodeableConcept[];
  severity?: FhirCodeableConcept;
  code?: FhirCodeableConcept;
  subject: FhirReference;
  encounter?: FhirReference;
  onsetDateTime?: string;
  recordedDate?: string;
  recorder?: FhirReference;
  asserter?: FhirReference;
}

// Main Response Type
export interface PatientFhirResponse {
  patientId: string;
  patient?: FhirPatient;
  coverage?: FhirCoverage[];
  encounters?: FhirEncounter[];
  diagnoses?: FhirDiagnosis[];
}
