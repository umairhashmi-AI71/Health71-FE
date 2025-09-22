import { ErrorType } from "@/types/error";
import { StatusType } from "@/types/patient";

interface StatusConfig {
  text: string;
  className: string;
}

export const getStatusConfig = (status: StatusType): StatusConfig => {
  switch (status) {
    case "approved":
      return {
        text: "Approved",
        className: "bg-primary-foreground text-green",
      };
      case "valid":
      return {
        text: "Valid",
        className: "bg-primary-foreground text-green",
      };
    case "notinvoked":
        return {
        text: "Not Invoked",
        className: "bg-white border border-gray-200",
      };
    case "submitted":
      return {
        text: "Submitted",
        className: "bg-primary-foreground text-green",
      };
    case "covered":
      return {
        text: "Covered",
        className: "bg-primary-foreground text-green",
      };
    case "done":
      return {
        text: "Done",
        className: "bg-primary-foreground text-green",
      };
    case "inprogress":
      return {
        text: "In Process",
        className: "bg-base-agent-10 text-pixel-bloom",
      };
    case "denied":
      return {
        text: "Denied",
        className: "bg-base-agent-10 text-pixel-bloom",
      };
    case "pending":
      return {
        text: "Pending",
        className: "bg-warm-gray text-white",
      };
       case "notvalid":
      return {
        text: "Not Valid",
        className: "bg-base-agent-10 text-pixel-bloom",
      };
    case "paused":
      return {
        text: "Paused",
        className: "bg-warm-gray text-white",
      };
    case "waiting":
      return {
        text: "Waiting",
        className: "bg-warm-gray text-white",
      };
    case "rejected":
      return {
        text: "Rejected",
        className: "bg-base-agent-10 text-pixel-bloom",
      };
    default:
      // TypeScript will catch if we add new status types without handling them
      const exhaustiveCheck = status;
      return {
        text: status,
        className: "bg-warm-gray text-white",
      };
  }
};



export const claimReconsiderationMarkdown = `**Date:** 2025-10-20  
**Payer:** Daman – AUH-001  
**Reference #:** 42122566  

**To:** Medical Claims Review Department  
**From:** GluCare Health – Billing Department  

## **Subject: Request for Payment Reconsideration** – Claim ID: 1014891283
Dear Claims Review Team,
I am writing to request reconsideration of payment for the above referenced claim, which was underpaid by 100 AED.  


## Claim Details
- **Patient Name:** Sara Al Nuaimi  
- **Date of Service:** 2025-07-21  
- **Encounter ID:** ENC-2025-0789  
- **Prior Authorization:** PA-556677 (Approved)  
- **Billed CPT Code:** 29880 – Knee Arthroscopy  
- **Billed Amount:** 500 AED  
- **Paid Amount:** 400 AED  
- **Underpayment Amount:** 100 AED  


## **Reason for Reconsideration**
Our review indicates that the payment does not match the contracted reimbursement rate for CPT 29880 under the current fee schedule. Prior authorization for this procedure was approved, and no denial codes indicating a benefit exclusion or patient responsibility apply.  


## **Request**
We kindly request that you:  
- Reprocess this claim at the correct contracted rate, and  
- Issue an adjusted payment of 100 AED.  


## **Attachments**
- Original Claim Form  
- Explanation of Benefits (EOB)  
- Prior Authorization Approval  
- Fee Schedule Excerpt (if required)  


Thank you for your prompt review of this matter. Please feel free to contact us should you require any additional documentation.  

Best regards,  
**Billing Department**  
GluCare Health  
📧 billing@glucare.health  
📞 +971-XXX-XXX-XXX  
`

export const refundLettermarkdown = `**Date:** 2025-10-20  
**Payer:** Daman – AUH-001  
**Reference #:** 42122566  

**To:** Finance / Overpayment Recovery Department  
**From:** GluCare Health – Billing Department  

### Subject: Refund of Overpayment – Claim ID: 1014891283  

Dear Finance Team,  

Please find below the details of an overpayment identified during our payment reconciliation:  

- **Patient Name:** Sara Al Nuaimi  
- **Date of Service:** 2025-07-21  
- **CPT Code:** 73721 – MRI, Left Knee  
- **Billed Amount:** 586 AED  
- **Paid Amount:** 1172 AED  
- **Overpayment Amount:** +586 AED  

We are processing a refund for the above amount and request confirmation of receipt once applied.  

Thank you for your attention to this matter. Please let us know if further documentation is required.  

Best regards,  
**Billing Department**  
GluCare Health  
📧 billing@glucare.health  
📞 +971-XXX-XXX-XXX  
`

import {
  ClaimSubmission,
  DenialManagement,
  EligibilityCheck,
  MedicalCoding,
  PostPayment,
  PriorAuthorization,
} from "@/types/patient";
import { Mail, MessageCircleReply, PhoneCall, Send } from "lucide-react";

export type ValidationData = {
  eligibilityCheck: EligibilityCheck;
  priorAuthorization: PriorAuthorization;
  medicalCoding: MedicalCoding;
  claimSubmission: ClaimSubmission;
  denialManagement: DenialManagement;
  postPayment: PostPayment;
};

export interface ReturnValue {
    isError: boolean;
    errorDetails? :{
        errorType: ErrorType,
      }
    step: string
}
 
export  const checkHealthWorkflowErrors = (data : ValidationData) : ReturnValue => {

    const workflowOrder = [
      "eligibilityCheck",
      "priorAuthorization",
      "medicalCoding",
      "claimSubmission",
      "denialManagement",
      "postPayment",
    ] as const;

    for (const step of workflowOrder) {
      const { isError, errorDetails } = data[step];

      if (isError) {
        return ({isError, errorDetails, step});
      }
    }

    return {isError: false, step : 'none'}; // No errors found
  };


  export interface WriteofcolumnType  {
    id: number,
    service: string,
    cptCode: string,
    amount:number,
    status: string,
    rejectionReason:string,
    isAccepted: boolean
  }


  

export const writeofcolumn : WriteofcolumnType[]= [
  {
    id: 1,
    service: "MRI of a lower extremity joint (hip, knee, ankle, etc.) without contrast",
    cptCode: "73721",
    amount: 586,
    status: "Accepted",
    rejectionReason: "-",
    isAccepted: true
    
  },
  {
    id: 2,
    service: "CT Scan, Head/Brain, Without Contrast",
    cptCode: "70450",
    amount: 586,
    status: "Denied",
    rejectionReason: "Insufficient documentation for necessity (resolved)",
    isAccepted: false
    
  },
  {
    id: 3,
    service: "MRI of a lower extremity joint (hip, knee, ankle, etc.) without contrast",
    cptCode: "73721",
    amount: 586,
    status: "Accepted",
    rejectionReason: "-",
    isAccepted: true

    
  },
  {
    id: 4,
    service: "Complete Blood Count (CBC), automated, without differential",
    cptCode: "85027",
    amount: 291,
    status: "Denied",
    rejectionReason: "Insufficient documentation for necessity",
    isAccepted: false

    
  },
  {
    id: 5,
    service: "Established patient, low to moderate complexity, 20–29 minutes (typical)",
    cptCode: "99213",
    amount: 291,
    status: "Denied",
    rejectionReason: "Insufficient documentation for necessity",
        isAccepted: false

    
  },
];



export const contactMethods = [
  {
    id: 'whatsapp',
    label: 'Whatsapp',
    value: '+97158567532',
    icon: <MessageCircleReply className="text-2xl" />,
  },
  {
    id: 'email',
    label: 'Email',
    value: 'faezeh.raasai@gmail.com',
    icon: <Mail className="text-2xl text-gray-600" />,
  },
  {
    id: 'phone',
    label: 'Phone Call',
    value: '058567532',
    icon: <PhoneCall className="text-2xl text-gray-600" />,
  },
]; 