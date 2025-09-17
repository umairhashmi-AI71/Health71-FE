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
**Assessment**: Chronic osteoarthritis of right knee (ICD-10: M17.11).
**Plan:** Continue conservative management (RICE), prescribe naproxen 500 mg PO BID x 7 days, refer to physiotherapy, update CPT code to 99213, resubmit claim."
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

export const patientPersona: PatientPersona[] = [
  {
    "agentDetails": {
      "agentIssue": "Clara",
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
      "agentIssue": "Dee",
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
      "agentIssue": "Coda",
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
        isApproved: false,
        "code": "M17.11",
        "description": "Unilateral primary osteoarthritis, right knee"
      }
    ],
    "cptCode": [
      {
        "code": "99203",
        isApproved: false,
        "description": "Office/outpatient visit, new patient, low complexity"
      },
      {
        "code": "99213",
        isApproved: false,
        "description": "Office/outpatient visit, established patient, low complexity"
      }
    ],
    "drugCode": [
      {
        "code": "98765",
        isApproved: false,
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
      "agentIssue": "Dee",
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
      "agentIssue": "Clara",
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
      "agentIssue": "Clara",
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
           "denialAmount": "-",
          "denialCode": "-"
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
      "agentIssue": "Dee",
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
      "agentIssue": "Clara",
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
  
]