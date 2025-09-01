import React, { useMemo, useState } from "react";
import { Plus, Trash2, Check, X, Square, SquarePen, Pill } from "lucide-react";
import { ICDCode } from "@/types/patient";



interface ICDCodesProps {
  initialCodes?: ICDCode[];
  title: string;
  id:string;
}

const ICDCodes: React.FC<ICDCodesProps> = ({
  initialCodes = [],
  title = '',
  id
}) => {
  const [newCode, setNewCode] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  // Memoize initial codes
  const [codes, setCodes] = useState<ICDCode[]>(
    useMemo(() => initialCodes, [initialCodes])
  );

  const handleAddCode = () => {
    if (newCode.trim()) {
      const newICDCode: ICDCode = {
        id: Date.now().toString(),
        code: newCode.toUpperCase(),
        isApproved: false,
        desc: id ==='cpt' ? 'Diagnostic Radiology Procedures of the Lower Extremities' : '',
      };
      setCodes([...codes, newICDCode]);
      setNewCode("");
      setIsAdding(false);
    }
  };


  const handleDeleteCode = (id: string) => {
    setCodes(codes.filter((code) => code.id !== id));
  };

  const handleApproveCode = (id: string) => {
    setCodes(
      codes.map((code) =>
        code.id === id ? { ...code, isApproved: !code.isApproved } : code
      )
    );
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return "text-green-600";
    if (confidence >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-4">
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
      <div className="space-y-4 ">
        {codes.map((icdCode, index) => (
          <div key={icdCode.id} className={`bg-basecard p-4 rounded-lg`}>
            <div className="flex items-center space-x-2 mb-3">
              {/* Code Input/Display */}
              <div
                className={`flex-1 px-4 py-3 border rounded-lg bg-white ${
                  icdCode.isApproved
                    ? "bg-base-muted border-base"
                    : "border-base"
                }`}
              >
                <span className="">{icdCode.code}</span>
              </div>

              {/* Action Buttons */}


              <button
                onClick={() => handleApproveCode(icdCode.id)}
                className={`p-3 border border-sidebar bg-white rounded-lg transition-colors ${icdCode.isApproved ? "" : "hidden"}`}
              >
                <SquarePen className="w-5 h-5 " />
              </button>

              <button
                onClick={() => handleDeleteCode(icdCode.id)}
                className={`p-3 bg-base-agent-10 rounded-lg transition-colors ${icdCode.isApproved ? "hidden" : ""}`}
              >
                <Trash2 className="w-5 h-5 text-base-destructive" />
              </button>

              <button
                onClick={() => handleApproveCode(icdCode.id)}
                className={`p-3 rounded-lg transition-colors ${
                  icdCode.isApproved
                    ? "hidden"
                    : "bg-primary-foreground"
                }`}
              >
                <Check className="w-5 h-5 text-green " />
              </button>
            </div>
            <div className={`text-deep-ocean text-xs ${id == 'icd' ? 'cursor-pointer' : ''} `} onClick={() => {
              if(id==='icd') {
                alert('sdf')
              }
            }}>
              <p>{icdCode.desc}</p>
              {icdCode.confidence && (<p>Confidence Score: {icdCode.confidence}</p>)}
            </div>
          </div>
        ))}
      </div>

       {/* Add New Code Form */}
      {isAdding && (
        <div className={`bg-basecard p-4 rounded-lg mt-3`}>
          <div className="flex items-center space-x-2 mb-3">
            {/* Code Input/Display */}
            <input
              type="text"
              value={newCode}
              onChange={(e) => setNewCode(e.target.value)}
              placeholder="Enter ICD code (e.g., M25562)"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

      

       {codes.length === 0 && !isAdding && (title.toLocaleLowerCase().lastIndexOf("drug") != -1) && (
        <div className="text-center py-3 px-2 rounded-lg bg-basecard mt-5 ">
          <div className="mb-4">
            <Pill className="w-6 h-6 mx-auto" />
          </div>
          <p className="text-gray-500 mb-4">No billable drug was prescribed or administered during this encounter.</p> 
        </div>
      )}
    </div>
  );
};

export default ICDCodes;
