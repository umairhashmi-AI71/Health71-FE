import React, { useState } from 'react';
import { Plus, Trash2, Check, X } from 'lucide-react';

interface ICDCode {
  id: string;
  code: string;
  confidence: number;
  isApproved?: boolean;
  desc?: string;
}

interface ICDCodesProps {
  initialCodes?: ICDCode[];
}

const ICDCodes: React.FC<ICDCodesProps> = ({
  initialCodes = [
    { id: '1', code: 'M25.562', confidence: 100, isApproved: false, desc:"Pain in left knee" },
    { id: '2', code: 'M17.12', confidence: 10, isApproved: false , desc:"Unilateral primary osteoarthritis affecting the left knee"}
  ]
}) => {
  const [codes, setCodes] = useState<ICDCode[]>(initialCodes);
  const [newCode, setNewCode] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleAddCode = () => {
    if (newCode.trim()) {
      const newICDCode: ICDCode = {
        id: Date.now().toString(),
        code: newCode.toUpperCase(),
        confidence: Math.floor(Math.random() * 40) + 60, // Random confidence 60-100%
        isApproved: false
      };
      setCodes([...codes, newICDCode]);
      setNewCode('');
      setIsAdding(false);
    }
  };

  const handleDeleteCode = (id: string) => {
    setCodes(codes.filter(code => code.id !== id));
  };

  const handleApproveCode = (id: string) => {
    setCodes(codes.map(code => 
      code.id === id ? { ...code, isApproved: !code.isApproved } : code
    ));
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'text-green-600';
    if (confidence >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-4">
      {/* Header */}
      <div className="flex items-center mb-3 gap-x-4">
        <h1 className="text-2xl font-semibold text-gray-900">ICD Codes</h1>
        <button
        //   onClick={() => setIsAdding(true)}
          className="flex items-center space-x-2 px-2 py-2 border-2 border-base border-opacity-30 rounded-lg transition-colors"
        >
          <Plus className="w-5 h-5 text-gray-600" />
         </button>
      </div>

      {/* Add New Code Form */}
      {isAdding && (
        <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={newCode}
              onChange={(e) => setNewCode(e.target.value)}
              placeholder="Enter ICD code (e.g., M25562)"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && handleAddCode()}
            />
            <button
              onClick={handleAddCode}
              className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
            >
              <Check className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setIsAdding(false);
                setNewCode('');
              }}
              className="px-3 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ICD Codes List */}
      <div className="space-y-4 ">
        {codes.map((icdCode, index) => (
            <div key={icdCode.id} className={`${(index % 2 === 0 )? 'bg-basecard border border-warm-gray' : 'bg-basecard'} p-4 rounded-lg`} >
          <div className="flex items-center space-x-2 mb-3">
            {/* Code Input/Display */}
            <div className={`flex-1 px-4 py-3 border rounded-lg bg-white ${
              icdCode.isApproved 
                ? 'border-green-300 bg-green-50' 
                : 'border-base'
            }`}>
              <span className="">
                {icdCode.code}
              </span>
            </div>

            {/* Action Buttons */}
            <button
              onClick={() => handleDeleteCode(icdCode.id)}
              className="p-3 bg-base-agent-10 rounded-lg transition-colors"
            >
              <Trash2 className="w-5 h-5 text-base-destructive" />
            </button>

            <button
            //   onClick={() => handleApproveCode(icdCode.id)}
              className={`p-3 rounded-lg transition-colors ${
                icdCode.isApproved
                  ? 'bg-primary-foreground'
                  : 'bg-primary-foreground'
              }`}
            >
              <Check className="w-5 h-5 text-green " />
            </button>
          </div>
          <div className='text-deep-ocean text-xs'>
          <p>{icdCode.desc}</p>
          <p>Confidence Score: {icdCode.confidence}</p>
          </div>
          </div>
        ))}
      </div>

      {/* Confidence Scores */}
      {/* {codes.length > 0 && (
        <div className="mt-6 space-y-2">
          {codes.map((icdCode) => (
            <div key={`confidence-${icdCode.id}`} className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                Confidence Score for {icdCode.code}:
              </span>
              <span className={`text-sm font-medium ${getConfidenceColor(icdCode.confidence)}`}>
                {icdCode.confidence}%
              </span>
            </div>
          ))}
        </div>
      )} */}

      {/* Empty State */}
      {/* {codes.length === 0 && !isAdding && (
        <div className="text-center py-8">
          <div className="text-gray-400 mb-4">
            <Plus className="w-12 h-12 mx-auto" />
          </div>
          <p className="text-gray-500 mb-4">No ICD codes added yet</p>
          <button
            onClick={() => setIsAdding(true)}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            Add Your First ICD Code
          </button>
        </div>
      )} */}
    </div>
  );
};

export default ICDCodes;