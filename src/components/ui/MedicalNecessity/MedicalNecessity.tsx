import { PatientPersona } from "@/types/patient"
import InfoCard from "../InfoCard";
import { ErrorCode } from "@/types/error";
import MedicalRecords from "@/components/MedicalRecords";
import { Expand, Icon, Paperclip, Receipt, ReceiptText, SquarePen } from "lucide-react";
import AttachmentCard from "../AttachmentCard";
import AppealLetter from "@/components/AppealLetter";

export const MedicalNecessity : React.FC<{patient: PatientPersona,}> = ({patient}) => {

    const {id, information} = patient;
    return (<div>

         {information?.infoCode && <InfoCard
          title={information?.infoType}
          errorDescription={information?.infoMessage}
          type={information?.infoCode as ErrorCode}
          style={`mb-5`}
        />}

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
                <td className="px-6 py-4 font-medium bg-gray-50 w-1/4">Patient Name</td>
                <td className="px-6 py-4 w-1/4">Nida Al naoumi</td>
                <td className="px-6 py-4 font-medium bg-gray-50 w-1/4">MRN</td>
                <td className="px-6 py-4 w-1/4">10333</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-medium bg-gray-50">Sex/ DoB</td>
                <td className="px-6 py-4">Female • 1985-07-21</td>
                <td className="px-6 py-4 font-medium bg-gray-50">Nationality / Language</td>
                <td className="px-6 py-4">UAE • Arabic</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-medium bg-gray-50">Contact</td>
                <td className="px-6 py-4">
                  +97155467830<br />
                  • sara.nuaimi@gmail.com
                </td>
                <td className="px-6 py-4 font-medium bg-gray-50">Insurance</td>
                <td className="px-6 py-4">
                  Daman-AUH-001 • Policy #: 42122566<br />
                  • Coverage: 100% (Network: Yes)
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
                <td className="px-6 py-4 font-medium bg-gray-50 w-1/4">Encounter ID</td>
                <td className="px-6 py-4 w-1/4">ENC-2025-0789</td>
                <td className="px-6 py-4 font-medium bg-gray-50 w-1/4">Encounter Type</td>
                <td className="px-6 py-4 w-1/4">Outpatient</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-medium bg-gray-50">Date</td>
                <td className="px-6 py-4">2025-10-20</td>
                <td className="px-6 py-4 font-medium bg-gray-50">Department</td>
                <td className="px-6 py-4">Orthopaedics</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 font-medium bg-gray-50">Physician</td>
                <td className="px-6 py-4">Dr. Al Shamsi</td>
                <td className="px-6 py-4 font-medium bg-gray-50">Drug Codes</td>
                <td className="px-6 py-4">NDC-0002</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium bg-gray-50">CPT Codes</td>
                <td className="px-6 py-4">99213 (Office/outpatient visit, established patient)</td>
                <td className="px-6 py-4 font-medium bg-gray-50">ICD Codes</td>
                <td className="px-6 py-4">M23.2 (Derangement of meniscus, unspecified)</td>
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
                <th className="px-6 py-3 font-medium text-left border-b border-gray-200">Amount</th>
                <th className="px-6 py-3 font-medium text-left border-b border-gray-200">Rejection Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">2025-10-20</td>
                <td className="px-6 py-4">20251020-C01</td>
                <td className="px-6 py-4">836 AED</td>
                <td className="px-6 py-4">F14 – Medical Necessity Denial</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4">2025-10-25</td>
                <td className="px-6 py-4">20251025-C02</td>
                <td className="px-6 py-4">836 AED</td>
                <td className="px-6 py-4">-</td>
              </tr>
              <tr>
                <td className="px-6 py-4">3</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">-</td>
              </tr>
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
                <td className="px-6 py-4 font-medium bg-gray-50 w-1/4">Denial ID</td>
                <td className="px-6 py-4 w-1/4">DEN-5201</td>
                <td className="px-6 py-4 font-medium bg-gray-50 w-1/4">Denial Code</td>
                <td className="px-6 py-4 w-1/4">D12 – Medical Necessity</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium bg-gray-50">Denial Amount</td>
                <td className="px-6 py-4">836 AED</td>
                <td className="px-6 py-4 font-medium bg-gray-50">Status</td>
                <td className="px-6 py-4">Pending physician documentation</td>
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
                       {patient?.medicalReports?.map((data, key) => (
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