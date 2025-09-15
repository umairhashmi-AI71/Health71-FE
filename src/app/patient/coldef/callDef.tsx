import AlertModal from "@/components/AlertModal";
import { changeWriteoffStatus } from "@/store/slice/Writeoff";
import { ColDef, ICellRendererParams } from "ag-grid-community";
import { Check, Send, SquarePen } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";



export const writeofcolumnDef: ColDef[] = [
  {
    headerName: "",
    field: "select",
    // checkboxSelection: true,
    headerCheckboxSelection: true,
     checkboxSelection: true,
    width: 50,
    pinned: "left",
 
    // cellRenderer: CustomCheckbox,
  },
  {
    headerName: "Service",
    field: "service",
    flex: 1,
    cellClass: "flex items-center text-sm",
    autoHeight: true,
  },
  {
    headerName: "CPT Code",
    field: "cptCode",
    width: 140,
    cellClass: "flex items-center text-sm",
    autoHeight: true,
  },
  {
    headerName: "Amount (AED)",
    field: "amount",
    width: 160,
    cellClass: "flex items-center text-sm",
    valueFormatter: (params) => `${params.value}`,
    autoHeight: true,
  },
  {
    headerName: "Status",
    field: "status",
    width: 140,
    // cellClass: (params) =>
    //   params.value === "Denied"
    //     ? "text-sm font-medium text-red-600"
    //     : "text-sm text-green-600",
    autoHeight: true,
  },
  {
    headerName: "Denial Code",
    field: "denialCode",
    width: 150,
    cellClass: "flex items-center text-sm ",
    autoHeight: true,
  },
  {
    headerName: "Rejection Reason",
    field: "rejectionReason",
    flex: 1.5,
    wrapText: true,
    autoHeight: true,
  },
];

export const appealLetterMarkDown = `**Date:** September 4, 2025  

**From:** CityCare Hospital, 123 Al Noor Street, Abu Dhabi, UAE  

**To:** Claims Appeals Department, Daman Insurance, P.O. Box 4455, Abu Dhabi, UAE  

**Subject:** Appeal for Denied Claim – Patient: Sarah Johnson, Claim ID: DMN-452871  

**Dear Appeals Officer,**  

I am writing on behalf of Sarah Johnson, insured under **Daman Insurance Policy #DXB-773491**, to formally appeal the denial of Claim ID **DMN-452871**, originally submitted on August 15, 2025, for services rendered on August 3, 2025 at **CityCare Hospital**.  

The claim was denied citing: *“Insufficient documentation for medical necessity.”* After reviewing both the denial letter and the patient’s medical file, we respectfully disagree with this decision.  


### **1. Medical Necessity**
The service in question — **MRI of the left knee (CPT 73721)** — was medically necessary due to the patient’s presenting symptoms of chronic knee pain, swelling, and reduced mobility following a fall. Failure to perform this diagnostic imaging would have delayed appropriate treatment and potentially worsened the patient’s condition.  


### **2. Supporting Documentation**
Enclosed are:  
- The treating physician’s detailed clinical notes dated August 2, 2025.  
- Radiology request form signed by Dr. Khalid Mansour (Orthopedic Specialist).  
- Progress notes documenting failed conservative treatment (NSAIDs, physiotherapy).  


### **3. Coding & Accuracy**
The ICD-10 code submitted (**M25.562 – Pain in left knee**) and the CPT code (**73721 – MRI, knee, without contrast**) are correct and fully aligned with the service performed.  


Given the clinical evidence and supporting documentation, we respectfully request that Daman Insurance reprocess this claim and approve coverage in accordance with policy benefits.  


### **Attachments Included:**
- Letter of Medical Necessity – Dr. Khalid Mansour  
- Clinical Notes & Radiology Request  
- MRI Report  
- Corrected CMS-1500 Claim Form  

<br/>

We appreciate your reconsideration of this appeal and look forward to your favorable response. Should you require additional information, please contact **Maria Lopez, Billing Officer, CityCare Hospital** at **+971-50-123-4567** or **m.lopez@citycare.ae**.  

Sincerely,  
**Maria Lopez**  
Billing & Claims Officer  
CityCare Hospital  
`;
