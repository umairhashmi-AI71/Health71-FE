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
    const route = useRouter();
 
    const buttons = [
        { label: "Back", style: "border border-base ", click: () => route.push(`/tasks`) },
       
    ];
    return (
        <div className="size-full">
            <div className="flex justify-between items-center items-start ">
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
                Logs
            </div>
        </div>

    )
}
