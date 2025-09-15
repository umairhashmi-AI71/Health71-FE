interface PaymentDetails {
     service: string;
    cptCode: string;
    billed: string;
    paid: string;
    status: string;
    difference: number,
  discription?: string; // note the spelling
  time?: string,
  chanel?:string
  /* ... */
}

export const underPaymentData : PaymentDetails[] = [
  {
    service: "Knee Arthroscopy",
    cptCode: "29880",
    billed: "500",
    paid: "400",
    status: "Underpayment",
    difference: -100,
  },
];


