"use client"
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import ChatWidget from "@/components/ChatWidget";
import { Provider } from 'react-redux';
import { store } from '../store';
import { createContext, useState } from "react";

const inter = Inter({ subsets: ['latin'] });


const mackinacBook = localFont({
  src: "../../public/fonts/Mackinac-Book.woff2",
  variable: "--font-mackinac-book",
});

interface AgentProps {
  agent: string,
  changeAgent: (agent: string) => void
}

export const AgentContext = createContext<AgentProps>({
  agent: "",
  changeAgent: () => { },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [agent, setAgent] = useState("");

  const changeAgent = (agent: string) => {
    setAgent(agent);
  };
  return (

    <html lang="en">
      <body
        className={`${inter.className} ${mackinacBook.variable}`}
      >
        <Provider store={store}>
          <AgentContext.Provider value={{ agent, changeAgent }}>
            {children}
          </AgentContext.Provider>
        </Provider>

      </body>
    </html>
  );
}
