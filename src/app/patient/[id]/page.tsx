"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import ICDCodes from "@/components/ICDCode";
import PatientProfileCard from "@/components/PatientProfileCard";
import HealthcareCard from "@/components/HealthcareCard";
import SOAPNote, { TabType } from "@/components/SOAPNote";
import Image from "next/image";

import {
  Expand,
  Maximize2,
  Microscope,
  NotepadText,
  Paperclip,
  Pill,
  ReceiptText,
  Stethoscope,
  TriangleAlert,
} from "lucide-react";
import AttachmentGrid from "../AttachmentGrid";
import AlertModal from "@/components/AlertModal";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import Breadcrumb from "@/components/Breadcrumb";
import { useRouter, useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { Attachment, ClaimAttempts, DenialAttempts, MedicalCodingDetail, PatientProfile, StatusType } from "@/types/patient";
import ClaimSubmissionComponent from "@/components/Submitform";
import ErrorCard from "@/components/ErrorCard";
import CycleCard from "@/components/CycleCard";
import MedicalCodingCard from "@/components/MedicalCodingCard";
import MedicalRecords from "@/components/MedicalRecords";
import AttachmentCard from "@/components/ui/AttachmentCard";
import { AgGridReact } from "ag-grid-react";
import { appealLetterMarkDown, mriColDef, mriData } from "../coldef/callDef";
import {
  AllCommunityModule,
  Column,
  GridApi,
  ModuleRegistry,
} from "ag-grid-community";
import AppealLetter from "@/components/AppealLetter";
import rehypeRaw from "rehype-raw";
import Markdown from "react-markdown";

ModuleRegistry.registerModules([AllCommunityModule]);

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

  const appealsLetter = [];
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

  const tableData = [
    {
      Service: "Consultation",
      "CPT Code": "99213",
      "Amount (AED)": 250,
      Status: "Accepted",
      "Next Step": "Send to Post Payment",
    },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const defaultColDef = useMemo(
    () => ({
      resizable: false,
      sortable: false,
      filter: false,
    }),
    []
  );

  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [columnApi, setColumnApi] = useState<Column | null>(null);

  const [gridApi, setGridApi] = useState<GridApi | null>(null);

  // Grid ready callback
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onGridReady = useCallback((params: any) => {
    setGridApi(params.api);
    setColumnApi(params.columnApi);
  }, []);

  return (
    <DashboardLayout>
      <div
        className={`flex-1 flex min-h-[100vh] flex-col lg:ml-0 rounded-xl bg-white`}
      >
        <main className="size-full max-w-345 xl:mx-auto ">
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
                  <PatientProfileCard
                    details={patients?.profile as PatientProfile}
                    mrn={patients?.id as string}
                  />
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
                    titleGap="mb-[34px]"
                  />
                </div>
                <div className="flex flex-col gap-4 flex-1 max-w-[330px]">
                  <MedicalCodingCard
                    data={patients?.medicalCoding.details as MedicalCodingDetail[]}
                    title="Medical Coding"
                    status={patients?.medicalCoding.status as StatusType}
                    // titleGap="mb-[31px]"
                  />
                  {patients?.isSubmitted ? (
                    <CycleCard
                      type="claim"
                      status={patients?.claimSubmission.status as StatusType}
                      title="Claim Submission"
                      data={patients?.claimSubmission.claimAttempts as ClaimAttempts[]}
                    />
                  ) : (
                    <HealthcareCard
                      title="Claim Submission"
                      status={patients?.claimSubmission.status as StatusType}
                      mode="process"
                      processSteps={patients?.claimSubmission.steps}
                      processGap="h-[23px]"
                    />
                  )}
                </div>

                <div className="flex flex-col gap-4 flex-1 max-w-[330px]">
                  {patients?.denialManagement.denialAttempts ? (
                    <CycleCard
                      type="denial"
                      status={patients?.denialManagement.status as StatusType}
                      title="Denial Management"
                      data={patients?.denialManagement.denialAttempts as DenialAttempts[]}
                    />
                  ) : (
                    <HealthcareCard
                      title="Denial Management"
                      status={patients?.denialManagement.status as StatusType}
                      mode="process"
                      processSteps={patients?.denialManagement.steps}
                      titleGap="mb-4.75"
                    />
                  )}
                  <HealthcareCard
                    title="Post Payment"
                    status={patients?.postPayment.status as StatusType}
                    mode="process"
                    processSteps={patients?.postPayment.steps}
                    titleGap="mb-[10px]"
                  />
                </div>
              </div>

              <ErrorCard
                title="Technical Error"
                errorDescription="Submission not reaching payer or regulator due to timeout or network error. We are trying to reconnect"
                type="technical"
                style={`mb-5`}
              />
              <ErrorCard
                title="Auto-Resubmission"
                errorDescription="Part of the claim was denied due to wrong code format; we have resubmitted the corrected portion and are currently waiting for the new Claim ID."
                type="autoresubmittion"
                style={`mb-5`}
              />
              <ErrorCard
                title="Different Code Suggestion"
                errorDescription="On 2025-09-08, the claim was denied due to coding mismatch. We are suggesting resubmitting with updated codes"
                type="codesuggestion"
                style={`mb-5`}
              />
              <ErrorCard
                title="Medical Necessity"
                errorDescription="On 2025-09-08, Dr. Al Shamsi was contacted to submit medical-necessity information to support the patient’s appeal and resolve the denial."
                type="medicalnecessity"
                style={`mb-5`}
              />
              <ErrorCard
                title="Payment Match"
                errorDescription="On 2025-09-09, payment of 500 AED was received without a valid Claim ID. The agent matched using patient name and date of service, and the payment has been posted successfully. No manual follow-up required."
                type="paymentmatch"
                style={`mb-5`}
              />
              <ErrorCard
                title="Write-Off"
                errorDescription="On 2025-09-08, we suggest writing off the claim because the spinal fusion surgery, although approved in prior authorization, did not meet the state law requirement for documented failed conservative therapy of at least 6 months."
                type="writeoff"
                style={`mb-5`}
              />

              <div className="ag-theme-alpine mb-5">
                <AgGridReact
                  // theme={themeQuartz}
                  rowData={mriData}
                  columnDefs={mriColDef}
                  defaultColDef={defaultColDef}
                  animateRows={false}
                  pagination={false}
                  // paginationPageSize={10}
                  enableCellTextSelection={true}
                  className="text-sm"
                  domLayout="autoHeight"
                  rowHeight={60}
                  onGridReady={onGridReady}
                />
              </div>

              <div className="grid grid-cols-[70%_1fr] gap-4" ref={markdownRef}>
                <div>
                  <AppealLetter Icon={ReceiptText} title="Appeals Letter" className="p-2.5 overflow-y-auto h-114" >
                    <div className="markbg"><Markdown rehypePlugins={[rehypeRaw]}>{appealLetterMarkDown}</Markdown></div>
                  </AppealLetter>
                </div>
                <div>
                  <MedicalRecords title="Medical Records" Icon={Paperclip}>
                    <div className="space-y-3">
                      {patients?.attachments &&
                        patients?.attachments.map((data, key) => (
                          <AttachmentCard
                            key={key}
                            ecgImageUrl={data.ecgImageUrl}
                            fileName={data.fileName}
                            fileSize={data.fileSize}
                          />
                        ))}
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { src: "/xray.png", label: "test" },
                          { src: "/xray.png", label: "test" },
                        ].map((img, idx) => (
                          <div
                            key={idx}
                            className="relative group cursor-pointer"
                          >
                            {/* Image */}
                            <img
                              src={img.src}
                              alt={img.label || `Image ${idx + 1}`}
                              className="rounded-lg object-cover"
                            />

                            {/* Hover overlay with icon */}
                            <div
                              onClick={() => setSelectedImage(img.src)}
                              className="absolute inset-0 bg-black/40 opacity-0 rounded-lg group-hover:opacity-100 flex items-center justify-center transition-opacity"
                            >
                              <Expand className="text-white w-8 h-8" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </MedicalRecords>
                </div>
              </div>

              {!patients?.isSubmitted && (
                <div
                  className="grid grid-cols-[70%_1fr] gap-4"
                  ref={markdownRef}
                >
                  <div>
                    <SOAPNote tabs={tabs} defaultActiveTab="soap" />
                  </div>
                  <div>
                    <SOAPNote tabs={icdTabs} defaultActiveTab="icd" />
                  </div>
                </div>
              )}
            </main>

            {/* Cancel Modal */}
            <AlertModal open={modal === "cancel"} onClose={() => setModal("")}>
              <div>
                <div className="font-semibold text-lg mb-2 text-base-primary">
                  Cancel
                </div>
                <div className="text-muted mb-6">
                  Are you sure you want to cancel your changes? Any unsaved
                  changes will be lost.
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
                  Are you sure you want to save your changes? This will update
                  your record permanently.
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
            {selectedImage && (
              <div
                className="fixed inset-0 w-screen h-screen bg-ecg flex items-center justify-center z-50 transition-opacity duration-300 opacity-100"
                onClick={(e) => setSelectedImage(null)}
              >
                <div
                  className="rounded-xl p-6 shadow-lg max-w-7xl w-full relative flex flex-col items-center
        transform transition-transform duration-300 scale-100
        animate-modal-in"
                >
                  <img
                    src={selectedImage}
                    alt="Enlarged"
                    className="max-h-[90%] max-w-[90%] object-contain rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </DashboardLayout>
  );
}
