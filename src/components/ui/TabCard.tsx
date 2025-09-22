import React, { ReactNode, useState } from "react";
import { LucideIcon, SquarePen } from "lucide-react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";


export type TabCardProps = {
  id?: string;
  title: string;
  className?: string;
  Icon: LucideIcon; 
  children: ReactNode;


};

const TabCard: React.FC<TabCardProps> = ({
  id,
  title,
  className = "",
  Icon,
  children,
}) => {
 
 
  return (
    <div>
      <div className={`mx-auto bg-white border rounded-lg drop-shadow-sm border-base`}>
        {/* Header with Tabs */}

        <div className="border-b px-3 py-3 h-10 border-base items-center justify-between bg-base-muted rounded-lg  flex gap-x-1">
          <div className="flex items-center gap-2">
            <Icon className="w-4 h-4  mr-2" strokeWidth={1.5} />
            <span className="text-sm">{title}</span></div>
        </div>

        <div className="relative">
          <div
            className={`p-2.5 overflow-y-auto ${className || ""}`}
          >

            {children}

          </div>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
