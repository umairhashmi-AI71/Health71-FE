import { PatientProfile } from "@/types/patient";
import React from "react";

interface PatientProfileProps {
  details: PatientProfile;
  mrn: string
}

const PatientProfileCard: React.FC<PatientProfileProps> = ({ details, mrn }) => {
  const {
    dateOfBirth,
    email,
    emiratesId,
    language,
    name,
    nationality,
    phoneNumber,
    sex,
    surname,
    profilePhoto,
  } = details;
  return (
    <div className="bg-basecard border border-base rounded-2xl drop-shadow-sm p-4 space-y-2 max-w-xs">
      <div className="flex justify-between items-center mb-4">
        <img
          src={profilePhoto}
          alt={name}
          className="w-25 h-25 rounded-full object-cover"
        />
        <div className="text-center flex-1">
          <h2 className="text-lg font-semibold">
            {name} <br />
            {surname}
          </h2>
          <p className="font-medium fong-base text-green ">{mrn}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-y-4 mt-4  line-height-6">
        <div className="col-span-2">
          <p className="text-base block text-foreground mb-1">Emirates ID:</p>
          <p className="text-base font-semibold">{emiratesId}</p>
        </div>
        <div>
          <p className="text-base block text-foreground mb-1">Date of Birth:</p>
          <p className="text-base font-semibold"> {dateOfBirth}</p>
        </div>
        <div>
          <p className="text-base block text-foreground mb-1">Sex:</p>
          <p className="text-base font-semibold">{sex}</p>
        </div>
        <div>
          <p className="text-base block text-foreground mb-1">Nationality:</p>
          <p className="text-base font-semibold">{nationality}</p>
        </div>
        <div>
          <p className="text-base block text-foreground mb-1">Language:</p>
          <p className="text-base font-semibold">{language}</p>
        </div>
        <div className="col-span-2">
          <p className="text-base block text-foreground mb-1">Phone:</p>
          <p className="text-base font-semibold">{phoneNumber}</p>
        </div>
        <div className="col-span-2">
          <p className="text-base block text-foreground mb-1">Email:</p>
          <p className="text-base font-semibold">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default PatientProfileCard;
