import React, { JSX, useState } from "react";
import { Check } from "lucide-react";
import {
  ClaimAttempts,
  ClaimStep,
  DenialAttempts,
  InsuranDetials,
  MedicalCodingDetail,
  StatusType,
} from "@/types/patient";

// Type definitions for better type safety
type ModeType = "grid" | "process";

interface GridData {
  [key: string]: string | number;
}

export interface ProcessStep {
  id: string;
  label: string;
  status: StatusType;
}

interface StatusConfig {
  text: string;
  className: string;
}

interface HealthcareCardProps {
  title: string;
  status: StatusType;
  data: ClaimAttempts[] | DenialAttempts[];
  className?: string;
  titleGap?: string;
  type: "denial" | "claim" | "payment";
}

const CycleCard: React.FC<HealthcareCardProps> = ({
  title,
  status,
  data = [],
  className = "",
  titleGap = "mb-3",
  type,
}) => {
  const claimAttempts = {
    date: "Date",
    claimAmount: "Claim Amount",
    claimId: "Claim ID",
    rejectionCode: "Rejection Code",
  };

  const denialAttemps = {
    claimId: "Claim ID",
    denialId: "Denial ID",
    amount: "Denial Amount",
    denialCode: "Denial Code",
  };

  const getStatusConfig = (status: StatusType): StatusConfig => {
    switch (status) {
      case "approved":
        return {
          text: "Approved",
          className: "bg-primary-foreground text-green",
        };
      case "submitted":
        return {
          text: "Submitted",
          className: "bg-primary-foreground text-green",
        };
      case "covered":
        return {
          text: "Covered",
          className: "bg-primary-foreground text-green",
        };
      case "done":
        return {
          text: "Done",
          className: "bg-primary-foreground text-green",
        };
      case "inprogress":
        return {
          text: "In Process",
          className: "bg-base-agent-10 text-pixel-bloom",
        };
      case "pending":
        return {
          text: "Pending",
          className: "bg-warm-gray text-white",
        };
      case "paused":
        return {
          text: "Paused",
          className: "bg-warm-gray text-white",
        };
      case "waiting":
        return {
          text: "Waiting",
          className: "bg-warm-gray text-white",
        };
      case "rejected":
        return {
          text: "Rejected",
          className: "bg-base-agent-10 text-pixel-bloom",
        };
      default:
        // TypeScript will catch if we add new status types without handling them
        const exhaustiveCheck = status;
        return {
          text: status,
          className: "bg-warm-gray text-white",
        };
    }
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
  return (
    <div
      className={`max-w-sm bg-basecard border border-base rounded-2xl drop-shadow-sm p-4 ${className}`}
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
      <div className="space-y-3.5">
        <p className=" font-medium text-base text-green">
          Cycle Number {page + 1}
        </p>
        <div className="space-y-3.5">
          <div className="flex justify-between grid grid-cols-2 gap-4">
            {Object.keys(currentItems).map((key, idx) => {
              const claimType = key as keyof typeof claimAttempts;
              const denialType = key as keyof typeof denialAttemps;
              return (
                <div key={idx} className="min-w-[48%]">
                  <h3 className="text-base text-foreground">
                    {type == "claim"
                      ? claimAttempts[claimType]
                      : denialAttemps[denialType]}
                  </h3>
                  <p className="text-base font-semibold">
                    {(currentItems as Record<string, any>)[key]}
                  </p>
                </div>
              );
            })}
          </div>
          {/* {currentItems &&
            currentItems.reduce<JSX.Element[]>((acc, row, i, array) => {
              if (i % 2 === 0) {
                const nextEntry = array[i + 1];
                acc.push(
                  <div key={i} className="flex justify-between gap-4">
                    <div className="min-w-[48%]">
                      <h3 className="text-base text-foreground">{row.label}</h3>
                      <p className="text-base font-semibold">{row.value}</p>
                    </div>
                    {nextEntry && (
                      <div className="min-w-[48%]">
                        <h3 className="text-base text-foreground">
                          {nextEntry.label}
                        </h3>
                        <p className="text-base font-semibold">
                          {nextEntry.value}
                        </p>
                      </div>
                    )}
                  </div>
                );
              }
              return acc;
            }, [])} */}
        </div>
      </div>

      {/* Pagination Dots */}
      {totalPages > 1 && (
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
      )}
    </div>
  );
};

export default CycleCard;
