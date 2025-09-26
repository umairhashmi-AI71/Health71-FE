import { MedicalCodingDetail, PatientPersona } from "@/types/patient"
import InfoCard from "../InfoCard";
import { ErrorCode } from "@/types/error";
import MedicalRecords from "@/components/MedicalRecords";
import { Expand, Icon, Paperclip, Receipt, ReceiptText, SquarePen } from "lucide-react";
import AttachmentCard from "../AttachmentCard";
import AppealLetter from "@/components/AppealLetter";
import React from "react";

export const MedicalNecessity: React.FC<{ patient: PatientPersona, }> = ({ patient }) => {

    const { id, information, profile, eligibilityCheck, medicalCoding, claimSubmission, denialManagement } = patient;
    const denial = denialManagement?.denialAttempts && denialManagement?.denialAttempts[denialManagement?.denialAttempts?.length - 1 || 0]
 

     const  toCamelCase = (str: string) => {
  return str
    .toLowerCase()
    .replace(/\s+([a-z])/g, (_, char) => char.toUpperCase());
}

    const priorDetails: Record<string, string | number> = {};
    const medicalDetail: Record<string, string | number> = {};


        patient.priorAuthorization.details.forEach((data, index) => priorDetails[toCamelCase(data.label)] = data.value)
        medicalCoding.details.forEach((data, index) => medicalDetail[toCamelCase(data.label)] = data.value)
      return (<div>


        <div
            className="grid grid-cols-[70%_1fr] gap-4"

        >
            <div>
                <div className={`mx-auto bg-white border border-base rounded-lg drop-shadow-sm `}>
                    {/* Header with Tabs */}

                    <div className="border-b px-3 py-3 h-10 border-base items-center justify-between bg-base-muted rounded-lg  flex gap-x-1">
                        <div className="flex">
                            <ReceiptText className="w-5 h-5 mr-2" />
                            <span className="text-sm">Submitted Claim(s)</span></div>

                    </div>

                    <div className="relative">
                        <div className="max-w-6xl mx-auto p-6 bg-white">
                            {/* Patient Header */}
                            <div className="mb-8">
                                <h1 className="text-2xl font-bold mb-6">Patient:</h1>

                                <div className="border border-gray-300 rounded-lg overflow-hidden">
                                    <table className="w-full">
                                        <tbody>
                                            <tr className="border-b border-gray-200">
                                                <td className="px-6 py-4 font-medium  w-1/8">Patient Name</td>
                                                <td className="px-6 py-4 w-1/4">{profile.name} {profile.surname}</td>
                                                <td className="px-6 py-4 font-medium  w-1/8">MRN</td>
                                                <td className="px-6 py-4 w-1/4">{profile.mrn}</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="px-6 py-4 font-medium ">Sex</td>
                                                <td className="px-6 py-4">{profile.sex}</td>
                                                <td className="px-6 py-4 font-medium ">Nationality</td>
                                                <td className="px-6 py-4">{profile.nationality}</td>
                                            </tr>
                                             <tr className="border-b border-gray-200">
                                                <td className="px-6 py-4 font-medium ">DoB</td>
                                                <td className="px-6 py-4">{profile.dateOfBirth}</td>
                                                <td className="px-6 py-4 font-medium ">Language</td>
                                                <td className="px-6 py-4">{profile.language}</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="px-6 py-4 font-medium ">Mobile</td>
                                                <td className="px-6 py-4">
                                                    {profile.phoneNumber}
                                                </td>
                                                <td className="px-6 py-4 font-medium ">Insurance</td>
                                                <td className="px-6 py-4">
                                                    {eligibilityCheck.insuranDetials.insuranceProvider}
                                                </td>
                                            </tr>
                                             <tr className="border-b border-gray-200">
                                                <td className="px-6 py-4 font-medium ">E-Mail</td>
                                                <td className="px-6 py-4">
                                                    {profile.email}
                                                </td>
                                                <td className="px-6 py-4 font-medium ">Coverage</td>
                                                <td className="px-6 py-4">
                                                    Coverage: {eligibilityCheck.insuranDetials.coverage}  (Network: {eligibilityCheck.details[0].value})
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Encounter Section */}
                            <div className="mb-8">
                                <h2 className="text-xl font-bold mb-6">Encounter:</h2>

                                
                                   <div className="border border-gray-300 rounded-lg overflow-hidden">
                                    <table className="w-full">
                                        <tbody>
                                            <tr className="border-b border-gray-200">
                                                <td className="px-6 py-4 font-medium  w-1/8">Encounter ID</td>
                                                <td className="px-6 py-4 w-1/4">{priorDetails.encounterId}</td>
                                                <td className="px-6 py-4 font-medium  w-1/8">Encounter Type</td>
                                                <td className="px-6 py-4 w-1/4">{medicalDetail.encounterType}</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="px-6 py-4 font-medium ">Date</td>
                                                <td className="px-6 py-4">{medicalDetail.encounterDate}</td>
                                                <td className="px-6 py-4 font-medium ">Department</td>
                                                <td className="px-6 py-4">{medicalDetail.department}</td>
                                            </tr>
                                             <tr className="border-b border-gray-200">
                                                <td className="px-6 py-4 font-medium ">Physician</td>
                                                <td className="px-6 py-4">{medicalDetail.physician}</td>
                                                <td className="px-6 py-4 font-medium ">Drug Codes</td>
                                                <td className="px-6 py-4">{medicalDetail.drugCodes}</td>
                                            </tr>
                                            <tr className="border-b border-gray-200">
                                                <td className="px-6 py-4 font-medium ">CPT Codes</td>
                                                <td className="px-6 py-4">
                                                    {medicalDetail.cptCodes}
                                                </td>
                                                <td className="px-6 py-4 font-medium ">ICD Codes</td>
                                                <td className="px-6 py-4">
                                                    {medicalDetail.icdCodes}
                                                </td>
                                            </tr>
                                           
                                        </tbody>
                                    </table>
                                </div>
                                 
                            </div>

                            {/* Claim Submission History */}
                            <div className="mb-8">
                                <h2 className="text-xl font-bold mb-6">Claim Submission History:</h2>

                                <div className="border border-gray-300 rounded-lg overflow-hidden">
                                    <table className="w-full">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 font-medium text-left border-b border-gray-200">Round</th>
                                                <th className="px-6 py-3 font-medium text-left border-b border-gray-200">Date</th>
                                                <th className="px-6 py-3 font-medium text-left border-b border-gray-200">Claim ID</th>
                                                <th className="px-6 py-3 font-medium text-left border-b border-gray-200">{`Amount (AED)`}</th>
                                                <th className="px-6 py-3 font-medium text-left border-b border-gray-200">Rejection Reason</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {claimSubmission.claimAttempts?.map((data, idx) => <tr key={idx} className="border-b border-gray-200">
                                                <td className="px-6 py-4">{idx + 1}</td>
                                                <td className="px-6 py-4">{data.date}</td>
                                                <td className="px-6 py-4">{data.claimId}</td>
                                                <td className="px-6 py-4">{data.claimAmount}</td>
                                                <td className="px-6 py-4">{data.rejectionCode}</td>
                                            </tr>)}

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Denial & Appeal Process */}
                            <div>
                                <h2 className="text-xl font-bold mb-6">Denial & Appeal Process:</h2>

                                <div className="border border-gray-300 rounded-lg overflow-hidden">
                                    <table className="w-full">
                                        <tbody>
                                            <tr className="border-b border-gray-200">
                                                <td className="px-6 py-4 font-medium  w-1/4">Denial ID</td>
                                                <td className="px-6 py-4 w-1/4">{denial?.denialId}</td>
                                                <td className="px-6 py-4 font-medium  w-1/4">Denial Code</td>
                                                <td className="px-6 py-4 w-1/4">{denial?.denialCode}</td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 font-medium ">Denial Amount</td>
                                                <td className="px-6 py-4">{denial?.denialAmount}</td>
                                                <td className="px-6 py-4 font-medium ">Status</td>
                                                <td className="px-6 py-4">{denial?.claimId}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <MedicalRecords title="Medical Records" Icon={Paperclip}>
                    <div className="space-y-3">
                        {patient?.attachments?.map((data, key) => (
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
                                        // onClick={() => setSelectedImage(img.src)}
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

    </div>)
}