import {
    AllCommunityModule,
    Column,
    GridApi,
    ICellRendererParams,
    ModuleRegistry,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useCallback, useMemo, useState } from "react";
import { underPaymentData } from "./calldef/paymentDetails";
import { underpaymentColDef } from "./calldef/underpayment";
import AlertModal from "../AlertModal";
import ProcessMapping from "./ProcessMapping";
import { Check, Send, SquarePen, SwitchCamera } from "lucide-react";
import Markdown from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { claimReconsiderationMarkdown, refundLettermarkdown } from "@/lib/utils";

interface PaymentDetailsTable {
    type: string;
}

ModuleRegistry.registerModules([AllCommunityModule]);

export const PaymentDetailsTable: React.FC<PaymentDetailsTable> = ({
    type,
}) => {
    const defaultColDef = useMemo(
        () => ({
            resizable: false,
            sortable: false,
            filter: false,
        }),
        []
    );
    const [modal, setModal] = useState<string>("");
    const [accepted, setAccepted] = useState<boolean>(false);
    const underpaymentaction = (params: ICellRendererParams) => {
        const { status } = params.data as { status: string };

        return (
            <div className="flex gap-2">
                <button
                    className="cursor-pointer  border-base bg-white items-center rounded-xl border p-4 py-2 flex gap-2"
                    onClick={() => {
                        setModal("escalate");
                    }}
                >
                    <Send className="w-4 h-4" strokeWidth={1.5} /> Escalate
                </button>
                {accepted ? (
                    <button
                        className="cursor-pointer rounded-xl items-center border border-base bg-white p-4 py-2 flex gap-2"
                        onClick={() => {
                            setModal("accept");
                        }}
                    >
                        <SquarePen className="w-4 h-4" strokeWidth={2} /> Edit
                    </button>
                ) : (
                    <button
                        className="cursor-pointer rounded-xl items-center bg-[#AFD8D4] p-4 py-2 flex gap-2"
                        onClick={() => {
                            setModal("accept");
                        }}
                    >
                        <Check className="w-4 h-4" strokeWidth={2} /> Accept
                    </button>
                )}
            </div>
        );
    };

    const overpaymentAction = (params: ICellRendererParams) => {
        const { status } = params.data as { status: string };

        return (
            <button
                className="cursor-pointer rounded-xl items-center bg-[#AFD8D4] p-4 py-2 flex gap-2"
                onClick={() => {
                    setModal("refund");
                }}
            >
                <SwitchCamera className="w-4 h-4" strokeWidth={1.5} /> Refund
            </button>
        );
    };

    const getColDef = () => {
        switch (type) {
            case "underpayment":
                return [
                    ...underpaymentColDef,
                    {
                        sortable: false,
                        filter: false,
                        flex: 1,
                        width: 150,
                        cellRenderer: underpaymentaction,
                        // cellClass: "flex items-center flex justify-center items-center",
                    },
                ];
            case "overpayment":
                return [
                    ...underpaymentColDef,
                    {
                        sortable: false,
                        filter: false,
                        flex: 1,
                        width: 150,
                        cellRenderer: overpaymentAction,
                        // cellClass: "flex items-center flex justify-center items-center",
                    },
                ];
            case "partialpayment":
                return [
                    ...underpaymentColDef,
                    {
                       headerName: "Discription",
                        field: "discription",
                        sortable: false,
                        filter: false,
                        flex: 1,
                        // cellClass: "flex items-center flex justify-center items-center",
                    },
                ];
            case 'costtopatient':
                return [
                    ...underpaymentColDef,
                    {
                       headerName: "Time",
                        field: "time",
                        sortable: false,
                        filter: false,
                        // cellClass: "flex items-center flex justify-center items-center",
                    },
                     {
                       headerName: "Chanel",
                        field: "chanel",
                        sortable: false,
                        filter: false,
                        // cellClass: "flex items-center flex justify-center items-center",
                    },
                ];
        }
    };
    const getRows = () => {
        switch (type) {
            case "underpayment":
            case "overpayment":
                return underPaymentData;
                case "partialpayment" :
                underPaymentData[0].discription = "Waiting for remaining payment / Fix manually if needed"
                return underPaymentData

                 case "costtopatient" :
                underPaymentData[0].time = "Sep 5, 2024 - 10:20"
                underPaymentData[0].chanel = "Whatsapp"
                return underPaymentData
        }
    };
    return (
        <>
            <div className="ag-theme-alpine">
                <AgGridReact
                    // theme={themeQuartz}
                    rowData={getRows()}
                    columnDefs={getColDef()}
                    defaultColDef={defaultColDef}
                    animateRows={true}
                    pagination={false}
                    // paginationPageSize={10}
                    enableCellTextSelection={true}
                    className="text-sm"
                    domLayout="autoHeight"
                    rowHeight={60}
                // onGridReady={onGridReady}
                />
            </div>

            <AlertModal open={modal === "escalate"} onClose={() => setModal("")}>
                <div>
                    <div className="font-semibold text-lg mb-2 text-base-primary">
                        Escalate
                    </div>
                    <div className="text-muted mb-6">
                        This claim has been escalated for further review. We will inform you
                        of any updates or required actions.
                        <div className="pt-5">
                            <ProcessMapping
                                processGap="h-6"
                                processSteps={[
                                    { id: "1", label: "Verify Underpayment", status: "pending" },
                                    {
                                        id: "2",
                                        label: "Classify & Collect Evidence",
                                        status: "pending",
                                    },
                                    {
                                        id: "3",
                                        label: "Generate Escalation Packet",
                                        status: "pending",
                                    },
                                    {
                                        id: "4",
                                        label: "Submit & Track Resolution",
                                        status: "pending",
                                    },
                                ]}
                            />
                        </div>
                    </div>
                    <div className="flex justify-end gap-4">
                        <button
                            className="rounded-xl px-5 py-2 text-white bg-green"
                            onClick={() => {
                                setModal("reconsideration");
                            }}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </AlertModal>
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
                            onClick={() => setModal("")}
                        >
                            No
                        </button>
                        <button
                            className="rounded-xl px-5 py-2 text-white bg-green"
                            onClick={() => {
                                setModal("");
                                setAccepted(true);
                            }}
                        >
                            Yes
                        </button>
                    </div>
                </div>
            </AlertModal>

            <AlertModal open={modal === "refund"} onClose={() => setModal("")}>
                <div>
                    <div className="font-semibold text-lg mb-2 text-base-primary">
                        Refund
                    </div>
                    <div className="text-muted mb-6">
                        This claim has been flagged for overpayment. The excess amount will be refunded or applied as credit.
                        <div className="pt-5">

                            <ProcessMapping
                                processGap="h-6"
                                processSteps={[
                                    { id: "1", label: "Verify Underpayment", status: "pending" },
                                    {
                                        id: "2",
                                        label: "Prepare Refund Packet",
                                        status: "pending",
                                    },
                                    {
                                        id: "3",
                                        label: "Submit Refund & Record Transaction",
                                        status: "pending",
                                    },
                                    {
                                        id: "4",
                                        label: "Track Closure & Post Adjustment",
                                        status: "pending",
                                    },
                                ]}
                            />
                        </div>
                    </div>
                    <div className="flex justify-end gap-4">

                        <button
                            className="rounded-xl px-5 py-2 text-white bg-green"
                            onClick={() => {
                                setModal("refundletter");
                            }}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </AlertModal>

            <AlertModal
                open={modal === "reconsideration"}
                onClose={() => setModal("")}
            >
                <div>
                    <div className="font-semibold text-lg mb-2 text-base-primary">
                        Claim Reconsideration
                    </div>
                    <div className="max-h-[80vh] overflow-y-auto">
                        <div className=" overflow-y-auto whitespace-pre-wrap  markdown-section">
                            <ReactMarkdown remarkPlugins={[]}>
                                {claimReconsiderationMarkdown}
                            </ReactMarkdown>
                        </div>
                    </div>
                    <div className="flex justify-end gap-4">
                        <button
                            className="rounded-xl px-5 py-2 text-white bg-green"
                            onClick={() => {
                                setModal("");
                            }}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </AlertModal>

            <AlertModal open={modal === "refundletter"} onClose={() => setModal("")}>
                <div>
                    <div className="font-semibold text-lg mb-2 text-base-primary">
                        Refund Letter
                    </div>
                    <div className="max-h-[80vh] overflow-y-auto">
                        <div className=" overflow-y-auto whitespace-pre-wrap  markdown-section">
                            <ReactMarkdown remarkPlugins={[]}>
                                {refundLettermarkdown}
                            </ReactMarkdown>
                        </div>
                    </div>
                    <div className="flex justify-end gap-4">
                        <button
                            className="rounded-xl px-5 py-2 text-white bg-green"
                            onClick={() => {
                                setModal("");
                            }}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </AlertModal>
        </>
    );
};
