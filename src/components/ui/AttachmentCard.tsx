import React, { useState } from "react";
import { FileText } from "lucide-react";
import { createPortal } from "react-dom";

interface AttachmentCardProps {
  fileName: string;
  fileSize: string;
  ecgImageUrl: string;
}

const AttachmentCard: React.FC<AttachmentCardProps> = ({
  fileName,
  fileSize,
  ecgImageUrl,
}) => {
  const [open, setOpen] = useState(false);
  const [fileType, setFileType] = useState<string>();
const  getFileExtension = (path: string): string => {
  return path.split(".").pop() || "";
}
  return (
    <>
      <div className="bg-white border border-sidebar rounded-xl p-4 flex items-start gap-4 max-w-xs">
        <FileText className="w-6 h-6  mt-1" />
        <div>
          <div className="font-semibold ">{fileName}</div>
          <div className="text-xs font-normal text-warm-gray">{fileSize}</div>
          <button
            className="text-green font-medium underline cursor-pointer"
            onClick={() => {
              setFileType(getFileExtension(ecgImageUrl))
                if(ecgImageUrl) setOpen(true);
            }}
          >
            Click to view
          </button>
        </div>
      </div>
      {open &&
  createPortal(
    <div className="fixed inset-0 w-screen h-screen bg-ecg flex items-center justify-center z-50 transition-opacity duration-300 opacity-100" onClick={(e) => setOpen(false)}>
      <div className="rounded-xl p-6 shadow-lg max-w-7xl w-full relative flex flex-col items-center
        transform transition-transform duration-300 scale-100
        animate-modal-in">
        {/* <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          &times;
        </button> */}
        
         {fileType === "pdf" && (
          <iframe
            src={ecgImageUrl}
            className="w-full min-h-[80vh] rounded-lg"
          />
        )}

        {fileType !== "pdf" && (
          <img
          src={ecgImageUrl}
          alt="ECG Scan"
          className="w-full h-auto rounded-lg max-h-[90vh] object-contain"
        />
        )}
      </div>
    </div>,
    document.body
  )
}
    </>
  );
};

export default AttachmentCard;