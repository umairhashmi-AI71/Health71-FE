import { ColDef, ICellRendererParams } from "ag-grid-community";


export const differencecolor = (params: ICellRendererParams) => {
  const { difference } = params.data as { difference: string;  };
  return (
    <span className="text-red-500">
      {difference}
    </span>
  );
};


export const underpaymentColDef: ColDef[] = [
  
  {
    headerName: "Service",
    field: "service",
    width: 300,
    // cellClass: "flex items-center text-sm",
    autoHeight: true,
  },
  {
    headerName: "CPT Code",
    field: "cptCode",
    width: 120,
    // cellClass: "flex items-center text-sm",
    autoHeight: true,
  },
  {
    headerName: "Billed (AED)",
    field: "billed",
    width: 120,
    // cellClass: "flex items-center text-sm",
    valueFormatter: (params) => `${params.value}`,
    autoHeight: true,
  },
  {
    headerName: "Paid (AED)",
    field: "paid",
    width: 120,
    // cellClass: "flex items-center text-sm",
    valueFormatter: (params) => `${params.value}`,
    autoHeight: true,
  },
  {
    headerName: "Status",
    field: "status",
    width: 160,
    // cellClass: (params) =>
    //   params.value === "Denied"
    //     ? "text-sm font-medium text-red-600"
    //     : "text-sm text-green-600",
        autoHeight: true,
  },
  {
    headerName: "Difference",
    field: "difference",
    cellClass: "flex items-center text-sm ",
    autoHeight: true,
    cellRenderer: differencecolor,
    width: 120
  },
];

export const partialapprovalColDef: ColDef[] = [
  
  {
    headerName: "Service",
    field: "service",
    flex: 1,
    // cellClass: "flex items-center text-sm",
    autoHeight: true,
  },
  {
    headerName: "CPT Code",
    field: "cptCode",
    width: 100,
    // cellClass: "flex items-center text-sm",
    autoHeight: true,
  },
  {
    headerName: "Amount (AED)",
    field: "amount",
    width: 140,
    // cellClass: "flex items-center text-sm",
    valueFormatter: (params) => `${params.value}`,
    autoHeight: true,
  },
  {
    headerName: "Status",
    field: "status",
    width: 140,
    // cellClass: (params) =>
    //   params.value === "Denied"
    //     ? "text-sm font-medium text-red-600"
    //     : "text-sm text-green-600",
        autoHeight: true,
  },
  {
    headerName: "Rejection Reason",
    field: "reason",
    cellClass: "flex items-center text-sm ",
    width:180,
    autoHeight: true,
  },
    {
    headerName: "Agent Suggestion",
    field: "suggestion",
    flex: 1,
    wrapText: true,
    cellClass: "flex items-center text-sm ",
    autoHeight: true,
  },
];