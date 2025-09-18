"use client"
import Breadcrumb from "@/components/Breadcrumb";
import CycleCard from "@/components/CycleCard";
import { DashboardLayout } from "@/components/dashboard-layout";
import HealthcareCard from "@/components/HealthcareCard";
import ICDCodes from "@/components/ICDCode";
import MedicalCodingCard from "@/components/MedicalCodingCard";
import PatientProfileCard from "@/components/PatientProfileCard";
import PostPaymentCard from "@/components/PostPaymentCard";
import SOAPNote, { SOAPNoteRef, TabType } from "@/components/SOAPNote";
import { MedicalNecessity } from "@/components/ui/MedicalNecessity/MedicalNecessity";
import { RootState } from "@/store";
import { Attachment, ClaimAttempts, DenialAttempts, MedicalCodingDetail, PatientPersona, PatientProfile, PaymentDetails, ProcessSteps, StatusType } from "@/types/patient";
import { Microscope, NotepadText, Paperclip, Pill, Stethoscope } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { isError } from "util";
import AttachmentGrid from "../../AttachmentGrid";
import { useCallback, useRef, useState } from "react";
import InfoCard from "@/components/ui/InfoCard";
import { ErrorCode } from "@/types/error";

export default function Medical() {

    const params = useParams()

    const patients: PatientPersona = useSelector(
        (state: RootState) =>
            state.patientlist.find((p) => p.id === params.id) as PatientPersona
    );
    const soapRef = useRef<SOAPNoteRef>(null);



    const route = useRouter();

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

    const icdRef = useRef<HTMLDivElement>(null);
    const cptref = useRef<HTMLDivElement>(null);
    const drugref = useRef<HTMLDivElement>(null);
    const markdownRef = useRef<HTMLDivElement>(null);
    const [highlightedText, setHighlightedText] = useState<string>("");


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


    const buttons = [
        { label: "Cancel", style: "border border-base ", click: () => route.push(`/patient/${params.id}`) },
        {
            label: "Save", style: "filled bg-green text-primary-foreground ", click: () => {
                // const codeTypes = [
                //     {
                //         type: 'icd',
                //         data: patients.icdCodes,
                //         ref: icdRef,
                //     },
                //     {
                //         type: 'cpt',
                //         data: patients.cptCode,
                //         ref: cptref,
                //     },
                //     {
                //         type: 'drug',
                //         data: patients.drugCode,
                //         ref: drugref,
                //     }
                // ];

                // for (const codeType of codeTypes) {
                //     const hasError = codeType?.data.every(code => code.status == 'Accepted');
                //     if (!hasError) {
                //         markdownRef.current?.scrollIntoView({
                //             behavior: "smooth",
                //             block: "center",
                //         });

                //         soapRef.current?.setActiveTab(codeType.type);

                //         codeType.ref.current?.querySelectorAll(".not-acceptede").forEach((el) => {
                //             el.classList.add('border-error');
                //         });

                //         codeType.ref.current
                //             ?.querySelector('.error-text')
                //             ?.setAttribute('style', 'display:block');

                //         return;
                //     }
                // }
                route.push(`/patient/${params.id}`)
            }
        }
    ];
    return (
        <div className="w-full">
            <div className="flex justify-between items-center items-start">
                <div>
                    <Breadcrumb />
                </div>
                <div className="flex  gap-2 mb-6">
                    {buttons.map((data) => (
                        <button
                            key={data.label}
                            className={`rounded-xl cursor-pointer px-4 py-3 text-sm font-medium text-base-primary ${data.style}`}
                            onClick={data.click}
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
                        processGap="h-[16px]"
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

            <div>
                {patients.information && <InfoCard
                    title={patients.information.infoType}
                    errorDescription={patients.information.infoMessage}
                    type={patients.information.infoCode as ErrorCode}
                    style={`mb-5`}
                />}
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
        </div>

    )
}
