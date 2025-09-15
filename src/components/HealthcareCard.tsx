import React, { JSX } from "react";
import { Check } from "lucide-react";
import {
  InsuranDetials,
  MedicalCodingDetail,
  ProcessSteps,
  StatusType,
} from "@/types/patient";
import { getStatusConfig } from "@/lib/utils";
import ProcessMapping from "./ui/ProcessMapping";


interface GridData {
  [key: string]: string | number;
}

interface StatusConfig {
  text: string;
  className: string;
}

interface HealthcareCardProps {
  title: string;
  status: StatusType;
  gridData: MedicalCodingDetail[];
  processSteps: ProcessSteps[];
  isInsuranceInfoCard?: boolean;
  className?: string;
  titleGap?: string;
  processGap?: string;
  insuranceDetails?: InsuranDetials;
}

const HealthcareCard: React.FC<HealthcareCardProps> = ({
  title,
  status,
  gridData = {},
  processSteps,
  isInsuranceInfoCard = false,
  className = "",
  titleGap = "mb-6",
  processGap = "h-3.5",
  insuranceDetails,
}) => {
  const statusConfig = getStatusConfig(status);

  const isProcessFinish = processSteps.every(
    (step) => step.status === "completed"
  );
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

      {/* if insurance eligiblity card*/}

      {isInsuranceInfoCard && isProcessFinish && (
        <div className="flex items-center space-x-3 mb-3">
          <img
            src={insuranceDetails?.imageUrl}
            alt="Insurance Logo"
            className="max-w-15.5 max-h-15.5 mr-3.5"
          />
          <div>
            <h3 className="text-lg font-semibold mb-1">
              {insuranceDetails?.insuranceProvider}
            </h3>
            <p className="text-sm font-medium">
              {insuranceDetails?.policyNumber}
            </p>
          </div>
        </div>
      )}

      {/* Content */}
      {isProcessFinish && (
        <div className="space-y-3.5">
          {Object.entries(gridData).reduce<JSX.Element[]>(
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
                      <p className={`text-base font-semibold ${(status == 'denied' && (value.label == 'Prior Auth ID' || value.label == 'CPT Code')) ? 'text-base-destructive' : ''}`}>{value.value}</p>
                    </div>
                    {nextEntry && (
                      <div className="min-w-[48%]">
                        <h3 className="text-base block text-foreground">
                          {nextEntry[1].label}
                        </h3>
                        <p className={`text-base font-semibold ${(status == 'denied' && (nextEntry[1].label == 'CPT Code' || nextEntry[1].label == 'Prior Auth ID')) ? 'text-base-destructive' : ''}`}>
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
      )}

      {!isProcessFinish && (
        <ProcessMapping processGap={processGap} processSteps={processSteps} />
      )}
    </div>
  );
};

export default HealthcareCard;
