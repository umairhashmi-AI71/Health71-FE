"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import ICDCodes from "@/components/ICDCode";
import PatientProfileCard from "@/components/PatientProfileCard";
import HealthcareCard from "@/components/HealthcareCard";
import SOAPNote, { TabType } from "@/components/SOAPNote";
import {
  Microscope,
  NotepadText,
  Paperclip,
  Pill,
  Stethoscope,
} from "lucide-react";
import AttachmentGrid from "../AttachmentGrid";
import AlertModal from "@/components/AlertModal";
import React, { useCallback, useEffect, useRef, useState } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import { useRouter, useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { Attachment, PatientProfile, StatusType } from "@/types/patient";
import { markPatientSubmitted } from "@/store/slice/Patient";
import ClaimSubmissionComponent from "@/components/Submitform";

export default function DashboardPage() {
  const params = useParams();
  const router = useRouter();

  const dispatch = useDispatch();
  const patients = useSelector((state: RootState) =>
    state.patientlist.find((p) => p.id === params.id)
  );

  const markdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (patients == undefined) {
      router.push("/home");
    }
  }, []);
  const tabs: TabType[] = [
    {
      id: "soap",
      label: "SOAP Note",
      data: patients?.markdown as string,
      icon: NotepadText,
      className: "text-muted h-200",
    },
    {
      id: "attachments",
      label: "Attachments",
      data: (
        <AttachmentGrid attachments={patients?.attachments as Attachment[]} />
      ),
      icon: Paperclip,
    },
  ];

  const icdTabs: TabType[] = [
    {
      id: "icd",
      label: "ICD",
      data: () => (
        <ICDCodes
          id="icd"
          title="ICD Codes"
          initialCodes={patients?.icdCodes}
          icdHandeler={handleHighlight}
          removeHighlight={removeHighlight}
        />
      ),
      icon: Microscope,
    },
    {
      id: "cpt",
      label: "CPT",
      data: () => (
        <ICDCodes id="cpt" title="CPT Codes" initialCodes={patients?.cptCode} />
      ),
      icon: Stethoscope,
    },
    {
      id: "drug",
      label: "DRUG",
      data: <ICDCodes id="drug" title="Drug Codes" initialCodes={[]} />,
      icon: Pill,
    },
  ];

  const eligibilityCheck = {
    Network: "Yes",
    Coverage: "100%",
  };

  const [modal, setModal] = React.useState<string>();
  const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false);
  const buttons = [
    { label: "Cancel", style: "border border-base " },
    { label: "Save", style: "border border-base " },
    { label: "Submit", style: "filled bg-green text-primary-foreground " },
  ];

  const route = useRouter();
  const cancelHandel = useCallback(() => {
    setModal("");
  }, []);

  const [highlightedText, setHighlightedText] = useState<string>("");
  const textRef = useRef<HTMLDivElement>(null);
  const handleHighlight = useCallback((word: string) => {
    if (!markdownRef.current) return;

    const elements = markdownRef.current.querySelectorAll<HTMLElement>(
      "p, h1, h2, h3, li, strong"
    );

    let target: HTMLElement | null = null;
    if (word == "M17.12") {
      word = "Possible exacerbation of pre-existing mild osteoarthritis.";
    }

    markdownRef.current.querySelectorAll(".scroll-hightlight").forEach((el) => {
      el.classList.remove("scroll-hightlight");
    });

    elements.forEach((el) => {
      if (highlightedText.length) {
        if (el.textContent?.includes(highlightedText) && !target) {
          target = el;
        }
      }
      if (el.textContent?.includes(word) && !target) {
        target = el;
      }
    });

    /* eslint-disable */
    if (target) {
      (target as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      (target as HTMLElement).classList.add("scroll-hightlight");
      // target.a("background: #EAF481; padding:8px; margin-bottom:5px; display:inline-block")
      // setTimeout(() => target?.classList.remove("bg-yellow-200"), 2000);
    }
    /* eslint-enable */
  }, []);

  const removeHighlight = useCallback((word: string) => {
    if (!markdownRef.current) return;

    const elements = markdownRef.current.querySelectorAll<HTMLElement>(
      "p, h1, h2, h3, li, strong"
    );

    if (word == "M17.12") {
      word = "Possible exacerbation of pre-existing mild osteoarthritis.";
    }

    markdownRef.current.querySelectorAll(".scroll-hightlight").forEach((el) => {
      el.classList.remove("scroll-hightlight");
    });
  }, []);

  return (
    <DashboardLayout>
      <div>
        <main className="p-6 size-full max-w-345 xl:mx-auto">
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
              <PatientProfileCard details={patients?.profile as PatientProfile} mrn={patients?.id as string}/>
            </div>

            <div className="flex flex-col gap-4 flex-1 max-w-[315px]">
              <HealthcareCard
                title="Eligibility Check"
                status={patients?.eligibilityCheck.status as StatusType}
                mode="grid"
                gridData={patients?.eligibilityCheck.details}
                insuranceDetails={patients?.eligibilityCheck.insuranDetials}
                isInsuranceInfoCard={true}
                titleGap="mb-3.5"
              />

              <HealthcareCard
                title="Prior Authorization"
                status={patients?.priorAuthorization.status as StatusType}
                mode="grid"
                gridData={patients?.priorAuthorization.details}
                titleGap="mb-[22px]"
              />
            </div>
            <div className="flex flex-col gap-4 flex-1 max-w-[330px]">
              <HealthcareCard
                title="Medical Coding"
                titleGap="mb-[31px]"
                status={patients?.medicalCoding.status as StatusType}
                mode="grid"
                gridData={patients?.medicalCoding.details}
              />

              <HealthcareCard
                title="Claim Submission"
                status={patients?.claimSubmission.status as StatusType}
                mode="process"
                processSteps={patients?.claimSubmission.steps}
                processGap="h-5.25"
              />
            </div>

            <div className="flex flex-col gap-4 flex-1 max-w-[330px]">
              <HealthcareCard
                title="Denial Management"
                status={patients?.denialManagement.status as StatusType}
                mode="process"
                processSteps={patients?.denialManagement.steps}
                titleGap="mb-4.75"
              />
              <HealthcareCard
                title="Post Payment"
                status={patients?.postPayment.status as StatusType}
                mode="process"
                processSteps={patients?.postPayment.steps}
                titleGap="mb-[23px]"
              />
            </div>
          </div>
          <div className="grid grid-cols-[70%_1fr] gap-4" ref={markdownRef}>
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
                onClick={() => {
                  setModal("");
                }}
              >
                No
              </button>
              <button
                className="rounded-xl px-5 py-2 text-white bg-base-destructive"
                onClick={() => {
                  setModal("");
                  route.push("/home");
                }}
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
              <ClaimSubmissionComponent
                cancelHandel={cancelHandel}
                userId={params.id as string}
              />
            </div>
          </div>
        </AlertModal>
      </div>
    </DashboardLayout>
  );
}
