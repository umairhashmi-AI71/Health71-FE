"use client";

import { useRef, useState, useEffect, JSX } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ProcessSteps, StatusType } from "@/types/patient";
import { getStatusConfig } from "@/lib/utils";
import ProcessMapping from "./ui/ProcessMapping";

interface MedicalCodingDetail {
  label: string;
  value: string | number;
}

interface MedicalCodingCardProps {
  title?: string;
  status?: string;
  data: MedicalCodingDetail[];
  style?: string;
  titleGap?: string;
  processGap?:string;
  processSteps: ProcessSteps[];
}

export default function MedicalCodingCard({
  title = "Medical Coding",
  status = "done",
  data,
  style = "",
  titleGap = "mb-4",
  processGap = "h-3.5",
  processSteps,
}: MedicalCodingCardProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      setAtTop(scrollTop === 0);
      setAtBottom(scrollTop + clientHeight >= scrollHeight);
    }
  };

  const handleScrollDown = () => {
    scrollRef.current?.scrollBy({ top: 150, behavior: "smooth" });
  };

  const handleScrollUp = () => {
    scrollRef.current?.scrollBy({ top: -150, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => el?.removeEventListener("scroll", handleScroll);
  }, []);

  interface StatusConfig {
    text: string;
    className: string;
  }

  const statusConfig = getStatusConfig(status as StatusType);
  const isProcessFinish = processSteps.every(
    (step) => step.status === "completed"
  );
  return (
    <div
      className={`max-w-sm bg-basecard border border-base rounded-2xl drop-shadow-sm p-4 ${style}`}
    >
      {/* Header */}
      <div className={`flex items-center justify-between ${titleGap}`}>
        <h2 className="text-lg font-semibold">{title}</h2>
        <div
          className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-sm font-medium ${statusConfig.className} py-1 px-2.5`}
        >
          <span>{statusConfig.text}</span>
        </div>
      </div>


      {!isProcessFinish && (<ProcessMapping processSteps={processSteps} processGap={processGap} />)}
      {/* Scrollable area with hidden scrollbar */}

      {isProcessFinish && (
        <>
          <div
            ref={scrollRef}
            className=" max-h-28 overflow-y-auto scroll-smooth scrollbar-hide"
          >
            <div className="space-y-4">
              {Object.entries(data).reduce<JSX.Element[]>(
                (acc, [key, value], index, array) => {
                  if (index % 2 === 0) {
                    const nextEntry = array[index + 1] as
                      | [string, MedicalCodingDetail]
                      | undefined;

                    acc.push(
                      <div key={index} className="flex justify-between">
                        <div className="min-w-[48%]">
                          <h3 className="text-base block text-foreground">
                            {value.label}
                          </h3>
                          <p className="text-base font-semibold">
                            {value.value}
                          </p>
                        </div>
                        {nextEntry && (
                          <div className="min-w-[48%]">
                            <h3 className="text-base block text-foreground">
                              {nextEntry[1].label}
                            </h3>
                            <p className="text-base font-semibold">
                              {nextEntry[1].value}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  }
                  return acc;
                },
                []
              )}
            </div>
          </div>

          {/* Single button depending on scroll position */}
          <div className="flex justify-center">
            {atTop && !atBottom && (
              <button onClick={handleScrollDown} className="mt-2">
                <ChevronDown className="h-5 w-5 text-gray-600" />
              </button>
            )}
            {!atTop && (
              <button onClick={handleScrollUp} className="mt-2">
                <ChevronUp className="h-5 w-5 text-gray-600" />
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
