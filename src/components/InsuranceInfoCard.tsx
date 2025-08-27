import React from "react";
import { CalendarClock } from "lucide-react";

interface InsuranceInfoProps {
  status: "Covered" | "Not Covered";
  appointmentDate: string;
  network: string;
  logoUrl: string;
}

const InsuranceInfoCard: React.FC<InsuranceInfoProps> = ({
  status,
  appointmentDate,
  network,
  logoUrl,
}) => {
  return (
    <div className="bg-basecard rounded-lg  p-6 max-w-xs ">
      <div className="">
        <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-2 rounded-lg inline-block mb-3 ">
          {status}
        </span>
        <div className="text-sm flex items-center"><CalendarClock className="mr-2.5"/><p>{appointmentDate}</p></div>
      </div>
      <div className="flex items-center space-x-3 mt-4">
        <img src={logoUrl} alt="Insurance Logo" className="max-w-15.5 max-h-15.5 mr-3.5" />
        <div>
          <h3 className="text-lg font-semibold mb-3">{network}</h3>
          <p className="text-gray-500 text-sm">In-network</p>
        </div>
      </div>
    </div>
  );
};

export default InsuranceInfoCard;