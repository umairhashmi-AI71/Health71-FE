import { LoginResponse } from "@/types/auth";
import { PatientPersona } from "@/types/patient";

const mockLoginResponse: LoginResponse = {
  access_token: "mock_access_token_123456",
  token_type: "Bearer",
  expires_in: 3600,
  user: {
    id: "user_001",
    email: "jane.doe@example.com",
    firstName: "Jane",
    lastName: "Doe",
    isActive: true,
    lastLoginAt: new Date("2025-08-26T10:00:00Z"),
  },
};

export const mockFetchSuccessResponse = new Response(
  JSON.stringify(mockLoginResponse),
  {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  }
);

const markdown = `### <u class="markdown-heading">**Subjective**</u>

### **Chief Complaint (CC):**
Pain in the left knee, moderate to severe, lasting for 3 weeks.

### **History of Present Illness (HPI):**
The patient, a 52-year-old Caucasian male named John Smith, presents with complaints of moderate to severe pain in the left knee that has persisted for the past three weeks. The pain is associated with occasional swelling and stiffness, particularly pronounced in the mornings. The symptoms are exacerbated by physical activity and have a significant impact on daily activities, including walking, climbing stairs, and prolonged standing.

### **Review of Systems (ROS):**
- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.
- **General**: Negative for fever or weight loss.
- **Cardiovascular**: Negative for chest pain or palpitations.
- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.

<br />

## <u class="markdown-heading">**Objective**</u>

### **Vital Signs:**
- Blood Pressure: 128/82 mmHg  
- Heart Rate: 72 bpm  
- Respiratory Rate: 16 breaths per minute  
- Temperature: 98.6°F

### **Physical Examination:**
- **Inspection**: Swelling around the left knee; no visible deformity.  
- **Palpation**: Tenderness over the medial and lateral joint lines.  
- **Range of Motion**: Reduced flexion and extension due to pain.  
- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.

<br />

## <u class="markdown-heading">**Assessment:**</u>
- Pain in the left knee (ICD-10 code M25.562).
- Possible exacerbation of pre-existing mild osteoarthritis.

<br />

### <u class="markdown-heading">**Plan:**</u>

### **Treatment:**
- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.
- Advise the patient on lifestyle modifications to reduce knee strain.
- Prescribe over-the-counter NSAIDs as needed for pain management.

### **Follow-up Recommendations:**
- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.

### **Referrals:**
- Order X-ray of the left knee to rule out structural abnormalities.
- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.
 
`;

export const patientPersona: PatientPersona[] = [
  {
    id: "101300",
    isSubmitted: false,
    profileCreatedDate: new Date('9/2/2025 20:00:00').toISOString(),
    agentDetails: {
      agentIssue: "Coda",
      agentSuggestion: "Verify coding: M25.562 (Pain in left knee)	",
      coT: "SOAP note indicates knee pain with imaging ordered; agent flagged to confirm ICD-10 and CPT alignment and ensure diagnosis supports X-ray medical necessity.	.",
    },
    profile: {
      name: "Sara",
      surname: "Al Nuaimi",
      age: 40,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21", // YYYY-MM-DD format
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: "97155467830",
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "waiting", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/sob.pdf",
      },
      {
        fileName: "exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
  {
    id: "483920",
    isSubmitted: false,
        profileCreatedDate: new Date('9/2/2025 20:33:45').toISOString(),

    agentDetails: {
      "agentIssue": "Autho",
      "agentSuggestion": "Attach clinical notes for MRI PA",
      "coT": "Diagnostic report mentioned in SOAP but not attached; agent cannot confirm if payer’s criteria for MRI are met."
    },
    profile: {
      "name": "Fatima",
      surname: "Rahman",
      "age": 34,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
  markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
   {
    "id": "762145",
    "isSubmitted": false,
     profileCreatedDate: new Date('9/2/2025 21:07:30').toISOString(),
    "agentDetails": {
      "agentIssue": "Autho",
      "agentSuggestion": "Resubmit PA for CT scan (denied once)",
      "coT": "Denial code shows “insufficient medical necessity” → agent requests escalation with radiology justification."
    },
    "profile": {
      "name": "Layla",
      surname:"Mansour",
      "age": 55,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
   {
    "id": "198307",
    "isSubmitted": false,
         profileCreatedDate: new Date('9/2/2025 21:41:15').toISOString(),

    "agentDetails": {
      "agentIssue": "Autho",
      "agentSuggestion": "PA required for inpatient stay extension",
      "coT": "Payer requires re-auth after 5 days; agent drafted but physician must confirm ongoing medical necessity."
    },
    "profile": {
      "name": "Huda",
      surname: "Mansoor",
      "age": 36,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
   {
    "id": "530412",
    "isSubmitted": false,
             profileCreatedDate: new Date('9/2/2025 22:15:00').toISOString(),

    "agentDetails": {
      "agentIssue": "Dee",
      "agentSuggestion": "Draft appeal: “not medically necessary”",
      "coT": "Denial code 50; flagged for physician medical justification + supporting guidelines."
    },
    "profile": {
      "name": "Olivier",
      surname: "Dubois",
      "age": 44,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
   {
    "id": "824691",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/2/2025 22:48:45').toISOString(),

    "agentDetails": {
      "agentIssue": "Dee",
      "agentSuggestion": "Denial reason: experimental procedure",
      "coT": "Payer denial flagged as investigational; requires physician statement + clinical literature."
    },
    "profile": {
      "name": "Mariam ",
      surname: "Yusuf",
      "age": 37,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
  {
    "id": "315478",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/2/2025 23:22:30').toISOString(),

    "agentDetails": {
      "agentIssue": "Coda",
      "agentSuggestion": "ICD-10: C34.9 (Malignant neoplasm of lung, unspecified)",
      "coT": "SOAP: “suspicious lung lesion” without biopsy confirmation → risk of premature cancer coding."
    },
    "profile": {
      "name": "Fatemeh ",
      surname: "Esfandiari",
      "age": 61,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
  {
    "id": "907263",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/2/2025 23:56:15').toISOString(),

    "agentDetails": {
      "agentIssue": "Payne",
      "agentSuggestion": "ERA mismatch AED 450 vs 500 billed",
      "coT": "Underpayment 10% below contract; payer adjustment reason code unclear → finance validation needed."
    },
    "profile": {
      "name": "John",
      surname: "Williams",
      "age": 60,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
  {
    "id": "451809",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/3/2025 0:30:00').toISOString(),

    "agentDetails": {
      "agentIssue": "Payne",
      "agentSuggestion": "Partial payment received AED 700/1,200",
      "coT": "Payer explanation of benefits shows patient deductible applied incorrectly."
    },
    "profile": {
      "name": "Sophie",
      surname: "Martin",
      "age": 31,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
   {
    "id": "672354",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/3/2025 1:03:45').toISOString(),

    "agentDetails": {
      "agentIssue": "Autho",
      "agentSuggestion": "Missing authorization for infusion J1745",
      "coT": "Agent mapped drug code but payer benefit plan excludes biologic → requires override."
    },
    "profile": {
      "name": "Leila",
      surname: "Haddad",
      "age": 28,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
   {
    "id": "284931",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/3/2025 1:37:30').toISOString(),

    "agentDetails": {
      "agentIssue": "Clara",
      "agentSuggestion": "Duplicate claim batch detected",
      "coT": "Two encounters submitted with identical DOS; payer likely to reject for duplication."
    },
    "profile": {
      "name": "Marcus",
      surname: "Green",
      "age": 57,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
  {
    "id": "905127",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/3/2025 2:11:15').toISOString(),

    "agentDetails": {
      "agentIssue": "Clara",
      "agentSuggestion": "XML rejected → missing prior auth ID",
      "coT": "System populated wrong PA reference number (from earlier encounter) → mismatch flagged."
    },
    "profile": {
      "name": "Ali",
      surname: "Hassan",
      "age": 50,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  }, 
  {
    "id": "316842",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/3/2025 2:45:00').toISOString(),

    "agentDetails": {
      "agentIssue": "Clara",
      "agentSuggestion": "Claim rejected → invalid date of service",
      "coT": "Date auto-pulled from discharge summary instead of encounter start; schema validator failed."
    },
    "profile": {
      "name": "Maria",
      surname: "Lopez",
      "age": 39,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
  {
    "id": "748509",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/3/2025 3:18:45').toISOString(),

    "agentDetails": {
      "agentIssue": "Clara",
      "agentSuggestion": "Resubmit claim batch with corrected provider ID",
      "coT": "Provider NPI differs between header and service line → flagged inconsistency."
    },
    "profile": {
      "name": "Jamal",
      surname: "Hassan",
      "age": 51,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
   {
    "id": "293608",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/3/2025 3:52:30').toISOString(),

    "agentDetails": {
      "agentIssue": "Dee",
      "agentSuggestion": "Draft appeal: missing modifier CPT 93010",
      "coT": "Payer denied ECG professional component; appeal drafted to add modifier -26."
    },
    "profile": {
      "name": "John",
      surname: "Smith",
      "age": 52,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
  {
    "id": "857134",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/3/2025 4:26:15').toISOString(),

    "agentDetails": {
      "agentIssue": "Payne",
      "agentSuggestion": "Matched remit but offset applied",
      "coT": "Offset applied to unrelated claim batch; flagged for manual allocation."
    },
    "profile": {
      "name": "Karim",
      surname: "Osman",
      "age": 49,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
    {
    "id": "409672",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/3/2025 5:00:00').toISOString(),

    "agentDetails": {
      "agentIssue": "Dee",
      "agentSuggestion": "Auto-resolved denial: late filing → corrected",
      "coT": "Waiver rule applied because payer accepted 30-day grace period; auto-refiled."
    },
    "profile": {
      "name": "Ahmad",
      surname: "Saleh",
      "age": 47,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
   {
    "id": "621395",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/3/2025 5:33:45').toISOString(),

    "agentDetails": {
      "agentIssue": "Coda",
      "agentSuggestion": "ICD-10: K52.9 (Noninfective gastroenteritis)",
      "coT": "Note says “chronic diarrhea, unclear etiology” → could be functional vs inflammatory → flagged."
    },
    "profile": {
      "name": "Yasmine",
      surname: "Al Farsi",
      "age": 42,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
  {
    "id": "784210",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/3/2025 6:07:30').toISOString(),

    "agentDetails": {
      "agentIssue": "Clara",
      "agentSuggestion": "Claim batch flagged: inconsistent revenue codes",
      "coT": "Service line had revenue code not aligned with CPT group; schema flagged risk."
    },
    "profile": {
      "name": "Imran",
      surname: "Bashir",
      "age": 63,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
  {
    "id": "359682",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/3/2025 6:41:15').toISOString(),

    "agentDetails": {
      "agentIssue": "Coda",
      "agentSuggestion": "ICD-10: E66.9 (Obesity, unspecified)",
      "coT": "SOAP note: “BMI 32, mild hypertension” → borderline case; payer may deny if BMI <35."
    },
    "profile": {
      "name": "Samira",
      surname: "Khan",
      "age": 38,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
  {
    "id": "928401",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/3/2025 7:15:00').toISOString(),

    "agentDetails": {
      "agentIssue": "Dee",
      "agentSuggestion": "Appeal drafted: coverage terminated mid-stay",
      "coT": "Inpatient claim denied after coverage ended; requires payer escalation."
    },
    "profile": {
      "name": "Daniel",
      surname: "Ruiz",
      "age": 59,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
  {
    "id": "174563",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/3/2025 7:48:45').toISOString(),

    "agentDetails": {
      "agentIssue": "Payne",
      "agentSuggestion": "Overpayment detected AED 1,200 vs 1,000 billed",
      "coT": "Over-remit posted; agent paused to avoid duplicate refund cycle."
    },
    "profile": {
      "name": "Paul",
      surname: "Andersen",
      "age": 45,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
  {
    "id": "836092",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/3/2025 8:22:30').toISOString(),

    "agentDetails": {
      "agentIssue": "Autho",
      "agentSuggestion": "Resubmit PA for physical therapy",
      "coT": "Payer limit exceeded (10 sessions); requires medical director override."
    },
    "profile": {
      "name": "Laila",
      surname: "Karim",
      "age": 33,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
  {
    "id": "492781",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/3/2025 8:56:15').toISOString(),

    "agentDetails": {
      "agentIssue": "Autho",
      "agentSuggestion": "Submit PA for CPT 99213 (outpatient follow-up)",
      "coT": "CPT mapped to follow-up, but payer unexpectedly requires PA for low-acuity outpatient codes → flagged as unusual."
    },
    "profile": {
      "name": "Omar",
      surname: "Khaled",
      "age": 62,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
  {
    "id": "650237",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/3/2025 9:30:00').toISOString(),

    "agentDetails": {
      "agentIssue": "Coda",
      "agentSuggestion": "ICD-10: R07.9 (Chest pain, unspecified)",
      "coT": "SOAP note: “intermittent retrosternal pressure, ?angina” → ambiguous between R07.9 vs I20.x; low confidence."
    },
    "profile": {
      "name": "David",
      surname: "Chen",
      "age": 40,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
  {
    "id": "718904",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/3/2025 10:03:45').toISOString(),

    "agentDetails": {
      "agentIssue": "Coda",
      "agentSuggestion": "ICD-10: M54.5 (Low back pain)",
      "coT": "SOAP note says “lumbar pain after lifting box” → insufficient specificity (acute vs chronic)."
    },
    "profile": {
      "name": "James",
      surname: "Peterson",
      "age": 64,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
  {
    "id": "203589",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/3/2025 10:37:30').toISOString(),

    "agentDetails": {
      "agentIssue": "Autho",
      "agentSuggestion": "Payer flagged PA duplication request",
      "coT": "PA already approved but duplicate triggered; agent blocked."
    },
    "profile": {
      "name": "Noor ",
      surname: "Al Hadi",
      "age": 47,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
  {
    "id": "567491",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/3/2025 11:11:15').toISOString(),

    "agentDetails": {
      "agentIssue": "Coda",
      "agentSuggestion": "ICD-10: R51.9 (Headache, unspecified)",
      "coT": "SOAP note: “episodic headache, ?migraine” → unclear → flagged for clarification."
    },
    "profile": {
      "name": "Richard",
      surname: "Collins",
      "age": 54,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
  {
    "id": "891034",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/3/2025 11:45:00').toISOString(),

    "agentDetails": {
      "agentIssue": "Clara",
      "agentSuggestion": "Missing attending provider signature",
      "coT": "Claim built without digital signature field populated; compliance check blocked."
    },
    "profile": {
      "name": "Amina",
      surname: "Farouk",
      "age": 41,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
  {
    "id": "342657",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/3/2025 12:18:45').toISOString(),

    "agentDetails": {
      "agentIssue": "Payne",
      "agentSuggestion": "EFT posted but payer remark code missing",
      "coT": "Funds matched, but no adjustment codes in remit → requires manual reconciliation."
    },
    "profile": {
      "name": "Peter",
      surname: "Novak",
      "age": 58,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
  {
    "id": "970218",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/3/2025 12:52:30').toISOString(),

    "agentDetails": {
      "agentIssue": "Coda",
      "agentSuggestion": "ICD-10: J20.9 (Acute bronchitis, unspecified)",
      "coT": "SOAP: “productive cough, no x-ray done” → not clear if pneumonia → flagged precautionary."
    },
    "profile": {
      "name": "Clara",
      surname: "Jensen",
      "age": 35,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
  {
    "id": "583920",
    "isSubmitted": false,
                 profileCreatedDate: new Date('9/3/2025 13:26:15').toISOString(),

    "agentDetails": {
      "agentIssue": "Dee",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "name": "Hana",
      surname: "Shafiq",
      "age": 29,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
      status: "approved", // Prior authorization status
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
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
    denialManagement: {
      status: "paused", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
      status: "paused", // Current status of the post-payment process
      steps: [
        { id: "1", label: "Payment Retrieved", status: "pending" },
        { id: "2", label: "Payment Matched", status: "pending" },
        { id: "3", label: "Adjustments Applied", status: "pending" },
        { id: "4", label: "Ledger Updated", status: "pending" },
      ],
    },
    attachments: [
      {
        fileName: "SOB.pdf",
        fileSize: "200 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Scan.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "ECG.pdf",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Fibro_Scan.pdf",
        fileSize: "210 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [
      {
        id: "1",
        code: "M25.562",
        confidence: 100,
        isApproved: false,
        desc: "Pain in left knee",
      },
      {
        id: "2",
        code: "M17.12",
        confidence: 10,
        isApproved: false,
        desc: "Unilateral primary osteoarthritis affecting the left knee",
      },
    ],
    cptCode: [
      {
        id: "1",
        code: "99203",
        confidence: 50,
        isApproved: false,
        desc: "New patient office visit, 30-44 minutes",
      },
      {
        id: "2",
        code: "73562",
        confidence: 50,
        isApproved: false,
        desc: "Diagnostic Radiology Procedures of the Lower Extremities",
      },
    ]
  },
];
 

