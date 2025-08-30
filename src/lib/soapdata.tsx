  
  import { Paperclip } from 'lucide-react';
import React from 'react';

  
 const SoapContent: React.FC = () => {
    const chiefComplaint = "Pain in the left knee, moderate to severe, lasting for 3 weeks.";
const  hpiDescription = "The patient, a 52-year-old Caucasian male named John Smith, presents with complaints of moderate to severe pain in the left knee that has persisted for the past three weeks. The pain is associated with occasional swelling and stiffness, particularly pronounced in the mornings. The symptoms are exacerbated by physical activity and have a significant impact on daily activities, including walking, climbing stairs, and prolonged standing.";
const  rosFindings = {
    musculoskeletal: "Positive for knee pain, swelling, and stiffness.",
    general: "Negative for fever or weight loss.",
    cardiovascular: "Negative for chest pain or palpitations.",
    constitutional: "Sleep disruption due to knee pain; otherwise stable."
  };
const  vitalSigns = {
    bloodPressure: "128/82 mmHg",
    heartRate: "72 bpm"
  } ;


    return (<div><div className="space-y-6">
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
                  
                </div>
              </div>
            </div>
          </div></div>)
 };

 export const attachments : React.FC = () => {
    return ( <div className="text-center py-12">
              <Paperclip className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No attachments found</p>
              <button className="mt-4 px-4 py-2 bg-green text-white rounded-lg hover:bg-blue-600 transition-colors">
                Add Attachment
              </button>
            </div>) }      

  export default SoapContent;
