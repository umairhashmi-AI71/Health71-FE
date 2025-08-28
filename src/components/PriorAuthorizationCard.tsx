import React from "react";

interface PriorAuthorizationProps {
  status: "Approved" | "Pending" | "Denied";
  encounterId: string;
  priorAuthId: string;
  physician: string;
  icdCode: string;
  cptCode: string;
  drugCode: string;
}

const PriorAuthorizationCard: React.FC<PriorAuthorizationProps> = ({
  status,
  encounterId,
  priorAuthId,
  physician,
  icdCode,
  cptCode,
  drugCode,
}) => {
  return (
    <div className="bg-basecard  rounded-lg shadow p-6 space-y-2 max-w-xs">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-lg font-semibold">Prior Authorization</h3>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
          status === "Approved" ? "bg-green-100 text-green-700" :
          status === "Pending" ? "bg-yellow-100 text-yellow-700" :
          "bg-red-100 text-red-700"
        }`}>
          {status}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-y-4 text-sm">
        <p><span className="font-medium block text-foreground">EncounterID:</span> {encounterId}</p>
        <p><span className="font-medium block text-foreground">Prior AuthID:</span> {priorAuthId}</p>
        <p><span className="font-medium block text-foreground">Physician:</span> {physician}</p>
        <p><span className="font-medium block text-foreground">ICD Code:</span> {icdCode}</p>
        <p><span className="font-medium block text-foreground">CPT Code:</span> {cptCode}</p>
        <p><span className="font-medium block text-foreground">Drug Code:</span> {drugCode}</p>
      </div>
    </div>
  );
};

export default PriorAuthorizationCard;