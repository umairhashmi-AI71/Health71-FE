"use client";

import AgentCard from "@/components/AgentCard";
import Breadcrumb from "@/components/Breadcrumb";
import { DashboardLayout } from "@/components/dashboard-layout";

import {
  ClipboardCheck,
  Flag,
  Zap,
  ShieldCheck,
  ShieldX,
  AlertCircle,
  SquareCheck,
  NotepadText,
  Binary,
  Mailbox,
  Text,
  ClipboardX,
  Check,
  Banknote,
} from "lucide-react";
import type { Agent } from "../../types/agent";
import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { AgGridReact } from "ag-grid-react";
import {
  ModuleRegistry,
  AllCommunityModule,
  SelectionChangedEvent,
  GridApi,
  Column,
  GridReadyEvent,
} from "ag-grid-community";
 
import { PatientTableRow } from "@/types/patient";
import { patientColumnDef } from "./columnDefs";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { markPatientSubmitted } from "@/store/slice/Patient";
import AlertModal from "@/components/AlertModal";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function DashboardPage() {
  const agentData: Agent[] = [
    {
      title: "Eli",
      image: "/eli.png",
      role: "Eligibility Agent",
      savedHours: "~0.5",
      feature: [
        { icon: ClipboardCheck, label: "Verified", count: 24 },
        { icon: Zap, label: "Flagged", count: 234 },
        { icon: Flag, label: "Cleared for Autho"},
      ],
    },
    {
      title: "Autho",
      image: "/autho.svg",
      role: "Prior authorization Agent",
      savedHours: "~0.1",
      feature: [
        { icon: SquareCheck, label: "Prior auto checked", count: 280 },
        { icon: ShieldCheck, label: "Approvals secured", count: 200 },
        { icon: Flag, label: "Require human review", count: 80 },
      ],
    },
    {
      title: "Coda",
      image: "/coda.svg",
      role: "Prior authorization Agent",
      savedHours: "~2.2",
      feature: [
        { icon: NotepadText, label: "Prior auto checked", count: 1400 },
        { icon: Binary, label: "Approvals secured"},
        { icon: Flag, label: "Require human review", count: 280 },
      ],
    },
    {
      title: "Clara",
      image: "/clara.svg",
      role: "Prior authorization Agent",
      savedHours: "~0.3",
      feature: [
        { icon: Mailbox, label: "Prior auto checked", count: 1400 },
        { icon: Text, label: "Approvals secured", count: 70 },
        { icon: Flag, label: "Require human review", },
      ],
    },
    {
      title: "Dee",
      image: "/dee.svg",
      role: "Prior authorization Agent",
      savedHours: "~0.04",
      feature: [
        { icon: ClipboardX, label: "Prior auto checked", count: 260 },
        { icon: Check, label: "Approvals secured", count: 70 },
        { icon: Flag, label: "Require human review", count: 24 },
      ],
    },
    {
      title: "Payne",
      image: "/payne.png",
      role: "Prior authorization Agent",
      savedHours: "~0.1",
      feature: [
        { icon: Mailbox, label: "Prior auto checked", count: 1400 },
        { icon: Banknote, label: "Approvals secured" },
        { icon: Flag, label: "Require human review", count: 140 },
      ],
    },
  ];

  const dispatch = useDispatch();
  const [agents, setAgents] = useState(agentData);
  const [modal, setModal] = useState("");
  let list = useSelector((state: RootState) => state.patientlist);
  const [patients, setPatients] = useState<PatientTableRow[]>();

  list = useSelector((state: RootState) => state.patientlist);

  useEffect(() => {
    setPatients(
      list
        .filter((i) => i.isSubmitted === false)
        .map((i) => ({
          id: i.id,
          surname: i.profile.surname,
          name: i.profile.name,
          age: i.profile.age,
          agentIssue: i.agentDetails?.agentIssue || "",
          agentSuggestion: i.agentDetails?.agentSuggestion || "",
          cot: i.agentDetails?.coT || "",
          date: i.profileCreatedDate,
        }))
    );
  }, [list]);
  const [selectedRows, setSelectedRows] = useState<PatientTableRow[]>([]);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const columnDefs = useMemo(() => patientColumnDef, []);

  // Grid options
  const defaultColDef = useMemo(
    () => ({
      resizable: false,
      sortable: false,
      filter: false,
    }),
    []
  );
  // Handle selection change
  const onSelectionChanged = useCallback((event: SelectionChangedEvent) => {
    const selectedNodes = event.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    setSelectedRows(selectedData);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAgents((prev) =>
        prev.map((agent) => {
          return {
            ...agent,
            feature: agent.feature.map((f) => ({
              ...f,
              count: (f.count ?? 0) + Math.floor(Math.random() * 3),
            })),
          };
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  type SortOption = "newest" | "oldest" | "roi";
  type FilterOption =
    | "all"
    | "eli"
    | "Autho"
    | "Code"
    | "Clara"
    | "Dee"
    | "Payne"
    | "Eligibility";

  const gridRef = useRef<AgGridReact<PatientTableRow[]>>(null);
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [gridApi, setGridApi] = useState<GridApi<PatientTableRow[]> | null>(
    null
  );
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [columnApi, setColumnApi] = useState<Column | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");
  const [showFilterOptions, setShowFilterOptions] = useState<boolean>(false);

  // Toggle filter options
  const toggleFilterOptions = useCallback(() => {
    setShowFilterOptions((prev) => !prev);
    setShowSortOptions(false); // Close sort options when opening filter
  }, []);

  // Grid ready callback
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onGridReady = useCallback((params: any) => {
    setGridApi(params.api);
    setColumnApi(params.columnApi);
  }, []);

  // Sort function using ag-Grid API
  const sortBy = useCallback(
    (option: SortOption) => {
      if (!gridApi) return;

      switch (option) {
        case "newest":
          gridApi.applyColumnState({
            state: [{ colId: "date", sort: "asc" }],
          });
          break;
        case "oldest":
          gridApi.applyColumnState({
            state: [{ colId: "date", sort: "desc" }],
          });
          break;
        case "roi":
          gridApi.applyColumnState({
            state: [{ colId: "date", sort: "asc" }],
          });
          break;
      }
      setShowSortOptions((prev) => !prev);

      setShowOptions(false);
    },
    [gridApi]
  );

  // Filter function using ag-Grid API
  const filterBy = useCallback(
    (option: FilterOption) => {
      
      if (!gridApi) return;

      if (option === "all") {
        gridApi.setFilterModel({});
      } else {
        gridApi.setFilterModel({
          agentIssue: {
            type: "equals",
            filter: option,
          },
        });
      }

      setActiveFilter(option);
      setShowFilterOptions(false);
      setShowOptions(false);
    },
    [gridApi]
  );


  
  return (
    <DashboardLayout>

       <div className={`flex-1 flex min-h-[100vh] flex-col lg:ml-0 rounded-xl bg-white`}>


        <main className="size-full max-w-345 xl:mx-auto ">
          <div className="min-h-full size-full max-w-345 xl:mx-auto">
        <div style={{ marginBottom: "1rem", position: "relative" }}></div>
        <main className="p-6 space-y-6">
          {/* <Breadcrumb /> */}
          <h1 className="text-2xl font-semibold mb-2">Hi Aisha,</h1>
          <p className="text-base text-muted mb-5">
            Together, we saved ~3.2 hours today 🙌. A few cases remain where
            your expertise is required.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            {agents.map((agent, idx) => (
              <AgentCard key={idx} {...agent} />
            ))}
          </div>

          {/* Header */}

          <div className="flex items-center justify-between mb-6 ">
            <h1 className="text-2xl font-semibold text-gray-900">
              Patient List
            </h1>
            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={toggleFilterOptions}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"
                      fill="currentColor"
                    />
                  </svg>
                  Filter
                </button>

                {/* Filter Options Dropdown */}
                {showFilterOptions && (
                  <div
                    className={`absolute top-full right-0 mt-2 w-52 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden transition-all duration-300 ${
                      showFilterOptions
                        ? "opacity-100 visible transform translate-y-0"
                        : "opacity-0 invisible transform -translate-y-2"
                    }`}
                  >
                    <div>
                      <button
                      key="all"
                        onClick={() => filterBy("all")}
                        className={`w-full cursor-pointer text-left px-4 py-2 transition-colors duration-200 flex items-center  hover:bg-gray-100 rounded-lg transition${
                          activeFilter === "all"
                            ? "bg-gray-100"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <span>All</span>
                      </button>
                      {agentData.map((agent) => (
                        <button
                        key={agent.title}
                          onClick={() => filterBy(agent.title as FilterOption)}
                          className={`w-full cursor-pointer text-left px-4 py-3 transition-colors duration-200 flex items-center    hover:bg-gray-100 bg-filter ${
                            activeFilter === agent.title
                              ? "bg-gray-100"
                              : "hover:bg-gray-100"
                          } hover:bg-gray-50`}
                        >
                          <span>{agent.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => {
                    setShowSortOptions((prev) => !prev);
                    setShowFilterOptions(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"
                      fill="currentColor"
                    />
                  </svg>
                  Sort
                </button>
                {/* Dropdown Panel */}
                {showSortOptions && (
                  <div className="absolute mt-2 bg-white shadow-xl border-base border right-0 z-10 rounded w-48">
                    <button
                      onClick={() => sortBy("newest")}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Newest
                    </button>
                    <button
                      onClick={() => sortBy("oldest")}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Oldest
                    </button>
                    <button
                      onClick={() => sortBy("roi")}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Highest ROI
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Selected rows info */}
          {selectedRows.length > 0 && (
            <p className="text-sm">{selectedRows.length} patient(s) selected</p>
          )}
          {/* AG-Grid Table */}
          <div className="ag-theme-alpine   rounded-lg">
            <AgGridReact
              // theme={themeQuartz}
              ref={gridRef}
              rowData={patients}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              rowSelection="multiple"
              onSelectionChanged={onSelectionChanged}
              animateRows={true}
              pagination={true}
              paginationPageSize={10}
              enableCellTextSelection={true}
              className="text-sm"
              domLayout="autoHeight"
              rowHeight={60}
              onGridReady={onGridReady}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button
              onClick={() => setModal("confirm")}
              disabled={selectedRows.length === 0}
              className={`px-6 py-2.5 text-white font-medium rounded-lg transition-colors ${
                selectedRows.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "  bg-green text-primary-foreground"
              }`}
            >
              Accept
            </button>
          </div>
        </main>

        {/* Save Modal */}
        <AlertModal open={modal === "confirm"} onClose={() => setModal("")}>
          <div>
            <div className="font-semibold text-lg mb-2 text-base-primary">
              Accept
            </div>
            <div className="text-muted mb-6">
              Are you sure you want to accept {selectedRows.length} change
              {selectedRows.length > 1 ? "s" : ""}? This will update your record
              {selectedRows.length > 1 ? "s" : ""} permenantely.
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
                onClick={() => {
                  const selectedIds = selectedRows.map((row) => row.id);
                  selectedIds.forEach((id) => {
                    dispatch(markPatientSubmitted(id));
                  });
                  setSelectedRows([]);
                  setModal("");
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </AlertModal>
      </div>
        </main>
        </div>
      
    </DashboardLayout>
  );
}
