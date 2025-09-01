"use client";
import React from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { useRouter } from 'next/navigation';
import { ScanSearch } from 'lucide-react';

const DetailsButtonRenderer: React.FC<ICellRendererParams> = (params) => {
  const router = useRouter(); 
      
      const handleDetailsClick = () => {
        router.push(`/patient/${params.data.id}`);
      };
  
      return (
        <button
          onClick={handleDetailsClick}
          className="flex items-center gap-2 px-3 py-2 border border-sidebar cursor-pointer rounded-lg text-sm transition-colors"
        >
          <ScanSearch className="w-4 h-4" />
          
        </button>
      );
};

export default DetailsButtonRenderer;