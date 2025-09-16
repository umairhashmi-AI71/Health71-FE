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
    service: "MRI – Left Knee",
    cptCode: "73721",
    amount: "586",
    status: "Accepted",
    reason: '-',
    suggestion: "-"
  },
  {
    id: 2,
    service: "CT",
    cptCode: "73721",
    amount: "586",
    status: "Recoverable",
    reason: 'Code Mismatched',
    suggestion: "-"
  },
  {
    id: 3,
    service: "CBC (Complete Blood Count)",
    cptCode: "73721",
    amount: "586",
    status: "Recoverable",
    reason: 'Medical Necessity',
    suggestion: "-"
  },
];


