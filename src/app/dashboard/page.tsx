"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import InsuranceInfoCard from "@/components/InsuranceInfoCard";
import PatientProfileCard from "@/components/PatientProfileCard";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="min-h-full">
        <main className="p-6 space-y-6">
          <PatientProfileCard
            name="Sara Al Nuaimi"
            id="101300"
            emiratesId="748-1985-2233445-4"
            sex="Female"
            dateOfBirth="1985-07-21"
            nationality="UAE"
            language="Arabic"
            phone="97155467830"
            email="Sara.nuaimi@gmail.com"
            avatarUrl="/avatar.png"
          />

          <InsuranceInfoCard
            status="Covered"
            appointmentDate="2025-08-12 11:45"
            network="Daman-AUH-001"
            logoUrl="image.png"
          />
        </main>
      </div>
    </DashboardLayout>
  );
}
