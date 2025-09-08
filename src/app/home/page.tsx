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
} from "lucide-react";
import type { Agent } from "../../types/agent";
import React, { useState, useEffect } from "react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

import WelcomeCard from "@/components/welcomeCard/WelcomeCard";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function DashboardPage() {
  const agentData: Agent[] = [
    {
      title: "Eli",
      image: "/eli.png",
      role: "Eligibility Agent",
      savedHours: "~0.5",
      feature: [
        { icon: ClipboardCheck, label: "Verified", count: 24 },
        { icon: Zap, label: "Flagged", count: 234 },
        { icon: Flag, label: "Cleared for Autho" },
      ],
    },
    {
      title: "Autho",
      image: "/autho.svg",
      role: "Prior authorization Agent",
      savedHours: "~0.1",
      feature: [
        { icon: SquareCheck, label: "Prior auto checked", count: 280 },
        { icon: ShieldCheck, label: "Approvals secured", count: 200 },
        { icon: Flag, label: "Require human review", count: 80 },
      ],
    },
    {
      title: "Coda",
      image: "/coda.svg",
      role: "Coding Agent",
      savedHours: "~2.2",
      feature: [
        { icon: NotepadText, label: "Prior auto checked", count: 1400 },
        { icon: Binary, label: "Approvals secured" },
        { icon: Flag, label: "Require human review", count: 280 },
      ],
    },
    {
      title: "Clara",
      image: "/clara.svg",
      role: "Claim Submission",
      savedHours: "~0.3",
      feature: [
        { icon: Mailbox, label: "Prior auto checked", count: 1400 },
        { icon: Text, label: "Approvals secured", count: 70 },
        { icon: Flag, label: "Require human review" },
      ],
    },
    {
      title: "Dee",
      image: "/dee.svg",
      role: "Denial Management",
      savedHours: "~0.04",
      feature: [
        { icon: ClipboardX, label: "Prior auto checked", count: 260 },
        { icon: Check, label: "Approvals secured", count: 70 },
        { icon: Flag, label: "Require human review", count: 24 },
      ],
    },
    {
      title: "Payne",
      image: "/payne.png",
      role: "Payment Posting",
      savedHours: "~0.1",
      feature: [
        { icon: Mailbox, label: "Prior auto checked", count: 1400 },
        { icon: Banknote, label: "Approvals secured" },
        { icon: Flag, label: "Require human review", count: 140 },
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
            feature: agent.feature.map((f) => ({
              ...f,
              count: (f.count ?? 0) + Math.floor(Math.random() * 3),
            })),
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

              <div className="grid grid-cols-3 gap-6 mb-10">
                {agents.map((agent, idx) => (
                  <AgentCard key={idx} {...agent} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </DashboardLayout>
  );
}
