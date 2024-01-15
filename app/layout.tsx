import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NavBar from "./NavBar";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-html="winter" lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        <main className="p-5">{children}</main>
      </body>
    </html>
  );
}
