"use client";
import { ColDef, ICellRendererParams } from "ag-grid-community";
import {CustomCheckbox, DetailsButtonRenderer, fullNameRenderer} from "./DetailsButtonRenderer";
import { PatientPersona } from "@/types/patient";

const truncatedCellRenderer = (
  params: ICellRendererParams<PatientPersona>
): string => {
  const maxLength = 50;
  const text = params.value?.toString() || "";

  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength);
};





export const patientColumnDef: ColDef[] = [
  {
    headerName: "",
    field: "select",
    // checkboxSelection: true,
    headerCheckboxSelection: true,
     checkboxSelection: true,
    width: 50,
    pinned: "left",
 
    // cellRenderer: CustomCheckbox,
  },

  {
    headerName: "Patient Name",
    field: "name",
    sortable: true,
    width: 140,
    cellRenderer: fullNameRenderer,

    //   filter: 'agTextColumnFilter',
  },
  {
    headerName: "Agent Name",
    field: "agentIssue",
    sortable: true,
    width: 100,
    // hide: true,
       filter: true,  
      // filter: "agSetColumnFilter", // ✅ this enables the set filter type

  },
  {
    headerName: "MRN",
    field: "id",
    width: 100,
  },

  {
    headerName: "Last Updated",
    field: "date",
    sortable: false,
     filter: true,
     width: 130,
     valueFormatter: params => {
      if (!params.value) return "";
      const date = new Date(params.value);
      return date.toLocaleDateString("en-CA"); // gives YYYY-MM-DD
    },
  },
  // {
  //   headerName: "Age",
  //   field: "age",
  //   sortable: true,
  //   //   filter: 'agNumberColumnFilter',
  //   filterParams: {
  //     buttons: ["reset", "apply"],
  //     closeOnApply: true,
  //     filterOptions: ["equals", "lessThan", "greaterThan", "inRange"],
  //     defaultOption: "equals",
  //   },
  //   width: 60,
  // },

  
  {
    headerName: "Agent Suggestion",
    field: "agentSuggestion",
    sortable: true,
    width: 300,
    wrapText: true,
    autoHeight: true,

    //   filter: 'agTextColumnFilter',
    //    cellRenderer: truncatedCellRenderer
  },
  {
    headerName: "CoT (Why flagged)",
    field: "cot",
    sortable: true,

    flex: 1,
    wrapText: true,
    autoHeight: true,
    //   cellRenderer: truncatedCellRenderer,
    //   filter: 'agTextColumnFilter',
  },
  {
    headerName: "Action",
    field: "action",
    cellRenderer: DetailsButtonRenderer,
    sortable: false,
     pinned: 'right',
    width: 80,
    filter: false,
  },
  // {
  //   headerName: 'More Info',
  //   field: 'more',

  //   sortable: false,
  //   filter: false,

  // }
];
