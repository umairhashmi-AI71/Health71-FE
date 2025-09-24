import React, { JSX, useState } from "react";
import { Check } from "lucide-react";
import {
  ClaimAttempts,
  DenialAttempts,
  ProcessSteps,
  StatusType,
} from "@/types/patient";
import ProcessMapping from "./ui/ProcessMapping";
import { getStatusConfig } from "@/lib/utils";

interface Props {
  title: string;
  status: StatusType;
  data: ClaimAttempts[] | DenialAttempts[];
  className?: string;
  processSteps: ProcessSteps[];
  processGap?: string;
  titleGap?: string;
  type: "denial" | "claim" | "payment";
}

const CycleCard: React.FC<Props> = ({
  title,
  status,
  data = [],
  className = "",
  titleGap = "mb-3",
  processGap = "h-3.5",
  type,
  processSteps,
}) => {
  const claimAttempts = {
    claimRound: "Claim Round",
    date: "Date",
    claimAmount: "Claim Amount",
    claimId: "Claim ID",
    rejectionCode: "Rejection Code",
  };

  const denialAttemps = {
    claimRound: "Claim Round",
    claimId: "Claim ID",
    denialId: "Denial ID",
    denialAmount: "Denial Amount",
    denialCode: "Denial Code",
  };

  const statusConfig = getStatusConfig(status);
  const getStepIcon = (stepStatus: StatusType): JSX.Element => {
    switch (stepStatus) {
      case "completed":
      case "approved":
        return (
          <div className="w-6.5 h-6.5 rounded-full border-2 border-alpha flex items-center justify-center opacity-20">
            <Check className="w-4.5 h-4.5 text-base " />
          </div>
        );
      case "current":
        return (
          <div className="w-6.5 h-6.5 rounded-full border-2 border-alpha opacity-20" />
        );
      case "pending":
      case "paused":
        return (
          <div className="w-6.5 h-6.5 rounded-full border-2 border-alpha opacity-20" />
        );

      default:
        // Exhaustive check for TypeScript
        const exhaustiveCheck = stepStatus;
        return (
          <div className="w-6.5 h-6.5 rounded-full border-2 border-alpha opacity-20" />
        );
    }
  };

  const getStepTextColor = (stepStatus: StatusType): string => {
    switch (stepStatus) {
      case "completed":
        return "text-alpha opacity-30";
      case "current":
        return "text-alpha opacity-30";
      case "pending":
        return "text-alpha opacity-30";
      default:
        // Exhaustive check for TypeScript
        const exhaustiveCheck = stepStatus;
        return "text-alpha opacity-30";
    }
  };

  const [page, setPage] = useState(data.length - 1);

  const totalPages = Math.ceil(data.length);
  const currentItems = data[page];

  type CurrentItems = {
    [K in keyof typeof claimAttempts | keyof typeof denialAttemps]: number; // or whatever type the values are
  };

  const isProcessFinish = processSteps.every(
    (step) => step.status === "completed"
  );

  return (
    <div
      className={`max-w-sm bg-basecard border border-base rounded-2xl drop-shadow-sm p-4 ${className}`}
    >
      {/* Header */}

      <div className={`flex items-center justify-between ${titleGap}`}>
        <h2
          className={`text-lg font-semibold ${
            status == "notinvoked" ? "opacity-30" : ""
          }`}
        >
          {title}
        </h2>
        <div
          className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-sm font-medium ${statusConfig.className} py-1 px-2.5`}
        >
          <span>{statusConfig.text}</span>
        </div>
      </div>

      {/** Process Not finish yet */}

      {!isProcessFinish && (
        <ProcessMapping processGap={processGap} processSteps={processSteps} />
      )}

      {/** Process is finished */}
      {isProcessFinish && (
        <div>
          <div className="space-y-3.5">
            <p className=" font-medium text-base text-green">
              Cycle Number {page + 1}
            </p>
            <div className="space-y-3.5">
              <div className="flex justify-between grid grid-cols-2 gap-4">
                {Object.keys(currentItems).map((key, idx) => {
                  const claimType = key as keyof typeof claimAttempts;
                  const denialType = key as keyof typeof denialAttemps;
                  if (claimType != "claimRound" || denialType != "claimRound") {
                    return (
                      <div key={idx} className="min-w-[48%]">
                        <h3 className="text-base text-foreground">
                          {type == "claim"
                            ? claimAttempts[claimType]
                            : denialAttemps[denialType]}
                        </h3>
                        <p className="text-base font-semibold">
                          {currentItems[key as keyof typeof currentItems]}
                        </p>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
          {/* Pagination Dots */}
          {totalPages > 1 ? (
            <div className="flex justify-center mt-2 gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`h-2 w-2 rounded-full ${
                    page === i ? "bg-teal-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          ) :  <div className="flex justify-center mt-2 gap-2 h-2">
           
                </div>}
        </div>
      )}
    </div>
  );
};

export default CycleCard;
