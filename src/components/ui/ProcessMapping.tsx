import { ProcessSteps, StatusType } from "@/types/patient";
import { Check } from "lucide-react";
import { JSX } from "react";

interface ProcessMappingProps {
    processSteps: ProcessSteps[],
    processGap: string
}

const ProcessMapping: React.FC<ProcessMappingProps> = ({
    processSteps,
    processGap
}) => {

    const getStepIcon = (stepStatus: StatusType): JSX.Element => {
        switch (stepStatus) {
          case "completed":
          case "approved":
            return (
              <div className="w-6.5 h-6.5 rounded-full border-2 border-[#0D826B] bg-green flex items-center justify-center">
                <Check className="w-4.5 h-4.5 text-white" />
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
        return "";
      case "current":
        return "text-alpha opacity-30";
      case "pending":
        return "text-alpha opacity-30";
      case "denied":
        return "text-[#CB3914]";
      default:
        // Exhaustive check for TypeScript
        const exhaustiveCheck = stepStatus;
        return "text-alpha opacity-30";
    }
  };

      
    return processSteps.map((step, index) => (
            <div key={step.id} className="flex   space-x-3 ">
              <div className="flex flex-col items-center">
                {getStepIcon(step.status)}
                {index < processSteps.length - 1 && (
                  <div
                    className={`w-0.5 ${processGap || 'h-3.5'} ${
                      step.status == "completed" ? "bg-green" : "bg-gray-200"
                    } `}
                  ></div>
                )}
              </div>
              <div className="flex-1">
                <p
                  className={`text-base  text-sm font-medium ${getStepTextColor(
                    step.status
                  )} pt-1`}
                >
                  {step.label}
                </p>
              </div>
            </div>
          ))
}

export default ProcessMapping;