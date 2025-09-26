import React, { forwardRef, JSX, useImperativeHandle, useState } from "react";
import { LucideIcon } from "lucide-react";
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Data } from "@/lib/mocklogs";


interface LogsListProps {
    data: Data[][];
}

const LogsList: React.FC<LogsListProps> = ({ data }) => {
    const [activeTab, setActiveTab] = useState<number>(0);


    return (
        <div className="mx-auto " >
            {/* Header with Tabs */}

            <div className="border-b p-1.5  border-base bg-base-muted rounded-lg  flex gap-x-4 mb-5">
                {data.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`flex py-1 items-center justify-center rounded-lg text-center grow transition-colors ${activeTab === index ? "bg-white" : ""
                            }`}
                    >
                        <span className="text-sm">Round {index + 1}</span>
                    </button>
                ))}
            </div>

            <div className="relative">
                {data.map((round, index) => {
                    return (
                        <div className={`border border-base rounded-lg    ${activeTab === index ? "" : "hidden"}`} key={index}>



                            <table className="w-full">
                                <tbody>
                                    <tr className="">
                                        <td className="px-3 py-3 font-semibold  w-[14%]">Date & Time</td>
                                        <td className="px-3 py-3 font-semibold  w-[8%]">Actor</td>
                                        <td className="px-3 py-3 font-semibold  w-[18%]">Step</td>
                                        <td className="px-3 py-3 font-semibold w-[30%]">Action Performed</td>
                                        <td className="px-3 py-3 font-semibold w-[100px]"> Evidence / File Location</td>
                                    </tr>
                                    {round.map((roundItem, idx) => {
                                        return (
                                            <tr
                                                key={idx}
                                                className={`cursor-pointer transition-colors duration-20 patient-list hover:bg-[#EFF7F6] border-t border-gray-200 `}
                                            >
                                                <td className="px-3 py-3">
                                                    {roundItem.date}

                                                </td>
                                                <td className="px-3 py-3">
                                                    <span
                                                        className={`border text-center bg-white rounded-2xl py-1 px-3 ${roundItem.actor.toLowerCase()}-border`}
                                                    >
                                                        {roundItem.actor}
                                                    </span>
                                                </td>
                                                <td className="px-3 py-3 ">
                                                    {roundItem.step}
                                                </td>
                                                <td className="px-3 py-3 ">
                                                    {roundItem.action}
                                                </td>

                                                <td className="px-3 py-3 w-10">
<code className="truncate mackinac bg-basecard p-2 px-3 text-xs rounded-lg">{roundItem.fileLocation}</code>
                                                    
                                                </td>

                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>


                        </div>
                    );
                })}
            </div>
        </div>
    );
};


export default LogsList;
