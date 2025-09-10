"use client";

import AlertModal from "@/components/AlertModal";
import { DashboardLayout } from "@/components/dashboard-layout";
import { RootState } from "@/store";
import { PatientPersona } from "@/types/patient";
import { Search, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

type IdentifierForm = {
  identifier: string;
};

type DetailsForm = {
  surname: string;
  firstName: string;
  dob: string;
};

export default function SearchPatient() {
  const [tab, setTab] = useState<"identifier" | "details">("identifier");
  const patientList = useSelector((state: RootState) => state.patientlist);
  const [results, setResults] = useState<PatientPersona[]>([]);
  const [modal, setModal] = useState("");
  const route = useRouter();

  const {
    register: registerIdentifier,
    handleSubmit: handleIdentifierSubmit,
    formState: { errors: identifierErrors },
    reset: resetIdentifier,
  } = useForm<IdentifierForm>();

  const {
    register: registerDetails,
    handleSubmit: handleDetailsSubmit,
    formState: { errors: detailsErrors },
    reset: resetDetails,
  } = useForm<DetailsForm>();

  const onSubmitIdentifier = (data: IdentifierForm) => {
    const patient: PatientPersona[] = patientList.filter(
      (p) =>
        p.id === data.identifier || p.profile.emiratesId === data.identifier
    );
    if (patient.length) {
      route.push(`/patient/${patient[0].id}`);
    } else {
      setModal("open");
    }
  };

  const onSubmitDetails = (data: DetailsForm) => {
    const patient: PatientPersona[] = patientList.filter(
      (p) =>
        (data.surname
          ? p.profile.surname.toLowerCase() === data.surname.toLowerCase()
          : true) &&
        (data.firstName
          ? p.profile.name.toLowerCase() === data.firstName.toLowerCase()
          : true) &&
        (data.dob ? p.profile.dateOfBirth === data.dob : true)
    );

    if (patient.length) {
      route.push(`/patient/${patient[0].id}`);
    } else {
      setModal("open");
    }
  };

  const handleTabChange = (t: "identifier" | "details") => {
    setTab(t);
    resetIdentifier();
    resetDetails();
    setResults([]);
  };

  return (
    <DashboardLayout>
      <div className="flex min-h-[100vh] comingsoon-bg items-center justify-center w-full mr-[-24px] rounded-xl">
        <main className="size-full max-w-345 xl:mx-auto">
          <div className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-[380px]">
              <div className="text-center mb-6">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full border">
                  <User className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h1 className="text-3xl font-semibold my-3">Search Patient</h1>
                <p className="text-gray-500 text-sm max-w-[270px] m-auto">
                  {tab === "identifier"
                    ? "Let’s get started. Enter the patient’s Emirate ID or MRN below to continue."
                    : "Let’s get started. Please fill in the details below to find the patient."}
                </p>
              </div>

              {/* Tabs */}
              <div className="flex mb-6 rounded-lg p-1 overflow-hidden bg-base-muted">
                <button
                  onClick={() => handleTabChange("identifier")}
                  className={`flex-1 py-2 text-sm font-medium rounded-lg ${
                    tab === "identifier" ? "bg-white" : "text-muted"
                  }`}
                >
                  Unique Identifier
                </button>
                <button
                  onClick={() => handleTabChange("details")}
                  className={`flex-1 py-2 text-sm font-medium rounded-lg ${
                    tab === "details" ? "bg-white" : "text-muted"
                  }`}
                >
                  Patient Details
                </button>
              </div>

              {/* Identifier Form */}
              {tab === "identifier" && (
                <form
                  onSubmit={handleIdentifierSubmit(onSubmitIdentifier)}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Emirate ID / MRN
                    </label>
                    <input
                      type="text"
                      {...registerIdentifier("identifier", {
                        required: "Identifier is required",
                        minLength: {
                          value: 3,
                          message: "Must be at least 3 characters",
                        },
                      })}
                      className="w-full rounded-lg border border-gray-300 p-3"
                    />
                    {identifierErrors.identifier && (
                      <p className="text-red-500 text-sm mt-1">
                        {identifierErrors.identifier.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="mt-6 w-full rounded-lg flex gap-2 justify-center bg-[#212D45] text-white py-2 px-4 items-center cursor-pointer h-10"
                  >
                    <Search className="w-4 h-4" strokeWidth={1.5} /> Search
                  </button>
                </form>
              )}

              {/* Details Form */}
              {tab === "details" && (
                <form
                  onSubmit={handleDetailsSubmit(onSubmitDetails)}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Surname
                    </label>
                    <input
                      type="text"
                      {...registerDetails("surname", {
                        required: "Surname is required",
                      })}
                      className="w-full rounded-lg border border-gray-300 p-3"
                    />
                    {detailsErrors.surname && (
                      <p className="text-red-500 text-sm mt-1">
                        {detailsErrors.surname.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      {...registerDetails("firstName", {
                        required: "First name is required",
                      })}
                      className="w-full rounded-lg border border-gray-300 p-3"
                    />
                    {detailsErrors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {detailsErrors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      {...registerDetails("dob", {
                        required: "Date of birth is required",
                      })}
                      className="w-full rounded-lg border border-gray-300 p-3"
                    />
                    {detailsErrors.dob && (
                      <p className="text-red-500 text-sm mt-1">
                        {detailsErrors.dob.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="mt-6 w-full rounded-lg flex gap-2 justify-center bg-[#212D45] text-white py-2 px-4 items-center cursor-pointer h-10"
                  >
                    <Search className="w-4 h-4" strokeWidth={1.5} /> Search
                  </button>
                </form>
              )}

              {/* Results */}
              {/* <div className="mt-6">
                {results.length > 0 ? (
                  <ul className="space-y-2">
                    {results.map((r) => (
                      <li
                        key={r.id}
                        className="rounded-lg border border-gray-200 p-4 shadow-sm bg-gray-50"
                      >
                        <p>
                          <span className="font-semibold">ID:</span> {r.id}
                        </p>
                        <p>
                          <span className="font-semibold">Name:</span>{" "}
                          {r.firstName} {r.surname}
                        </p>
                        <p>
                          <span className="font-semibold">DOB:</span> {r.dob}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 text-center">No results found.</p>
                )}
              </div> */}
            </div>
          </div>
        </main>
      </div>

      <AlertModal
        open={modal === "open"}
        onClose={() => {
          resetIdentifier();
          resetDetails();
          setModal("");
        }}
      >
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
              className="rounded-xl px-5 py-2 text-white bg-green"
              onClick={() => {
                resetIdentifier();
                resetDetails();
                setModal("");
              }}
            >
              Ok
            </button>
          </div>
        </div>
      </AlertModal>
    </DashboardLayout>
  );
}
