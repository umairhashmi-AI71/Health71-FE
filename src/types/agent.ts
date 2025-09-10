import { attachments } from "@/lib/soapdata";
import { LucideIcon } from "lucide-react";

export interface Feature {
  icon?: LucideIcon;
  label: string;       // e.g. "Verified", "Flagged", etc.
  count?: number;       // Dynamic numeric value
}


export interface Agent {
    image: string; // URL or path to the agent's image
  title: string;
  desc: string;
  role: string;
  savedHours: string;
  background?: string;
  feature: Feature[];
}

