import { PatientPersona } from "@/types/patient";

export const fakepersona : PatientPersona[]= [
  {
    "id": "483920",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-02T15:03:45.000Z",
    "agentDetails": {
      "agents": [
        "Eli"
      ],
      "agentAction": "Mark eligibility case as cleared and hand off to Autho for monitoring claim status.",
      "currentProcess": "Autho",
      "agentSuggestion": "Manual Check Required – coverage mismatch",
      "coT": "Agent cannot find valid entries within reach flagged to correct details or verify with external payer."
    },
    "profile": {
      "name": "Mariam",
      "surname": "Al Suwaidi",
      "age": 34,
      "emiratesId": "784-1994-3322110-5",
      "sex": "Female",
      "dateOfBirth": "1994-07-14",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971524439876,
      "email": "mariam.suwaidi@example.com",
      "profilePhoto": "/7.png"
    },
    "information": {
      "infoCode": "test",
      "infoMessage": "No insurance detected — agent requested policy details to validate coverage eligibility.",
      "infoType": "Manual Insurance"
    },
    "insuranceDetailsForm": {},
    "eligibilityCheck": {
      "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "denied"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "pending"
        }
      ],
      "isError": true,
      "status": "waiting",
      "insuranDetials": {
        "insuranceProvider": "Daman",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "DAM-554433"
      },
      "details": [
        {
          "label": "Network",
          "value": "Thiqa"
        },
        {
          "label": "Coverage",
          "value": "Not Valid"
        }
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "waiting",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/ecg-report.png"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "762145",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-02T15:37:30.000Z",
    "agentDetails": {
      "agents": [
        "Eli"
      ],
      "agentAction": "Close eligibility case. No further action.",
      "currentProcess": "Autho",
      "agentSuggestion": "Manual Check Required – coverage mismatch",
      "coT": "Agent cannot find valid entries within reach flagged to correct details or verify with external payer."
    },
    "profile": {
      "name": "Omar",
      "surname": "Al Mazrouei",
      "age": 55,
      "emiratesId": "784-1987-1122334-8",
      "sex": "Male",
      "dateOfBirth": "1987-02-17",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971502236781,
      "email": "omar.mazrouei@example.com",
      "profilePhoto": "/m1.png"
    },
    "information": {
      "infoCode": "test",
      "infoMessage": "No insurance detected — agent requested policy details to validate coverage eligibility.",
      "infoType": "Manual Insurance"
    },
    "eligibilityCheck": {
      "steps": [
        {
          "id": "1",
          "label": "Extract Patient & Payer Data",
          "status": "denied"
        },
        {
          "id": "2",
          "label": "Validate Coverage",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Update & Flag Issues",
          "status": "pending"
        }
      ],
      "isError": false,
      "status": "waiting",
      "insuranDetials": {
        "insuranceProvider": "ADNIC",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "AD-998877",
        "error": "notvalid"
      },
      "details": [
        {
          "label": "Network",
          "value": "GN+"
        },
        {
          "label": "Coverage",
          "value": "Active"
        }
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "waiting",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "198307",
    "isSubmitted": false,
    "agentDetails": {
      "agents": [
        "Autho"
      ],
      "agentAction": "Await payer decision on inpatient stay extension. If approved → continue coverage; if denied → flag Dee for denial management.",
      "currentProcess": "Autho",
      "agentSuggestion": "PA required for inpatient stay extension",
      "coT": "Denial code shows “insufficient medical necessity” → agent requests escalation with radiology justification."
    },
    "profileCreatedDate": "2025-09-02T16:11:15.000Z",
    "insuranceDetailsForm": {
      "provider": "ADNIC",
      "policyNumber": "42122566",
      "identificationType": "",
      "identificationNumber": "",
      "clinician": "Dr. Shlom",
      "serviceCategory": "Outpatient",
      "portalUrl": "https://adnic-portal.example",
      "planType": "GN+",
      "coverageStart": "2025-01-01",
      "coverageEnd": "2025-12-31",
      "department": "",
      "paymentdateserviceDate": "2025-09-20",
      "paymentdate": "",
      "paymentmethod": ""
    },
    "information": {
      "infoCode": "test",
      "infoMessage": "Coverage is active and in-network — patient is marked Covered. Moving on to Prior Authorization.",
      "infoType": "Eligible"
    },
    "profile": {
      "name": "Huda",
      "surname": "Mansoor",
      "age": 36,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "huda.mansoor@example.com",
      "profilePhoto": "/9.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "ADNIC",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566",
        "error": "coverage"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "waiting",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
          "status": "pending"
        }
      ],
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "530412",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-02T16:45:00.000Z",
    "agentDetails": {
      "agents": [
        "Autho"
      ],
      "agentAction": "Track PA decision. If approved → book appointment  →  notify Clara to proceed with claim. If denied → generate appeal draft.",
      "currentProcess": "Autho",
      "agentSuggestion": "Code Suggestion – verify ICD/CPT pair",
      "coT": "SOAP note suggests R51 (Headache) with CT head ordered; agent flagged to confirm medical necessity supports CT request."
    },
    "information": {
      "infoCode": "CMS-110",
      "infoMessage": "Prior authorization initially denied due to coding mismatch. Codes corrected and resubmission prepared.",
      "infoType": "Different Code Suggestion"
    },
    "profile": {
      "name": "Aisha",
      "surname": "Al Kaabi",
      "age": 44,
      "emiratesId": "784-1990-6677889-3",
      "sex": "Female",
      "dateOfBirth": "1990-06-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971526674412,
      "email": "aisha.kaabi@example.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "DAM-AUH-567"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "waiting",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "denied",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0312"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-56777"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/ecg-report.png"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint:**\nLeft knee pain, persistent for the past 3 weeks, gradually worsening.\n\n### **History of Present Illness (HPI):**\n35-year-old female reports moderate-to-severe left knee pain rated 7/10, worse after prolonged standing and when climbing stairs. Morning stiffness lasts ~20 minutes. Reports swelling and occasional catching/clicking sensation. No history of trauma or surgery. Over-the-counter paracetamol provides minimal relief. Pain impacts ability to walk long distances and perform daily activities.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for pain, swelling, stiffness.\n- **General**: No fever, weight loss, or fatigue.\n- **Neurological**: No numbness, tingling, or weakness.\n- **Cardiovascular**: No chest pain or palpitations.\n- **Constitutional**: Reports sleep disruption due to knee pain.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective (O):**</u>\n\n### **Vital Signs:**\n- BP 124/78 mmHg, HR 74 bpm, Temp 36.7°C, RR 16/min.\n\n### **Physical Examination:**\n- **Inspection**: Mild swelling of left knee, no erythema.\n- **Palpation**: Medial joint line tenderness present.\n- **Range of Motion**: Slightly limited flexion due to pain (loss of ~10°).\n- **Stability Tests**: McMurray’s test positive (painful click). Lachman and anterior drawer negative.\n- **Gait**: Antalgic gait noted.\n\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\nLikely medial meniscus tear (internal derangement of left knee) with mild effusion. Rule out ligament involvement with MRI.\n\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan (P):**</u>\n- Order MRI left knee for confirmation.\n- Continue NSAIDs (ibuprofen 400 mg PO TID as needed).\n- Refer for physiotherapy focusing on quadriceps strengthening.\n- Educate patient about activity modification and use of knee brace.\n- Follow up in 2 weeks for MRI review and potential arthroscopy planning.\"\n \n",
    "icdCodes": [
      {
        "code": "M23.212",
        "description": "Derangement of medial meniscus due to old tear or injury, left knee",
        "status": ""
      },
      {
        "code": "M25.462",
        "description": "Effusion, left knee",
        "status": ""
      },
      {
        "code": "Z51.89",
        "description": "Encounter for other specified aftercare (physiotherapy referral)",
        "status": ""
      },
      {
        "code": "Z79.1",
        "description": "Long term (current) use of NSAIDs",
        "status": ""
      }
    ],
    "cptCode": [
      {
        "code": "99214",
        "status": "Accepted",
        "description": "Office/outpatient visit, established patient (moderate MDM)"
      },
      {
        "code": "73721",
        "status": "",
        "description": "MRI, lower extremity joint, without contrast"
      }
    ],
    "drugCode": [
      {
        "code": "NDC-0002",
        "status": "",
        "description": "Ibuprofen 400 mg oral tablets, TID as needed"
      },
      {
        "code": "NDC-0555",
        "status": "",
        "description": "Topical diclofenac gel 1% (optional adjunct)"
      }
    ]
  },
  {
    "id": "824691",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-02T17:18:45.000Z",
    "agentDetails": {
      "agents": [
        "Autho"
      ],
      "agentAction": "Submit PA with correct CPT. Monitor for payer response.",
      "currentProcess": "Autho",
      "agentSuggestion": "Code Suggestion – refine CPT",
      "coT": "Diagnosis G47.33 (OSA) with sleep study ordered; agent flagged to ensure correct CPT (95810 vs 95811) is used."
    },
    "information": {
      "infoCode": "notcovered",
      "infoMessage": "Prior authorization returned as non-covered benefit, no appeal possible offer patient  OOP payment:",
      "infoType": "Not Covered"
    },
    "profile": {
      "name": "Mariam ",
      "surname": "Yusuf",
      "age": 37,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "waiting",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "rejected",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "315478",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-02T17:52:30.000Z",
    "agentDetails": {
      "agents": [
        "Eli"
      ],
      "agentAction": "Mark eligibility case as closed since claim submitted.",
      "currentProcess": "Eli",
      "agentSuggestion": "Not Eligible – coverage inactive",
      "coT": "eID shows insurance expired last month; manual verification required before visit."
    },
    "insuranceDetailsForm": {
      "provider": "Oman Insurance",
      "policyNumber": "42122566",
      "identificationType": "",
      "identificationNumber": "",
      "clinician": "Dr. Al Shamsi",
      "serviceCategory": "Outpatient",
      "portalUrl": "https://omaninsurance-portal.example",
      "planType": "Premium",
      "coverageStart": "2025-01-01",
      "coverageEnd": "2025-12-31",
      "department": "Orthopedics",
      "paymentdateserviceDate": "2025-09-22Eligibility Confirmation",
      "paymentdate": "2025-09-21",
      "paymentmethod": "Visa"
    },
    "profile": {
      "name": "Khalid ",
      "surname": "Al Nuaimi",
      "age": 61,
      "emiratesId": "784-1988-3344556-9",
      "sex": "Male",
      "dateOfBirth": "1988-03-12",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971508821145,
      "email": "khalid.nuaimi@example.com",
      "profilePhoto": "/m4.png"
    },
    "information": {
      "infoCode": "test",
      "infoMessage": "Coverage expired at date of service — flagged as ineligible, patient notified, prompted to update plan or self-pay.",
      "infoType": "Expired Coverage"
    },
    "eligibilityCheck": {
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
      "status": "noteligible",
      "insuranDetials": {
        "insuranceProvider": "Daman",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "DAM-445566"
      },
      "details": [
        {
          "label": "Coverage End",
          "value": "Yes"
        },
        {
          "label": "Coverage",
          "value": "-"
        }
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "waiting",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "907263",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-02T18:26:15.000Z",
    "agentDetails": {
      "agents": [
        "Payne"
      ],
      "agentSuggestion": "ERA mismatch AED 450 vs 500 billed",
      "coT": "Underpayment 10% below contract; payer adjustment reason code unclear → finance validation needed."
    },
    "profile": {
      "name": "John",
      "surname": "Williams",
      "age": 60,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "inprogress",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "451809",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-02T19:00:00.000Z",
    "agentDetails": {
      "agents": [
        "Payne"
      ],
      "agentSuggestion": "Partial payment received AED 700/1,200",
      "coT": "Payer explanation of benefits shows patient deductible applied incorrectly."
    },
    "profile": {
      "name": "Sophie",
      "surname": "Martin",
      "age": 31,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "inprogress",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "672354",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-02T19:33:45.000Z",
    "agentDetails": {
      "agents": [
        "Autho"
      ],
      "agentSuggestion": "Missing authorization for infusion J1745",
      "coT": "Agent mapped drug code but payer benefit plan excludes biologic → requires override."
    },
    "profile": {
      "name": "Leila",
      "surname": "Haddad",
      "age": 28,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "inprogress",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "284931",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-02T20:07:30.000Z",
    "agentDetails": {
      "agents": [
        "Clara"
      ],
      "agentSuggestion": "Duplicate claim batch detected",
      "coT": "Two encounters submitted with identical DOS; payer likely to reject for duplication."
    },
    "profile": {
      "name": "Marcus",
      "surname": "Green",
      "age": 57,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "inprogress",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "905127",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-02T20:41:15.000Z",
    "agentDetails": {
      "agents": [
        "Clara"
      ],
      "agentSuggestion": "XML rejected → missing prior auth ID",
      "coT": "System populated wrong PA reference number (from earlier encounter) → mismatch flagged."
    },
    "profile": {
      "name": "Ali",
      "surname": "Hassan",
      "age": 50,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "inprogress",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "316842",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-02T21:15:00.000Z",
    "agentDetails": {
      "agents": [
        "Clara"
      ],
      "agentSuggestion": "Claim rejected → invalid date of service",
      "coT": "Date auto-pulled from discharge summary instead of encounter start; schema validator failed."
    },
    "profile": {
      "name": "Maria",
      "surname": "Lopez",
      "age": 39,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "inprogress",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "748509",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-02T21:48:45.000Z",
    "agentDetails": {
      "agents": [
        "Clara"
      ],
      "agentSuggestion": "Resubmit claim batch with corrected provider ID",
      "coT": "Provider NPI differs between header and service line → flagged inconsistency."
    },
    "profile": {
      "name": "Jamal",
      "surname": "Hassan",
      "age": 51,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "inprogress",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "293608",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-02T22:22:30.000Z",
    "agentDetails": {
      "agents": [
        "Dee"
      ],
      "agentSuggestion": "Draft appeal: missing modifier CPT 93010",
      "coT": "Payer denied ECG professional component; appeal drafted to add modifier -26."
    },
    "profile": {
      "name": "John",
      "surname": "Smith",
      "age": 52,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "inprogress",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "857134",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-02T22:56:15.000Z",
    "agentDetails": {
      "agents": [
        "Payne"
      ],
      "agentSuggestion": "Matched remit but offset applied",
      "coT": "Offset applied to unrelated claim batch; flagged for manual allocation."
    },
    "profile": {
      "name": "Karim",
      "surname": "Osman",
      "age": 49,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "inprogress",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "409672",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-02T23:30:00.000Z",
    "agentDetails": {
      "agents": [
        "Dee"
      ],
      "agentSuggestion": "Auto-resolved denial: late filing → corrected",
      "coT": "Waiver rule applied because payer accepted 30-day grace period; auto-refiled."
    },
    "profile": {
      "name": "Ahmad",
      "surname": "Saleh",
      "age": 47,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "inprogress",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "621395",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-03T00:03:45.000Z",
    "agentDetails": {
      "agents": [
        "Coda"
      ],
      "agentSuggestion": "ICD-10: K52.9 (Noninfective gastroenteritis)",
      "coT": "Note says “chronic diarrhea, unclear etiology” → could be functional vs inflammatory → flagged."
    },
    "profile": {
      "name": "Yasmine",
      "surname": "Al Farsi",
      "age": 42,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "inprogress",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "784210",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-03T00:37:30.000Z",
    "agentDetails": {
      "agents": [
        "Clara"
      ],
      "agentSuggestion": "Claim batch flagged: inconsistent revenue codes",
      "coT": "Service line had revenue code not aligned with CPT group; schema flagged risk."
    },
    "profile": {
      "name": "Imran",
      "surname": "Bashir",
      "age": 63,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "inprogress",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "359682",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-03T01:11:15.000Z",
    "agentDetails": {
      "agents": [
        "Coda"
      ],
      "agentSuggestion": "ICD-10: E66.9 (Obesity, unspecified)",
      "coT": "SOAP note: “BMI 32, mild hypertension” → borderline case; payer may deny if BMI <35."
    },
    "profile": {
      "name": "Samira",
      "surname": "Khan",
      "age": 38,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "inprogress",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "928401",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-03T01:45:00.000Z",
    "agentDetails": {
      "agents": [
        "Dee"
      ],
      "agentSuggestion": "Appeal drafted: coverage terminated mid-stay",
      "coT": "Inpatient claim denied after coverage ended; requires payer escalation."
    },
    "profile": {
      "name": "Daniel",
      "surname": "Ruiz",
      "age": 59,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "inprogress",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "174563",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-03T02:18:45.000Z",
    "agentDetails": {
      "agents": [
        "Payne"
      ],
      "agentSuggestion": "Overpayment detected AED 1,200 vs 1,000 billed",
      "coT": "Over-remit posted; agent paused to avoid duplicate refund cycle."
    },
    "profile": {
      "name": "Paul",
      "surname": "Andersen",
      "age": 45,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "inprogress",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "836092",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-03T02:52:30.000Z",
    "agentDetails": {
      "agents": [
        "Autho"
      ],
      "agentSuggestion": "Resubmit PA for physical therapy",
      "coT": "Payer limit exceeded (10 sessions); requires medical director override."
    },
    "profile": {
      "name": "Laila",
      "surname": "Karim",
      "age": 33,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "inprogress",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "492781",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-03T03:26:15.000Z",
    "agentDetails": {
      "agents": [
        "Autho"
      ],
      "agentSuggestion": "Submit PA for CPT 99213 (outpatient follow-up)",
      "coT": "CPT mapped to follow-up, but payer unexpectedly requires PA for low-acuity outpatient codes → flagged as unusual."
    },
    "profile": {
      "name": "Omar",
      "surname": "Khaled",
      "age": 62,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "inprogress",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "650237",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-03T04:00:00.000Z",
    "agentDetails": {
      "agents": [
        "Coda"
      ],
      "agentSuggestion": "ICD-10: R07.9 (Chest pain, unspecified)",
      "coT": "SOAP note: “intermittent retrosternal pressure, ?angina” → ambiguous between R07.9 vs I20.x; low confidence."
    },
    "profile": {
      "name": "David",
      "surname": "Chen",
      "age": 40,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "inprogress",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "718904",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-03T04:33:45.000Z",
    "agentDetails": {
      "agents": [
        "Coda"
      ],
      "agentSuggestion": "ICD-10: M54.5 (Low back pain)",
      "coT": "SOAP note says “lumbar pain after lifting box” → insufficient specificity (acute vs chronic)."
    },
    "profile": {
      "name": "James",
      "surname": "Peterson",
      "age": 64,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "inprogress",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "203589",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-03T05:07:30.000Z",
    "agentDetails": {
      "agents": [
        "Autho"
      ],
      "agentSuggestion": "Payer flagged PA duplication request",
      "coT": "PA already approved but duplicate triggered; agent blocked."
    },
    "profile": {
      "name": "Noor ",
      "surname": "Al Hadi",
      "age": 47,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "inprogress",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "567491",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-03T05:41:15.000Z",
    "agentDetails": {
      "agents": [
        "Coda"
      ],
      "agentSuggestion": "ICD-10: R51.9 (Headache, unspecified)",
      "coT": "SOAP note: “episodic headache, ?migraine” → unclear → flagged for clarification."
    },
    "profile": {
      "name": "Richard",
      "surname": "Collins",
      "age": 54,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "inprogress",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "891034",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-03T06:15:00.000Z",
    "agentDetails": {
      "agents": [
        "Clara"
      ],
      "agentSuggestion": "Missing attending provider signature",
      "coT": "Claim built without digital signature field populated; compliance check blocked."
    },
    "profile": {
      "name": "Amina",
      "surname": "Farouk",
      "age": 41,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "inprogress",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "342657",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-03T06:48:45.000Z",
    "agentDetails": {
      "agents": [
        "Payne"
      ],
      "agentSuggestion": "EFT posted but payer remark code missing",
      "coT": "Funds matched, but no adjustment codes in remit → requires manual reconciliation."
    },
    "profile": {
      "name": "Peter",
      "surname": "Novak",
      "age": 58,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "inprogress",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "970218",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-03T07:22:30.000Z",
    "agentDetails": {
      "agents": [
        "Coda"
      ],
      "agentSuggestion": "ICD-10: J20.9 (Acute bronchitis, unspecified)",
      "coT": "SOAP: “productive cough, no x-ray done” → not clear if pneumonia → flagged precautionary."
    },
    "profile": {
      "name": "Clara",
      "surname": "Jensen",
      "age": 35,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "inprogress",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  },
  {
    "id": "583920",
    "isSubmitted": false,
    "profileCreatedDate": "2025-09-03T07:56:15.000Z",
    "agentDetails": {
      "agents": [
        "Dee"
      ],
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "name": "Hana",
      "surname": "Shafiq",
      "age": 29,
      "emiratesId": "748-1985-2233445-4",
      "sex": "Female",
      "dateOfBirth": "1985-07-21",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 97155467830,
      "email": "Sara.nuaimi@gmail.com",
      "profilePhoto": "/avatar.png"
    },
    "eligibilityCheck": {
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
      "status": "covered",
      "insuranDetials": {
        "insuranceProvider": "Daman-AUH-001",
        "imageUrl": "/insurance-image.png",
        "policyNumber": "42122566"
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
      ]
    },
    "medicalCoding": {
      "isError": false,
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
      "status": "inprogress",
      "details": [
        {
          "label": "Encounter Date",
          "value": "2025-08-30"
        },
        {
          "label": "Encounter Type",
          "value": "Outpatient"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Department",
          "value": "Orthopaedics"
        }
      ]
    },
    "priorAuthorization": {
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
      "isError": false,
      "status": "waiting",
      "details": [
        {
          "label": "Encounter ID",
          "value": "ENC-2025-0789"
        },
        {
          "label": "CPT Code",
          "value": "29880"
        },
        {
          "label": "ICD Code",
          "value": "M23.2"
        },
        {
          "label": "Physician",
          "value": "Dr. Al Shamsi"
        },
        {
          "label": "Prior Auth ID",
          "value": "PA-556677"
        },
        {
          "label": "Drug Codes",
          "value": "NDC-0002"
        }
      ]
    },
    "claimSubmission": {
      "isError": false,
      "status": "waiting",
      "steps": [
        {
          "id": "1",
          "label": "Compliance Check & Adjustment",
          "status": "pending"
        },
        {
          "id": "2",
          "label": "XML File Generated",
          "status": "pending"
        },
        {
          "id": "3",
          "label": "Claim Posted",
          "status": "pending"
        },
        {
          "id": "4",
          "label": "Claim ID Received & Updated",
          "status": "pending"
        }
      ]
    },
    "drugCode": [],
    "denialManagement": {
      "isError": false,
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
      ]
    },
    "postPayment": {
      "isError": false,
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
      ]
    },
    "attachments": [
      {
        "fileName": "SOB.pdf",
        "fileSize": "200 KB",
        "ecgImageUrl": "/sob.pdf"
      },
      {
        "fileName": "Exclusion.pdf",
        "fileSize": "150 KB",
        "ecgImageUrl": "/exclusion.pdf"
      },
      {
        "fileName": "Policy.pdf",
        "fileSize": "180 KB",
        "ecgImageUrl": "/policy.pdf"
      },
      {
        "fileName": "ECG.png",
        "fileSize": "220 KB",
        "ecgImageUrl": "/ecg-report.png"
      }
    ],
    "markdown": "### <u class=\"markdown-heading\">**Subjective**</u>\n\n### **Chief Complaint (CC):**\nPain in the left knee, moderate to severe, lasting for 3 weeks.\n\n### **History of Present Illness (HPI):**\nSara Al Naoumi, a 40-year-old female, presents with left knee pain persisting for the past three weeks. The pain is associated with occasional swelling and stiffness, especially in the mornings. Symptoms worsen with activity such as walking and climbing stairs, limiting daily function.\n### **Review of Systems (ROS):**\n- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.\n- **General**: Negative for fever or weight loss.\n- **Cardiovascular**: Negative for chest pain or palpitations.\n- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.\n\n<br />\n\n## <u class=\"markdown-heading\">**Objective**</u>\n\n### **Vital Signs:**\n- Blood Pressure: 128/82 mmHg  \n- Heart Rate: 72 bpm  \n- Respiratory Rate: 16 breaths per minute  \n- Temperature: 98.6°F\n\n### **Physical Examination:**\n- **Inspection**: Swelling around the left knee; no visible deformity.  \n- **Palpation**: Tenderness over the medial and lateral joint lines.  \n- **Range of Motion**: Reduced flexion and extension due to pain.  \n- **Stability Tests**: Negative Lachman's and McMurray’s tests; slight discomfort with varus and valgus stress tests.\n\n<br />\n\n## <u class=\"markdown-heading\">**Assessment:**</u>\n- Pain in the left knee (ICD-10 code M25.562).\n- Possible exacerbation of pre-existing mild osteoarthritis.\n\n<br />\n\n### <u class=\"markdown-heading\">**Plan:**</u>\n\n### **Treatment:**\n- Initiate physical therapy focusing on strength and flexibility exercises for the left knee.\n- Advise the patient on lifestyle modifications to reduce knee strain.\n- Prescribe over-the-counter NSAIDs as needed for pain management.\n\n### **Follow-up Recommendations:**\n- Schedule a follow-up appointment in 4 weeks to assess the response to the treatment plan.\n\n### **Referrals:**\n- Order X-ray of the left knee to rule out structural abnormalities.\n- Consider MRI if the X-ray is inconclusive to evaluate any potential soft tissue damage.\n \n",
    "icdCodes": [],
    "cptCode": []
  }
]