import React from "react";

interface PatientProfileProps {
  name: string;
  id: string;
  emiratesId: string;
  sex: string;
  dateOfBirth: string;
  nationality: string;
  language: string;
  phone: string;
  email: string;
  avatarUrl: string;
}

const PatientProfileCard: React.FC<PatientProfileProps> = ({
  name,
  id,
  emiratesId,
  sex,
  dateOfBirth,
  nationality,
  language,
  phone,
  email,
  avatarUrl,
}) => {
  return (
    <div className="bg-basecard border border-base rounded-2xl drop-shadow-sm p-6 space-y-2 max-w-xs">
      <div className="flex justify-between items-center">
        <img
          src={avatarUrl}
          alt={name}
          className="w-25 h-25 rounded-full object-cover"
        />
        <div className="text-center">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-green-600 font-bold">{id}</p>
        </div>
      </div> 
      <div className="grid grid-cols-2 gap-y-4 mt-4 text-sm">
        <p className="col-span-2"><span className="font-medium block text-foreground">Emirates ID:</span> {emiratesId}</p>
        <p><span className="font-medium block text-foreground">Date of Birth:</span> {dateOfBirth}</p>
        <p><span className="font-medium block text-foreground">Sex:</span> {sex}</p>
        <p><span className="font-medium block text-foreground">Nationality:</span> {nationality}</p>
        <p><span className="font-medium block text-foreground">Language:</span> {language}</p>
        <p className="col-span-2"><span className="font-medium block text-foreground ">Phone:</span> {phone}</p>
        <p className="col-span-2"><span className="font-medium block text-foreground">Email:</span> {email}</p>
      </div>
    </div>
  );
};

export default PatientProfileCard;