"use client";

import AgentCard from "@/components/AgentCard";
import { DashboardLayout } from "@/components/dashboard-layout";

import {
  ClipboardCheck,
  Flag,
  Zap,
  ShieldCheck,
  SquareCheck,
  NotepadText,
  Binary,
  Mailbox,
  Text,
  ClipboardX,
  Check,
  Banknote,
  CheckCheck,
} from "lucide-react";
import type { Agent } from "../../types/agent";
import React, { useState, useEffect } from "react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

import WelcomeCard from "@/components/welcomeCard/WelcomeCard";
import DashboardMetrics from "@/components/DashboardMetrics";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function DashboardPage() {
  const agentData: Agent[] = [
    {
      title: "Eli",
      desc: 'I keep claims clean before they even start.',
      image: "/eli.png",
      role: "Eligibility Agent",
      savedHours: "~0.5",
      feature: [
        { icon: ClipboardCheck, label: "Verified", count: 1400 },
        { icon: Zap, label: "Rest Cleared for Autho"},
        { icon: Flag, label: "Require Review", count: 70},
      ],
    },
    {
      title: "Autho",
      desc: 'I remove barriers before care begins.',
      image: "/autho.svg",
      role: "Prior authorization Agent",
      savedHours: "~0.1",
      feature: [
        { icon: SquareCheck, label: "Prior Submissions", count: 280 },
        { icon: ShieldCheck, label: "Approvals secured", count: 200 },
        { icon: Flag, label: "Require review", count: 80 },
      ],
    },
    {
      title: "Coda",
      desc: 'I turn clinical notes into billable claims.',
      image: "/coda.svg",
      role: "Coding Agent",
      savedHours: "~2.2",
      feature: [
        { icon: NotepadText, label: "Reports read", count: 1400 },
        { icon: Binary, label: "Medical codes mapped" },
        { icon: Flag, label: "Low-confidence", count: 280 },
      ],
    },
    {
      title: "Clara",
      desc: 'I make sure claims are submitted right, the first time.',
      image: "/clara.svg",
      role: "Claim Submission",
      savedHours: "~0.9",
      feature: [
        { icon: Mailbox, label: "Claim submitted", count: 1400 },
        { icon: Text, label: "All claims logged"},
        { icon: Flag, label: "Compliance fixes", count: 70},
      ],
    },
    {
      title: "Dee",
      desc: 'I fight denials so revenue keeps flowing.',
      image: "/dee.svg",
      role: "Denial Management",
      savedHours: "~0.04",
      feature: [
        { icon: Check, label: "Resolved", count: 70 },
        { icon: ClipboardX, label: "Denials analyzed", count: 260 },
        { icon: Flag, label: "Appeals for review", count: 24 },
      ],
    },
    {
      title: "Payne",
      desc: 'I close the loop and keep the books balanced.',
      image: "/payne.png",
      role: "Payment Posting",
      savedHours: "~0.1",
      feature: [
        { icon: Mailbox, label: "Posted", count: 1400 },
        { icon: Banknote, label: "Payment–Claim Match" },
        { icon: Flag, label: "Underpays flagged", count: 140 },
      ],
    },
  ];

  const [agents, setAgents] = useState(agentData);
  useEffect(() => {
  const interval = setInterval(() => {
    setAgents((prev) =>
      prev.map((agent) => {
        return {
          ...agent,
          feature: agent.feature.map((f) => {
            if (f.count === undefined) {
              // 🔹 If no count, leave it as is
              return f;
            }
            // 🔹 Otherwise increment
            return {
              ...f,
              count: f.count + Math.floor(Math.random() * 3),
            };
          }),
        };
      })
    );
  }, 5000);

  return () => clearInterval(interval);
}, []);


  return (
    <DashboardLayout>
      <div
        className={`flex-1 flex min-h-[100vh] flex-col lg:ml-0 rounded-xl bg-white`}
      >
        <main className="size-full max-w-345 xl:mx-auto ">
          <div className="min-h-full size-full max-w-345 xl:mx-auto">
            <div className="p-6 space-y-8">
              <WelcomeCard />

              <div className="grid grid-cols-3 gap-6 mb-8">
                {agents.map((agent, idx) => (
                  <AgentCard key={idx} {...agent} />
                ))}
              </div>
              <DashboardMetrics />
            </div>
          </div>
        </main>
      </div>
    </DashboardLayout>
  );
}
