import React, { ReactNode } from "react";
import { LucideIcon } from "lucide-react";


export type Type = {
  id?: string;
  title: string;
  className?: string;
  Icon: LucideIcon;
  children: ReactNode;
  
};

const MedicalRecords: React.FC<Type> = ({
  id,
  title,
  className = "",
  Icon,
  children
}) => {
 
  return (
    <div className="mx-auto bg-white border border-base rounded-lg drop-shadow-sm ">
      {/* Header with Tabs */}

      <div className="border-b px-4 py-3 h-10 border-base items-center bg-base-muted rounded-lg  flex gap-x-1">
        <Icon className="w-5 h-5 mr-2" />
        <span className="text-sm">{title}</span>
      </div>

      <div className="relative">
        <div
          className={`p-2.5 overflow-y-auto ${className || ""}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default MedicalRecords;
