import React, { forwardRef, useImperativeHandle, useMemo, useRef, useState } from "react";
import { Plus, Trash2, Check, X, Square, SquarePen, Pill, Undo2 } from "lucide-react";
import { ICDCode } from "@/types/patient";
import { useDispatch } from "react-redux";
import { updatePatientICDCode, addPatientICDCode, deletePatientICDCode, changeCodeStatus } from "@/store/slice/Patient";

interface ICDCodesProps {
  initialCodes?: ICDCode[];
  title: string;
  id: string;
  mrn: string
  icdHandeler?: (word: string) => void;
  removeHighlight?: (word: string) => void;
}

const ICDCodes = forwardRef<HTMLDivElement, ICDCodesProps>(
  (
    {
      initialCodes = [],
      title = "",
      id,
      mrn,
      icdHandeler,
      removeHighlight,
    },
    ref
  ) => {
    const localRef = useRef<HTMLDivElement>(null);

    // Expose the internal ref to the parent
    useImperativeHandle(ref, () => localRef.current as HTMLDivElement);

    const [newCode, setNewCode] = useState("");
    const [isAdding, setIsAdding] = useState(false);
    const dispatch = useDispatch()
    // Memoize initial codes
    const [codes, setCodes] = useState<ICDCode[]>(
      useMemo(() => initialCodes, [initialCodes])
    );

    const handleAddCode = () => {
      if (newCode.trim()) {
        const newICD: ICDCode = {
          code: newCode.toUpperCase(),
          status: '',
          description:
            id === "cpt"
              ? "Diagnostic Radiology Procedures of the Lower Extremities"
              : "",
        };

        dispatch(
          addPatientICDCode({
            patientId: mrn,
            newICD,
            type: id
          })
        );

        setIsAdding(false);
      }
    };

    const handleDeleteCode = (rowId: string) => {
      dispatch(deletePatientICDCode({
        patientId: mrn,
        icdId: rowId,
        type: id
      }))
    };

    const handleApproveCode = (rowid: string, status: string) => {
      if (removeHighlight) {
        removeHighlight(rowid);
      }

       
      dispatch(changeCodeStatus({
        patientId: mrn,
        code: rowid,
        status: status,
        type: id
      }))
    };

    const handleUndo =  (rowid: string) => {
      
      dispatch(changeCodeStatus({
        patientId: mrn,
        code: rowid,
        status: '',
        type: id
      }))
    };

    const getConfidenceColor = (confidence: number) => {
      if (confidence >= 80) return "text-green-600";
      if (confidence >= 60) return "text-yellow-600";
      return "text-red-600";
    };

    const getPlacehoder = () => {
      switch (id) {
        case "icd":
          return "Enter ICD code (e.g., M25562)";
        case "cpt":
          return "Enter CPT code (e.g., 88192)";
        case "drug":
          return "Enter Drug code";
      }
    }

    return (
      <div className="max-w-2xl mx-auto bg-white p-4" >
        {/* Header */}
        <div className="flex items-center mb-3 gap-x-4">
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
          <button
            onClick={() => setIsAdding(true)}
            className="flex items-center space-x-2 px-2 py-2 border-2 border-base border-opacity-30 rounded-lg transition-colors"
          >
            <Plus className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* ICD Codes List */}
        <div className="space-y-4 "  ref={localRef}>
          {codes.map((icdCode, index) => (
            <div key={index} className={`bg-basecard p-4 rounded-lg ${icdCode.status == 'Accepted' ? "accepted" : 'not-acceptede'}`}>
              <div className="flex items-center space-x-2 mb-3">
                {/* Code Input/Display */}
                <div
                  className={`flex-1 px-4 py-3 border rounded-lg bg-white ${icdCode.status == 'Accepted'
                      ? "bg-base-muted border-base"
                      : "border-base"
                    }`}
                >
                  {icdCode.status != 'Deleted' && <span className="" >{icdCode.newCode || icdCode.code}</span>}
                  {icdCode.status == 'Deleted' && <span className="" style={{ textDecoration: "line-through" }}>{icdCode.newCode || icdCode.code}</span>}
                  
                </div>

                {/* Action Buttons */}

                <button
                  onClick={() => handleApproveCode(icdCode.code, '')}
                  className={`p-3 border border-sidebar bg-white rounded-lg transition-colors ${icdCode.status == 'Accepted' ? "" : "hidden"
                    }`}
                >
                  <SquarePen className="w-5 h-5 " />
                </button>

                <button
                  onClick={() => handleDeleteCode(icdCode.code)}
                  className={`p-3 bg-base-agent-10 rounded-lg transition-colors ${icdCode.status == 'Accepted' ? "hidden" : ""
                    }`}
                >
                  <Trash2 className="w-5 h-5 text-base-destructive" />
                </button>

               {icdCode.status != 'Deleted' &&  <button
                  onClick={() => handleApproveCode(icdCode.code, 'Accepted')}
                  className={`p-3 rounded-lg transition-colors ${icdCode.status == 'Accepted' ? "hidden" : "bg-primary-foreground"
                    }`}
                >
                  <Check className="w-5 h-5 text-green " />
                </button>}

                {icdCode.status == 'Deleted' && <button
                  onClick={() => handleUndo(icdCode.code)}
                  className={`p-3 rounded-lg transition-colors bg-primary-foreground`}
                >
                  <Undo2 className="w-5 h-5 text-green " />
                </button>}
              </div>
              {!icdCode.suggestion && <div
                className={`text-deep-ocean text-sm ${id == "icd" ? "cursor-pointer" : ""
                  } `}
                onClick={() => {
                  if (id === "icd" && icdHandeler) {
                    icdHandeler(icdCode?.code as string);
                  }
                }}
              >
                {icdCode.status == 'Changed' ? <p className="mb-1 pl-2">Changed from {icdCode.code} to {icdCode.newCode}</p>: ''}
                <p className="pl-2">{icdCode.description}</p>


                {icdCode.confidence && (
                  <p className="mt-1">Confidence Score: {icdCode.confidence}</p>
                )}
              </div>}
              {icdCode.suggestion && <div>
                {icdCode.suggestion}</div>}
            </div>
          ))}
          {/* Add New Code Form */}
        {isAdding && (
          <div className={`bg-basecard p-4 rounded-lg mt-3`}>
            <div className="flex items-center space-x-2 mb-3">
              {/* Code Input/Display */}
              <input
                type="text"
                value={newCode}
                onChange={(e) => setNewCode(e.target.value)}
                placeholder={getPlacehoder()}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none  bg-white"
                onKeyPress={(e) => e.key === "Enter" && handleAddCode()}
              />
              {/* Action Buttons */}
              <button
                onClick={() => {
                  setIsAdding(false);
                  setNewCode("");
                }}
                className="p-3 bg-base-agent-10 rounded-lg transition-colors"
              >
                <Trash2 className="w-5 h-5 text-base-destructive" />
              </button>

              <button
                onClick={handleAddCode}
                className={`p-3 rounded-lg transition-colors bg-primary-foreground`}
              >
                <Check className="w-5 h-5 text-green " />
              </button>
            </div>
          </div>
        )}
        <div className="error-text text-red-700" style={{display: 'none'}}>Please review {id.toUpperCase()} codes before continuing.</div>
        </div>

        

        {codes.length === 0 &&
          !isAdding &&
          title.toLocaleLowerCase().lastIndexOf("drug") != -1 && (
            <div className="text-center py-3 px-2 rounded-lg bg-basecard mt-5 ">
              <div className="mb-4">
                <Pill className="w-6 h-6 mx-auto" />
              </div>
              <p className="text-gray-500 mb-4">
                No billable drug was prescribed or administered during this
                encounter.
              </p>
            </div>
          )}
      </div>
    );
  });


  ICDCodes.displayName = "ICDCodes";

  
export default ICDCodes; 
 