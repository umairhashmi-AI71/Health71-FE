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

const markdown = `## **Subjective**

### **Chief Complaint (CC):**
Pain in the left knee, moderate to severe, lasting for 3 weeks.

### **History of Present Illness (HPI):**
The patient, a 52-year-old Caucasian male named John Smith, presents with complaints of moderate to severe pain in the left knee that has persisted for the past three weeks. The pain is associated with occasional swelling and stiffness, particularly pronounced in the mornings. The symptoms are exacerbated by physical activity and have a significant impact on daily activities, including walking, climbing stairs, and prolonged standing.

### **Review of Systems (ROS):**
- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.
- **General**: Negative for fever or weight loss.
- **Cardiovascular**: Negative for chest pain or palpitations.
- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.

<br /><br />

## Objective

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

<br /><br />

## **Assessment:**
- <span style="background: #EAF481; padding:8px; margin-bottom:5px; display:inline-block">Pain in the left knee (ICD-10 code M25.562).</span>
- Possible exacerbation of pre-existing mild osteoarthritis.

<br />

### **Plan:**

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
      agentIssue: "Autho",
      agentSuggestion: "Coverage expired → verify new policy",
      coT: "Payer API returned inactive coverage; agent halted claim until renewal.",
    },
    profile: {
      name: "Sara Al Nuaimi",
      surname: "Al Nuaimi",
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
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "network", value: "Yes" },
        { label: "coverage", value: "100%" },
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
      status: "paused", // Current status of the claim submission process
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
    id: "483920",
    isSubmitted: false,
        profileCreatedDate: new Date('9/2/2025 20:33:45').toISOString(),

    agentDetails: {
      "agentIssue": "Autho",
      "agentSuggestion": "Attach clinical notes for MRI PA",
      "coT": "Diagnostic report mentioned in SOAP but not attached; agent cannot confirm if payer’s criteria for MRI are met."
    },
    profile: {
      "name": "Fatima Rahman",
      surname: "Rahman",
      "age": 34,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "network", value: "Yes" },
        { label: "coverage", value: "100%" },
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
      status: "paused", // Current status of the claim submission process
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
      "name": "Layla Mansour",
      surname:"Mansour",
      "age": 55,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "network", value: "Yes" },
        { label: "coverage", value: "100%" },
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
      status: "paused", // Current status of the claim submission process
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
      "name": "Huda Mansoor",
      surname: "Mansoor",
      "age": 36,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "network", value: "Yes" },
        { label: "coverage", value: "100%" },
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
      status: "paused", // Current status of the claim submission process
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
      "agentSuggestion": "Draft appeal: “not medically necessary” claim",
      "coT": "Denial code 50; flagged for physician medical justification + supporting guidelines."
    },
    "profile": {
      "name": "Olivier Dubois",
      surname: "Dubois",
      "age": 44,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "network", value: "Yes" },
        { label: "coverage", value: "100%" },
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
      status: "paused", // Current status of the claim submission process
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
                 profileCreatedDate: new Date('9/2/2025 22:48:45').toISOString(),

    "agentDetails": {
      "agentIssue": "Dee",
      "agentSuggestion": "Draft appeal: “not medically necessary” claim",
      "coT": "Denial code 50; flagged for physician medical justification + supporting guidelines."
    },
    "profile": {
      "name": "Olivier ",
      surname: "Dubois",
      "age": 44,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": "97155467830",
      "email": "Sara.nuaimi@gmail.com"
    },
    eligibilityCheck: {
      status: "covered",
      insuranDetials: {
        insuranceProvider: 'Daman-AUH-001',
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566"
      },
      details: [
        { label: "network", value: "Yes" },
        { label: "coverage", value: "100%" },
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
      status: "paused", // Current status of the claim submission process
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
 

