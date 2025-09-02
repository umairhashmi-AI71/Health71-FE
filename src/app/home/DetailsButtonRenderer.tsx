"use client";
import React, { useEffect, useState } from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { useRouter } from 'next/navigation';
import { Check, ScanSearch, Search } from 'lucide-react';

export const DetailsButtonRenderer: React.FC<ICellRendererParams> = (params) => {
  const router = useRouter(); 
      
      const handleDetailsClick = () => {
        router.push(`/patient/${params.data.id}`);
      };
  
      return (
        
          <Search className="w-4 h-4  cursor-pointer  transition-colors"  onClick={handleDetailsClick} />
          
       
      );
};

 

export const fullNameRenderer = (params: ICellRendererParams) => {
  const { name, surname } = params.data as { name: string; surname: string };
  return (
    <span>
      {name} {surname}
    </span>
  );
};


export const CustomCheckbox = (params: ICellRendererParams) => {
  const [checked, setChecked] = useState(params.node.isSelected());

  useEffect(() => {
    const listener = () => setChecked(params.node.isSelected());
    params.api.addEventListener("rowSelected", listener);
    return () => {
      params.api.removeEventListener("rowSelected", listener);
    };
  }, [params]);

  const handleClick = () => {
    params.node.setSelected(!checked, true); // ✅ allow multi-select
  };

  return (
    <div
      onClick={handleClick}
      className={`w-5 h-5 flex items-center justify-center border rounded cursor-pointer
        ${checked ? "checkbox" : "bg-white border-gray-400"}`}
    >
      {checked && <Check size={14} className="text-white" />}
    </div>
  );
};

export default CustomCheckbox;