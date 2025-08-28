"use client";

import AIConstructionExpert from "@/components/AIConstructionExpert";
import { DashboardLayout } from "@/components/dashboard-layout";
import PatientProfileCard from "@/components/PatientProfileCard";
import HealthcareCard, { ProcessStep } from "@/components/HealthcareCard";

export default function DashboardPage() {
  const authorizationData = {
    EncounterID: "ENC-2025-0789",
    "Prior AuthID": "PA-556677",
    Physician: "DR. Al Shamsi",
    "ICD Codes": "M23.2",
    "CPT Codes": "29880",
    "Drug Codes": "NDC-0002",
  };

  const claimSteps: ProcessStep[] = [
    { id: "1", label: "Compliance Check & Adjustment", status: "completed" },
    { id: "2", label: "XML File Generated", status: "completed" },
    { id: "3", label: "Claim Posted", status: "current" },
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

  return (
    <DashboardLayout>
      <div className="min-h-full">
        <main className="p-6 space-y-6">
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

          <HealthcareCard
            title="Eligibility Check"
            status="covered"
            mode="grid"
            gridData={eligibilityCheck}
            isInsuranceInfoCard={true}
          />

          <HealthcareCard
                title="Prior Authorization"
                status="approved"
                mode="grid"
                gridData={authorizationData}
              />

              <HealthcareCard
                title="Medical Coding"
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
              />
              <HealthcareCard
                title="Denial Management"
                status="pending"
                mode="process"
                processSteps={dentalManagement}
              />

              <HealthcareCard
                title="Post Payment"
                status="pending"
                mode="process"
                processSteps={postPayment}
              />
 
          <AIConstructionExpert />

         
        </main>
      </div>
    </DashboardLayout>
  );
}
