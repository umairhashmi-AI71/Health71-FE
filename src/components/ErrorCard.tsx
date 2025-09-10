import { Check, Info, NotebookPen, TriangleAlert, X } from "lucide-react";

type ErrorType =
  | "technical"
  | "autoresubmittion"
  | "codesuggestion"
  | "writeoff"
  | "paymentmatch"
  | "medicalnecessity";
interface ErrorCardProps {
  type: ErrorType;
  title: string;
  errorDescription: string;
  style?: string;
}

const ErrorCard: React.FC<ErrorCardProps> = ({
  type,
  title,
  errorDescription,
  style = "",
}) => {
  const getIcon = (type: ErrorType) => {
    switch (type) {
      case "technical":
        return (
          <TriangleAlert className="w-10 h-10 bg-base-agent-10 text-base-destructive rounded-lg p-2" strokeWidth={1.5} />
        );
      case "autoresubmittion":
        return <Info className="w-10 h-10 bg-agent-5 rounded-lg p-2"  strokeWidth={1.5}/>;
      case "codesuggestion":
      case "medicalnecessity":

      case "writeoff":
        return (
          <NotebookPen className="w-10 h-10 bg-[#EFF7F6]  rounded-lg p-2"  strokeWidth={1.5} />
        );
      case "paymentmatch":
        return (
          <NotebookPen className="w-10 h-10 bg-necessity  rounded-lg p-2"  strokeWidth={1.5}/>
        );
    }
  };
  return (
    <div className={`flex gap-9 items-center mb-6  justify-between ${style}`}>
      <p className="text-2xl mackinac min-w-[330px] ">{title}</p>

      <div
        className={`px-3.5 py-5 flex gap-3 rounded-xl items-center shadow grow max-w-[969px] ${type}-border`}
      >
        <div>{getIcon(type)}</div>
        <p>{errorDescription}</p>
      </div>
      {type === 'writeoff' && (<div className="flex gap-2">

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
      </div>)}
    </div>
  );
};

export default ErrorCard;
