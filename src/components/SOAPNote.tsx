import React, { JSX, useState } from "react";
import { LucideIcon } from "lucide-react";
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export type TabType = {
  id: string;
  label: string;
  data: string | React.ReactElement | React.FC | (() => JSX.Element);
  className?: string;
  icon: LucideIcon;
};
interface SOAPNoteProps {
  tabs: TabType[];
  defaultActiveTab?: string;
  height?: string;
}

const SOAPNote: React.FC<SOAPNoteProps> = ({ tabs, defaultActiveTab, height = '' }) => {
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

      <div className="relative">
  {tabs.map((tab, index) => {
    let content;
    if (typeof tab.data === "string") {
      content = <div className="relative markbg"> <Markdown rehypePlugins={[rehypeRaw]}>{tab.data}</Markdown></div>
    } else if (typeof tab.data === "function") {
      content = React.createElement(tab.data);
    } else {
      content = tab.data;
    }
    return (
      <div
        key={tab.label}
        className={`p-2.5 overflow-y-auto ${tab.className || ''} ${height} ${activeTab === tab.id ? "" : "hidden"}`}
      >
        <div className="">{content}</div>
      </div>
    );
  })}
</div>
    </div>
  );
};

export default SOAPNote;
