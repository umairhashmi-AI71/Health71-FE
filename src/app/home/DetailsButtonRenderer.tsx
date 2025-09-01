"use client";
import React from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { useRouter } from 'next/navigation';
import { ScanSearch, Search } from 'lucide-react';

const DetailsButtonRenderer: React.FC<ICellRendererParams> = (params) => {
  const router = useRouter(); 
      
      const handleDetailsClick = () => {
        router.push(`/patient/${params.data.id}`);
      };
  
      return (
        
          <Search className="w-4 h-4  cursor-pointer  transition-colors"  onClick={handleDetailsClick} />
          
       
      );
};

export default DetailsButtonRenderer;