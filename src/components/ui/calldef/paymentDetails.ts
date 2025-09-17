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
    reason: 'Code mismatch',
    suggestion: "Update to 70452 (with contrast) based on clinical context"
  },
  {
    id: 3,
    service: "CBC (Complete Blood Count)",
    cptCode: "85027",
    amount: "586",
    status: "Accepted",
    reason: '-',
    suggestion: "-"
  },
];


