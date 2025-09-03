"use client";

import { useState } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { DashboardLayout } from "@/components/dashboard-layout";
import Comingsoon from "@/components/Comingsoon";
 
export default function SearchPatientForm() {
  const [activeTab, setActiveTab] = useState<"identifier" | "details">(
    "identifier"
  );
  const [dob, setDob] = useState<dayjs.Dayjs | null>(null);

  return (
    <DashboardLayout>
     
                <Comingsoon />

    </DashboardLayout>
  );
}
