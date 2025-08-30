"use client"
import { ColDef, ICellRendererParams } from "ag-grid-community";
import DetailsButtonRenderer from "./DetailsButtonRenderer";
import { PatientPersona } from "@/types/patient";

const truncatedCellRenderer = (params: ICellRendererParams<PatientPersona>): string => {
  const maxLength = 50;
  const text = params.value?.toString() || '';
  
  if (text.length <= maxLength) {
    return text;
  }
  
  return text.substring(0, maxLength);
};

  export const patientColumnDef: ColDef[] = [
    {
      headerName: '',
      field: 'select',
      checkboxSelection: true,
      headerCheckboxSelection: true,
      width: 50,
      pinned: 'left',
    },
    {
      headerName: 'Patient Name',
      field: 'name',
      sortable: true,
      width: 140
    //   filter: 'agTextColumnFilter',
     },
    {
      headerName: 'Age',
      field: 'age',
      sortable: true,
    //   filter: 'agNumberColumnFilter',
       filterParams: {
        buttons: ['reset', 'apply'],
        closeOnApply: true,
        filterOptions: ['equals', 'lessThan', 'greaterThan', 'inRange'],
        defaultOption: 'equals'
      },
      width: 60
    },
   
    {
      headerName: 'Agent Issue',
      field: 'agentIssue',
      sortable: true,
      width: 150,
      filter: 'agTextColumnFilter',
     },
     {
      headerName: 'Agent Suggestion',
      field: 'agentSuggestion',
      sortable: true,
      width: 380,
      
      
    //   filter: 'agTextColumnFilter',
    //    cellRenderer: truncatedCellRenderer
    },
    {
      headerName: 'CoT (Why flagged)',
      field: 'cot',
      sortable: true,
      
      flex: 1,
      wrapText: true,
        autoHeight: true,
    //   cellRenderer: truncatedCellRenderer,
    //   filter: 'agTextColumnFilter',
    
     },
    {
      headerName: 'Action',
      field: 'action',
      cellRenderer: DetailsButtonRenderer,
       sortable: false,
//  pinned: 'right',
         width: 120,
      filter: false,
      
    },
    // {
    //   headerName: 'More Info',
    //   field: 'more',

    //   sortable: false,
    //   filter: false,
      
    // }
  ];
