import React, { useState } from 'react';
import { HeartPlus, NotepadText, Paperclip } from 'lucide-react';

interface SOAPNoteProps {
  patientName?: string;
  age?: number;
  gender?: string;
  chiefComplaint?: string;
  hpiDescription?: string;
  rosFindings?: {
    musculoskeletal?: string;
    general?: string;
    cardiovascular?: string;
    constitutional?: string;
  };
  vitalSigns?: {
    bloodPressure?: string;
    heartRate?: string;
    temperature?: string;
    respiratoryRate?: string;
    oxygenSaturation?: string;
  };
}

const SOAPNote: React.FC<SOAPNoteProps> = ({
  patientName = "John Smith",
  age = 52,
  gender = "Caucasian male",
  chiefComplaint = "Pain in the left knee, moderate to severe, lasting for 3 weeks.",
  hpiDescription = "The patient, a 52-year-old Caucasian male named John Smith, presents with complaints of moderate to severe pain in the left knee that has persisted for the past three weeks. The pain is associated with occasional swelling and stiffness, particularly pronounced in the mornings. The symptoms are exacerbated by physical activity and have a significant impact on daily activities, including walking, climbing stairs, and prolonged standing.",
  rosFindings = {
    musculoskeletal: "Positive for knee pain, swelling, and stiffness.",
    general: "Negative for fever or weight loss.",
    cardiovascular: "Negative for chest pain or palpitations.",
    constitutional: "Sleep disruption due to knee pain; otherwise stable."
  },
  vitalSigns = {
    bloodPressure: "128/82 mmHg",
    heartRate: "72 bpm"
  }
}) => {
  const [activeTab, setActiveTab] = useState<'soap' | 'vitals' | 'attachments'>('soap');
  return (
    <div className="mx-auto bg-white border border-base rounded-lg drop-shadow-sm ">
      {/* Header with Tabs */}
      <div className="border-b px-1 py-1 h-10 border-base bg-base-muted rounded-lg  flex gap-x-4">
           <button 
            onClick={() => setActiveTab('soap')}
            className={`flex items-center justify-center rounded-lg text-center grow transition-colors ${
              activeTab === 'soap' 
                ? 'bg-white' 
                : ''
            }`}
          >
            <NotepadText className="w-5 h-5 mr-2"  />
            <span className="text-sm">SOAP Note</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('vitals')}
            className={`flex items-center justify-center rounded-lg text-center grow transition-colors ${
              activeTab === 'vitals' 
                ? 'bg-white' 
                : ''
            }`}
          >
            <HeartPlus className="w-5 h-5  mr-2" />
            <span className="text-sm">Care Coordination</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('attachments')}
            className={`flex items-center justify-center rounded-lg text-center grow transition-colors ${
              activeTab === 'attachments' 
                ? 'bg-white' 
                : ''}`}
          >
            <Paperclip className="w-5 h-5  mr-2" />
            <span className="text-sm">Attachments</span>
          </button>
       </div>

      {/* Tab Content */}
      <div className="p-2.5 overflow-y-auto h-94 text-muted ">
        {activeTab === 'soap' && (
          <div className="space-y-6">
            {/* Subjective Section */}
            <div className="space-y-4">
              <h2 className="">Subjective</h2>
              
              <div className="space-y-3">
                <div>
                  <h3 className="">Chief Complaint (CC):</h3>
                  <p className="">{chiefComplaint}</p>
                </div>

                <div>
                  <h3 className="">History of Present Illness (HPI):</h3>
                  <p className="">{hpiDescription}</p>
                </div>

                <div>
                  <h3 className="">Review of Systems (ROS):</h3>
                  <div className="space-y-1.5 ml-4">
                    <p className="">
                      <span className="">- Musculoskeletal:</span> {rosFindings.musculoskeletal}
                    </p>
                    <p className="">
                      <span className="">- General:</span> {rosFindings.general}
                    </p>
                    <p className="">
                      <span className="">- Cardiovascular:</span> {rosFindings.cardiovascular}
                    </p>
                    <p className="">
                      <span className="">- Constitutional:</span> {rosFindings.constitutional}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Objective Section */}
            <div className="space-y-4">
              <h2 className="">Objective</h2>
              
              <div>
                <h3 className="text-sm font-medium  mb-2">Vital Signs:</h3>
                <div className="space-y-1.5 ml-4">
                  <p className="">
                    <span className="">- Blood Pressure:</span> {vitalSigns.bloodPressure}
                  </p>
                  <p className="">
                    <span className="">- Heart Rate:</span> {vitalSigns.heartRate}
                  </p>
                  {vitalSigns.temperature && (
                    <p className="">
                      <span className="">- Temperature:</span> {vitalSigns.temperature}
                    </p>
                  )}
                  {vitalSigns.respiratoryRate && (
                    <p className="">
                      <span className="">- Respiratory Rate:</span> {vitalSigns.respiratoryRate}
                    </p>
                  )}
                  {vitalSigns.oxygenSaturation && (
                    <p className="">
                      <span className="">- Oxygen Saturation:</span> {vitalSigns.oxygenSaturation}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'vitals' && (
          <div className="space-y-6">
            Empty
          </div>
        )}

        {activeTab === 'attachments' && (
          <div className="space-y-6">
            <div className="text-center py-12">
              <Paperclip className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No attachments found</p>
              <button className="mt-4 px-4 py-2 bg-green text-white rounded-lg hover:bg-blue-600 transition-colors">
                Add Attachment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SOAPNote;