import {Saira_Condensed, Outfit} from 'next/font/google'

import type { Metadata } from "next";
import "./globals.css";

// Header font
const saira = Saira_Condensed({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-saira'
})

// Content font
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400'],
  display: 'swap',
  variable: '--font-outfit'
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Everything about pets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${saira.variable} ${outfit.variable}`}>
      <body>
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
        {children}
      </body>
    </html>
  );
}
