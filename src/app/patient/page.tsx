"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import ICDCodes from "@/components/ICDCode";
import PatientProfileCard from "@/components/PatientProfileCard";
import HealthcareCard, { ProcessStep } from "@/components/HealthcareCard";
import SOAPNote, { TabType } from "@/components/SOAPNote";
import {
  Microscope,
  NotepadText,
  Paperclip,
  Pill,
  Stethoscope,
} from "lucide-react";
import AttachmentGrid from "./AttachmentGrid";
import AlertModal from "@/components/AlertModal";
import React from "react";
import Breadcrumb from "@/components/Breadcrumb";

export default function DashboardPage() {
  const authorizationData = {
    EncounterID: "ENC-2025-0789",
    "Prior AuthID": "PA-556677",
    Physician: "DR. Al Shamsi",
    "ICD Codes": "M23.2",
    "CPT Codes": "29880",
    "Drug Codes": "NDC-0002",
  };
  const markdown = `## **Subjective**

### **Chief Complaint (CC):**
Pain in the left knee, moderate to severe, lasting for 3 weeks.

### **History of Present Illness (HPI):**
The patient, a 52-year-old Caucasian male named John Smith, presents with complaints of moderate to severe pain in the left knee that has persisted for the past three weeks. The pain is associated with occasional swelling and stiffness, particularly pronounced in the mornings. The symptoms are exacerbated by physical activity and have a significant impact on daily activities, including walking, climbing stairs, and prolonged standing.

### **Review of Systems (ROS):**
- **Musculoskeletal**: Positive for knee pain, swelling, and stiffness.
- **General**: Negative for fever or weight loss.
- **Cardiovascular**: Negative for chest pain or palpitations.
- **Constitutional**: Sleep disruption due to knee pain; otherwise stable.

<br /><br />

## Objective

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

<br /><br />

## **Assessment:**
- <span style="background: #EAF481; padding:8px; margin-bottom:5px; display:inline-block">Pain in the left knee (ICD-10 code M25.562).</span>
- Possible exacerbation of pre-existing mild osteoarthritis.

<br />

### **Plan:**

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

  const attachments = [
    { fileName: "SOB.pdf", fileSize: "200 KB", ecgImageUrl: "/ecg-report.png" },
    {
      fileName: "Exclusion.pdf",
      fileSize: "150 KB",
      ecgImageUrl: "/ecg-report.png",
    },
    {
      fileName: "Scan.pdf",
      fileSize: "180 KB",
      ecgImageUrl: "/ecg-report.png",
    },
    { fileName: "ECG.pdf", fileSize: "220 KB", ecgImageUrl: "/ecg-report.png" },
    {
      fileName: "Fibro_Scan.pdf",
      fileSize: "210 KB",
      ecgImageUrl: "/ecg-report.png",
    },
  ];

  const tabs: TabType[] = [
    {
      id: "soap",
      label: "SOAP Note",
      data: markdown,
      icon: NotepadText,
      className: "text-muted h-200",
    },
    {
      id: "attachments",
      label: "Attachments",
      data: <AttachmentGrid attachments={attachments}  />,
      icon: Paperclip,
    },
  ];

  const icdTabs: TabType[] = [
    {
      id: "icd",
      label: "ICD",
      data: () => (
        <ICDCodes
          title="ICD Codes"
          initialCodes={[
            {
              id: "1",
              code: "M25562",
              confidence: 10,
              isApproved: false,
              desc: "Unilateral primary osteoarthritis affecting the left knee",
            },
          ]}
        />
      ),
      icon: Microscope,
    },
    {
      id: "cpt",
      label: "CPT",
      data: () => (
        <ICDCodes
          title="CPT Codes"
          initialCodes={[
            {
              id: "1",
              code: "M25.562",
              confidence: 100,
              isApproved: false,
              desc: "Pain in left knee",
            },
            {
              id: "2",
              code: "M17.12",
              confidence: 10,
              isApproved: false,
              desc: "Unilateral primary osteoarthritis affecting the left knee",
            },
          ]}
        />
      ),
      icon: Stethoscope,
    },
    {
      id: "drug",
      label: "DRUG",
      data: <ICDCodes title="Drug Codes" initialCodes={[]} />,
      icon: Pill,
    },
  ];

  const claimSteps: ProcessStep[] = [
    { id: "1", label: "Compliance Check & Adjustment", status: "pending" },
    { id: "2", label: "XML File Generated", status: "pending" },
    { id: "3", label: "Claim Posted", status: "pending" },
    { id: "4", label: "Claim ID Received & Updated", status: "pending" },
  ];

  const dentalManagement: ProcessStep[] = [
    { id: "1", label: "Denial Code Analyzed", status: "pending" },
    { id: "2", label: "Suggested Edits", status: "pending" },
    { id: "3", label: "Appeal Generated", status: "pending" },
    { id: "4", label: "Appeal Submitted", status: "pending" },
  ];

  const postPayment: ProcessStep[] = [
    { id: "1", label: "Payment Retrieved", status: "pending" },
    { id: "2", label: "Payment Matched", status: "pending" },
    { id: "3", label: "Adjustments Applied", status: "pending" },
    { id: "4", label: "Ledger Updated", status: "pending" },
  ];

  const eligibilityCheck = {
    Network: "Yes",
    Coverage: "100%",
  };

  const [modal, setModal] = React.useState<string>();
  const buttons = [
    { label: "Cancel", style: "border border-base " },
    { label: "Save", style: "border border-base " },
    { label: "Submit", style: "filled bg-green text-primary-foreground " },
  ];

  return (
    <DashboardLayout>
      <div>
        <main className="p-6">
          <div className="flex justify-between items-center items-start">
            <div>
              <Breadcrumb />
            </div>
            <div className="flex  gap-2 mb-6">
              {buttons.map((data) => (
                <button
                  key={data.label}
                  className={`rounded-xl px-4 py-3 text-sm font-medium text-base-primary ${data.style}`}
                  onClick={() => setModal(data.label.toLowerCase())}
                >
                  {data.label}
                </button>
              ))}
            </div>
          </div>
          <div className=" flex gap-4 mb-6 ">
            <div className="flex-1 max-w-xs">
              <PatientProfileCard
                name="Sara Al Nuaimi"
                id="101300"
                emiratesId="748-1985-2233445-4"
                sex="Female"
                dateOfBirth="1985-07-21"
                nationality="UAE"
                language="Arabic"
                phone="97155467830"
                email="Sara.nuaimi@gmail.com"
                avatarUrl="/avatar.png"
              />
            </div>

            <div className="flex flex-col gap-4 flex-1 max-w-[315px]">
              <HealthcareCard
                title="Eligibility Check"
                status="covered"
                mode="grid"
                gridData={eligibilityCheck}
                isInsuranceInfoCard={true}
                titleGap="mb-3.5"
              />

              <HealthcareCard
                title="Prior Authorization"
                status="approved"
                mode="grid"
                gridData={authorizationData}
                titleGap="mb-5"
              />
            </div>
            <div className="flex flex-col gap-4 flex-1 max-w-[330px]">
              <HealthcareCard
                title="Medical Coding"
                titleGap="mb-7"
                status="inprogress"
                mode="grid"
                gridData={{
                  "Encounter Date": "1985-07-21",
                  "Encounter Type": "Out patient",
                  Physician: "Dr. Al Shamsi",
                  Department: "Orthopaedics",
                }}
              />

              <HealthcareCard
                title="Claim Submission"
                status="pending"
                mode="process"
                processSteps={claimSteps}
                processGap="h-5"
              />
            </div>

            <div className="flex flex-col gap-4 flex-1 max-w-[330px]">
              <HealthcareCard
                title="Denial Management"
                status="pending"
                mode="process"
                processSteps={dentalManagement}
                                titleGap="mb-4.5"

              />
              <HealthcareCard
                title="Post Payment"
                status="pending"
                mode="process"
                processSteps={postPayment}
                titleGap="mb-4"

              />
            </div>
          </div>
          <div className="grid grid-cols-[70%_1fr] gap-4">
            <div>
              <SOAPNote tabs={tabs} defaultActiveTab="soap" />
            </div>
            <div>
              <SOAPNote tabs={icdTabs} defaultActiveTab="icd" />
            </div>
          </div>
        </main>

        {/* Cancel Modal */}
        <AlertModal open={modal === "cancel"} onClose={() => setModal("")}>
          <div>
            <div className="font-semibold text-lg mb-2 text-base-primary">
              Cancel
            </div>
            <div className="text-muted mb-6">
              Are you sure you want to cancel your changes? Any unsaved changes
              will be lost.
            </div>
            <div className="flex justify-end gap-4">
              <button
                className="border rounded-xl px-5 py-2 text-base-primary bg-white"
                onClick={() => setModal("")}
              >
                No
              </button>
              <button
                className="rounded-xl px-5 py-2 text-white bg-base-destructive"
                onClick={() => setModal("")}
              >
                Yes
              </button>
            </div>
          </div>
        </AlertModal>

        {/* Save Modal */}
        <AlertModal open={modal === "save"} onClose={() => setModal("")}>
          <div>
            <div className="font-semibold text-lg mb-2 text-base-primary">
              Save
            </div>
            <div className="text-muted mb-6">
              Are you sure you want to save your changes? This will update your
              record permanently.
            </div>
            <div className="flex justify-end gap-4">
              <button
                className="border rounded-xl px-5 py-2 text-base-primary bg-white"
                onClick={() => setModal("")}
              >
                No
              </button>
              <button
                className="rounded-xl px-5 py-2 text-white bg-green"
                onClick={() => setModal("")}
              >
                Yes
              </button>
            </div>
          </div>
        </AlertModal>

        {/* Submit Modal */}
        <AlertModal open={modal === "submit"} onClose={() => setModal("")}>
          <div>
            <div className="font-semibold text-lg mb-2 text-base-primary">
              Submit
            </div>
            <div className="text-muted mb-6">
              Our <span className="font-semibold">agents</span> are on the{" "}
              <span className="font-semibold">claim submission</span>. We’ll
              notify you if anything else is needed.
            </div>
            <div className="mb-6">
              {/* Example claim steps, you can style as needed */}

              {claimSteps.map((step, index) => (
                <div key={step.id} className="flex   space-x-3 ">
                  <div className="flex flex-col items-center">
                    <div className="w-6.5 h-6.5 rounded-full border-2 border-base" />

                    {index < claimSteps.length - 1 && (
                      <div className="w-0.5 h-4 bg-gray-200" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p
                      className={`text-base text-sm text-alpha-30  font-medium pt-1`}
                    >
                      {step.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                className="rounded-xl px-4 py-4 text-white bg-green"
                onClick={() => setModal("")}
              >
                OK
              </button>
            </div>
          </div>
        </AlertModal>
      </div>
    </DashboardLayout>
  );
}
