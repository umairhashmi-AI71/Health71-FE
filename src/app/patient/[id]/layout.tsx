import Breadcrumb from "@/components/Breadcrumb";
import { DashboardLayout } from "@/components/dashboard-layout";

// app/patient/[id]/layout.tsx
export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return ( 
          <DashboardLayout>
             <div
               className={`flex-1 flex min-h-[100vh] flex-col lg:ml-0 rounded-xl bg-white`}
             >
               <main className="size-full max-w-345 xl:mx-auto ">
                 <div>
                   <main className="p-6 size-full max-w-345 xl:mx-auto">
                     <div className="flex justify-between items-center items-start">
                      {children}
                     </div>
                    
                     
          </main> 
                 </div>
               </main>
             </div>
           </DashboardLayout>
  );
}


