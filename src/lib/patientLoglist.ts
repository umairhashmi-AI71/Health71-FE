import { PatientPersona } from "@/types/patient";

export const patientLogList : PatientPersona[]= [
  {
    "agentDetails": {
      "agents": [
        "Eli"
      ],
      "agentAction": "Move to self-pay invoicing queue. Notify billing team to generate invoice.",
      "currentProcess": "Autho",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Majed",
      "surname": "Al Suwaidi",
      "mrn": 401225,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "401225",
    "profileCreatedDate": "2025-02-09T21:07:30.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Eli"
      ],
      "agentAction": "Await payer decision on inpatient stay extension. If approved → continue coverage; if denied → flag Dee for denial management.",
      "currentProcess": "Autho",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Huda",
      "surname": "Mansoor",
      "mrn": 198307,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "198307",
    "profileCreatedDate": "2025-02-09T21:41:15.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Autho Clara"
      ],
      "agentAction": "Denial flagged for review by Dee.",
      "currentProcess": "Autho",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Rania",
      "surname": "Al Fardan",
      "mrn": 39288984,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "39288984",
    "profileCreatedDate": "2025-09-02T22:22:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Autho"
      ],
      "agentAction": "Underpayment flagged, Payne workflow triggered.",
      "currentProcess": "Autho",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Noora",
      "surname": "Al Hammadi",
      "mrn": 21395783,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "21395783",
    "profileCreatedDate": "2025-09-02T22:59:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Clara Payne Coda"
      ],
      "agentAction": "Underpayment flagged, Payne workflow triggered.",
      "currentProcess": "Payne",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Fatima",
      "surname": "Al Raisi",
      "mrn": 61106263,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "61106263",
    "profileCreatedDate": "2025-09-02T20:54:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Autho Dee Coda"
      ],
      "agentAction": "Underpayment flagged, Payne workflow triggered.",
      "currentProcess": "Dee",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Amira",
      "surname": "Al Mehairi",
      "mrn": 66812897,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "66812897",
    "profileCreatedDate": "2025-09-02T21:46:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Autho Eli"
      ],
      "agentAction": "Resubmission successful, awaiting ERA.",
      "currentProcess": "Autho",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Layla",
      "surname": "Al Ameri",
      "mrn": 87892718,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "87892718",
    "profileCreatedDate": "2025-09-02T23:44:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Payne"
      ],
      "agentAction": "Denial flagged for review by Dee.",
      "currentProcess": "Payne",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Majed",
      "surname": "Al Mehairi",
      "mrn": 7170020,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "7170020",
    "profileCreatedDate": "2025-09-02T22:18:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Dee Coda"
      ],
      "agentAction": "Underpayment flagged, Payne workflow triggered.",
      "currentProcess": "Coda",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Rania",
      "surname": "Al Mansoori",
      "mrn": 72226834,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "72226834",
    "profileCreatedDate": "2025-09-02T23:28:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Coda"
      ],
      "agentAction": "Eligibility confirmed, ready for Autho step.",
      "currentProcess": "Coda",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Sara",
      "surname": "Al Raisi",
      "mrn": 41293509,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "41293509",
    "profileCreatedDate": "2025-09-02T23:45:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Eli Autho Coda"
      ],
      "agentAction": "Await payer response for adjudication.",
      "currentProcess": "Coda",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Lina",
      "surname": "Al Suwaidi",
      "mrn": 3866112,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "3866112",
    "profileCreatedDate": "2025-09-02T22:28:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Payne Coda"
      ],
      "agentAction": "Resubmission successful, awaiting ERA.",
      "currentProcess": "Payne",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Zahra",
      "surname": "Al Nahyan",
      "mrn": 176075,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "176075",
    "profileCreatedDate": "2025-09-02T22:15:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Eli Clara"
      ],
      "agentAction": "Resubmission successful, awaiting ERA.",
      "currentProcess": "Clara",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Noora",
      "surname": "Al Mansoori",
      "mrn": 62475108,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "62475108",
    "profileCreatedDate": "2025-09-02T20:04:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Eli Coda"
      ],
      "agentAction": "Eligibility confirmed, ready for Autho step.",
      "currentProcess": "Eli",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Mohammed",
      "surname": "Al Raisi",
      "mrn": 33059509,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "33059509",
    "profileCreatedDate": "2025-09-02T21:55:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Payne Coda Eli"
      ],
      "agentAction": "Denial flagged for review by Dee.",
      "currentProcess": "Coda",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Aisha",
      "surname": "Mansoor",
      "mrn": 65357908,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "65357908",
    "profileCreatedDate": "2025-09-02T21:59:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Autho Coda"
      ],
      "agentAction": "Await payer response for adjudication.",
      "currentProcess": "Autho",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Omar",
      "surname": "Al Hashmi",
      "mrn": 52860454,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "52860454",
    "profileCreatedDate": "2025-09-02T22:59:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Autho Payne"
      ],
      "agentAction": "Clara monitoring clearinghouse ACK.",
      "currentProcess": "Payne",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Sami",
      "surname": "Al Mehairi",
      "mrn": 59825421,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "59825421",
    "profileCreatedDate": "2025-09-02T22:24:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Dee Coda"
      ],
      "agentAction": "Denial flagged for review by Dee.",
      "currentProcess": "Dee",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Fahad",
      "surname": "Al Shamsi",
      "mrn": 62654042,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "62654042",
    "profileCreatedDate": "2025-09-02T23:42:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Clara Payne Eli"
      ],
      "agentAction": "Underpayment flagged, Payne workflow triggered.",
      "currentProcess": "Clara",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Amira",
      "surname": "Al Raisi",
      "mrn": 3075154,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "3075154",
    "profileCreatedDate": "2025-09-02T23:54:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Autho Clara Coda"
      ],
      "agentAction": "PA request sent, waiting for approval.",
      "currentProcess": "Coda",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Huda",
      "surname": "Mansoor",
      "mrn": 78931723,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "78931723",
    "profileCreatedDate": "2025-09-02T20:48:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Coda"
      ],
      "agentAction": "PA request sent, waiting for approval.",
      "currentProcess": "Coda",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Leila",
      "surname": "Al Raisi",
      "mrn": 5442584,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "5442584",
    "profileCreatedDate": "2025-09-02T20:28:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Autho Coda Dee"
      ],
      "agentAction": "Eligibility confirmed, ready for Autho step.",
      "currentProcess": "Coda",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Leila",
      "surname": "Al Hashmi",
      "mrn": 11328656,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "11328656",
    "profileCreatedDate": "2025-09-02T20:55:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Clara"
      ],
      "agentAction": "Resubmission successful, awaiting ERA.",
      "currentProcess": "Clara",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Zahra",
      "surname": "Al Falasi",
      "mrn": 39826416,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "39826416",
    "profileCreatedDate": "2025-09-02T22:21:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Coda Dee"
      ],
      "agentAction": "Coding validated, Coda marked as clean.",
      "currentProcess": "Coda",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Mohammed",
      "surname": "Al Hammadi",
      "mrn": 4658978,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "4658978",
    "profileCreatedDate": "2025-09-02T21:50:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Clara Payne Autho"
      ],
      "agentAction": "Denial flagged for review by Dee.",
      "currentProcess": "Clara",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Yusuf",
      "surname": "Al Zaabi",
      "mrn": 56986522,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "56986522",
    "profileCreatedDate": "2025-09-02T22:54:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Eli Payne"
      ],
      "agentAction": "Clara monitoring clearinghouse ACK.",
      "currentProcess": "Eli",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Lina",
      "surname": "Al Mansoori",
      "mrn": 35871731,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "35871731",
    "profileCreatedDate": "2025-09-02T23:00:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Autho Coda Clara"
      ],
      "agentAction": "PA request sent, waiting for approval.",
      "currentProcess": "Coda",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Layla",
      "surname": "Mansoor",
      "mrn": 42127952,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "42127952",
    "profileCreatedDate": "2025-09-02T20:16:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Eli Coda Dee"
      ],
      "agentAction": "PA request sent, waiting for approval.",
      "currentProcess": "Eli",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Noora",
      "surname": "Al Mansoori",
      "mrn": 69896581,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "69896581",
    "profileCreatedDate": "2025-09-02T22:25:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Autho Clara Payne"
      ],
      "agentAction": "Await payer response for adjudication.",
      "currentProcess": "Payne",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Lina",
      "surname": "Al Nahyan",
      "mrn": 1923701,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "1923701",
    "profileCreatedDate": "2025-09-02T20:32:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Coda Dee"
      ],
      "agentAction": "Resubmission successful, awaiting ERA.",
      "currentProcess": "Dee",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Huda",
      "surname": "Al Hammadi",
      "mrn": 3758288,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "3758288",
    "profileCreatedDate": "2025-09-02T20:38:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Eli Clara Autho"
      ],
      "agentAction": "Coding validated, Coda marked as clean.",
      "currentProcess": "Clara",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Leila",
      "surname": "Al Mazrouei",
      "mrn": 17237681,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "17237681",
    "profileCreatedDate": "2025-09-02T22:21:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Coda"
      ],
      "agentAction": "PA request sent, waiting for approval.",
      "currentProcess": "Coda",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Rania",
      "surname": "Al Mehairi",
      "mrn": 38779233,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "38779233",
    "profileCreatedDate": "2025-09-02T20:26:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Clara Autho"
      ],
      "agentAction": "PA request sent, waiting for approval.",
      "currentProcess": "Clara",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Leila",
      "surname": "Al Nuaimi",
      "mrn": 77650597,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "77650597",
    "profileCreatedDate": "2025-09-02T20:28:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Autho"
      ],
      "agentAction": "Eligibility confirmed, ready for Autho step.",
      "currentProcess": "Autho",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Mariam",
      "surname": "Al Zaabi",
      "mrn": 12698784,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "12698784",
    "profileCreatedDate": "2025-09-02T21:33:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Payne"
      ],
      "agentAction": "Resubmission successful, awaiting ERA.",
      "currentProcess": "Payne",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Huda",
      "surname": "Al Fardan",
      "mrn": 8058404,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "8058404",
    "profileCreatedDate": "2025-09-02T21:53:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Clara Eli"
      ],
      "agentAction": "Await payer response for adjudication.",
      "currentProcess": "Clara",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Sara",
      "surname": "Al Mazrouei",
      "mrn": 37623819,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "37623819",
    "profileCreatedDate": "2025-09-02T21:36:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Clara"
      ],
      "agentAction": "PA request sent, waiting for approval.",
      "currentProcess": "Clara",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Layla",
      "surname": "Al Suwaidi",
      "mrn": 69182014,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "69182014",
    "profileCreatedDate": "2025-09-02T22:02:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Eli Payne Autho"
      ],
      "agentAction": "Clara monitoring clearinghouse ACK.",
      "currentProcess": "Autho",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Hassan",
      "surname": "Al Zaabi",
      "mrn": 99230688,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "99230688",
    "profileCreatedDate": "2025-09-02T21:37:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Dee"
      ],
      "agentAction": "Denial flagged for review by Dee.",
      "currentProcess": "Dee",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Sara",
      "surname": "Al Hashmi",
      "mrn": 24086785,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "24086785",
    "profileCreatedDate": "2025-09-02T21:40:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Dee Eli Coda"
      ],
      "agentAction": "Coding validated, Coda marked as clean.",
      "currentProcess": "Eli",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Zahra",
      "surname": "Al Hammadi",
      "mrn": 93498001,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "93498001",
    "profileCreatedDate": "2025-09-02T21:33:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Dee Clara Payne"
      ],
      "agentAction": "Denial flagged for review by Dee.",
      "currentProcess": "Dee",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Yusuf",
      "surname": "Al Falasi",
      "mrn": 42973930,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "42973930",
    "profileCreatedDate": "2025-09-02T20:12:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Autho Dee"
      ],
      "agentAction": "Resubmission successful, awaiting ERA.",
      "currentProcess": "Dee",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Amira",
      "surname": "Al Ameri",
      "mrn": 57350915,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "57350915",
    "profileCreatedDate": "2025-09-02T22:28:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Eli Dee"
      ],
      "agentAction": "PA request sent, waiting for approval.",
      "currentProcess": "Dee",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Aisha",
      "surname": "Al Shamsi",
      "mrn": 28657527,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "28657527",
    "profileCreatedDate": "2025-09-02T21:45:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Eli"
      ],
      "agentAction": "Coding validated, Coda marked as clean.",
      "currentProcess": "Eli",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Layla",
      "surname": "Al Shamsi",
      "mrn": 84201164,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "84201164",
    "profileCreatedDate": "2025-09-02T21:14:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Clara"
      ],
      "agentAction": "Await payer response for adjudication.",
      "currentProcess": "Clara",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Mariam",
      "surname": "Al Zaabi",
      "mrn": 84900901,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "84900901",
    "profileCreatedDate": "2025-09-02T23:33:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Eli Autho"
      ],
      "agentAction": "Coding validated, Coda marked as clean.",
      "currentProcess": "Eli",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Huda",
      "surname": "Al Mansoori",
      "mrn": 29182497,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "29182497",
    "profileCreatedDate": "2025-09-02T20:04:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Clara Eli Payne"
      ],
      "agentAction": "Denial flagged for review by Dee.",
      "currentProcess": "Clara",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Mohammed",
      "surname": "Al Qassimi",
      "mrn": 26716164,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "26716164",
    "profileCreatedDate": "2025-09-02T22:03:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Autho Payne"
      ],
      "agentAction": "Resubmission successful, awaiting ERA.",
      "currentProcess": "Payne",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Noora",
      "surname": "Al Kaabi",
      "mrn": 96845776,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "96845776",
    "profileCreatedDate": "2025-09-02T20:48:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Eli Coda Dee"
      ],
      "agentAction": "PA request sent, waiting for approval.",
      "currentProcess": "Coda",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Leila",
      "surname": "Al Nahyan",
      "mrn": 68114804,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "68114804",
    "profileCreatedDate": "2025-09-02T20:57:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Payne"
      ],
      "agentAction": "PA request sent, waiting for approval.",
      "currentProcess": "Payne",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Noora",
      "surname": "Mansoor",
      "mrn": 4326117,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "4326117",
    "profileCreatedDate": "2025-09-02T23:13:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Coda Autho Dee"
      ],
      "agentAction": "PA request sent, waiting for approval.",
      "currentProcess": "Autho",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Mariam",
      "surname": "Bin Khalid",
      "mrn": 50863469,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "50863469",
    "profileCreatedDate": "2025-09-02T21:04:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Eli Payne Coda"
      ],
      "agentAction": "Underpayment flagged, Payne workflow triggered.",
      "currentProcess": "Eli",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Huda",
      "surname": "Mansoor",
      "mrn": 95722535,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "95722535",
    "profileCreatedDate": "2025-09-02T20:19:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Autho"
      ],
      "agentAction": "Underpayment flagged, Payne workflow triggered.",
      "currentProcess": "Autho",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Rania",
      "surname": "Yusuf",
      "mrn": 81559429,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "81559429",
    "profileCreatedDate": "2025-09-02T22:41:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Coda Clara Autho"
      ],
      "agentAction": "Coding validated, Coda marked as clean.",
      "currentProcess": "Autho",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Aisha",
      "surname": "Al Mehairi",
      "mrn": 77927686,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "77927686",
    "profileCreatedDate": "2025-09-02T20:48:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Coda Autho Clara"
      ],
      "agentAction": "PA request sent, waiting for approval.",
      "currentProcess": "Clara",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Aisha",
      "surname": "Mansoor",
      "mrn": 50338134,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "50338134",
    "profileCreatedDate": "2025-09-02T22:54:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Autho Dee"
      ],
      "agentAction": "Resubmission successful, awaiting ERA.",
      "currentProcess": "Dee",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Mohammed",
      "surname": "Al Fardan",
      "mrn": 66302955,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "66302955",
    "profileCreatedDate": "2025-09-02T22:37:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Payne"
      ],
      "agentAction": "Clara monitoring clearinghouse ACK.",
      "currentProcess": "Payne",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Noora",
      "surname": "Al Kaabi",
      "mrn": 34935586,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "34935586",
    "profileCreatedDate": "2025-09-02T20:35:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Clara Autho Eli"
      ],
      "agentAction": "Resubmission successful, awaiting ERA.",
      "currentProcess": "Eli",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Sami",
      "surname": "Al Hashmi",
      "mrn": 13207190,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "13207190",
    "profileCreatedDate": "2025-09-02T21:34:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Payne Eli"
      ],
      "agentAction": "Coding validated, Coda marked as clean.",
      "currentProcess": "Payne",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Zahra",
      "surname": "Al Mazrouei",
      "mrn": 96639554,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "96639554",
    "profileCreatedDate": "2025-09-02T22:15:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Payne Autho Dee"
      ],
      "agentAction": "Eligibility confirmed, ready for Autho step.",
      "currentProcess": "Payne",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Majed",
      "surname": "Al Mazrouei",
      "mrn": 14344095,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "14344095",
    "profileCreatedDate": "2025-09-02T20:04:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Payne Coda Autho"
      ],
      "agentAction": "Denial flagged for review by Dee.",
      "currentProcess": "Autho",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Omar",
      "surname": "Al Hashmi",
      "mrn": 68786091,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "68786091",
    "profileCreatedDate": "2025-09-02T22:47:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Clara"
      ],
      "agentAction": "Await payer response for adjudication.",
      "currentProcess": "Clara",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Hassan",
      "surname": "Al Mansoori",
      "mrn": 9377923,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "9377923",
    "profileCreatedDate": "2025-09-02T20:39:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Eli Coda"
      ],
      "agentAction": "PA request sent, waiting for approval.",
      "currentProcess": "Eli",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Layla",
      "surname": "Al Mansoori",
      "mrn": 11816995,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "11816995",
    "profileCreatedDate": "2025-09-02T23:44:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Autho Eli"
      ],
      "agentAction": "Coding validated, Coda marked as clean.",
      "currentProcess": "Eli",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Rania",
      "surname": "Al Shamsi",
      "mrn": 10218522,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "10218522",
    "profileCreatedDate": "2025-09-02T21:49:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Coda"
      ],
      "agentAction": "Await payer response for adjudication.",
      "currentProcess": "Coda",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Leila",
      "surname": "Al Nuaimi",
      "mrn": 54959193,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "54959193",
    "profileCreatedDate": "2025-09-02T21:29:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Payne Dee"
      ],
      "agentAction": "Coding validated, Coda marked as clean.",
      "currentProcess": "Dee",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Huda",
      "surname": "Al Shamsi",
      "mrn": 83945191,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "83945191",
    "profileCreatedDate": "2025-09-02T21:59:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Eli"
      ],
      "agentAction": "Underpayment flagged, Payne workflow triggered.",
      "currentProcess": "Eli",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Omar",
      "surname": "Bin Khalid",
      "mrn": 20143968,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "20143968",
    "profileCreatedDate": "2025-09-02T23:35:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Coda Payne Dee"
      ],
      "agentAction": "Resubmission successful, awaiting ERA.",
      "currentProcess": "Payne",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Mohammed",
      "surname": "Al Suwaidi",
      "mrn": 86745315,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "86745315",
    "profileCreatedDate": "2025-09-02T23:39:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Payne Dee"
      ],
      "agentAction": "Coding validated, Coda marked as clean.",
      "currentProcess": "Dee",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Sara",
      "surname": "Yusuf",
      "mrn": 94826589,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "94826589",
    "profileCreatedDate": "2025-09-02T23:00:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Clara Eli"
      ],
      "agentAction": "Coding validated, Coda marked as clean.",
      "currentProcess": "Eli",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Sara",
      "surname": "Al Kaabi",
      "mrn": 17942120,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "17942120",
    "profileCreatedDate": "2025-09-02T22:03:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Eli Clara"
      ],
      "agentAction": "Eligibility confirmed, ready for Autho step.",
      "currentProcess": "Clara",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Huda",
      "surname": "Al Ameri",
      "mrn": 54591200,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "54591200",
    "profileCreatedDate": "2025-09-02T21:11:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Payne"
      ],
      "agentAction": "PA request sent, waiting for approval.",
      "currentProcess": "Payne",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Sami",
      "surname": "Al Suwaidi",
      "mrn": 17946499,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "17946499",
    "profileCreatedDate": "2025-09-02T21:53:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Eli Autho"
      ],
      "agentAction": "PA request sent, waiting for approval.",
      "currentProcess": "Eli",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Layla",
      "surname": "Al Mazrouei",
      "mrn": 97100524,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "97100524",
    "profileCreatedDate": "2025-09-02T22:45:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Coda Autho"
      ],
      "agentAction": "Eligibility confirmed, ready for Autho step.",
      "currentProcess": "Coda",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Leila",
      "surname": "Al Hashmi",
      "mrn": 69550365,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "69550365",
    "profileCreatedDate": "2025-09-02T22:00:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Clara Payne"
      ],
      "agentAction": "Await payer response for adjudication.",
      "currentProcess": "Clara",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Noora",
      "surname": "Al Mazrouei",
      "mrn": 87241966,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "87241966",
    "profileCreatedDate": "2025-09-02T23:46:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Coda Autho Eli"
      ],
      "agentAction": "PA request sent, waiting for approval.",
      "currentProcess": "Eli",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Yusuf",
      "surname": "Al Shamsi",
      "mrn": 13330003,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "13330003",
    "profileCreatedDate": "2025-09-02T21:49:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Autho Clara"
      ],
      "agentAction": "Coding validated, Coda marked as clean.",
      "currentProcess": "Autho",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Lina",
      "surname": "Al Hashmi",
      "mrn": 83687501,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "83687501",
    "profileCreatedDate": "2025-09-02T20:23:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Clara Dee Coda"
      ],
      "agentAction": "Coding validated, Coda marked as clean.",
      "currentProcess": "Coda",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Sami",
      "surname": "Al Mansoori",
      "mrn": 75937788,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "75937788",
    "profileCreatedDate": "2025-09-02T20:57:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Clara Autho Dee"
      ],
      "agentAction": "Eligibility confirmed, ready for Autho step.",
      "currentProcess": "Dee",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Leila",
      "surname": "Al Hashmi",
      "mrn": 44120299,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "44120299",
    "profileCreatedDate": "2025-09-02T23:17:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Dee"
      ],
      "agentAction": "Eligibility confirmed, ready for Autho step.",
      "currentProcess": "Dee",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Fatima",
      "surname": "Al Fardan",
      "mrn": 48012279,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "48012279",
    "profileCreatedDate": "2025-09-02T21:23:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Payne Dee Autho"
      ],
      "agentAction": "Eligibility confirmed, ready for Autho step.",
      "currentProcess": "Payne",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Khalid",
      "surname": "Al Suwaidi",
      "mrn": 50447485,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "50447485",
    "profileCreatedDate": "2025-09-02T22:47:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Dee Clara Coda"
      ],
      "agentAction": "Coding validated, Coda marked as clean.",
      "currentProcess": "Coda",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Layla",
      "surname": "Al Kaabi",
      "mrn": 70702458,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "70702458",
    "profileCreatedDate": "2025-09-02T21:56:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Eli Clara Payne"
      ],
      "agentAction": "Coding validated, Coda marked as clean.",
      "currentProcess": "Clara",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Rania",
      "surname": "Al Mazrouei",
      "mrn": 78966800,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "78966800",
    "profileCreatedDate": "2025-09-02T21:14:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Autho"
      ],
      "agentAction": "Coding validated, Coda marked as clean.",
      "currentProcess": "Autho",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Mohammed",
      "surname": "Yusuf",
      "mrn": 14389916,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "14389916",
    "profileCreatedDate": "2025-09-02T20:10:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Clara Dee"
      ],
      "agentAction": "Denial flagged for review by Dee.",
      "currentProcess": "Clara",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Sara",
      "surname": "Al Hosani",
      "mrn": 71952274,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "71952274",
    "profileCreatedDate": "2025-09-02T20:44:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Eli Clara"
      ],
      "agentAction": "Clara monitoring clearinghouse ACK.",
      "currentProcess": "Clara",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Mohammed",
      "surname": "Al Nahyan",
      "mrn": 36026053,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "36026053",
    "profileCreatedDate": "2025-09-02T23:48:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Payne Coda Clara"
      ],
      "agentAction": "Coding validated, Coda marked as clean.",
      "currentProcess": "Payne",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Zahra",
      "surname": "Al Qassimi",
      "mrn": 79791613,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "79791613",
    "profileCreatedDate": "2025-09-02T22:00:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Eli Autho"
      ],
      "agentAction": "Underpayment flagged, Payne workflow triggered.",
      "currentProcess": "Eli",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Sara",
      "surname": "Al Mansoori",
      "mrn": 51378210,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "51378210",
    "profileCreatedDate": "2025-09-02T20:39:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Dee Clara"
      ],
      "agentAction": "Await payer response for adjudication.",
      "currentProcess": "Clara",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Omar",
      "surname": "Al Mehairi",
      "mrn": 49951558,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "49951558",
    "profileCreatedDate": "2025-09-02T21:00:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Dee Clara"
      ],
      "agentAction": "Underpayment flagged, Payne workflow triggered.",
      "currentProcess": "Clara",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Layla",
      "surname": "Al Hosani",
      "mrn": 28369757,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "28369757",
    "profileCreatedDate": "2025-09-02T21:49:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Autho Coda"
      ],
      "agentAction": "Clara monitoring clearinghouse ACK.",
      "currentProcess": "Coda",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Sara",
      "surname": "Mansoor",
      "mrn": 43045347,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "43045347",
    "profileCreatedDate": "2025-09-02T20:54:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Dee Clara"
      ],
      "agentAction": "Await payer response for adjudication.",
      "currentProcess": "Clara",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Huda",
      "surname": "Al Hosani",
      "mrn": 46225448,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "46225448",
    "profileCreatedDate": "2025-09-02T23:10:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Payne Coda"
      ],
      "agentAction": "Await payer response for adjudication.",
      "currentProcess": "Coda",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Mohammed",
      "surname": "Al Raisi",
      "mrn": 49723408,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "49723408",
    "profileCreatedDate": "2025-09-02T21:27:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Autho"
      ],
      "agentAction": "Coding validated, Coda marked as clean.",
      "currentProcess": "Autho",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Yusuf",
      "surname": "Al Qassimi",
      "mrn": 5628626,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "5628626",
    "profileCreatedDate": "2025-09-02T22:11:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Payne Clara"
      ],
      "agentAction": "Denial flagged for review by Dee.",
      "currentProcess": "Clara",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Sami",
      "surname": "Al Raisi",
      "mrn": 86390250,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "86390250",
    "profileCreatedDate": "2025-09-02T20:06:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Coda Payne"
      ],
      "agentAction": "Underpayment flagged, Payne workflow triggered.",
      "currentProcess": "Coda",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Lina",
      "surname": "Al Nahyan",
      "mrn": 69878490,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "69878490",
    "profileCreatedDate": "2025-09-02T21:27:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Clara"
      ],
      "agentAction": "Underpayment flagged, Payne workflow triggered.",
      "currentProcess": "Clara",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Yusuf",
      "surname": "Al Hosani",
      "mrn": 57551663,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "57551663",
    "profileCreatedDate": "2025-09-02T23:48:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Autho"
      ],
      "agentAction": "Denial flagged for review by Dee.",
      "currentProcess": "Autho",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Aisha",
      "surname": "Al Nuaimi",
      "mrn": 55891952,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "55891952",
    "profileCreatedDate": "2025-09-02T21:39:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Eli Coda Autho"
      ],
      "agentAction": "Resubmission successful, awaiting ERA.",
      "currentProcess": "Coda",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Fahad",
      "surname": "Al Hammadi",
      "mrn": 5732699,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "5732699",
    "profileCreatedDate": "2025-09-02T23:39:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Coda Eli"
      ],
      "agentAction": "PA request sent, waiting for approval.",
      "currentProcess": "Coda",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Sami",
      "surname": "Al Nahyan",
      "mrn": 60635202,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "60635202",
    "profileCreatedDate": "2025-09-02T23:51:59.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Payne"
      ],
      "agentAction": "PA request sent, waiting for approval.",
      "currentProcess": "Payne",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Khalid",
      "surname": "Al Mazrouei",
      "mrn": 30886564,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "30886564",
    "profileCreatedDate": "2025-09-02T22:15:00.000Z"
  },
  {
    "agentDetails": {
      "agents": [
        "Autho"
      ],
      "agentAction": "Underpayment flagged, Payne workflow triggered.",
      "currentProcess": "Autho",
      "agentSuggestion": "Payer denial: duplicate lab test billed",
      "coT": "Two labs billed within 24h; agent cannot auto-resolve → flagged for review."
    },
    "profile": {
      "profilePhoto": "/2.png",
      "age": 39,
      "name": "Omar",
      "surname": "Al Suwaidi",
      "mrn": 45287727,
      "eid": "784-1990-1234567-3",
      "emiratesId": "784-1990-1234567-3",
      "sex": "Female",
      "dob": 32947,
      "dateOfBirth": "1990-03-15",
      "nationality": "UAE",
      "language": "Arabic",
      "phoneNumber": 971501234567,
      "email": "layla.alfardan@example.com"
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
          "status": "pending"
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
      "isError": false
    },
    "medicalCoding": {
      "status": "waiting",
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
      "isError": false
    },
    "priorAuthorization": {
      "status": "waiting",
      "details": [],
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
      "isError": false
    },
    "claimSubmission": {
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
      ],
      "claimAttempts": [],
      "isError": false
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
      "denialAttempts": [],
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
      "isError": false
    },
    "attachments": [],
    "isSubmitted": true,
    "id": "45287727",
    "profileCreatedDate": "2025-09-02T23:39:59.000Z"
  }
]