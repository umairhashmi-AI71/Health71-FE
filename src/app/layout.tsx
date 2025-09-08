"use client"
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import ChatWidget from "@/components/ChatWidget";
import { Provider } from 'react-redux';
import { store } from '../store';

const inter = Inter({ subsets: ['latin'] });

  
const mackinacBook = localFont({
  src: "../../public/fonts/Mackinac-Book.woff2",
  variable: "--font-mackinac-book",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body
        className={`${inter.className} ${mackinacBook.variable}`}
      >
        <Provider store={store}>

        {children}
          </Provider>

      </body>
    </html>
  );
}
