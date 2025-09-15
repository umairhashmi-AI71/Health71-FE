import React, { ReactNode } from "react";
import { LucideIcon, SquarePen } from "lucide-react";


export type Type = {
  id?: string;
  title: string;
  className?: string;
  Icon: LucideIcon;
  children: ReactNode;
  appealDetails: {
    error: boolean
    isAccepted: boolean
  }
  acceptHandeler: () => void
  
  
};

const AppealLetter: React.FC<Type> = ({
  id,
  title,
  className = "",
  Icon,
  children,
  appealDetails,
  acceptHandeler
}) => {
 
  return (
    <div>
    <div className={`mx-auto bg-white border rounded-lg drop-shadow-sm ${appealDetails.error ? 'border-[#CB3914]' : ' border-base'}`}>
      {/* Header with Tabs */}

      <div className="border-b px-3 py-3 h-10 border-base items-center justify-between bg-base-muted rounded-lg  flex gap-x-1">
        <div className="flex">
          <Icon className="w-5 h-5 mr-2" />
        <span className="text-sm">{title}</span></div>
         <button
                    className="rounded-xl  border border-base px-3 py-1 text-base-primary bg-white cursor-pointer flex items-center gap-1.5"
                    onClick={() => {}}
                  >
                   <SquarePen className="w-4 h-4" strokeWidth={1.5} /> Edit
                  </button>
      </div>

      <div className="relative">
        <div
          className={`p-2.5 overflow-y-auto ${className || ""}`}
        >
          {children}
        </div>
      </div>
    </div>
    {appealDetails.error &&<div className="text-[#CB3914] text-right mt-2">
                            Please review and accept the Appeals Letter to continue.
                          </div>}
   {! appealDetails.isAccepted &&   <div className="flex justify-end gap-4 py-4">
                  <button
                    className="border border-base rounded-xl px-5 py-2 text-base-primary bg-white cursor-pointer"
                    onClick={() => {}}
                  >
                    Save
                  </button>
                  <button
                    className="rounded-xl  border border-base px-5 py-2 text-base-primary bg-white cursor-pointer"
                    onClick={acceptHandeler}
                  >
                    Accept
                  </button></div>}
    </div>
  );
};

export default AppealLetter;
