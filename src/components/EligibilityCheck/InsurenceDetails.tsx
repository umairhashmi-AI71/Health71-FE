"use client";

import { useCallback, useContext, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Paperclip, Send, Shield, ShieldCheck, Upload } from "lucide-react";
import TabCard from "../ui/TabCard";
import AttachmentGrid from "@/app/home/AttachmentGrid";
import {
  Attachment,
  InsuranceFullDetailsData,
  PatientPersona,
} from "@/types/patient";
import AttachmentCard from "../ui/AttachmentCard";
import { RootState } from "@/store";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import InfoCard from "../ui/InfoCard";
import { ErrorCode } from "@/types/error";
import SupportingDocs from "../ui/SupportingDocs";
import { changePatientStatus, updateInsurence } from "@/store/slice/Patient";
import { AgentContext } from "@/app/layout";

export default function InsuranceDetails() {
  const params = useParams();
  const patients: PatientPersona = useSelector(
    (state: RootState) =>
      state.patientlist.find((p) => p.id === params.id) as PatientPersona
  );

  const [formData, setFormData] = useState<InsuranceFullDetailsData>({
    provider: patients?.insuranceDetailsForm?.provider || '',
    policyNumber: patients?.insuranceDetailsForm?.policyNumber || '',
    identificationType: patients.insuranceDetailsForm?.identificationType || '',
    identificationNumber: patients.insuranceDetailsForm?.identificationNumber || '',
    clinician: patients.insuranceDetailsForm?.clinician || '',
    serviceCategory: patients.insuranceDetailsForm?.serviceCategory || '',
    portalUrl: patients.insuranceDetailsForm?.portalUrl || '',
    planType: patients.insuranceDetailsForm?.planType || '',
    coverageStart: patients.insuranceDetailsForm?.coverageStart || '',
    coverageEnd: patients.insuranceDetailsForm?.coverageEnd || '',
    department: patients.insuranceDetailsForm?.department || '',
    paymentdateserviceDate: patients.insuranceDetailsForm?.paymentdateserviceDate || '',
    paymentdate: patients.insuranceDetailsForm?.paymentdate || '',
    paymentmethod: patients.insuranceDetailsForm?.paymentmethod || '',

  }
  );

  const [isDisable, setisDisable] = useState(
    patients.eligibilityCheck.insuranDetials.error == "coverage" ? true : false
  );
  const { modal, changeModal } = useContext(AgentContext);
  const [contact, setcontact] = useState(false);
  const changeHandel = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [docs, setDocs] = useState<Record<string, File | null>>({
    Abbreviation: null,
    Exclusion: null,
    SoB: null,
  });

  const dispatch = useDispatch();

  const handleFileChange = useCallback(
    (doc: string, event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0] || null;
      setDocs((prev) => ({ ...prev, [doc]: file }));
    },
    []
  );
  const handleSubmit = async () => {
    setisDisable(true);
    dispatch(
      updateInsurence({
        patientId: patients.id,
        insuranceDetailsForm: formData,
      })
    );

    if (patients.id == "483920") {
      setcontact(true);
      dispatch(
        changePatientStatus({
          patientId: patients.id,
          status: "notvalid",
          step: "eligibilityCheck",
        })
      );
    } else if (patients.id == "762145") {
      dispatch(
        changePatientStatus({
          patientId: patients.id,
          status: "valid",
          step: "eligibilityCheck",
        })
      );
    }

    // try {
    //   const data = new FormData();

    //   // Append form fields
    //   Object.entries(formData).forEach(([key, value]) => {
    //     data.append(key, value);
    //   });

    //   // Append files
    //   Object.entries(docs).forEach(([key, file]) => {
    //     if (file) data.append(key, file);
    //   });

    //   const res = await fetch("/api/insurance-check", {
    //     method: "POST",
    //     body: data,
    //   });
    //   console.log(data)

    //   if (!res.ok) throw new Error("Upload failed");

    //   const result = await res.json();
    //   console.log("✅ Success:", result);
    // } catch (err) {
    //   console.error("❌ Error uploading:", err);
    // }
  };

  return (
    <>
      {patients.eligibilityCheck.status == "valid" && (
        <InfoCard
          title={"Eligibility Verified"}
          errorDescription={
            "Manual eligibility verified. Patient contacted — proceeding to prior authorization and appointment booking."
          }
          type={"test" as ErrorCode}
          style={`mb-5`}
        />
      )}
      {patients.eligibilityCheck.status != "valid" && patients.information && (
        <InfoCard
          title={patients.information.infoType}
          errorDescription={patients.information.infoMessage}
          type={patients.information.infoCode as ErrorCode}
          style={`mb-5`}
        />
      )}
      <div className="grid grid-cols-[70%_1fr] gap-4 insurance-detials">
        {/* Insurance and Encounter Details */}

        <div>
          <TabCard title="Insurance and Encounter Details" Icon={Paperclip}>
            <div className="grid grid-cols-2 gap-4 p-6">
              {/* Provider + Policy Number */}
              <div>
                <label className="block text-sm font-medium">
                  Insurance Provider Name
                </label>
                <input
                  onChange={(e) => changeHandel(e)}
                  name="provider"
                  disabled={isDisable}
                  type="text"
                  value={formData.provider}
                  className="w-full border border-base rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Policy Number
                </label>
                <input
                  onChange={(e) => changeHandel(e)}
                  disabled={isDisable}
                  name="policyNumber"
                  type="text"
                  value={formData.policyNumber}
                  className="w-full border border-base rounded-lg p-2"
                />
              </div>

              {/* Identification */}
              <div>
                <label className="block text-sm font-medium">
                  Identification Type
                </label>
                <select
                  className="w-full border border-base rounded-lg p-2"
                  value={formData.identificationType}
                  onChange={(e) => changeHandel(e)}
                  disabled={isDisable}
                  name="identificationType"
                >
                  <option value={"Passport ID"}>Passport ID</option>
                  <option value={"National ID"}>National ID</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Identification Number
                </label>
                <input
                  onChange={(e) => changeHandel(e)}
                  disabled={isDisable}
                  name="eid"
                  type="text"
                  className="w-full border border-base rounded-lg p-2"
                  placeholder="Enter ID number"
                />
              </div>

              {/* Clinician + Service Category */}
              <div>
                <label className="block text-sm font-medium">Clinician</label>
                <input
                  onChange={(e) => changeHandel(e)}
                  disabled={isDisable}
                  name="clinician"
                  type="text"
                  value={formData.clinician}
                  className="w-full border border-base rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Service Category
                </label>
                <input
                  onChange={(e) => changeHandel(e)}
                  disabled={isDisable}
                  name="serviceCategory"
                  type="text"
                  value={formData.serviceCategory}
                  className="w-full border border-base rounded-lg p-2"
                />
              </div>

              {/* Plan + Portal */}
              <div>
                <label className="block text-sm font-medium">Plan Type</label>
                <select
                  className="w-full border border-base rounded-lg p-2"
                  value={formData.planType}
                  name="planType"
                  onChange={(e) => changeHandel(e)}
                  disabled={isDisable}
                >
                  <option value={"Enhanced Silver"}>Enhanced Silver</option>
                  <option value={"Basic"}>Basic</option>
                  <option value={"Gold"}>Gold</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Portal URL (if foreign insurance)
                </label>
                <input
                  onChange={(e) => changeHandel(e)}
                  disabled={isDisable}
                  name="portalUrl"
                  type="text"
                  value={formData.portalUrl}
                  className="w-full border border-base rounded-lg p-2"
                />
              </div>

              {/* Dates */}
              <div>
                <label className="block text-sm font-medium">
                  Coverage Start Date
                </label>
                <input
                  onChange={(e) => changeHandel(e)}
                  disabled={isDisable}
                  name="coverageStart"
                  type="date"
                  value={formData.coverageStart}
                  className="w-full border border-base rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Coverage End Date
                </label>
                <input
                  onChange={(e) => changeHandel(e)}
                  disabled={isDisable}
                  name="coverageEnd"
                  type="date"
                  value={formData.coverageEnd}
                  className="w-full border border-base rounded-lg p-2"
                />
              </div>

              {/* Department + Service Date */}
              <div>
                <label className="block text-sm font-medium">
                  Treating Provider / Department
                </label>
                <input
                  onChange={(e) => changeHandel(e)}
                  disabled={isDisable}
                  name="department"
                  type="text"
                  value={formData.department}
                  className="w-full border border-base rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Intended Date of Service
                </label>
                <input
                  onChange={(e) => changeHandel(e)}
                  disabled={isDisable}
                  name="paymentdateserviceDate"
                  type="date"
                  value={formData.paymentdateserviceDate}
                  className="w-full border border-base rounded-lg p-2"
                />
              </div>
            </div>
            {patients.eligibilityCheck.status == 'noteligible' && <div>
              <h2 className="px-6 text-lg font-semibold">Payment/Self-Pay Details</h2>
              <div className="grid grid-cols-2 gap-4 p-6">
                <div>
                  <label className="block text-sm font-medium">
                    Payment Method
                  </label>
                  <input
                    onChange={(e) => changeHandel(e)}
                    name="paymentmethod"
                    disabled={isDisable}
                    type="text"
                    value={formData.paymentmethod}
                    className="w-full border border-base rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Date
                  </label>
                  <input
                    onChange={(e) => changeHandel(e)}
                    disabled={isDisable}
                    name="paymentdate"
                    type="text"
                    value={formData.paymentdate}
                    className="w-full border border-base rounded-lg p-2"
                  />
                </div>
              </div>
            </div>}
          </TabCard>

          <div className="col-span-2 flex justify-end mt-5">
            {!isDisable && (
              <button
                className="flex items-center gap-2 cursor-pointer rounded-lg bg-[#AFD8D4] py-2 px-4"
                onClick={() => handleSubmit()}
              >
                <ShieldCheck
                  className="w-4 h-4"
                  strokeWidth={1.5}
                  onClick={() => { }}
                />{" "}
                Insurance Check
              </button>
            )}
            {patients.eligibilityCheck.status == "notvalid" && (
              <button
                className="flex items-center gap-2 cursor-pointer rounded-lg bg-[#AFD8D4] py-2 px-4"
                onClick={() => changeModal("contactoop")}
              >
                <Send className="w-4 h-4" strokeWidth={1.5} />
                Contact Patient
              </button>
            )}
          </div>
        </div>
        <div>
          <TabCard title="Supporting Documentation" Icon={Paperclip}>
            {isDisable ? (
              [
                {
                  fileName: "SOB.pdf",
                  fileSize: "200 KB",
                  ecgImageUrl: "/sob.pdf",
                },
                {
                  fileName: "Policy.pdf",
                  fileSize: "150 KB",
                  ecgImageUrl: "/policy.pdf",
                },
                {
                  fileName: "Exclusion.pdf",
                  fileSize: "150 KB",
                  ecgImageUrl: "/exclusion.pdf",
                },
              ].map((i) => (
                <div className="mb-4" key={i.fileName}>
                  <AttachmentCard
                    ecgImageUrl={i.ecgImageUrl}
                    fileName={i.fileName}
                    fileSize={i.fileSize}
                  />
                </div>
              ))
            ) : (
              <SupportingDocs />
            )}
          </TabCard>
        </div>

        {/* Action Button */}
      </div>
    </>
  );
}
