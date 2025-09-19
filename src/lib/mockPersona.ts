import { LoginResponse } from "@/types/auth";
import { ICDCode, PatientPersona } from "@/types/patient";

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

const persona3mark = `
### <u class="markdown-heading">**Subjective**</u>

### **Chief Complaint (CC):**
 Right knee pain, persistent and worsening over the last 6 weeks.

### **History of Present Illness (HPI):**
37-year-old male reports gradually worsening pain and stiffness in the right knee, worse in the morning and after long periods of standing. Pain rated 7/10. Denies trauma or recent injury. Reports swelling and mild clicking sound when walking upstairs. OTC ibuprofen provides partial relief.
### **Review of Systems (ROS):**
- **Musculoskeletal**: Positive for pain, swelling, stiffness.
- **General**: Denies fever, weight loss.
- **Neurological**: No numbness or tingling.
- **Cardiovascular**: No chest pain.

### **Vital Signs:**
 - BP 126/80 mmHg, 
 - HR 76 bpm, afebrile.
### **Physical Examination:**
- Right knee shows mild effusion, crepitus on flexion, tenderness along medial joint line. ROM slightly decreased due to pain.   
**Assessment**:   
Chronic osteoarthritis of right knee (ICD-10: M17.11).   
**Plan:**   
Continue conservative management (RICE), prescribe naproxen 500 mg PO BID x 7 days, refer to physiotherapy, update CPT code to 99213, resubmit claim."   
`

const markdown = `### <u class="markdown-heading">**Subjective**</u>

### **Chief Complaint (CC):**
Pain in the left knee, moderate to severe, lasting for 3 weeks.

### **History of Present Illness (HPI):**
Sara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.
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

export const demoData: PatientPersona[] = [
  {
    "agentDetails": {
      "agents": ["Clara"],
      agentAction: "Submission not reaching payer due to timeout. Retrying connection...",
      "currentProcess": 'Clara',
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/avatar.png",
      "age": 39,
      "name": "Layla",
      "surname": "Al Fardan",
      "mrn": 20231245,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "Jan 1, 1970",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
    },
    "information": {
      infoType: 'Technical Error',
      "infoCode": "T500",
      "infoMessage": "Submission not reaching payer due to timeout. Retrying connection..."
    },
    "markdown": "-",
    "eligibilityCheck": {
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "55123784",
        "insurance": "Daman-DXB-002",
        "network": "Yes",
        "coverage": "0.9"
      },
      "details": [
        {
          "label": "Network",
          "value": "Yes"
        },
        {
          "label": "Coverage",
          "value": "90%"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
      "isError": false,
     

    },
    "medicalCoding": {
      "status": "done",
      "details": [
        {
          "label": "Encounter Type",
          "value": "Out patient"
        },
        {
          "label": "CPT codes",
          "value": "99214"
        },
        {
          "label": "ICD codes",
          "value": "M54.5"
        },
        {
          "label": "Drug codes",
          "value": "12345"
        },
        {
          "label": "Encounter Date",
          "value": "45912"
        },
        {
          "label": "Physician",
          "value": "Dr. Fatima Al Mansoori"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "completed"
        }
      ],
      "isError": true,
       errorDetails: {
        errorType: 'technical'
      }
    },
    "priorAuthorization": {
      "status": "approved",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0456"
        },
        {
          "label": "CPT codes",
          "value": "99214"
        },
        {
          "label": "Physician",
          "value": "Dr. Fatima Al Mansoori"
        },
        {
          "label": "ICD codes",
          "value": "M54.5"
        },
        {
          "label": "Prior AuthID",
          "value": "PA-556677"
        },
        {
          "label": "Drug codes",
          "value": "NDC-1100"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "completed"
        }
      ],
      "isError": false
    },
    "claimSubmission": {
      "status": "inprogress",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "completed"
        }
      ],
      "claimAttempts": [
        {
          "claimRound": "1",
          "date": "45913",
          "claimAmount": "780 AED",
          "claimId": "20250913-A01",
          "rejectionCode": "F22"
        },
        {
          "claimRound": "2",
          "date": "45918",
          "claimAmount": "780 AED",
          "claimId": "20250918-B02",
          "rejectionCode": "F14"
        },
        {
          "claimRound": "3",
          "date": "45922",
          "claimAmount": "780 AED",
          "claimId": "20250922-C03",
          "rejectionCode": "F02"
        }
      ],
      "isError": true
    },
    "denialManagement": {
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Denial Code Analyzed",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Suggested Edits",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Appeal Generated",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Appeal Submitted",
          "status": "pending"
        }
      ],
      "denialAttempts": [
        {
          "claimRound": "1",
          "claimId": "20250913-A01",
          "denialId": "DEN-1001",
          "denialAmount": "780 AED",
          "denialCode": "D12"
        },
        {
          "claimRound": "2",
          "claimId": "20250918-B02",
          "denialId": "DEN-1002",
          "denialAmount": "780 AED",
          "denialCode": "D05"
        },
        {
          "claimRound": "3",
          "claimId": "20250922-C03",
          "denialId": "DEN-1003",
          "denialAmount": "780 AED",
          "denialCode": "D99"
        }
      ],
      "isError": false
    },
    "icdCodes": [],
    "cptCode": [],
    "drugCode": [],
    "postPayment": {
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Payment Retrieved",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Payment Matched",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Adjustments Applied",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Ledger Updated",
          "status": "pending"
        }
      ],
      "details": {
        "date": "2025-09-11",
        "paymentFile": 836,
        "claimId": "1014891283",
        "difference": -136
      },
      "isError": false,
    
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "isSubmitted": true,
    "id": "20231245",
    "profileCreatedDate": "2025-09-16T10:22:59.194Z"
  },
  {
    "agentDetails": {
      "agents": ["Clara"],
       agentAction: "Claim rejected due to missing Rendering Provider Specialty Code. Clara agent fetched specialty code from provider master, updated payload, and resubmitted automatically. Claim approved on resubmission.",
      "currentProcess": 'Payne',
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/avatar.png",
      "age": 39,
      "name": "Fatima",
      "surname": "Al Mansoori",
      "mrn": "1023",
      "eid": "784-1991-5566778-4",
      "emiratesId": "784-1991-5566778-4",
      "sex": "Female",
      "dob": 33467,
      "dateOfBirth": "Jan 1, 1970",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971502223344,
      "email": "fatima.almansoori@example.com"
    },
    "information": {
      "infoType" : "Auto-Resubmission",
      "infoCode": "AI-RESUB-001",
      "infoMessage": "Claim rejected due to missing Rendering Provider Specialty Code. Clara agent fetched specialty code from provider master, updated payload, and resubmitted automatically. Claim approved on resubmission. Validation engine updated with new schema rule."
    },
    "markdown": "-",
      "eligibilityCheck": {
        "status": "covered",
        "insuranDetials": {
          "insuranceProvider": "Daman-AUH-001",
          "imageUrl": "/insurance-image.png",
          "policyNumber": "44556677",
          "insurance": "Daman-AD-020",
          "network": "Yes",
          "coverage": "100%"
        },
        "details": [
          {
            "label": "Network",
            "value": "Yes"
          },
          {
            "label": "Coverage",
            "value": "1"
          }
        ],
        "steps": [
          {
            "id": "1",
            "label": "Extract Patient & Payer Data",
            "status": "completed"
          },
          {
            "id": "2",
            "label": "Validate Coverage",
            "status": "completed"
          },
          {
            "id": "3",
            "label": "Update & Flag Issues",
            "status": "completed"
          }
        ],
        "isError": false
      },
    "medicalCoding": {
      "status": "done",
      "details": [
        {
          "label": "Encounter Type",
          "value": "Out patient"
        },
        {
          "label": "CPT codes",
          "value": "93306"
        },
        {
          "label": "ICD codes",
          "value": "I10"
        },
        {
          "label": "Drug codes",
          "value": "NDC-0012"
        },
        {
          "label": "Encounter Date",
          "value": "45915"
        },
        {
          "label": "Physician",
          "value": "Dr. Saeed Al Falasi"
        },
        {
          "label": "Department",
          "value": "Cardiology"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "completed"
        }
      ],
      "isError": false
    },
    "priorAuthorization": {
      "status": "approved",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0915"
        },
        {
          "label": "CPT codes",
          "value": "93306"
        },
        {
          "label": "Physician",
          "value": "Dr. Saeed Al Falasi"
        },
        {
          "label": "ICD codes",
          "value": "I10"
        },
        {
          "label": "Prior AuthID",
          "value": "PA-2025-053"
        },
        {
          "label": "Drug codes",
          "value": "NDC-0012"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "completed"
        }
      ],
      "isError": false
    },
    "claimSubmission": {
      "status": "done",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "completed"
        }
      ],
      "claimAttempts": [
        {
          "claimRound": "1",
          "date": "45916",
          "claimAmount": "1,200 AED",
          "claimId": "20250916-A01",
          "rejectionCode": "SCHEMA_ERR"
        },
        {
          "claimRound": "2",
          "date": "45916",
          "claimAmount": "1,200 AED",
          "claimId": "20250916-A02",
          "rejectionCode": "-"
        }
      ],
      "isError": true,
      errorDetails : {
        errorType : 'autoresubmittion'
      }
    },
    "denialManagement": {
      "status": "done",
      "steps": [
        {
          "id": "1",
          "label": "Denial Code Analyzed",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Suggested Edits",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Appeal Generated",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Appeal Submitted",
          "status": "completed"
        }
      ],
      "denialAttempts": [
        {
          "claimRound": "1",
          "claimId": "20250916-A01",
          "denialId": "DEN-2053",
          "denialAmount": "-",
          "denialCode": "-"
        }
      ],
      "isError": false
    },
    "icdCodes": [],
    "cptCode": [],
    "drugCode": [],
    "postPayment": {
      "status": "inprogress",
      "steps": [
        {
          "id": "1",
          "label": "Payment Retrieved",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Payment Matched",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Adjustments Applied",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Ledger Updated",
          "status": "pending"
        }
      ],
      "details": {
        "date": "2025-09-11",
        "paymentFile": 836,
        "claimId": "1014891283",
        "difference": -136
      },
      "isError": false,
    
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "isSubmitted": true,
    "id": "1023",
    "profileCreatedDate": "2025-09-16T10:22:59.203Z"
  },
  {
    "agentDetails": {
      agents: ["Clara", "Coda", "Dee"],
      "agentSuggestion": "Claim denied due to coding mismatch. Resubmitting with updated CPT and ICD codes.",
      "coT": "Claim denied for coding mismatch. Agent flagged to review mapped CPT/ICD codes and resubmit with corrected combination."
    },
    "profile": {
      "profilePhoto": "/avatar.png",
      "age": 39,
      "name": "Mohammed",
      "surname": "Bin Khalid",
      "mrn": 20457891,
      "eid": "784-1988-7654321-0",
      "emiratesId": "784-1988-7654321-0",
      "sex": "Male",
      "dob": 32183,
      "dateOfBirth": "Jan 1, 1970",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971502345678,
      "email": "mohammed.bkhalid@example.com"
    },
    "information": {
      infoType: "Code Suggestion",
      "infoCode": "CMS-110",
      "infoMessage": "Claim denied due to coding mismatch. Resubmitting with updated CPT and ICD codes."
    },
    "markdown": persona3mark,
    "eligibilityCheck": {
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "99887766",
        "insurance": "Thiqa-AD-007",
        "network": "Yes",
        "coverage": "1"
      },
      "details": [
        {
          "label": "Network",
          "value": "Yes"
        },
        {
          "label": "Coverage",
          "value": "100%"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
      "isError": false
    },
    "medicalCoding": {
      "status": "done",
      "details": [
        {
          "label": "Encounter Type",
          "value": "Out patient"
        },
        {
          "label": "CPT codes",
          "value": "99213"
        },
        {
          "label": "ICD codes",
          "value": "M17.11"
        },
        {
          "label": "Drug codes",
          "value": "98765"
        },
        {
          "label": "Encounter Date",
          "value": "45945"
        },
        {
          "label": "Physician",
          "value": "Dr. Khaled Al Suwaidi"
        },
        {
          "label": "Department",
          "value": "Rheumatology"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "completed"
        }
      ],
      "isError": true,
      errorDetails: {
        errorType: 'codesuggestion'
      }
    },
    "priorAuthorization": {
      "status": "approved",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0678"
        },
        {
          "label": "CPT codes",
          "value": "99213"
        },
          {
          "label": "Physician",
          "value": "Dr. Khaled Al Suwaidi"
        },
        {
          "label": "ICD codes",
          "value": "M17.11"
        },
         {
          "label": "Prior AuthID",
          "value": "PA-2025-053"
        },
        {
          "label": "Drug codes",
          "value": "NDC-5500"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "completed"
        }
      ],
      "isError": false
    },
    "claimSubmission": {
      "status": "done",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "completed"
        }
      ],
      "claimAttempts": [
        {
          "claimRound": "1",
          "date": "45948",
          "claimAmount": "1,050 AED",
          "claimId": "20251018-X01",
          "rejectionCode": "CM45"
        },
        {
          "claimRound": "2",
          "date": "45952",
          "claimAmount": "1,050 AED",
          "claimId": "20251022-X02",
          "rejectionCode": "CM45"
        },
        {
          "claimRound": "3",
          "date": "45958",
          "claimAmount": "1,050 AED",
          "claimId": "20251028-X03",
          "rejectionCode": "-"
        }
      ],
      "isError": false
    },
    "denialManagement": {
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Denial Code Analyzed",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Suggested Edits",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Appeal Generated",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Appeal Submitted",
          "status": "completed"
        }
      ],
      "denialAttempts": [
        {
          "claimRound": "1",
          "claimId": "20251018-X01",
          "denialId": "DEN-2050",
          "denialAmount": "1,050 AED",
          "denialCode": "D31"
        },
        {
          "claimRound": "2",
          "claimId": "20251022-X02",
          "denialId": "DEN-2051",
          "denialAmount": "1,050 AED",
          "denialCode": "D12"
        },
        {
          "claimRound": "3",
          "claimId": "20251028-X03",
          "denialId": "-",
          "denialAmount": "-",
          "denialCode": "-"
        }
      ],
      "isError": false
    },
    "icdCodes": [
      {
        "code": "M17.11",
        "description": "Unilateral primary osteoarthritis, right knee",
        "status": ''
      }
    ],
    "cptCode": [
      {
        "code": "99203",
        "newCode": "99213",
        status: "Changed",
        "description": "Confidence 95% - Patient is established, documentation shows follow-up with low complexity MDM. Updated code aligns with payer rules and avoids denial."
      },
      {
        "code": "73562",
        status: 'Deleted',
        "description": "Confidence 80% - Duplicate knee X-ray within 30 days. Removal prevents automatic denial; attach documentation if repeat imaging is justified."
      },
      {
        "code": "85027",
        status: 'Accepted',
        "description": "Confidence 98% - CBC retained. Clinical notes show knee swelling with suspected inflammation. Lab test supports ruling out infection or inflammatory arthritis"
      }
    ],
    "drugCode": [
      {
        "code": "98765",
        status: '',
        "description": "Naproxen 500mg tablets, oral, BID x 7 days"
      }
    ],
    "postPayment": {
      "status": "paused",
      "steps": [
        {
          "id": "1",
          "label": "Payment Retrieved",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Payment Matched",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Adjustments Applied",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Ledger Updated",
          "status": "pending"
        }
      ],
      "details": {
        "date": "2025-09-11",
        "paymentFile": 836,
        "claimId": "1014891283",
        "difference": -136
      },
      "isError": false,
    
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "isSubmitted": false,
    "id": "20457891",
    "profileCreatedDate": "2025-09-16T10:22:59.203Z"
  },
  {
    "agentDetails": {
      agents: ["Clara", "Coda"],
        agentAction: "On 2025-09-08, at 12:12 pm Dr. Al Shamsi was contacted for the third time to submit medical-necessity documentation to support the patient’s appeal and resolve the denial.",
      "currentProcess": 'Clara',
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/avatar.png",
      "age": 39,
      "name": "Sara",
      "surname": "Al Nuaimi",
      "mrn": 101300,
      "eid": "748-1985-2233445-4",
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dob": 31249,
      "dateOfBirth": "Jan 1, 1970",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "sara.nuaimi@gmail.com"
    },
     "information": {
      infoType: "Medical Necessity",
      "infoCode": "MN-REQ-001",
      "infoMessage": "On 2025-09-08, at 12:12 pm Dr. Al Shamsi was contacted for the third time to submit medical-necessity documentation to support the patient’s appeal and resolve the denial."
    },
    "markdown": "-",
    "eligibilityCheck": {
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566",
        "insurance": "Daman-AUH-001",
        "network": "Yes",
        "coverage": "100%"
      },
      "details": [
        {
          "label": "Network",
          "value": "Yes"
        },
        {
          "label": "Coverage",
          "value": "1"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
      "isError": false
    },
    "medicalCoding": {
      "status": "done",
      "details": [
        {
          "label": "Encounter Type",
          "value": "Out patient"
        },
        {
          "label": "CPT codes",
          "value": "99213"
        },
        {
          "label": "ICD codes",
          "value": "M23.2"
        },
        {
          "label": "Drug codes",
          "value": "NDC-0002"
        },
        {
          "label": "Encounter Date",
          "value": "45950"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "completed"
        }
      ],
      "isError": true,
      errorDetails: {
        errorType: 'medicalnecessity'
      }
    },
    "priorAuthorization": {
      "status": "approved",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT codes",
          "value": "99213"
        },
        {
          "label": "Prior AuthID",
          "value": "PA-2025-024"
        },
        {
          "label": "ICD codes",
          "value": "M23.2"
        },
        {
          "label": "Physcian",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Drug codes",
          "value": "NDC-0002"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "completed"
        }
      ],
      "isError": false
    },
    "claimSubmission": {
      "status": "inprogress",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "completed"
        }
      ],
      "claimAttempts": [
        {
          "claimRound": "1",
          "date": "45950",
          "claimAmount": "836 AED",
          "claimId": "20251020-C01",
          "rejectionCode": "F14"
        },
        {
          "claimRound": "2",
          "date": "45955",
          "claimAmount": "836 AED",
          "claimId": "20251025-C02",
          "rejectionCode": "-"
        }
      ],
      "isError": false
    },
    "denialManagement": {
      "status": "done",
      "steps": [
        {
          "id": "1",
          "label": "Denial Code Analyzed",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Suggested Edits",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Appeal Generated",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Appeal Submitted",
          "status": "completed"
        }
      ],
      "denialAttempts": [
        {
          "claimRound": "1",
          "claimId": "20251020-C01",
          "denialId": "DEN-5201",
          "denialAmount": "836 AED",
          "denialCode": "D12"
        }
      ],
      "isError": false
    },
    "icdCodes": [],
    "cptCode": [],
    "drugCode": [],
    "postPayment": {
      "status": "paused",
      "steps": [
        {
          "id": "1",
          "label": "Payment Retrieved",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Payment Matched",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Adjustments Applied",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Ledger Updated",
          "status": "pending"
        }
      ],
      "details": {
        "date": "2025-09-11",
        "paymentFile": 836,
        "claimId": "1014891283",
        "difference": -136
      },
      "isError": false,
    
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "isSubmitted": true,
    "id": "101300",
    "profileCreatedDate": "2025-09-16T10:22:59.203Z"
  },
  {
    "agentDetails": {
      "agents": ["Clara", "Dee"],
      "agentSuggestion": "Partial claim approved. Remaining services denied for insufficient documentation. Suggest write-off per policy.",
      "coT": "Partial claim approved but some services denied for insufficient documentation. Agent recommended write-off as per payer guidelines."
    },
    "information": {
      infoType: "Write-Off",
      "infoCode": "WR-105",
      "infoMessage": "Partial claim approved. Remaining services denied for insufficient documentation. Suggest write-off per policy."
    },
    "profile": {
      "profilePhoto": "/avatar.png",
      "age": 39,
      "name": "Amira",
      "surname": "Al Qassimi",
      "mrn": 45678321,
      "eid": "784-1994-2345678-9",
      "emiratesId": "784-1994-2345678-9",
      "sex": "Female",
      "dob": 34643,
      "dateOfBirth": "Jan 1, 1970",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971504321987,
      "email": "amira.alqassimi@example.com"
    },
    "markdown": "-",
    "eligibilityCheck": {
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "55443322",
        "insurance": "ShifaCare-DXB-015",
        "network": "Yes",
        "coverage": "85%"
      },
      "details": [
        {
          "label": "Network",
          "value": "Yes"
        },
        {
          "label": "Coverage",
          "value": "85%"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
      "isError": false
    },
    "medicalCoding": {
      "status": "done",
      "details": [
        {
          "label": "Encounter Type",
          "value": "Out patient"
        },
        {
          "label": "CPT codes",
          "value": "73721, 70450, 85027, 99213"
        },
        {
          "label": "ICD codes",
          "value": "M54.5"
        },
        {
          "label": "Drug codes",
          "value": "NDC-8822"
        },
        {
          "label": "Encounter Date",
          "value": "45908"
        },
        {
          "label": "Physician",
          "value": "Dr. Mariam Al Hosani"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "completed"
        }
      ],
      "isError": false
    },
    "priorAuthorization": {
      "status": "approved",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-2210"
        },
        {
          "label": "CPT codes",
          "value": "73721, 70450, 85027, 99213"
        },
        {
          "label": "Prior AuthID",
          "value": "PA-2025-076"
        },
        {
          "label": "ICD codes",
          "value": "M54.5"
        },
         {
          "label": "Physcian",
          "value": "Dr. Mariam Al Hosani"
        },
        {
          "label": "Drug codes",
          "value": "NDC-8822"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "completed"
        }
      ],
      "isError": false
    },
    "claimSubmission": {
      "status": "done",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "completed"
        }
      ],
      "claimAttempts": [
        {
          "claimRound": "1",
          "date": "45915",
          "claimAmount": "2,340 AED",
          "claimId": "20250915-W01",
          "rejectionCode": "F14"
        },
        {
          "claimRound": "2",
          "date": "45922",
          "claimAmount": "2,340 AED",
          "claimId": "20250922-W02",
          "rejectionCode": "F14"
        },
        {
          "claimRound": "3",
          "date": "45928",
          "claimAmount": "2,340 AED",
          "claimId": "20250928-W03",
          "rejectionCode": "-"
        }
      ],
      "isError": true,
      errorDetails: {
        errorType: 'writeoff'
      }
    },
    "denialManagement": {
      "status": "inprogress",
      "steps": [
        {
          "id": "1",
          "label": "Denial Code Analyzed",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Suggested Edits",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Appeal Generated",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Appeal Submitted",
          "status": "completed"
        }
      ],
      "denialAttempts": [
        {
          "claimRound": "1",
          "claimId": "20250915-W01",
          "denialId": "DEN-4401",
          "denialAmount": "1,150 AED",
          "denialCode": "D21"
        },
        {
          "claimRound": "2",
          "claimId": "20250922-W02",
          "denialId": "DEN-4402",
          "denialAmount": "1,150 AED",
          "denialCode": "D21"
        },
        {
          "claimRound": "3",
          "claimId": "20250928-W03",
          "denialId": "-",
          "denialAmount": "-",
          "denialCode": "-"
        }
      ],
      "isError": false
    },
    "icdCodes": [],
    "cptCode": [],
    "drugCode": [],
    "postPayment": {
      "status": "paused",
      "steps": [
        {
          "id": "1",
          "label": "Payment Retrieved",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Payment Matched",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Adjustments Applied",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Ledger Updated",
          "status": "pending"
        }
      ],
      "details": {
        "date": "2025-09-11",
        "paymentFile": 836,
        "claimId": "1014891283",
        "difference": -136
      },
      "isError": false,
    
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "isSubmitted": false,
    "id": "45678321",
    "profileCreatedDate": "2025-09-16T10:22:59.203Z"
  },
 {
    "agentDetails": {
      "agents": ["Clara", "Dee"],
      agentAction: 'Claim denied for insufficient documentation. Agent generated appeal letter with supporting documents and submitted to payer.',
      currentProcess: "Dee",
      "agentSuggestion": "Appeal letter generated and submitted to payer for review of medical necessity.",
      "coT": "Claim denied for insufficient documentation. Agent generated appeal letter with supporting documents and submitted to payer."
    },
    "profile": {
      "profilePhoto": "/avatar.png",
      "age": 39,
      "name": "Leila",
      "surname": "Al Mansouri",
      "mrn": 30984567,
      "eid": "784-1992-9876543-1",
      "emiratesId": "784-1992-9876543-1",
      "sex": "Female",
      "dob": 33706,
      "dateOfBirth": "Jan 1, 1970",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971507654321,
      "email": "leila.almansouri@example.com"
    },
    "information": {
      infoType: "Appeal Letter",
      "infoCode": "APL-003",
      "infoMessage": "Appeal letter generated and submitted to payer for review of medical necessity."
    },
    "markdown": "-",
    "eligibilityCheck": {
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566",
        "insurance": "NoorCare-DXB-010",
        "number": "77665544",
        "network": "Yes",
        "coverage": "0.8"
      },
      "details": [
        {
          "label": "Network",
          "value": "Yes"
        },
        {
          "label": "Coverage",
          "value": "80%"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
      "isError": false
    },
    "medicalCoding": {
      "status": "done",
      "details": [
        {
          "label": "Encounter Type",
          "value": "Out patient"
        },
        {
          "label": "CPT codes",
          "value": "73721"
        },
        {
          "label": "ICD codes",
          "value": "M25.562"
        },
        {
          "label": "Drug codes",
          "value": "NDC-7755"
        },
        {
          "label": "Encounter Date",
          "value": "45884"
        },
        {
          "label": "Physician",
          "value": "Dr. Aisha Al Qubaisi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "completed"
        }
      ],
      "isError": false
    },
    "priorAuthorization": {
      "status": "approved",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-1122"
        },
        {
          "label": "Prior AuthID",
          "value": "PA-2025-032"
        },
        {
          "label": "Physcian",
          "value": "Dr. Aisha Al Qubaisi"
        },
        {
          "label": "CPT codes",
          "value": "73721"
        },
        {
          "label": "ICD codes",
          "value": "M25.562"
        },
        {
          "label": "Drug codes",
          "value": "NDC-7755"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "completed"
        }
      ],
      "isError": false
    },
    "claimSubmission": {
      "status": "done",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "completed"
        }
      ],
      "claimAttempts": [
        {
          "claimRound": "1",
          "date": "45889",
          "claimAmount": "1,200 AED",
          "claimId": "20250820-L01",
          "rejectionCode": "F14"
        },
        {
          "claimRound": "2",
          "date": "45897",
          "claimAmount": "1,200 AED",
          "claimId": "20250828-L02",
          "rejectionCode": "F14"
        },
        {
          "claimRound": "3",
          "date": "45905",
          "claimAmount": "1,200 AED",
          "claimId": "20250905-L03",
          "rejectionCode": "F14"
        }
      ],
      "isError": false
    },
    "denialManagement": {
      "status": "inprogress",
      "steps": [
        {
          "id": "1",
          "label": "Denial Code Analyzed",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Suggested Edits",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Appeal Generated",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Appeal Submitted",
          "status": "completed"
        },
       
      ],
      "denialAttempts": [
       {
          "claimRound": "1",
          "claimId": "20250820-L01",
          "denialId": "DEN-3301",
          "denialAmount": "1,200 AED",
          "denialCode": "D12"
        },
        {
          "claimRound": "2",
          "claimId": "20250828-L02",
          "denialId": "DEN-3302",
          "denialAmount": "1,200 AED",
          "denialCode": "D12"
        },
        {
          "claimRound": "3",
          "claimId": "20250905-L03",
          "denialId": "DEN-3303",
          "denialAmount": "1,200 AED",
          "denialCode": "D12"
        }
      ],
      "isError": true
    },
    "icdCodes": [],
    "cptCode": [],
    "drugCode": [],
    "postPayment": {
      "status": "paused",
      "steps": [
        {
          "id": "1",
          "label": "Payment Retrieved",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Payment Matched",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Adjustments Applied",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Ledger Updated",
          "status": "pending"
        }
      ],
      "details": {
        "date": "2025-09-11",
        "paymentFile": 836,
        "claimId": "1014891283",
        "difference": -136
      },
      "isError": false,
      "errorDetails": {
        "errorType": "costtopatient"
      }
    },
    medicalReports: [
{
        "fileName": "Appeal Letter.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Clinical Notes.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Radiology Request & MRI Report.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Pre-Auth Approval Document.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
    ],
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "isSubmitted": false,
    "id": "30984567",
    "profileCreatedDate": "2025-09-16T12:32:28.570Z"
  },
  {
    "agentDetails": {
      "agents": ["Clara"],
       agentAction: "Claim was denied due to incorrect automated payer rule application. Dee flagged the issue, HITL corrected the rule logic, and the claim was resubmitted and approved. System updated to prevent recurrence.",
      "currentProcess": 'Payne',
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/avatar.png",
      "age": 39,
      "name": "Noora",
      "surname": "Al Hashmi",
      "mrn": 208745,
      "eid": "784-1993-3344556-7",
      "emiratesId": "784-1993-3344556-7",
      "sex": "Female",
      "dob": 34103,
      "dateOfBirth": "Jan 1, 1970",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971503334455,
      "email": "noora.alhashmi@example.com"
    },
    "information": {
      infoType:"Over-Automation Error",
      "infoCode": "OA-ERR-001",
      "infoMessage": "Claim was denied due to incorrect automated payer rule application. Dee flagged the issue, HITL corrected the rule logic, and the claim was resubmitted and approved. System updated to prevent recurrence."
    },
    "markdown": "-",
    "eligibilityCheck": {
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566",
        "insurance": "MedShield-DXB-004",
        "number": "66778899",
        "network": "Yes",
        "coverage": "0.9"
      },
      "details": [
        {
          "label": "Network",
          "value": "Yes"
        },
        {
          "label": "Coverage",
          "value": "0.9"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
      "isError": true,
      errorDetails: {
        errorType: 'overautomation'
      }
    },
    "medicalCoding": {
      "status": "done",
      "details": [
        {
          "label": "Encounter Type",
          "value": "Out patient"
        },
        {
          "label": "CPT codes",
          "value": "99213"
        },
        {
          "label": "ICD codes",
          "value": "M25.561"
        },
        {
          "label": "Drug codes",
          "value": "NDC-0100"
        },
        {
          "label": "Encounter Date",
          "value": "45942"
        },
        {
          "label": "Physician",
          "value": "Dr. Layla Al Mansoori"
        },
        {
          "label": "Department",
          "value": "Rheumatology"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "completed"
        }
      ],
      "isError": false
    },
    "priorAuthorization": {
      "status": "approved",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0456"
        },
        {
          "label": "Prior AuthID",
          "value": "PA-2025-022"
        },
        {
          "label": "Physcian",
          "value": "Dr. Layla Al Mansoori"
        },
        {
          "label": "CPT codes",
          "value": "99213"
        },
        {
          "label": "ICD codes",
          "value": "M25.561"
        },
        {
          "label": "Drug codes",
          "value": "NDC-0100"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "completed"
        }
      ],
      "isError": false
    },
    "claimSubmission": {
      "status": "done",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "completed"
        }
      ],
      "claimAttempts": [
        {
          "claimRound": "1",
          "date": "45943",
          "claimAmount": "940 AED",
          "claimId": "20251013-OA1",
          "rejectionCode": "F14"
        },
        {
          "claimRound": "2",
          "date": "45944",
          "claimAmount": "940 AED",
          "claimId": "20251014-OA2",
          "rejectionCode": "-"
        }
      ],
      "isError": false
    },
    "denialManagement": {
      "status": "done",
      "steps": [
        {
          "id": "1",
          "label": "Denial Code Analyzed",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Suggested Edits",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Appeal Generated",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Appeal Submitted",
          "status": "completed"
        }
      ],
      "denialAttempts": [
        {
          "claimRound": "1",
          "claimId": "20251013-OA1",
          "denialId": "DEN-7701",
          "denialAmount": "940 AED",
          "denialCode": "D45"
        },
        {
          "claimRound": "2",
          "claimId": "20251014-OA2",
          "denialId": "-",
          "denialAmount": "-",
          "denialCode": "-"
        }
      ],
      "isError": false
    },
    "icdCodes": [],
    "cptCode": [],
    "drugCode": [],
    "postPayment": {
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Payment Retrieved",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Payment Matched",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Adjustments Applied",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Ledger Updated",
          "status": "pending"
        }
      ],
      "details": {
        "date": "2025-09-11",
        "paymentFile": 836,
        "claimId": "1014891283",
        "difference": -136
      },
      "isError": false,
      "errorDetails": {
        "errorType": "costtopatient"
      }
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "isSubmitted": true,
    "id": "208745",
    "profileCreatedDate": "2025-09-16T12:32:28.570Z"
  },
   {
    "agentDetails": {
      "agents": ["Clara", "Dee"],
      "agentSuggestion": "Partial approval received. Agent flagged CPT code mismatch, retrieved correct CPT from codebook, re-ran medical coding, and resubmitted claim. Claim approved on second round.",
      "coT": "Agent identified CPT code mismatch, retrieved correct CPT, and suggest rerunning coding."
    },
    "profile": {
      "profilePhoto": "/avatar.png",
      "age": 39,
      "name": "Khalid",
      "surname": "Al Ameri",
      "mrn": 314500,
      "eid": "784-1990-4455667-8",
      "emiratesId": "784-1990-4455667-8",
      "sex": "Male",
      "dob": 33035,
      "dateOfBirth": "Jan 1, 1970",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971505443322,
      "email": "khalid.alameri@example.com"
    },
    "information": {
      infoType:"Code Correction",
      "infoCode": "CC-001",
      "infoMessage": "Partial approval received. Agent flagged CT code mismatch, retrieved correct CPT from codebook, re-ran medical coding, and resubmitted claim. Claim approved on second round."
    },
    otherErrors: [
      {
      infoType:"Medical Necessity",
      "infoCode": "MN-REQ-001",
      "infoMessage": "One service denied for medical necessity. Agent is obtaining required documentation."
      },
    ],
    "markdown": "Chief Complaint: Right knee pain and limited mobility for 3 weeks, worsening with activity.\r\n\r\nHistory of Present Illness: 35-year-old male presents with progressive right knee pain, swelling, and stiffness for 3 weeks. Pain is constant (7/10), worse with weight-bearing and stairs. No trauma history. Minimal relief with OTC analgesics. Reports occasional \"locking\" sensation and difficulty with extension.\r\n\r\nReview of Systems:\r\n- Musculoskeletal: Pain, swelling, limited ROM right knee.\r\n- Constitutional: No fever, weight loss.\r\n- Neurological: No weakness or paresthesia.\r\n\r\nObjective: \r\nVitals stable. Right knee: swelling, mild effusion, medial joint line tenderness, positive McMurray’s sign. No erythema. ROM mildly restricted.\r\n\r\nAssessment:\r\nM25.561 – Pain in right knee, likely medial meniscus tear. Imaging required to exclude fracture, infection, or tumor.\r\n\r\nPlan:\r\n- MRI (73721) right knee\r\n- CBC (85027) to rule out infection\r\n- CT scan — updated to contrast-enhanced (70452) based on concern for occult bone lesion\r\n- Analgesics PRN",
    "eligibilityCheck": {
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566",
        "insurance": "Daman-DXB-002",
        "number": "33221199",
        "network": "Yes",
        "coverage": "1"
      },
      "details": [
        {
          "label": "Network",
          "value": "Yes"
        },
        {
          "label": "Coverage",
          "value": "100%"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
      "isError": false
    },
    "medicalCoding": {
      "status": "done",
      "details": [
        {
          "label": "Encounter Type",
          "value": "Out patient"
        },
        {
          "label": "CPT codes",
          "value": "73721, 70450, 85027"
        },
        {
          "label": "ICD codes",
          "value": "M25.561"
        },
        {
          "label": "Drug codes",
          "value": "NDC-0099"
        },
        {
          "label": "Encounter Date",
          "value": "45945"
        },
        {
          "label": "Physician",
          "value": "Dr. Saeed Al Remeithi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "completed"
        }
      ],
      "isError": false, 
    },
    "priorAuthorization": {
      "status": "approved",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-3345"
        },
        {
          "label": "Prior AuthID",
          "value": "PA-2025-091"
        },
        {
          "label": "Physcian",
          "value": "Dr. Saeed Al Remeithi"
        },
        {
          "label": "CPT codes",
          "value": "73721, 70450, 85027"
        },
        {
          "label": "ICD codes",
          "value": "M25.561"
        },
        {
          "label": "Drug codes",
          "value": "NDC-0099"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "completed"
        }
      ],
      "isError": false
    },
    "claimSubmission": {
      "status": "done",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "completed"
        }
      ],
      "claimAttempts": [
        {
          "claimRound": "1",
          "date": "45946",
          "claimAmount": "1,758 AED",
          "claimId": "20251016-RC1",
          "rejectionCode": "F11"
        },
        {
          "claimRound": "2",
          "date": "45948",
          "claimAmount": "1,758 AED",
          "claimId": "20251018-RC2",
          "rejectionCode": "-"
        }
      ],
      "isError": false
    },
    "denialManagement": {
      "status": "done",
      "steps": [
        {
          "id": "1",
          "label": "Denial Code Analyzed",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Suggested Edits",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Appeal Generated",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Appeal Submitted",
          "status": "completed"
        }
      ],
      "denialAttempts": [
        {
          "claimRound": "1",
          "claimId": "20251016-RC1",
          "denialId": "DEN-6611",
          "denialAmount": "586 AED",
          "denialCode": "D31"
        },
        {
          "claimRound": "2",
          "claimId": "20251018-RC2",
          "denialId": "-",
          "denialAmount": "-",
          "denialCode": "-"
        }
      ],
      "isError": false
    },
   "icdCodes": [
      {
        "code": "M25.561",
        "description": "Pain in right knee",
        "status": ""
      }
    ],
    "cptCode": [
      {
        "code": "73721",
        "description": "MRI, lower extremity, joint, without contrast",
        "status": ""
      },
      {
        "code": "70450",
        newCode:"70452",
        "description": "CT head/brain without contrast (original) → with contrast (suggested by agent for better diagnostic yield)",
        "status": "Changed"
      },
      {
        "code": "85027",
        "description": "Complete blood count (CBC)",
        "status": ""
      }
    ],
    "drugCode": [
      {
        "code": "NDC-0099",
        "description": "Paracetamol 500mg tablets, oral, PRN for pain",
        status: ''
      }
    ],
    "postPayment": {
      "status": "paused",
      "steps": [
        {
          "id": "1",
          "label": "Payment Retrieved",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Payment Matched",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Adjustments Applied",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Ledger Updated",
          "status": "pending"
        }
      ],
      "details": {
        "date": "2025-09-11",
        "paymentFile": 836,
        "claimId": "1014891283",
        "difference": -136
      },
      "isError": true,
      "errorDetails": {
        "errorType": "partialapproval"
      }
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "isSubmitted": false,
    "id": "314500",
    "profileCreatedDate": "2025-09-16T12:32:28.570Z"
  },
  {
    "agentDetails": {
      "agents": ['Clara', 'Dee'],
      "agentSuggestion": "Partial approval received. Agent flagged CPT code mismatch, retrieved correct CPT from codebook, re-ran medical coding, and resubmitted claim. Claim approved on second round.",
      "coT": "Agent identified CPT code mismatch, retrieved correct CPT, and suggest rerunning coding."
    },
    "profile": {
      "profilePhoto": "/avatar.png",
      "age": 39,
      "name": "Aisha",
      "surname": "Al Mehairi",
      "mrn": "314501",
      "eid": "784-1992-4455667-9",
      "emiratesId": "784-1992-4455667-9",
      "sex": "Female",
      "dateOfBirth": "Jan 1, 1970",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971506789123,
      "email": "aisha.almehairi@example.com"
    },
    "information": {
      "infoType": "Medical Necessity",
      "infoCode": "MN-REQ-001",
      "infoMessage": "One service denied for medical necessity. Agent is obtaining required documentation."
    },
    "markdown": "-",
    "eligibilityCheck": {
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566",
        "insurance": "NoorCare-AD-007",
        "number": "77889911",
        "network": "Yes",
        "coverage": "0.95"
      },
      "details": [
        {
          "label": "Network",
          "value": "Yes"
        },
        {
          "label": "Coverage",
          "value": "95%"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
      "isError": false
    },
    "medicalCoding": {
      "status": "done",
      "details": [
        {
          "label": "Encounter Type",
          "value": "Out patient"
        },
        {
          "label": "CPT codes",
          "value": "73721, 85027"
        },
        {
          "label": "ICD codes",
          "value": "M25.562"
        },
        {
          "label": "Drug codes",
          "value": "NDC-0456"
        },
        {
          "label": "Encounter Date",
          "value": "45945"
        },
        {
          "label": "Physician",
          "value": "Dr. Amal Al Mazrouei"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "completed"
        }
      ],
      "isError": false
    },
    "priorAuthorization": {
      "status": "approved",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-3346"
        },
        {
          "label": "Prior AuthID",
          "value": "PA-2025-094"
        },
        {
          "label": "Physcian",
          "value": "Dr. Amal Al Mazrouei"
        },
        {
          "label": "CPT codes",
          "value": "73721, 85027"
        },
        {
          "label": "ICD codes",
          "value": "M25.562"
        },
        {
          "label": "Drug codes",
          "value": "NDC-0456"
        }
      ],
      "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "completed"
        }
      ],
      "isError": false
    },
    "claimSubmission": {
      "status": "done",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "completed"
        }
      ],
      "claimAttempts": [
        {
          "claimRound": "1",
          "date": "45946",
          "claimAmount": "877 AED",
          "claimId": "20251016-MN1",
          "rejectionCode": "F14"
        },
        {
          "claimRound": "2",
          "date": "45950",
          "claimAmount": "877 AED",
          "claimId": "20251020-MN2",
          "rejectionCode": "-"
        }
      ],
      "isError": false
    },
    "denialManagement": {
      "status": "done",
      "steps": [
        {
          "id": "1",
          "label": "Denial Code Analyzed",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Suggested Edits",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Appeal Generated",
          "status": "completed"
        },
        {
          "id": "4",
          "label": "Appeal Submitted",
          "status": "completed"
        }
      ],
      "denialAttempts": [
        {
          "claimRound": "1",
          "claimId": "20251016-MN1",
          "denialId": "DEN-6622",
          "denialAmount": "291 AED",
          "denialCode": "D12"
        },
        {
          "claimRound": "2",
          "claimId": "20251020-MN2",
          "denialId": "-",
          "denialAmount": "-",
          "denialCode": "-"
        }
      ],
      "isError": false
    },
    "icdCodes": [],
    "cptCode": [],
    "drugCode": [],
    "postPayment": {
      "status": "paused",
      "steps": [
        {
          "id": "1",
          "label": "Payment Retrieved",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Payment Matched",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Adjustments Applied",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Ledger Updated",
          "status": "pending"
        }
      ],
      "details": {
        "date": "2025-09-11",
        "paymentFile": 836,
        "claimId": "1014891283",
        "difference": -136
      },
      "isError": false,
      "errorDetails": {
        "errorType": "costtopatient"
      }
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "isSubmitted": false,
    "id": "314501",
    "profileCreatedDate": "2025-09-16T12:32:28.570Z"
  },
  
]


export const fakePersona: PatientPersona[] = [
  {
    id: "483920",
    isSubmitted: false,
    profileCreatedDate: new Date("9/2/2025 20:33:45").toISOString(),

    agentDetails: {
      agents: ["Autho"],
      agentSuggestion: "Attach clinical notes for MRI PA",
      coT: "Diagnostic report mentioned in SOAP but not attached; agent cannot confirm if payer’s criteria for MRI are met.",
    },
    profile: {
      name: "Fatima",
      surname: "Rahman",
      age: 34,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false, 
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
       
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "762145",
    isSubmitted: false,
    profileCreatedDate: new Date("9/2/2025 21:07:30").toISOString(),
    agentDetails: {
      agents: ["Autho"],
      agentSuggestion: "Resubmit PA for CT scan (denied once)",
      coT: "Denial code shows “insufficient medical necessity” → agent requests isError with radiology justification.",
    },
    profile: {
      name: "Layla",
      surname: "Mansour",
      age: 55,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "198307",
    isSubmitted: false,
    profileCreatedDate: new Date("9/2/2025 21:41:15").toISOString(),

    agentDetails: {
      agents: ["Autho"],
      agentSuggestion: "PA required for inpatient stay extension",
      coT: "Payer requires re-auth after 5 days; agent drafted but physician must confirm ongoing medical necessity.",
    },
    profile: {
      name: "Huda",
      surname: "Mansoor",
      age: 36,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "530412",
    isSubmitted: false,
    profileCreatedDate: new Date("9/2/2025 22:15:00").toISOString(),

    agentDetails: {
      agents: ["Dee"],
      agentSuggestion: "Draft appeal: “not medically necessary”",
      coT: "Denial code 50; flagged for physician medical justification + supporting guidelines.",
    },
    profile: {
      name: "Olivier",
      surname: "Dubois",
      age: 44,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/ecg-report.png",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "824691",
    isSubmitted: false,
    profileCreatedDate: new Date("9/2/2025 22:48:45").toISOString(),

    agentDetails: {
      agents: ["Dee"],
      agentSuggestion: "Denial reason: experimental procedure",
      coT: "Payer denial flagged as investigational; requires physician statement + clinical literature.",
    },
    profile: {
      name: "Mariam ",
      surname: "Yusuf",
      age: 37,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "315478",
    isSubmitted: false,
    profileCreatedDate: new Date("9/2/2025 23:22:30").toISOString(),

    agentDetails: {
      agents: ["Coda"],
      agentSuggestion:
        "ICD-10: C34.9 (Malignant neoplasm of lung, unspecified)",
      coT: "SOAP: “suspicious lung lesion” without biopsy confirmation → risk of premature cancer coding.",
    },
    profile: {
      name: "Fatemeh ",
      surname: "Esfandiari",
      age: 61,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "907263",
    isSubmitted: false,
    profileCreatedDate: new Date("9/2/2025 23:56:15").toISOString(),

    agentDetails: {
      agents: ["Payne"],
      agentSuggestion: "ERA mismatch AED 450 vs 500 billed",
      coT: "Underpayment 10% below contract; payer adjustment reason code unclear → finance validation needed.",
    },
    profile: {
      name: "John",
      surname: "Williams",
      age: 60,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "451809",
    isSubmitted: false,
    profileCreatedDate: new Date("9/3/2025 0:30:00").toISOString(),

    agentDetails: {
      agents: ["Payne"],
      agentSuggestion: "Partial payment received AED 700/1,200",
      coT: "Payer explanation of benefits shows patient deductible applied incorrectly.",
    },
    profile: {
      name: "Sophie",
      surname: "Martin",
      age: 31,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "672354",
    isSubmitted: false,
    profileCreatedDate: new Date("9/3/2025 1:03:45").toISOString(),

    agentDetails: {
      agents: ["Autho"],
      agentSuggestion: "Missing authorization for infusion J1745",
      coT: "Agent mapped drug code but payer benefit plan excludes biologic → requires override.",
    },
    profile: {
      name: "Leila",
      surname: "Haddad",
      age: 28,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "284931",
    isSubmitted: false,
    profileCreatedDate: new Date("9/3/2025 1:37:30").toISOString(),

    agentDetails: {
      agents: ["Clara"],
      agentSuggestion: "Duplicate claim batch detected",
      coT: "Two encounters submitted with identical DOS; payer likely to reject for duplication.",
    },
    profile: {
      name: "Marcus",
      surname: "Green",
      age: 57,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "905127",
    isSubmitted: false,
    profileCreatedDate: new Date("9/3/2025 2:11:15").toISOString(),

    agentDetails: {
      agents: ["Clara"],
      agentSuggestion: "XML rejected → missing prior auth ID",
      coT: "System populated wrong PA reference number (from earlier encounter) → mismatch flagged.",
    },
    profile: {
      name: "Ali",
      surname: "Hassan",
      age: 50,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "316842",
    isSubmitted: false,
    profileCreatedDate: new Date("9/3/2025 2:45:00").toISOString(),

    agentDetails: {
      agents: ["Clara"],
      agentSuggestion: "Claim rejected → invalid date of service",
      coT: "Date auto-pulled from discharge summary instead of encounter start; schema validator failed.",
    },
    profile: {
      name: "Maria",
      surname: "Lopez",
      age: 39,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "748509",
    isSubmitted: false,
    profileCreatedDate: new Date("9/3/2025 3:18:45").toISOString(),

    agentDetails: {
      agents: ["Clara"],
      agentSuggestion: "Resubmit claim batch with corrected provider ID",
      coT: "Provider NPI differs between header and service line → flagged inconsistency.",
    },
    profile: {
      name: "Jamal",
      surname: "Hassan",
      age: 51,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "293608",
    isSubmitted: false,
    profileCreatedDate: new Date("9/3/2025 3:52:30").toISOString(),

    agentDetails: {
      agents: ["Dee"],
      agentSuggestion: "Draft appeal: missing modifier CPT 93010",
      coT: "Payer denied ECG professional component; appeal drafted to add modifier -26.",
    },
    profile: {
      name: "John",
      surname: "Smith",
      age: 52,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "857134",
    isSubmitted: false,
    profileCreatedDate: new Date("9/3/2025 4:26:15").toISOString(),

    agentDetails: {
      agents: ["Payne"],
      agentSuggestion: "Matched remit but offset applied",
      coT: "Offset applied to unrelated claim batch; flagged for manual allocation.",
    },
    profile: {
      name: "Karim",
      surname: "Osman",
      age: 49,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "409672",
    isSubmitted: false,
    profileCreatedDate: new Date("9/3/2025 5:00:00").toISOString(),

    agentDetails: {
      agents: ["Dee"],
      agentSuggestion: "Auto-resolved denial: late filing → corrected",
      coT: "Waiver rule applied because payer accepted 30-day grace period; auto-refiled.",
    },
    profile: {
      name: "Ahmad",
      surname: "Saleh",
      age: 47,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "621395",
    isSubmitted: false,
    profileCreatedDate: new Date("9/3/2025 5:33:45").toISOString(),

    agentDetails: {
      agents: ["Coda"],
      agentSuggestion: "ICD-10: K52.9 (Noninfective gastroenteritis)",
      coT: "Note says “chronic diarrhea, unclear etiology” → could be functional vs inflammatory → flagged.",
    },
    profile: {
      name: "Yasmine",
      surname: "Al Farsi",
      age: 42,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "784210",
    isSubmitted: false,
    profileCreatedDate: new Date("9/3/2025 6:07:30").toISOString(),

    agentDetails: {
      agents: ["Clara"],
      agentSuggestion: "Claim batch flagged: inconsistent revenue codes",
      coT: "Service line had revenue code not aligned with CPT group; schema flagged risk.",
    },
    profile: {
      name: "Imran",
      surname: "Bashir",
      age: 63,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "359682",
    isSubmitted: false,
    profileCreatedDate: new Date("9/3/2025 6:41:15").toISOString(),

    agentDetails: {
      agents: ["Coda"],
      agentSuggestion: "ICD-10: E66.9 (Obesity, unspecified)",
      coT: "SOAP note: “BMI 32, mild hypertension” → borderline case; payer may deny if BMI <35.",
    },
    profile: {
      name: "Samira",
      surname: "Khan",
      age: 38,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "928401",
    isSubmitted: false,
    profileCreatedDate: new Date("9/3/2025 7:15:00").toISOString(),

    agentDetails: {
      agents: ["Dee"],
      agentSuggestion: "Appeal drafted: coverage terminated mid-stay",
      coT: "Inpatient claim denied after coverage ended; requires payer isError.",
    },
    profile: {
      name: "Daniel",
      surname: "Ruiz",
      age: 59,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "174563",
    isSubmitted: false,
    profileCreatedDate: new Date("9/3/2025 7:48:45").toISOString(),

    agentDetails: {
      agents: ["Payne"],
      agentSuggestion: "Overpayment detected AED 1,200 vs 1,000 billed",
      coT: "Over-remit posted; agent waiting to avoid duplicate refund cycle.",
    },
    profile: {
      name: "Paul",
      surname: "Andersen",
      age: 45,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "836092",
    isSubmitted: false,
    profileCreatedDate: new Date("9/3/2025 8:22:30").toISOString(),

    agentDetails: {
      agents: ["Autho"],
      agentSuggestion: "Resubmit PA for physical therapy",
      coT: "Payer limit exceeded (10 sessions); requires medical director override.",
    },
    profile: {
      name: "Laila",
      surname: "Karim",
      age: 33,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "492781",
    isSubmitted: false,
    profileCreatedDate: new Date("9/3/2025 8:56:15").toISOString(),

    agentDetails: {
      agents: ["Autho"],
      agentSuggestion: "Submit PA for CPT 99213 (outpatient follow-up)",
      coT: "CPT mapped to follow-up, but payer unexpectedly requires PA for low-acuity outpatient codes → flagged as unusual.",
    },
    profile: {
      name: "Omar",
      surname: "Khaled",
      age: 62,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "650237",
    isSubmitted: false,
    profileCreatedDate: new Date("9/3/2025 9:30:00").toISOString(),

    agentDetails: {
      agents: ["Coda"],
      agentSuggestion: "ICD-10: R07.9 (Chest pain, unspecified)",
      coT: "SOAP note: “intermittent retrosternal pressure, ?angina” → ambiguous between R07.9 vs I20.x; low confidence.",
    },
    profile: {
      name: "David",
      surname: "Chen",
      age: 40,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "718904",
    isSubmitted: false,
    profileCreatedDate: new Date("9/3/2025 10:03:45").toISOString(),

    agentDetails: {
      agents: ["Coda"],
      agentSuggestion: "ICD-10: M54.5 (Low back pain)",
      coT: "SOAP note says “lumbar pain after lifting box” → insufficient specificity (acute vs chronic).",
    },
    profile: {
      name: "James",
      surname: "Peterson",
      age: 64,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "203589",
    isSubmitted: false,
    profileCreatedDate: new Date("9/3/2025 10:37:30").toISOString(),

    agentDetails: {
      agents: ["Autho"],
      agentSuggestion: "Payer flagged PA duplication request",
      coT: "PA already approved but duplicate triggered; agent blocked.",
    },
    profile: {
      name: "Noor ",
      surname: "Al Hadi",
      age: 47,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "567491",
    isSubmitted: false,
    profileCreatedDate: new Date("9/3/2025 11:11:15").toISOString(),

    agentDetails: {
      agents: ["Coda"],
      agentSuggestion: "ICD-10: R51.9 (Headache, unspecified)",
      coT: "SOAP note: “episodic headache, ?migraine” → unclear → flagged for clarification.",
    },
    profile: {
      name: "Richard",
      surname: "Collins",
      age: 54,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "891034",
    isSubmitted: false,
    profileCreatedDate: new Date("9/3/2025 11:45:00").toISOString(),

    agentDetails: {
      agents: ["Clara"],
      agentSuggestion: "Missing attending provider signature",
      coT: "Claim built without digital signature field populated; compliance check blocked.",
    },
    profile: {
      name: "Amina",
      surname: "Farouk",
      age: 41,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "342657",
    isSubmitted: false,
    profileCreatedDate: new Date("9/3/2025 12:18:45").toISOString(),

    agentDetails: {
      agents: ["Payne"],
      agentSuggestion: "EFT posted but payer remark code missing",
      coT: "Funds matched, but no adjustment codes in remit → requires manual reconciliation.",
    },
    profile: {
      name: "Peter",
      surname: "Novak",
      age: 58,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "970218",
    isSubmitted: false,
    profileCreatedDate: new Date("9/3/2025 12:52:30").toISOString(),

    agentDetails: {
      agents: ["Coda"],
      agentSuggestion: "ICD-10: J20.9 (Acute bronchitis, unspecified)",
      coT: "SOAP: “productive cough, no x-ray done” → not clear if pneumonia → flagged precautionary.",
    },
    profile: {
      name: "Clara",
      surname: "Jensen",
      age: 35,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
  {
    id: "583920",
    isSubmitted: false,
    profileCreatedDate: new Date("9/3/2025 13:26:15").toISOString(),

    agentDetails: {
      agents: ["Dee"],
      agentSuggestion: "Payer denial: duplicate lab test billed",
      coT: "Two labs billed within 24h; agent cannot auto-resolve → flagged for review.",
    },
    profile: {
      name: "Hana",
      surname: "Shafiq",
      age: 29,
      emiratesId: "748-1985-2233445-4",
      sex: "Female",
      dateOfBirth: "1985-07-21",
      nationality: "UAE",
      language: "Arabic",
      phoneNumber: 97155467830,
      email: "Sara.nuaimi@gmail.com",
      profilePhoto: "/avatar.png",
    },
    eligibilityCheck: {
        "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "completed"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "completed"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "completed"
        }
      ],
        isError: false,
      status: "covered",
      insuranDetials: {
        insuranceProvider: "Daman-AUH-001",
        imageUrl: "/insurance-image.png",
        policyNumber: "42122566",
      },
      details: [
        { label: "Network", value: "Yes" },
        { label: "Coverage", value: "100%" },
      ],
    },
    medicalCoding: {
        isError: false,
          "steps": [
        {
          "id": "1",
          "label": "Extract & Suggest Code",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Validate & Check Compliance",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Human Review & Approval",
          "status": "pending"
        }
      ],
      status: "inprogress", // Medical coding status
      details: [
        { label: "Encounter Date", value: "2025-08-30" },
        { label: "Encounter Type", value: "Outpatient" },
        { label: "Physician", value: "Dr. Al Shamsi" },
        { label: "Department", value: "Orthopaedics" },
      ],
    },
    priorAuthorization: {
         "steps": [
        {
          "id": "1",
          "label": "Extract & Prepare & (Code)",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "Submit Request",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Prior Authorization Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Response Retrieved",
          "status": "pending"
        }
      ],
        isError: false,
      status: "waiting", // Prior authorization status
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
        isError: false,
      status: "waiting", // Current status of the claim submission process
      steps: [
        { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
        { id: "2", label: "XML File Generated", status: "pending" },
        { id: "3", label: "Claim Posted", status: "pending" },
        { id: "4", label: "Claim ID Received & Updated", status: "pending" },
      ],
    },
      
    "drugCode": [],
    denialManagement: {
        isError: false,
      status: "waiting", // Current status of the denial management process
      steps: [
        { id: "1", label: "Denial Code Analyzed", status: "pending" },
        { id: "2", label: "Suggested Edits", status: "pending" },
        { id: "3", label: "Appeal Generated", status: "pending" },
        { id: "4", label: "Appeal Submitted", status: "pending" },
      ],
    },
    postPayment: {
        isError: false,
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
        fileName: "Exclusion.pdf",
        fileSize: "150 KB",
        ecgImageUrl: "/exclusion.pdf",
      },
      {
        fileName: "Policy.pdf",
        fileSize: "180 KB",
        ecgImageUrl: "/policy.pdf",
      },
      {
        fileName: "ECG.png",
        fileSize: "220 KB",
        ecgImageUrl: "/ecg-report.png",
      },
    ],
    markdown,
    icdCodes: [],
    cptCode: [],
  },
];



export const patientPersona: PatientPersona[] = demoData.concat(fakePersona)
