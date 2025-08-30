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
} from "lucide-react";
import type { Agent } from "../../types/agent";
import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  ModuleRegistry,
  AllCommunityModule,
  ColDef,
  SelectionChangedEvent,
} from "ag-grid-community";
import { patientPersona  } from "@/lib/mockPersona";
import {  PatientListProps, PatientPersona, PatientTableRow } from "@/types/patient";
import { patientColumnDef } from "./columnDefs";
import ReactMarkdown from "react-markdown";
import { id } from "zod/locales";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function DashboardPage() {
  const initialData: Agent[] = [
    {
      title: "Eli",
      image: "/eli.png",
      role: "Eligibility Agent",
      savedHours: "I saved ~0.5 hours today.",
      feature: [
        { icon: ClipboardCheck, label: "Verified", count: 24 },
        { icon: Flag, label: "Flagged", count: 234 },
        { icon: Zap, label: "Cleared for Autho", count: 1 },
      ],
    },
    {
      title: "Autho",
      image: "/autho.svg",
      role: "Prior authorization Agent",
      savedHours: "I saved ~0.1 hours today.",
      feature: [
        { icon: ShieldCheck, label: "Prior auto checked", count: 280 },
        { icon: ShieldX, label: "Approvals secured", count: 200 },
        { icon: AlertCircle, label: "Require human review", count: 80 },
      ],
    },
    {
      title: "Code",
      image: "/code.svg",
      role: "Prior authorization Agent",
      savedHours: "I saved ~0.1 hours today.",
      feature: [
        { icon: ShieldCheck, label: "Prior auto checked", count: 280 },
        { icon: ShieldX, label: "Approvals secured", count: 200 },
        { icon: AlertCircle, label: "Require human review", count: 80 },
      ],
    },
    {
      title: "Clara",
      image: "/clara.svg",
      role: "Prior authorization Agent",
      savedHours: "I saved ~0.1 hours today.",
      feature: [
        { icon: ShieldCheck, label: "Prior auto checked", count: 280 },
        { icon: ShieldX, label: "Approvals secured", count: 200 },
        { icon: AlertCircle, label: "Require human review", count: 80 },
      ],
    },
    {
      title: "Dee",
      image: "/dee.svg",
      role: "Prior authorization Agent",
      savedHours: "I saved ~0.1 hours today.",
      feature: [
        { icon: ShieldCheck, label: "Prior auto checked", count: 280 },
        { icon: ShieldX, label: "Approvals secured", count: 200 },
        { icon: AlertCircle, label: "Require human review", count: 80 },
      ],
    },
    {
      title: "Payne",
      image: "/payne.png",
      role: "Prior authorization Agent",
      savedHours: "I saved ~0.1 hours today.",
      feature: [
        { icon: ShieldCheck, label: "Prior auto checked", count: 280 },
        { icon: ShieldX, label: "Approvals secured", count: 200 },
        { icon: AlertCircle, label: "Require human review", count: 80 },
      ],
    },
  ];


 
  const [agents, setAgents] = useState(initialData);
  const [patients, setPatients] = useState<PatientTableRow[]>(() => patientPersona.map(i => ({
                id: i.id,
                name: i.profile.name,
                age: i.profile.age,
                agentIssue: i.agentDetails?.agentIssue || '',
                agentSuggestion: i.agentDetails?.agentSuggestion || '',
                cot: i.agentDetails?.coT || '',
              })));
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

  // Handle submit (remove selected rows)
  const handleSubmit = () => {
    if (selectedRows.length === 0) {
      alert("Please select at least one patient to remove.");
      return;
    }

    const selectedIds = selectedRows.map((row) => row.id);
    const updatedPatients = patients.filter(
      (patient) => !selectedIds.includes(patient.id)
    );

    setPatients(updatedPatients);
    setSelectedRows([]);

    // Show confirmation
    alert(`${selectedRows.length} patient(s) removed successfully.`);
  };
  


  useEffect(() => {


    const interval = setInterval(() => {
      setAgents((prev) =>
        prev.map((agent) => ({
          ...agent,
          feature: agent.feature.map((f) => ({
            ...f,
            count: f.count + Math.floor(Math.random() * 3), // random increment
          })),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);


 

  
  return (
    <DashboardLayout>
      
      <div className="min-h-full">
        <main className="p-6 space-y-6">
          <Breadcrumb />
          <h3 className="text-lg font-semibold mb-0">Hi Neila,</h3>
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
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
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
                Filter Tools
              </button>
              <button
                onClick={() => setShowSortMenu(!showSortMenu)}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
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
                Sort Tools
              </button>
            </div>
          </div>

          {/* Selected rows info */}
          {/* {selectedRows.length > 0 && (
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                {selectedRows.length} patient(s) selected
              </p>
            </div>
          )} */}
           {/* AG-Grid Table */}
          <div className="ag-theme-alpine border border-gray-200 rounded-lg">
            <AgGridReact
              // theme={themeQuartz}
              rowData={patients}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              rowSelection="multiple"
              onSelectionChanged={onSelectionChanged}
              animateRows={true}
              pagination={true}
              paginationPageSize={7}
              enableCellTextSelection={true}
              className="text-sm"
              domLayout="autoHeight"
              rowHeight={60}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button
              onClick={handleSubmit}
              disabled={selectedRows.length === 0}
              className={`px-6 py-2.5 text-white font-medium rounded-lg transition-colors ${
                selectedRows.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "  bg-green text-primary-foreground"
              }`}
            >
              Submit
            </button>
          </div>
 
        </main>
      </div>
    </DashboardLayout>
  );
}
