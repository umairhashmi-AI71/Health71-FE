import React from "react";
import { createPortal } from "react-dom";

interface AlertModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const AlertModal: React.FC<AlertModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return createPortal(
    <div className="fixed inset-0 z-50 alert-model flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 shadow-lg max-w-xl w-full relative">
        {/* <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button> */}
        {children}
      </div>
    </div>,
    document.body
  );
};

export default AlertModal;