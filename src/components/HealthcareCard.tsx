import React, { JSX } from 'react';
import { Check, Clock, AlertCircle } from 'lucide-react';

// Type definitions for better type safety
type StatusType = 'approved' | 'inprogress' | 'pending' | 'rejected' | 'covered' ;
type ModeType = 'grid' | 'process';
type StepStatusType = 'completed' | 'current' | 'pending';

interface GridData {
  [key: string]: string | number;
}

export interface ProcessStep {
  id: string;
  label: string;
  status: StepStatusType;
}

interface StatusConfig {
  text: string;
  className: string;
}

interface HealthcareCardProps {
  title: string;
  status: StatusType;
  mode: ModeType;
  gridData?: GridData;
  processSteps?: ProcessStep[];
  isInsuranceInfoCard?:boolean;
  className?:string;
  titleGap?:string;
  processGap?:string;

}

const HealthcareCard: React.FC<HealthcareCardProps> = ({
  title,
  status,
  mode,
  gridData = {},
  processSteps = [],
  isInsuranceInfoCard = false,
  className ='',
  titleGap = 'mb-6',
  processGap = 'h-3.5'
}) => {
  const getStatusConfig = (status: StatusType): StatusConfig => {
    switch (status) {
      case 'approved':
        return {
          text: 'Approved',
          className: 'bg-primary-foreground text-green',
        };
        case 'covered':
        return {
          text: 'Covered',
          className: 'bg-primary-foreground text-green',
        };
    case 'inprogress':
     return {
          text: 'In Process',
          className: 'bg-base-agent-10 text-pixel-bloom',
        };
      case 'pending':
        return {
          text: 'Pending',
          className: 'bg-warm-gray text-white',
        };
      case 'rejected':
        return {
          text: 'Rejected',
          className: 'bg-base-agent-10 text-pixel-bloom',
        };
      default:
        // TypeScript will catch if we add new status types without handling them
        const exhaustiveCheck: never = status;
        return {
          text: status,
          className: 'bg-primary-foreground text-green',
        };
    }
  };

  const statusConfig = getStatusConfig(status);

  const getStepIcon = (stepStatus: StepStatusType): JSX.Element => {
    switch (stepStatus) {
      case 'completed':
        return <div className="w-6.5 h-6.5 rounded-full border-2 border-alpha flex items-center justify-center opacity-20">
          <Check className="w-4.5 h-4.5 text-base " />
        </div>;
      case 'current':
        return <div className="w-6.5 h-6.5 rounded-full border-2 border-alpha opacity-20" />;
      case 'pending':
        return <div className="w-6.5 h-6.5 rounded-full border-2 border-alpha opacity-20"  />;
      default:
        // Exhaustive check for TypeScript
        const exhaustiveCheck: never = stepStatus;
        return <div className="w-6.5 h-6.5 rounded-full border-2 border-alpha opacity-20" />;
    }
  };

  const getStepTextColor = (stepStatus: StepStatusType): string => {
    switch (stepStatus) {
      case 'completed':
        return 'text-alpha opacity-30';
      case 'current':
        return 'text-alpha opacity-30';
      case 'pending':
        return 'text-alpha opacity-30';
      default:
        // Exhaustive check for TypeScript
        const exhaustiveCheck: never = stepStatus;
        return 'text-alpha opacity-30';
    }
  };

  return (
    <div className={`max-w-sm bg-basecard border border-base rounded-2xl drop-shadow-sm p-4 ${className}`}>
      {/* Header */}
      <div className={`flex items-center justify-between ${titleGap}`}>
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-sm font-medium ${statusConfig.className} py-1 px-2.5`}>
          <span>{statusConfig.text}</span>
        </div>
      </div>

    {/* if insurance eligiblity card*/}

    {isInsuranceInfoCard && (
      <div className="flex items-center space-x-3 mb-3">
        <img src={"image.png"} alt="Insurance Logo" className="max-w-15.5 max-h-15.5 mr-3.5" />
        <div>
          <h3 className="text-lg font-semibold mb-1">Daman-AUH-001</h3>
          <p className="text-sm font-medium">42122566</p>
        </div>
      </div>
    )}

      {/* Content */}
      {mode === 'grid' && (
        <div className="space-y-4">
          {Object.entries(gridData).reduce<JSX.Element[]>((acc, [key, value], index, array) => {
            if (index % 2 === 0) {
              const nextEntry: [string, string | number] | undefined = array[index + 1];
              acc.push(
                <div key={index} className="flex justify-between">
                  <div className='min-w-[48%]'>
                    <h3 className="text-base block text-foreground">{key}</h3>
                    <p className='text-base font-semibold'>{value}</p>
                  </div>
                  {nextEntry && (
                    <div className='min-w-[48%]'>
                      <h3 className="text-base block text-foreground">{nextEntry[0]}</h3>
                      <p className="text-base font-semibold">{nextEntry[1]}</p>
                    </div>
                  )}
                </div>
              );
            }
            return acc;
          }, [])}
        </div>
      )}

      {mode === 'process' && (
        <div className="">
          {processSteps.map((step, index) => (
            <div key={step.id} className="flex   space-x-3 ">
              <div className="flex flex-col items-center">
                {getStepIcon(step.status)}
                {index < processSteps.length - 1 && (
                  <div className={`w-0.5 ${processGap} bg-gray-200`} />
                )}
              </div>
              <div className="flex-1">
                <p className={`text-base  text-sm font-medium ${getStepTextColor(step.status)} pt-1` }>
                  {step.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
 
export default HealthcareCard;