import React, { JSX, useEffect, useState } from "react";
import { Check } from "lucide-react";
import {
  InsuranDetials,
  MedicalCodingDetail,
  PaymentDetails,
  ProcessSteps,
  StatusType,
} from "@/types/patient";
import { number } from "zod";
import ProcessMapping from "./ui/ProcessMapping";
import { useDispatch } from "react-redux";
import { changeStatus, updatePaymentStep } from "@/store/slice/Patient";
import { useParams } from "next/navigation";

// Type definitions for better type safety
type ModeType = "grid" | "process";

interface GridData {
  [key: string]: string | number;
}

interface StatusConfig {
  text: string;
  className: string;
}

interface PostPaymentCardProps {
  title: string;
  status: StatusType;
  mode: ModeType;
  gridData?: MedicalCodingDetail[];
  processSteps: ProcessSteps[];
  isInsuranceInfoCard?: boolean;
  className?: string;
  titleGap?: string;
  processGap?: string;
  insuranceDetails?: InsuranDetials;
  details?: PaymentDetails;
}

const PostPaymentCard: React.FC<PostPaymentCardProps> = ({
  title,
  status,
  mode,
  gridData = {},
  processSteps = [],
  isInsuranceInfoCard = false,
  className = "",
  titleGap = "mb-6",
  processGap = "h-3.5",
  insuranceDetails,
  details = {},
}) => {
  const getStatusConfig = (status: StatusType): StatusConfig => {
    switch (status) {
      case "approved":
        return {
          text: "Approved",
          className: "bg-primary-foreground text-green",
        };
      case "received":
        return {
          text: "Received",
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

  const dispatch = useDispatch();


  const params = useParams();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= processSteps.length) return; // stop when done

    let interval: NodeJS.Timeout;
    if (status == 'inprogress') {
      interval = setInterval(() => {
        dispatch(updatePaymentStep({ patientId: params.id as string, title: processSteps[index].label })); // send message to redux
        setIndex((prev) => prev + 1); // move to next message
      }, 5000);
    }


    return () => clearInterval(interval); // cleanup
  }, [index, dispatch]);

  const statusConfig = getStatusConfig(status);


  const isPaymentCompeted = processSteps.every(
    (step) => step.status === "completed"
  );


  useEffect(() => {
    if (isPaymentCompeted) {
      dispatch(changeStatus({ patientId: params.id as string })); // send message to redux
    }
  }, [isPaymentCompeted]);

  const detailsKey = {
    date: "Date",
    paymentFile: "Payment File",
    claimId: "Claim ID",
    ar: "AR",
    difference: "Difference"
  };
  const getKeyValue = (key: string, value: string | number) => {

    switch (key) {
      case "difference":
      case "ar":
        return typeof value === "number" && value < 0 ? (
          <span className="text-base-destructive">{value} AED</span>
        ) : (
          <span>{value} AED</span>
        );
      case 'paymentFile':
        return <span>{value} AED</span>;
      default:
        return <span>{value}</span>;
    }
  };
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
      <div className="">
        <ProcessMapping processSteps={processSteps} processGap={processGap} />
      </div>

      {/* {!isPaymentCompeted && (
        <div className="">
          <ProcessMapping processSteps={processSteps}  processGap={processGap} />
        </div>
      )} */}

      {/* {isPaymentCompeted && (
        <div className="space-y-4">
          <div className="flex justify-between grid grid-cols-2 gap-4">
            {details &&
              Object.keys(details).map((key, idx) => {
                const type = key as keyof typeof detailsKey;
                const detailsType = key as keyof typeof details;
                return (
                  <div key={idx} className="min-w-[48%]">
                    <h3 className="text-base text-foreground ">
                      {detailsKey[type]}
                    </h3>
                    <p
                      className={`text-base font-semibold ${
                        details[detailsType] == "difference" &&
                        details[detailsType] > 0
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      {getKeyValue(key, details[detailsType])}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default PostPaymentCard;
