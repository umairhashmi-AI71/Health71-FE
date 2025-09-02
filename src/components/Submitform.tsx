import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { markPatientSubmitted } from '@/store/slice/Patient';

interface Props {
    userId: string,
    cancelHandel: () => void; 
}

const ClaimSubmissionComponent = ({
    userId,
    cancelHandel

}: Props) => {
  const [isSubmited, setIsSubmited] = useState(false);
  const [completedSteps, setCompletedSteps] = useState(new Set<number>());
  const dispatch = useDispatch()
    const route = useRouter();
  const steps = [
    { id: 1, label: 'Compliance Check & Adjustment' },
    { id: 2, label: 'XML File Generated' },
    { id: 3, label: 'Claim Posted' },
    { id: 4, label: 'Claim ID Received & Updated' }
  ];

  const handleSubmit = async () => {

    if(isSubmited) {route.push("/home")
      dispatch(markPatientSubmitted(userId));
    } 
        
    
    setIsSubmited(true);
    setCompletedSteps(new Set());

    // Process each step with 3-second delay
    for (let i = 0; i < 3; i++) {
      await new Promise(resolve => setTimeout(resolve, 3000));
      setCompletedSteps(prev => new Set([...prev, steps[i].id]));
    }

   };

  const handleCancel = () => {
    setIsSubmited(false);
    setCompletedSteps(new Set());
  };

  const getStepStatus = (stepId: number) => {
    if (completedSteps.has(stepId)) return 'completed';
    if (isSubmited && stepId === Math.max(...completedSteps) + 1) return 'processing';
    return 'pending';
  };

  return (
    <div >
      
      <div className="space-y-4">
        {steps.map((step, index) => {
          const status = getStepStatus(step.id);
          const isConnectedToNext = index < steps.length - 1;

          return (
            <div key={step.id} className="relative">
              {/* Connecting line to next step */}
              {isConnectedToNext && (
                <div 
                  className={`absolute left-3 top-6.5 w-0.5 h-4 ${
                    completedSteps.has(step.id) ? 'bg-green' : 'bg-gray-300'
                  }`}
                />
              )}
              
              <div className="flex items-center space-x-3">
                {/* Step circle */}
                <div 
                  className={`flex items-center justify-center  w-6.5 h-6.5 rounded-full border-2 border-base transition-all duration-500 ${
                    status === 'completed' 
                      ? 'bg-green' 
                      : status === 'processing'
                      ? ''
                      : ''
                  }`}
                >
                  {status === 'completed' ? (
                    <Check className="w-4 h-4 text-white" />
                  ) : status === 'processing' ? (
                    ''
                    // <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" />
                  ) : (
                    ''
                    // <div className="w-4 h-4 bg-gray-300 rounded-full" />
                  )}
                </div>

                {/* Step label */}
                <span 
                  className={`text-base text-sm text-alpha-30 ${
                    status === 'completed' 
                      ? 'text-green-600' 
                      : status === 'processing'
                      ? 'text-alpha-30'
                      : 'text-alpha-30'
                  }`}
                >
                  {step.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

 

      {/* Action buttons */}
      <div className="flex justify-end space-x-4">
       {!isSubmited && (<button
          onClick={cancelHandel}
          disabled={isSubmited}
          className="border rounded-xl px-5 py-2 text-base-primary bg-white cursor-pointer"
        >
          Cancel
        </button>)} 
        <button
          onClick={handleSubmit}
        //   disabled={isSubmited}
          className="rounded-xl px-4 py-4 text-white bg-green cursor-pointer"
        >
          {isSubmited ? 'Go Home' : 'Submit'}
        </button>
      </div>

      {/* Status message */}
      {/* {isSubmited && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-700 text-center">
            Processing your claim submission... Please wait.
          </p>
        </div>
      )}

      {completedSteps.size === 3 && !isSubmited && (
        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <p className="text-green-700 text-center font-medium">
            ✓ Claim submitted successfully! You will be notified with updates.
          </p>
        </div>
      )} */}
    </div>
  );
};

export default ClaimSubmissionComponent;