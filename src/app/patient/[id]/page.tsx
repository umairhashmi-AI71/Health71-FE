"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import ICDCodes from "@/components/ICDCode";
import PatientProfileCard from "@/components/PatientProfileCard";
import HealthcareCard from "@/components/HealthcareCard";
import SOAPNote, { SOAPNoteRef, TabType } from "@/components/SOAPNote";
import Image from "next/image";

import {
  Expand,
  Mail,
  Maximize2,
  MessageCircleReply,
  Microscope,
  NotepadText,
  Paperclip,
  PhoneCall,
  Pill,
  ReceiptText,
  Send,
  Stethoscope,
  TriangleAlert,
} from "lucide-react";
import AttachmentGrid from "../AttachmentGrid";
import AlertModal from "@/components/AlertModal";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import Breadcrumb from "@/components/Breadcrumb";
import { useRouter, useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import {
  Attachment,
  ClaimAttempts,
  DenialAttempts,
  MedicalCodingDetail,
  PatientPersona,
  PatientProfile,
  PaymentDetails,
  ProcessSteps,
  StatusType,
} from "@/types/patient";
import ClaimSubmissionComponent from "@/components/Submitform";
import CycleCard from "@/components/CycleCard";
import MedicalCodingCard from "@/components/MedicalCodingCard";
import MedicalRecords from "@/components/MedicalRecords";
import AttachmentCard from "@/components/ui/AttachmentCard";
import { AgGridReact } from "ag-grid-react";
import { appealLetterMarkDown, writeofcolumnDef } from "../coldef/callDef";
import {
  AllCommunityModule,
  Column,
  GridApi,
  ModuleRegistry,
} from "ag-grid-community";
import AppealLetter from "@/components/AppealLetter";
import rehypeRaw from "rehype-raw";
import Markdown from "react-markdown";
import PostPaymentCard from "@/components/PostPaymentCard";
import { ErrorCode, ErrorType } from "@/types/error";
import { PaymentDetailsTable } from "@/components/ui/PaymentDetails";
import {
  checkHealthWorkflowErrors,
  contactMethods,
  writeofcolumn,
  WriteofcolumnType,
} from "@/lib/utils";
import InfoCard from "@/components/ui/InfoCard";
import { WriteoffTable } from "@/components/WriteoffTable";
import ProcessMapping from "@/components/ui/ProcessMapping";
import { MedicalNecessity } from "@/components/ui/MedicalNecessity/MedicalNecessity";
import { markPatientSubmitted } from "@/store/slice/Patient";
import InsuranceDetails from "@/components/EligibilityCheck/InsurenceDetails";
import { AgentContext } from "@/app/layout";

export default function DashboardPage() {
  const params = useParams();
  const router = useRouter();
  const icdRef = useRef<HTMLDivElement>(null);
  const cptref = useRef<HTMLDivElement>(null);
  const drugref = useRef<HTMLDivElement>(null);
  const writeoffref = useRef<HTMLDivElement>(null);
  const paymentSectionRef = useRef<HTMLDivElement>(null);

  const [appealSubmitStep, setappealSubmitStep] = useState([
    { id: "1", label: "Submission to Payer", status: "pending" },
    { id: "2", label: "Logging & Tracking", status: "pending" },
    { id: "3", label: "Notification & Monitoring", status: "pending" },
    { id: "4", label: "Update Ledger", status: "pending" },
  ]);

  const cancelRef = useRef(false);


  const isAppealCompleted = appealSubmitStep.every(i => i.status === 'completed')
  const [isProcessing, setisProcessing] = useState<boolean>(false)


   const stopSteps = () => {
    cancelRef.current = true; // tell loop to stop
  };

  const resetSteps = () => {
    setisProcessing(false)
    cancelRef.current = true; // also stop loop
    setappealSubmitStep((steps) =>
      steps.map((step) => ({ ...step, status: "pending" }))
    );
  };


  const markAppealStepsAsComplete = async () => {
    cancelRef.current = false; // reset cancel flag before starting
    setisProcessing(true)
    for (let i = 0; i < appealSubmitStep.length; i++) {
      // break early if cancel button clicked
  if (cancelRef.current) break;
      await new Promise((resolve) => setTimeout(resolve, 1000));

  if (cancelRef.current) break;
      setappealSubmitStep((prevSteps) =>
        prevSteps.map((step, index) =>
          index === i ? { ...step, status: "completed" } : step
        )
      );
    }
  };

  useEffect(() => {
    if (isAppealCompleted) {
      // setappealSubmitStep((prevSteps) =>
      //   prevSteps.map((step, index) => ({ ...step, status: "pending" })
      //   )
      // );
       dispatch(markPatientSubmitted(patients.id)); 
      route.push("/patient")
      changeModal("");
    }
  }, [isAppealCompleted])




  const dispatch = useDispatch();
  const patients: PatientPersona = useSelector(
    (state: RootState) =>
      state.patientlist.find((p) => p.id === params.id) as PatientPersona
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
      className: "text-muted h-120",
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
          ref={icdRef}
          id="icd"
          title="ICD Codes"
          mrn={patients.id}
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
        <ICDCodes
          id="cpt"
          ref={cptref}

          mrn={patients.id}
          title="CPT Codes"
          initialCodes={patients?.cptCode}
        />
      ),
      icon: Stethoscope,
    },
    {
      id: "drug",
      label: "DRUG",
      data: () => (
        <ICDCodes
          id="drug"
          ref={drugref}
          mrn={patients.id}
          title="Drug Codes"
          initialCodes={patients?.drugCode}
        />
      ),
      icon: Pill,
    },
  ];


  const { modal, changeModal } = useContext(AgentContext);


  const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false);
  const buttons = [
    { label: "Cancel", style: "border border-base " },
    { label: "Save", style: "border border-base " },
    { label: "Submit", style: "filled bg-green text-primary-foreground " },
  ];

  const route = useRouter();
  const cancelHandel = useCallback(() => {
    changeModal("");
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

  const [selectedMethod, setSelectedMethod] = useState("whatsapp");

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

  const [gridApi, setGridApi] = useState<GridApi | null>(null);
  const [appeal, setAppeal] = useState<boolean>(false);

  interface Appeal {
    isAccepted: boolean;
    error: boolean;
  }

  const { eligibilityCheck,
    priorAuthorization,
    medicalCoding,
    claimSubmission,
    denialManagement,
    postPayment, icdCodes, cptCode, drugCode, information, medicalReports } =
    patients;
  const { isError, errorDetails, step } = checkHealthWorkflowErrors({
    eligibilityCheck,
    priorAuthorization,
    medicalCoding,
    claimSubmission,
    denialManagement,
    postPayment
  });
  const [contactSteps, setContactSteps] = useState([
    { id: "1", label: "Calculate Patient Responsibility", status: "pending" },
    { id: "2", label: "Send to Patient", status: "pending" },
    { id: "3", label: "Confirm Patient Approval", status: "pending" },
    { id: "4", label: "Update Ledger", status: "pending" },
  ]);

  const [patientContactSteps, setPatientContactSteps] = useState([
    { id: "1", label: "Contact Patient", status: "pending" },
    { id: "2", label: "Updating Ledger", status: "pending" },
    { id: "3", label: "Updating Patient on Outcome", status: "pending" },
  ]);

  const [appealDetails, setAppealDetails] = useState<Appeal>({
    isAccepted: false,
    error: false,
  });

  const [writeoffError, setWriteoffError] = useState<boolean>(false);

 

  const markStepsAsComplete = async () => {
    cancelRef.current = false; // reset cancel flag before starting
    
    for (let i = 0; i < contactSteps.length; i++) {
      // Wait for 1 second
  if (cancelRef.current) break;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Update the status of the current step to "complete"
  if (cancelRef.current) break;
      setPatientContactSteps((prevSteps) =>
        prevSteps.map((step, index) =>
          index === i ? { ...step, status: "completed" } : step
        )
      );
    }
  };

  const markcontactStep = async () => {
    cancelRef.current = false; // reset cancel flag before starting
    for (let i = 0; i < contactSteps.length; i++) {
      // Wait for 1 second
  if (cancelRef.current) break;

      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Update the status of the current step to "complete"
  if (cancelRef.current) break;

      setContactSteps((prevSteps) =>
        prevSteps.map((step, index) =>
          index === i ? { ...step, status: "completed" } : step
        )
      );
    }
  };


  const getInfo = () => {
    if (patients.information && patients.information.infoCode) {
      return (
        <InfoCard
          title={patients.information.infoType}
          errorDescription={patients.information.infoMessage}
          type={patients.information.infoCode as ErrorCode}
          style={`mb-5`}
        />
      );
    }
  };

  const acceptHandeler = useCallback(() => {
    setAppealDetails({ isAccepted: true, error: false });
  }, []);

  const soapRef = useRef<SOAPNoteRef>(null);

  const showButton = () => {

    const code = patients?.information?.infoCode;
    const error = ['AI-RESUB-001', 'T500', 'OA-ERR-001', 'MN-REQ-001', 'notcovered']
    if (code && error.includes(code)) {
      return false
    } else if(patients.eligibilityCheck.status == 'notvalid' || patients.eligibilityCheck.status == 'valid'|| patients.information?.infoType == 'Eligible') {
       return false
    }


    return true
  }
  const writeList: WriteofcolumnType[] = useSelector(
    (state: RootState) => state.writeoffList
  );
  const partialTableData = useSelector(
    (state: RootState) =>
      state.paymenttableData
  );

  const errorCode = ['T500', "AI-RESUB-001", "OA-ERR-001"]

  return (

    <div className="size-full" >
      <div className="flex justify-between items-center items-start ">
        <div>
          <Breadcrumb />
        </div>
        <div className="flex  gap-2 mb-6">
          {showButton() && buttons.map((data) => (
            <button
              key={data.label}
              className={`rounded-xl cursor-pointer px-4 py-3 text-sm font-medium text-base-primary ${data.style}`}
              onClick={() => {
                if (data.label == 'Save' || data.label == 'Cancel') {
                  route.push('/patient')
                } else {
                  // Handle error on denialManagement step
                  if (
                    information?.infoCode == "APL-003"
                  ) {
                    if (!appealDetails.isAccepted) {
                      setAppealDetails({ ...appealDetails, error: true });
                      markdownRef.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    } else {
                      changeModal('appealSubmittion');
                    }
                    return;
                  }



                  if (information && information.infoCode == 'CMS-110') {
                    // Common error-check logic for icdCodes and cptCode
                    const codeTypes = [
                      {
                        type: 'icd',
                        data: icdCodes,
                        ref: icdRef,
                      },
                      {
                        type: 'cpt',
                        data: cptCode,
                        ref: cptref,
                      },
                      {
                        type: 'drug',
                        data: drugCode,
                        ref: drugref,
                      }
                    ];

                    for (const codeType of codeTypes) {
                      const hasError = codeType?.data.every(code => code.status == 'Accepted');
                      if (!hasError) {
                        markdownRef.current?.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });

                        soapRef.current?.setActiveTab(codeType.type);

                        codeType.ref.current?.querySelectorAll(".not-acceptede").forEach((el) => {
                          el.classList.add('border-error');
                        });

                        codeType.ref.current
                          ?.querySelector('.error-text')
                          ?.setAttribute('style', 'display:block');

                        return;
                      }
                    }
                  }



                  if (isError && errorDetails?.errorType == 'writeoff') {
                    const isAccepted = writeList.some(item => item.status == 'Denied');

                    if (isAccepted) {
                      setWriteoffError(true)
                      writeoffref.current
                        ?.querySelector('.error-text')
                        ?.classList.remove('hidden');
                      writeoffref.current
                        ?.querySelector('.ag-table')
                        ?.setAttribute('class', 'border-error');
                      writeoffref.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                      return;
                    }
                  }
                  const ispartialApproved = partialTableData.every(item => item.status == 'Accepted');

                  if (information && information?.infoCode == 'CC-001' && !ispartialApproved) {
                    paymentSectionRef.current
                      ?.querySelector('.error-text')
                      ?.classList.remove('hidden');
                    paymentSectionRef.current
                      ?.querySelector('.ag-table')
                      ?.setAttribute('class', 'border-error');
                    paymentSectionRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });

                    return;


                  }
                   if(information && information?.infoType == 'Eligible') {
                    changeModal("submiteligibility")
                    return;
                  }
                  // No errors found, open modal
                  changeModal(data.label.toLowerCase());

                }
              }}
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
            gridData={
              patients?.eligibilityCheck
                .details as MedicalCodingDetail[]
            }
            insuranceDetails={patients?.eligibilityCheck.insuranDetials}
            isInsuranceInfoCard={true}
            processSteps={
              patients?.eligibilityCheck.steps as ProcessSteps[]
            }
            titleGap="mb-[16px]"
            processGap="h-5.5"
          />

          <HealthcareCard
            title="Prior Authorization"
            status={patients?.priorAuthorization.status as StatusType}
            gridData={
              patients?.priorAuthorization
                .details as MedicalCodingDetail[]
            }
            processSteps={
              patients?.priorAuthorization.steps as ProcessSteps[]
            }
             processGap="h-5.5"
          />
        </div>
        <div className="flex flex-col gap-4 flex-1 max-w-[330px]">
          <MedicalCodingCard
            data={
              patients?.medicalCoding.details as MedicalCodingDetail[]
            }
            title="Medical Coding"
            status={patients?.medicalCoding.status as StatusType}
            processSteps={
              patients?.medicalCoding.steps as ProcessSteps[]
            }
            processGap="h-4.5"
          />
          <CycleCard
            type="claim"
            status={patients?.claimSubmission.status as StatusType}
            title="Claim Submission"
            processSteps={
              patients?.claimSubmission.steps as ProcessSteps[]
            }
            data={
              patients?.claimSubmission.claimAttempts as ClaimAttempts[]
            }
          />
        </div>

        <div className="flex flex-col gap-4 flex-1 max-w-[330px]">
          <CycleCard
            type="denial"
            status={patients?.denialManagement.status as StatusType}
            title="Denial Management"
            processSteps={
              patients?.denialManagement.steps as ProcessSteps[]
            }
            data={
              patients?.denialManagement
                .denialAttempts as DenialAttempts[]
            }
            processGap="h-[20px]"
          />
          <PostPaymentCard
            title="Post Payment"
            status={patients?.postPayment.status as StatusType}
            mode="process"
            processSteps={patients?.postPayment.steps as ProcessSteps[]}
            details={patients?.postPayment.details as PaymentDetails}
            titleGap="mb-[16px]"
            processGap="h-3"
          />
        </div>
      </div>




      {errorCode.includes(information?.infoCode as string) && (
        <>
          {getInfo()}

        </>

      )}
      {information && information.infoCode == 'MN-REQ-001' && (<div>
        {getInfo()}
        <MedicalNecessity patient={patients} /></div>)}

      {information?.infoCode == "APL-003" && (
        <>
          {getInfo()}
          <div
            className="grid grid-cols-[70%_1fr] gap-4"
            ref={markdownRef}
          >
            <div>
              <AppealLetter
                Icon={ReceiptText}
                title="Appeals Letter"
                className={`p-2.5 overflow-y-auto h-104`}
                appealDetails={appealDetails}
                acceptHandeler={acceptHandeler}
                markdownContent={appealLetterMarkDown}
              />

            </div>
            <div>
              <MedicalRecords title="Medical Records" Icon={Paperclip}>
                <div className="space-y-3">
                  {medicalReports?.map((data, key) => (
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
        </>

      )}

      {information && information.infoCode == "CMS-110" && (
        <div>
          {getInfo()}
          <div
            className="grid grid-cols-[70%_1fr] gap-4"
            ref={markdownRef}
          >
            <div>
              <SOAPNote tabs={tabs} defaultActiveTab="soap" />
            </div>
            <div>
              <SOAPNote tabs={icdTabs} ref={soapRef} defaultActiveTab="icd" />
            </div>
          </div>
        </div>

      )}

      {isError && errorDetails?.errorType == "writeoff" && (
        <div ref={writeoffref}>{getInfo()}<WriteoffTable /></div>
      )}

       {information?.infoType == 'Not Covered' && (
         <>
         {getInfo()}
          <div className=" flex justify-end">
            <button
              className="flex items-center gap-2 cursor-pointer rounded-lg bg-[#AFD8D4] py-2 px-4"
              onClick={() => changeModal("notCoveredOOP")}
            >
              <Send className="w-4 h-4" strokeWidth={1.5} /> Contact
              Patient
            </button>
          </div></>
        )}

      {/** Payment fault */}
      {information?.infoCode == 'CC-001' && <div ref={paymentSectionRef}>{getInfo()}<PaymentDetailsTable type={postPayment.errorDetails?.errorType as string} patientId={patients?.id} /></div>}


     {information?.infoCode == 'test' &&   <InsuranceDetails />}


      {/* Cancel Modal */}
      <AlertModal open={modal === "cancel"} onClose={() => changeModal("")}>
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
                changeModal("");
              }}
            >
              No
            </button>
            <button
              className="rounded-xl px-5 py-2 text-white bg-base-destructive"
              onClick={() => {
                changeModal("");
                route.push("/home");
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </AlertModal>

      {/* Save Modal */}
      <AlertModal open={modal === "save"} onClose={() => changeModal("")}>
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
              onClick={() => changeModal("")}
            >
              No
            </button>
            <button
              className="rounded-xl px-5 py-2 text-white bg-green"
              onClick={() => changeModal("")}
            >
              Yes
            </button>
          </div>
        </div>
      </AlertModal>

      {/* Submit Modal */}
      <AlertModal open={modal === "submit"} onClose={() => changeModal("")}>
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

      <AlertModal open={modal === "appealSubmittion"} onClose={() => changeModal("")}>
        <div>
          <div className="font-semibold text-lg mb-2 text-base-primary">
            Submit
          </div>
          <div className="text-muted mb-6">
            Our <span className="font-semibold">agents</span> are on the{" "}
            <span className="font-semibold">appeal letter</span>. We’ll
            notify you if anything else is needed.
          </div>
          <div className="mb-6">
            <ProcessMapping processGap="h-3.5" processSteps={appealSubmitStep as ProcessSteps[]} />
          </div>
          <div className="flex justify-end gap-4">
            <button
              className="border rounded-xl px-5 py-2 cursor-pointer text-base-primary bg-white"
              onClick={() => {resetSteps() ; changeModal("")}}
            >
              Cancel
            </button>
            <button
              className="rounded-xl px-5 py-2 cursor-pointer text-white bg-green"
              disabled={isProcessing}
              onClick={() => { 
                markAppealStepsAsComplete()
                  }}
            >
              Confirm

            </button>
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

      <AlertModal
        open={modal === "contactoop"}
        onClose={() => changeModal("")}
      >
        <div>
          <div className="font-semibold text-lg mb-2 text-base-primary">
            Contact Patient for OOP
          </div>
          <div className="text-muted mb-6">
            Use one of the <strong>following methods</strong> to connect with the patient for <strong>OOP information.</strong>
          </div>

          {/* Whatsapp */}
          <div className="space-y-3">
            {contactMethods.map((method) => {
              const isSelected = selectedMethod === method.id;

              return (
                <label
                  key={method.id}
                  htmlFor={method.id}
                  className={`flex items-center gap-4 rounded-lg px-4 py-3 cursor-pointer border border-base transition
                ${isSelected ? "bg-[#CAE8E4]" : "hover:bg-gray-50"}
              `}
                >
                  <input
                    type="radio"
                    name="contactMethod"
                    id={method.id}
                    value={method.id}
                    checked={isSelected}
                    onChange={() => setSelectedMethod(method.id)}
                    className="hidden"
                  />
                  {method.icon}
                  <div>
                    <p className="text-sm font-semibold">
                      {method.label}
                    </p>
                    <p className="">
                      {method.id == 'whatsapp' && patients.profile.phoneNumber}
                      {method.id == 'email' && patients.profile.email}
                      {method.id == 'phone' && patients.profile.phoneNumber}
                      </p>
                  </div>
                </label>
              );
            })}
          </div>

          <div className="flex justify-end gap-4 mt-4">
            <button
              className=" cursor-pointer rounded-xl px-5 py-2 text-base-primary bg-white"
              onClick={() => changeModal("")}
            >
              Cancel
            </button>
            <button
              className="cursor-pointer rounded-xl px-5 py-2 text-white bg-green"
              onClick={() => {
                changeModal("oopPatientsend");
                markStepsAsComplete();
              }}
            >
              OK
            </button>
          </div>
        </div>
      </AlertModal>

      <AlertModal open={modal === "oopPatientsend"} onClose={() => changeModal("")}>
        <div>
          <div className="font-semibold text-lg mb-2 text-base-primary">
            Submit
          </div>
          <div className="text-muted mb-6">
            Patient is not eligible. Patient has been notified to update coverage or proceed as self-pay.
          </div>
          <ProcessMapping
            processSteps={patientContactSteps as ProcessSteps[]}
            processGap={"h-3.5"}
          />
          <div className="flex justify-end gap-4">
            <button
              className="cursor-pointer rounded-xl px-5 py-2 text-white bg-green"
              onClick={() => {
                changeModal("");
                cancelRef.current = true
                setPatientContactSteps((prevSteps) =>
                  prevSteps.map((step, index) => ({
                    ...step,
                    status: "pending",
                  }))
                );
              }}
            >
              OK
            </button>
          </div>
        </div>
      </AlertModal>


      <AlertModal
        open={modal === "notCoveredOOP"}
        onClose={() => changeModal("")}
      >
        <div>
          <div className="font-semibold text-lg mb-2 text-base-primary">
            Contact Patient for OOP
          </div>
          <div className="text-muted mb-6">
           if accepted, appointment is booked, if declined, visit ends.
          </div>

          {/* Whatsapp */}
          <div className="space-y-3">
            {contactMethods.map((method) => {
              const isSelected = selectedMethod === method.id;

              return (
                <label
                  key={method.id}
                  htmlFor={method.id}
                  className={`flex items-center gap-4 rounded-lg px-4 py-3 cursor-pointer border border-base transition
                ${isSelected ? "bg-[#CAE8E4]" : "hover:bg-gray-50"}
              `}
                >
                  <input
                    type="radio"
                    name="contactMethod"
                    id={method.id}
                    value={method.id}
                    checked={isSelected}
                    onChange={() => setSelectedMethod(method.id)}
                    className="hidden"
                  />
                  {method.icon}
                  <div>
                    <p className="text-sm font-semibold">
                      {method.label}
                    </p>
                    <p className="">
                      {method.id == 'whatsapp' && patients.profile.phoneNumber}
                      {method.id == 'email' && patients.profile.email}
                      {method.id == 'phone' && patients.profile.phoneNumber}
                      </p>
                  </div>
                </label>
              );
            })}
          </div>

          <div className="flex justify-end gap-4 mt-4">
            <button
              className=" cursor-pointer rounded-xl px-5 py-2 text-base-primary bg-white"
              onClick={() => changeModal("")}
            >
              Cancel
            </button>
            <button
              className="cursor-pointer rounded-xl px-5 py-2 text-white bg-green"
              onClick={() => {
                changeModal("notCoveredOOPSend");
                markcontactStep();
              }}
            >
              OK
            </button>
          </div>
        </div>
      </AlertModal>

      <AlertModal open={modal === "notCoveredOOPSend"} onClose={() => changeModal("")}>
        <div>
          <div className="font-semibold text-lg mb-2 text-base-primary">
            Submit
          </div>
          <div className="text-muted mb-6">
            OOP payment request sent to patient. We’ll notify you once the patient responds.
          </div>
          <ProcessMapping
            processSteps={contactSteps as ProcessSteps[]}
            processGap={"h-3.5"}
          />
          <div className="flex justify-end gap-4">
            <button
              className="cursor-pointer rounded-xl px-5 py-2 text-white bg-green"
              onClick={() => {
                changeModal("");
                stopSteps()
                setContactSteps((prevSteps) =>
                  prevSteps.map((step, index) => ({
                    ...step,
                    status: "pending",
                  }))
                );
              }}
            >
              OK
            </button>
          </div>
        </div>
      </AlertModal>

    </div>





  );
}
