import AlertModal from "@/components/AlertModal";
import { changeWriteoffStatus } from "@/store/slice/Writeoff";
import { CheckboxSelectionCallbackParams, ColDef, ICellRendererParams } from "ag-grid-community";
import { Check, Send, SquarePen } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";



export const writeofcolumnDef: ColDef[] = [
  {
    headerName: "",
    field: "select",
    // checkboxSelection: true,
    headerCheckboxSelection: true,
     width: 50,
    pinned: "left",
 checkboxSelection: (params: CheckboxSelectionCallbackParams) => {
    return params.data && params.data.status !== "Accepted";
  },
    // cellRenderer: CustomCheckbox,
  },
  {
    headerName: "Service",
    field: "service",
    flex: 1,
    wrapText: true,
    cellClass: "flex items-center text-sm",
    autoHeight: true,
  },
  {
    headerName: "CPT Code",
    field: "cptCode",
    width: 100,
    cellClass: "flex items-center text-sm",
    autoHeight: true,
  },
  {
    headerName: "Amount (AED)",
    field: "amount",
    width: 140,
    cellClass: "flex items-center text-sm",
    valueFormatter: (params) => `${params.value}`,
    autoHeight: true,
  },
  {
    headerName: "Status",
    field: "status",
    width: 130,
    wrapText: true,
    // cellClass: (params) =>
    //   params.value === "Denied"
    //     ? "text-sm font-medium text-red-600"
    //     : "text-sm text-green-600",
    autoHeight: true,
  },
  {
    headerName: "Rejection Reason",
    field: "rejectionReason",
    width: 350,
    wrapText: true,
    autoHeight: true,
  },
];

export const  appealLetterMarkDown = `
**Date:** September 10, 2025  
**From:**  CityMed Hospital, Al Safa, Dubai, UAE  
**To:**  Claims Appeals Department, NoorCare Insurance, P.O. Box 7755, Dubai, UAE  

**Subject:**  Appeal for Denied Claim – Patient: Leila Al Mansouri, Claim ID: 20250905-L03  

**Dear Appeals Officer,**   

We are writing on behalf of our patient, Leila Al Mansouri, to appeal the denial of Claim ID 20250905-L03 for services rendered on August 15, 2025. The claim was denied citing ""Insufficient documentation / medical necessity.""  

After reviewing both the denial letter and the patient’s clinical documentation, we respectfully request reconsideration for the following reasons:  

###**Medical Necessity:**  
The ordered procedure — MRI of the left knee (CPT 73721) — was medically indicated due to persistent left knee pain, swelling, and limited mobility. Failure to perform this imaging would have delayed diagnosis and appropriate treatment, potentially worsening the patient’s condition.  

###**Supporting Documentation:**  
- Treating physician’s detailed notes (dated August 15, 2025)  
- Orthopaedic referral letter recommending MRI  
- Radiology request form and pre-authorization approval  

We kindly request prompt review and overturning of this denial.  

Sincerely,  
**Dr. Aisha Al Qubaisi**.   
Consultant Orthopaedic Surgeon   
CityMed Hospital

`
 