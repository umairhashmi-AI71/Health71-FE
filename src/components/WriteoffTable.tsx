import { writeofcolumnDef } from "@/app/patient/coldef/callDef";
import { WriteofcolumnType } from "@/lib/utils";
import { RootState } from "@/store";
import {
  AllCommunityModule,
  ICellRendererParams,
  ModuleRegistry,
  SelectionChangedEvent,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlertModal from "./AlertModal";
import { changeWriteoffStatus, escalate } from "@/store/slice/Writeoff";
import { Check, Send, SquarePen } from "lucide-react";
import ProcessMapping from "./ui/ProcessMapping";
import { ProcessSteps } from "@/types/patient";

ModuleRegistry.registerModules([AllCommunityModule]);

export const WriteoffTable: React.FC = () => {
  const defaultColDef = useMemo(
    () => ({
      resizable: false,
      sortable: false,
      filter: false,
    }),
    []
  );

  const writeList: WriteofcolumnType[] = useSelector(
    (state: RootState) => state.writeoffList
  );


  const [writeoffEscalate, setWriteoffEscalate] = useState([
    { id: "1", label: "Validate Write-Offs", status: "pending" },
    { id: "2", label: "Notify Payer", status: "pending" },
    { id: "4", label: "Update Ledger", status: "pending" },
  ]);

  const cancelRef = useRef(false);
  const [isProcessing, setisProcessing] = useState<boolean>(false)

  const isCompleted = writeoffEscalate.every(i => i.status === 'completed')
  const markStepsAsComplete = async () => {
    cancelRef.current = false; // reset cancel flag before starting
setisProcessing(true)
    for (let i = 0; i < writeoffEscalate.length; i++) {
      // break early if cancel button clicked
      if (cancelRef.current) break;

      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (cancelRef.current) break;

      setWriteoffEscalate((prevSteps) =>
        prevSteps.map((step, index) =>
          index === i ? { ...step, status: "completed" } : step
        )
      );
    }
  };

  useEffect(()=> {
    if(isCompleted) {
      setisProcessing(false)
      setModal('')
      resetSteps()

    }
  }, [isCompleted])

  const stopSteps = () => {
    cancelRef.current = true; // tell loop to stop
  };

  const resetSteps = () => {
    cancelRef.current = true; // also stop loop
    setWriteoffEscalate((steps) =>
      steps.map((step) => ({ ...step, status: "pending" }))
    );
  };

  const [selectedRows, setSelectedRows] = useState<WriteofcolumnType[]>([]);

  // Handle selection change
  const onSelectionChanged = useCallback((event: SelectionChangedEvent) => {
    const selectedNodes = event.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    setSelectedRows(selectedData);
  }, []);

  useEffect(() => {
    const element = document.querySelector('.errorclass')
    if(!element?.classList.contains('hidden')) {
       const isdone = writeList.every(e => e.status != 'Denied');
       if(isdone) {
        element?.classList.add('hidden')
        
        document.querySelector('.border-error')?.classList.remove('border-error')
       }
    }
  })
  const [modal, setModal] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="ag-theme-alpine mb-5">
      <div className="ag-table rounded-lg border-base-destructive ">
        <AgGridReact
        // theme={themeQuartz}
        rowData={writeList}
        columnDefs={[
          ...writeofcolumnDef,
          {
            headerName: "",
            field: "actions",
            width: 140,
            cellRenderer: (params: ICellRendererParams) => {
              const { status, id } = params.data as {
                status: string;
                id: number;
              };
              return (
                <div className="flex gap-3 items-center justify-end">
                  {status != "Denied → Accepted" && status != "Accepted"  && status != 'Denied → Escalated' && (
                    <>
                      <button
                        className="cursor-pointer p-2"
                        onClick={() => {
                          setModal("escalate");
                        }}
                      >
                        <Send className="w-6 h-6" strokeWidth={1.5} />{" "}
                      </button>
                      <button
                        className="cursor-pointer p-2 "
                        onClick={() => {
                          setModal("accept");
                        }}
                      >
                        <Check className="w-6 h-6" strokeWidth={1.5} />
                      </button>
                    </>
                  )}
                  {/* {status.toLocaleLowerCase() == "Accepted" && (
                    <button
                      className="cursor-pointer"
                      onClick={() =>
                        dispatch(changeWriteoffStatus({ id, status: "denied" }))
                      }
                    >
                      <SquarePen className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                  )} */}
                </div>
              );
            },
            // suppressMenu: true,
            sortable: false,
            filter: false,
            cellClass: "flex items-center flex justify-center items-center",
          },
        ]}
        defaultColDef={defaultColDef}
        animateRows={false}
        pagination={false}
        rowSelection="multiple"
        // paginationPageSize={10}
        onSelectionChanged={onSelectionChanged}
        enableCellTextSelection={true}
        className="text-sm"
        domLayout="autoHeight"
        rowHeight={60}
      />
      </div>
      <div className="text-base-destructive text-right pt-2 error-text hidden errorclass">Action Required: Please accept or escalate the write-off before proceeding. This step is mandatory to finalize the process.</div>
      <div className="flex justify-end my-10">
        <button
          className={` text-white px-6 py-2 rounded-lg  ${selectedRows.length > 0 ? "bg-green" : "bg-[#F5F2EF]"
            }`}
          onClick={() => setModal("accept")}
          disabled={selectedRows.length > 0 ? false : true}
        >
          Accept
        </button>
      </div>

      <AlertModal open={modal === "accept"} onClose={() => setModal("")}>
        <div>
          <div className="font-semibold text-lg mb-2 text-base-primary">
            Accept Confirmation
          </div>
          <div className="text-muted mb-6">
            Are you sure you want to accept the {selectedRows.length > 1 ? selectedRows.length : ''} write-offs? <br /> Important: Once accepted, this action cannot be undone.
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
                if (selectedRows.length) {
                  selectedRows?.forEach((data) => {
                    dispatch(
                      changeWriteoffStatus({
                        id: data.id,
                        status: `${data.status} → Accepted`,
                      })
                    );
                  });
                }

                setModal("");
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </AlertModal>

      <AlertModal open={modal === "escalate"} onClose={() => setModal("")}>
        <div>
          <div className="font-semibold text-lg mb-2 text-base-primary">
            Escalate
          </div>
          <div className="text-muted mb-6">
            Write-off not accepted and notification sent to payer. No further action is required.
          </div>
          <div>
            <ProcessMapping processGap="h-3.5" processSteps={writeoffEscalate as ProcessSteps[]} />
          </div>
          <div className="flex justify-end gap-4">
            <button
              className="border rounded-xl px-5 py-2 text-base-primary bg-white"
              onClick={() => {
                          

                resetSteps()
                setModal("")
              }}
            >
              Cancel
            </button>
            <button
              className={`rounded-xl px-5 py-2 text-white ${isProcessing ? 'bg-gray-300': 'bg-green '}`}
              disabled={isProcessing}
              onClick={() => {
                markStepsAsComplete()
                selectedRows?.forEach(item => dispatch( changeWriteoffStatus({
                        id: item.id,
                        status: `${item.status} → Escalated`,
                      })))
                
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </AlertModal>
    </div>
  );
};
