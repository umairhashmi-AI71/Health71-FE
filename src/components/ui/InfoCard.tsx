import { checkHealthWorkflowErrors } from "@/lib/utils";
import { ErrorCode, ErrorType } from "@/types/error";
import { Check, Info, NotebookPen, TriangleAlert, X } from "lucide-react";


interface InfoCardProps {
  type: ErrorCode;
  title: string;
  errorDescription: string;
  style?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  type,
  title,
  errorDescription,
  style = "",
}) => {

  const getIcon = (type: ErrorCode) => {
    switch (type) {
      case "T500":
        return (
          <TriangleAlert className="w-10 h-10 bg-base-agent-10 text-base-destructive rounded-lg p-2" strokeWidth={1.5} />
        );
      case "AI-RESUB-001":
        return (<Info className="w-10 h-10 bg-agent-5 rounded-lg p-2"  strokeWidth={1.5}/>);
      case "CMS-110":
      case "CMS-110":
      // case "unmatchpayment":
      case "WR-105":
        case "CC-001":
          case "MN-REQ-001" :
            case "APL-003" :
      // case "noteligible":
      //   case "panotrequire":
      //   case "paapproved":
      //   case "panotapproved":
      //   case "paappeal":
      //  case "pandingapproval":
      //   case "partialapproval":
          case "OA-ERR-001" :
        return (
          <NotebookPen className="w-10 h-10 bg-[#EFF7F6]  rounded-lg p-2"  strokeWidth={1.5} />
        );
      // case "paymentmatch":
      //   return (
      //     <NotebookPen className="w-10 h-10 bg-necessity  rounded-lg p-2"  strokeWidth={1.5}/>
      //   );
    }
  };
   const getBorder = (type: ErrorCode) => {
    switch (type) {
      case "T500":
        return 'technical-border';
      case "AI-RESUB-001":
        return 'autoresubmittion-border'
      case "CMS-110":
      case "CMS-110":
      // case "unmatchpayment":
      case "WR-105":
        case "CC-001":
          case "MN-REQ-001" :
          case "APL-003" :
      // case "noteligible":
      //   case "panotrequire":
      //   case "paapproved":
      //   case "panotapproved":
      //   case "paappeal":
      //  case "pandingapproval":
      //   case "partialapproval":
          case "OA-ERR-001" :
        return 'border-[#AFD8D4]';
      // case "paymentmatch":
      //   return (
      //     <NotebookPen className="w-10 h-10 bg-necessity  rounded-lg p-2"  strokeWidth={1.5}/>
      //   );
    }
  };
  return (
    <div className={`flex gap-9 items-center mb-6  justify-between ${style}`}>
      <p className="text-2xl mackinac min-w-[330px] ">{title}</p>

      <div
        className={`px-3.5 py-5 flex gap-3 rounded-xl items-center shadow grow max-w-[969px] border ${getBorder(type)}`}
      >
        <div>{getIcon(type)}</div>
        <p>{errorDescription}</p>
      </div>
      {/* {type === 'writeoff' && (<div className="flex gap-2">

        <button
              onClick={() => {}}
              className="p-3 bg-base-agent-10 cursor-pointer rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-base-destructive"  strokeWidth={1.5} />
            </button>

            <button
              onClick={() => {}}
              className={`p-3 rounded-lg transition-colors cursor-pointer bg-primary-foreground`}
            >
              <Check className="w-5 h-5 text-green "  strokeWidth={1.5} />
            </button>
      </div>)} */}
    </div>
  );
};

export default InfoCard;
