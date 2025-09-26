"use client";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { DashboardLayout } from "@/components/dashboard-layout";
import {
  Check,
  ChevronDown,
  Download,
  Filter,
  Search,
  Users,
  X,
} from "lucide-react";
import { PatientTableRow } from "@/types/patient";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "@/lib/dateformate";
import AlertModal from "@/components/AlertModal";
import { markPatientSubmitted } from "@/store/slice/Patient";
import { AgentContext } from "../layout";
import { NoPatientFound } from "@/components/NoPatientFound";

const RedirectPage = () => {
  const router = useRouter();
  const { agent } = useContext(AgentContext);

  const list = useSelector((state: RootState) => state.patientlist);
   const [patients, setPatients] = useState<PatientTableRow[]>([]);

  useEffect(() => {
    setPatients(
      list
        .filter((i) => i.isSubmitted === false)
        .map((i) => ({
          id: i.id,
          surname: i.profile.surname,
          name: i.profile.name,
          age: i.profile.age,
          agents: i.agentDetails?.agents || [],
          agentSuggestion: i.agentDetails?.agentSuggestion || "",
          cot: i.agentDetails?.coT || "",
          lastUpdated: new Date(i.profileCreatedDate).toISOString(),
          selected: false,
        }))
    );
  }, [list]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSuggestions, setSelectedSuggestions] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("latest");
  const [showSuggestionFilter, setShowSuggestionFilter] = useState(false);

  // Get unique agent suggestions for filter
  const uniqueSuggestions = useMemo(() => {
    // Flatten all patient.agents arrays into one big array
    const allAgents = patients.flatMap((p) => p?.agents ?? []);
    // Remove duplicates using Set
    return Array.from(new Set(allAgents));
  }, [patients]);


  // Filter and sort patients
  const filteredAndSortedPatients = useMemo(() => {
    const filtered = patients.filter((patient) => {
      const matchesSearch =
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.id.includes(searchTerm);

      const matchesFilter =
        selectedSuggestions.length === 0 ||
        // check if ANY of the patient's agentIssue values match a selected suggestion
        patient?.agents.some((issue) => selectedSuggestions.includes(issue));

      return matchesSearch && matchesFilter;
    });

    // Sort patients
    filtered.sort((a, b) => {
      const aTime = new Date(a.lastUpdated).getTime();
      const bTime = new Date(b.lastUpdated).getTime();

      switch (sortBy) {
        case "latest":
          return bTime - aTime; // newest first
        case "oldest":
          return aTime - bTime; // oldest first
        case "roi":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [patients, searchTerm, selectedSuggestions, sortBy]);


  // Handle row selection
  const handleRowSelect = useCallback((patientId: string) => {
    setPatients((prev) =>
      prev.map((p) =>
        p.id === patientId ? { ...p, selected: !p.selected } : p
      )
    );
  }, []);

  // Handle select all
  const handleSelectAll = useCallback(
    (checked: boolean) => {
      setPatients((prev) =>
        prev.map((p) =>
          filteredAndSortedPatients.some((fp) => fp.id === p.id)
            ? { ...p, selected: checked }
            : p
        )
      );
    },
    [filteredAndSortedPatients]
  );

  const toggleSuggestionFilter = useCallback((suggestion: string) => {
    setSelectedSuggestions((prev) =>
      prev.includes(suggestion)
        ? prev.filter((s) => s !== suggestion)
        : [...prev, suggestion]
    );
  }, []);

  useEffect(() => {
    if (agent && patients.length > 0) {
      toggleSuggestionFilter(agent);
    }
  }, [agent, patients])

  // Clear filters
  const clearFilters = useCallback(() => {
    setSelectedSuggestions([]);
    setSearchTerm("");
  }, []);

  // Utility to download CSV
  const downloadCSV = (rows: PatientTableRow[]) => {
    if (rows.length === 0) return;

    const headers = [
      "MRN",
      "Name",
      "Surname",
      "Age",
      "Agent",
      "Agent Suggestion",
      "CoT",
      "Last Updated",
    ];

    // Build CSV rows safely
    const csvRows = filteredAndSortedPatients
      .filter((i) => i.selected)
      .map((p) =>
        [
          p.id,
          p.name,
          p.surname,
          p.age,
          p.agents,
          `${p.agentSuggestion}`,
          p.cot,
          p.lastUpdated,
        ]
          .map((field) => `"${String(field).replace(/"/g, '""')}"`) // escape quotes
          .join(",")
      );

    const csvContent = [headers.join(","), ...csvRows].join("\r\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "patients.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const selectedCount = patients.filter((p) => p.selected).length;
  const allSelected = patients.length > 0 && selectedCount === patients.length;
  const someSelected = selectedCount > 0 && selectedCount < patients.length;
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [singleSelect, setSingleSelect] = useState("");
  const [modal, setModal] = useState("");
  const route = useRouter();
  const dispatch = useDispatch();
  return (
    <DashboardLayout>
      <div
        className={`flex-1 flex min-h-screen flex-col lg:ml-0 rounded-xl bg-white`}
      >
        <div className="border-b  border-patient">
          <div className="max-w-345 xl:mx-auto flex gap-3 items-center py-6">
            <Users className="w-4 h-4" />
            <h1 className="font-semibold text-xl">Patient List</h1>
          </div>
        </div>

        <main className="size-full max-w-345 xl:mx-auto  ">
          {/* Controls */}
          <div className="flex  justify-between items-center-safe md:flex-row gap-4 py-6">
            <div className="flex justify-between items-center-safe flex-1">
              <div>
                {/* Selection info */}
                {selectedCount > 0 && (
                  <div className="flex items-center items-center-safe gap-4 ">
                    <X
                      className="w-5 h-5"
                      onClick={() => handleSelectAll(false)}
                    />

                    <span className="text-sm text-gray-700">
                      {selectedCount} selected
                    </span>
                    <Download
                      className="w-5 h-5"
                      onClick={() =>
                        downloadCSV(
                          patients.filter((p) => p.selected) // download selected patients
                        )
                      }
                    />
                  </div>
                )}
              </div>
              <div>
                {/* Active filters */}
                {(selectedSuggestions.length > 0 || searchTerm) && (
                  <div className="flex flex-wrap gap-2 ">
                    {searchTerm && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-foreground text-green  border-green border rounded-full text-sm">
                        Search: {searchTerm}
                        <button
                          onClick={() => setSearchTerm("")}
                          className="hover:bg-blue-200 rounded-full p-0.5"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    )}
                    {selectedSuggestions.map((suggestion) => (
                      <span
                        key={suggestion}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-primary-foreground text-green  border-green border rounded-full text-sm"
                      >
                        {suggestion}
                        <button
                          onClick={() => toggleSuggestionFilter(suggestion)}
                          className="hover:bg-teal-200 rounded-full p-0.5"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                    {/* <button
                      onClick={clearFilters}
                      className="text-sm text-gray-600 hover:text-gray-800 underline"
                    >
                      Clear all
                    </button> */}
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              {/* Agent Suggestion Filter */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowSortMenu(false);
                    setShowSuggestionFilter(!showSuggestionFilter);
                  }}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 "
                >
                  <Filter className="h-4 w-4" />
                  Filter
                  {/* {selectedSuggestions.length > 0 && (
                    <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">
                      {selectedSuggestions.length}
                    </span>
                  )} */}
                  <ChevronDown className="h-4 w-4" />
                </button>

                {showSuggestionFilter && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-lg z-10  cursor-pointer">
                    <div className="p-2 max-h-60 overflow-y-auto">
                      {uniqueSuggestions.map((suggestion) => (
                        <label
                          key={suggestion}
                          onClick={() => toggleSuggestionFilter(suggestion)}
                          className="flex items-center gap-3 p-2 hover:bg-[#EFF7F6] rounded cursor-pointer"
                        >
                          {/* <input
                            type="checkbox"
                            checked={selectedSuggestions.includes(suggestion)}
                            onChange={() => toggleSuggestionFilter(suggestion)}
                            className="h-4 w-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500"
                          /> */}
                          <div
                            className={`w-5 h-5 flex items-center justify-center border rounded cursor-pointer
        ${selectedSuggestions.includes(suggestion)
                                ? "checkbox"
                                : "bg-white border-gray-400"
                              }`}
                          >
                            {selectedSuggestions.includes(suggestion) && (
                              <Check size={14} className="text-white" />
                            )}
                          </div>
                          <span className="text-sm text-gray-700">
                            {suggestion}
                          </span>
                        </label>
                      ))}
                    </div>
                    {selectedSuggestions.length > 0 && (
                      <div className="p-3 border-t border-gray-200">
                        <button
                          onClick={() => setSelectedSuggestions([])}
                          className="text-sm text-teal-600 hover:text-teal-700"
                        >
                          Clear all filters
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Sort */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowSuggestionFilter(false);

                    setShowSortMenu(!showSortMenu);
                  }}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50  cursor-pointer"
                >
                  {sortBy === "latest"
                    ? "Newest"
                    : sortBy === "oldest"
                      ? "Oldest"
                      : "ROI"}
                  <ChevronDown className="h-4 w-4" />
                </button>

                {showSortMenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 p-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <div className="flex flex-col gap-1">
                      <button
                        onClick={() => {
                          setSortBy("latest");
                          setShowSortMenu(false);
                        }}
                        className={`px-4 py-2 text-left rounded-lg hover:bg-[#EFF7F6] ${sortBy === "latest" ? "bg-[#E8E2DB] font-medium" : ""
                          }`}
                      >
                        Newest
                      </button>
                      <button
                        onClick={() => {
                          setSortBy("oldest");
                          setShowSortMenu(false);
                        }}
                        className={`px-4 py-2 text-left rounded-lg hover:bg-[#EFF7F6] ${sortBy === "oldest" ? "bg-[#E8E2DB] font-medium" : ""
                          }`}
                      >
                        Oldest
                      </button>
                      <button
                        onClick={() => {
                          setSortBy("roi");
                          setShowSortMenu(false);
                        }}
                        className={`px-4 py-2 text-left rounded-lg hover:bg-[#EFF7F6] ${sortBy === "roi" ? "bg-[#E8E2DB] font-medium" : ""
                          }`}
                      >
                        ROI
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-2 border-gray-300 rounded-lg search-bar"
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border border-gray-200 rounded-lg mb-10">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="">
                <tr>
                  <th className=" pl-3 py-2">
                    {/* <input
                      type="checkbox"
                      checked={allSelected}
                      ref={(el) => {
                        if (el) el.indeterminate = someSelected;
                      }}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      className="h-4 w-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500"
                    /> */}

                    <div
                      onClick={(e) =>
                        handleSelectAll(allSelected ? false : true)
                      }
                      className={`w-5 h-5 flex items-center justify-center border rounded cursor-pointer
        ${allSelected ? "checkbox" : "bg-white border-gray-400"}`}
                    >
                      {allSelected && (
                        <Check size={14} className="text-white" />
                      )}
                    </div>
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold w-32">
                    Patient Name
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold">
                    MRN
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold">
                    Agent
                  </th>

                  <th className="px-4 py-4 text-left text-sm font-semibold">
                    Agent Suggestion
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold">
                    CoT (Why flagged)
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold">
                    Last Updated
                  </th>
                  <th className="px-4 py-4 text-left text-sm font-semibold">
                    {/* Action */}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAndSortedPatients.map((patient) => {
                  return (
                    <tr
                      key={patient.id}
                      className={`cursor-pointer transition-colors duration-20 patient-list hover:bg-[#EFF7F6] ${patient.selected ? "selected" : ""
                        }`}
                    >
                      <td className="pl-3 py-2">
                        {/* <input
                          type="checkbox"
                          checked={patient.selected}
                          onChange={(e) => handleRowSelect(patient.id, e.target.checked)}
                          className="h-4 w-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500"
                        /> */}
                        <div
                          onClick={(e) => handleRowSelect(patient.id)}
                          className={`w-5 h-5 flex items-center justify-center border rounded cursor-pointer
        ${patient.selected ? "checkbox" : "bg-white border-gray-400"}`}
                        >
                          {patient.selected && (
                            <Check size={14} className="text-white" />
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm  max-w-[170px]">
                        {patient.name} {patient.surname}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm ">
                        {patient.id}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm  ">
                        <div className="flex flex-col gap-2">
                          {patient.agents && patient.agents.map((i, idx) => <span
                            key={idx}
                            className={`border text-center bg-white rounded-2xl py-1 px-3 ${i.toLowerCase()}-border`}
                          >
                            {i}
                          </span>)}
                        </div>

                      </td>

                      <td className="px-4 py-3 text-sm  max-w-xs ">
                        {patient.agentSuggestion}
                      </td>
                      <td className="px-4 py-3 text-sm  max-w-sm">
                        {patient.cot}
                      </td>
                      <td className="px-4 py-3  text-sm ">
                        {formatDate(patient.lastUpdated)}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm ">
                        <div className="flex justify-between items-center w-15">
                          <Link href={`/patient/${patient.id}`}>
                            <Search className="h-4 w-4" strokeWidth={1.5} />
                          </Link>
                          <button
                            className={`cursor-pointer ${patient.selected ? 'opacity-0' : ''}`}
                            disabled={patient.selected}
                            onClick={() => {
                              setSingleSelect(patient.id);
                              setModal("accept");
                              // dispatch(markPatientSubmitted(row.id));
                            }}
                          >
                            <Check className="h-4 w-4" strokeWidth={1.5} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          
        </main>
        <div>
          {filteredAndSortedPatients.length > 0 && <div className="flex justify-end mb-10">
            <button
              className={` text-white px-6 py-2 rounded-lg  ${selectedCount > 0 ? "bg-green" : "bg-[#F5F2EF]"
                }`}
              onClick={() => setModal("accept")}
              disabled={selectedCount > 0 ? false : true}
            >
              Accept
            </button>
          </div>}

          {filteredAndSortedPatients.length <= 5 && filteredAndSortedPatients.length > 0 && (
            <div className="vectorbg m-4"> <div className="nopatientcard p-10 rounded-2xl mt-40">
              <h1 className="text-4xl mackinac pb-4 mt-4">Together, we saved ~3.2 hours today. Only {filteredAndSortedPatients.length} cases left for today</h1>
            </div></div>
          )}
          {filteredAndSortedPatients.length === 0 && (
            <NoPatientFound />
          )}
        </div>
      </div>
      <AlertModal open={modal === "accept"} onClose={() => setModal("")}>
        <div>
          <div className="font-semibold text-lg mb-2 text-base-primary">
            Accept Confirmation
          </div>
          <div className="text-muted mb-6">
            Are you sure you want to accept this patient? This action cannot be
            undone.
          </div>
          <div className="flex justify-end gap-4">
            <button
              className="border rounded-xl px-5 py-2 text-base-primary bg-white"
              onClick={() => {
                setModal("");
                setSingleSelect("");
              }}
            >
              No
            </button>
            <button
              className="rounded-xl px-5 py-2 text-white bg-green"
              onClick={() => {
                patients
                  .filter((row) => row.selected)
                  .forEach((row) => {
                    dispatch(markPatientSubmitted(row.id));
                  });
                if (singleSelect) {

                  dispatch(markPatientSubmitted(singleSelect));
                }
                setSingleSelect("");
                setModal("");
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </AlertModal>
    </DashboardLayout>
  );
};

export default RedirectPage;
