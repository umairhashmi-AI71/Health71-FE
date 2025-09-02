"use client";

import Comingsoon from "@/components/Comingsoon";
import { DashboardLayout } from "@/components/dashboard-layout";
 
export default function Task() {
    
  return (
    <DashboardLayout>
       <div className="min-h-[800px] align-middle  w-[100%]"> <Comingsoon /></div>
    </DashboardLayout>
       
   );
}
