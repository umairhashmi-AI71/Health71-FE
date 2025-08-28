import React, { JSX, useState } from "react";
import { LucideIcon } from "lucide-react";

export type TabType = {
  id: string;
  label: string;
  data: React.FC | string | (() => JSX.Element);
  icon: LucideIcon;
};
interface SOAPNoteProps {
  tabs: TabType[];
  defaultActiveTab?: string;
}

const SOAPNote: React.FC<SOAPNoteProps> = ({ tabs, defaultActiveTab }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  return (
    <div className="mx-auto bg-white border border-base rounded-lg drop-shadow-sm ">
      {/* Header with Tabs */}

      <div className="border-b px-1 py-1 h-10 border-base bg-base-muted rounded-lg  flex gap-x-4">
        {tabs.map((tab, index) => (
          <button
          key={tab.label}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center justify-center rounded-lg text-center grow transition-colors ${
              activeTab === tab.id ? "bg-white" : ""
            }`}
          >
            <tab.icon className="w-5 h-5 mr-2" />
            <span className="text-sm">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-2.5 overflow-y-auto h-94 text-muted ">
        {tabs.map(
          (tab, index) =>
            activeTab === tab.id && (
              <div key={tab.label} className="space-y-6">
                {
                  <div className="space-y-6" key={tab.id}>
                    {typeof tab.data === "function"
                      ? React.createElement(tab.data)
                      : tab.data}
                  </div>
                }
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default SOAPNote;
