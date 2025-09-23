export interface PaymentDetailsSchema {
  id?: number,
     service: string;
    cptCode: string;
    billed?: string;
    paid?: string;
    status: string;
    difference?: number,
  discription?: string; // note the spelling
  time?: string,
  amount?:string
  reason?:string
  suggestion?:string
  chanel?:string
  errorMessage? :string;
  errorTitle?:string;
  /* ... */
}

export const underPaymentData : PaymentDetailsSchema[] = [
  {
    service: "Knee Arthroscopy",
    cptCode: "29880",
    billed: "500",
    paid: "400",
    status: "Underpayment",
    difference: -100,
  },
]


export const partialapprovalData : PaymentDetailsSchema[] = [
  {
    id: 1,
    service: "MRI – Right Knee",
    cptCode: "73721",
    amount: "586",
    status: "Accepted",
    reason: '-',
    suggestion: "-"
  },
  {
    id: 2,
    service: "CT Scan",
    cptCode: "70450",
    amount: "586",
    status: "Recoverable",
    reason: 'Code Mismatch',
    suggestion: "Update to 70452 (with contrast) based on clinical context",
    errorMessage: 'Partial approval received. Agent flagged CT code mismatch, retrieved correct CPT from codebook, re-ran medical coding, and resubmitted claim. Claim approved on second round.',
    errorTitle: 'Code Correction'
  },
  {
    id: 3,
    service: "CBC (Complete Blood Count)",
    cptCode: "85027",
    amount: "291 AED",
    status: "Recoverable",
    reason: 'Medical Necessity',
    suggestion: "Attach progress note + lab order and resubmit",
    errorMessage: 'One service denied for medical necessity. Agent is obtaining required documentation.',
    errorTitle: 'Medical Necessity'
  },
];


