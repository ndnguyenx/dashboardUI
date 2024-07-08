'use client'
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider/theme-provider";
import DashboardSidebar from "@/components/dashboard-sidebar/DashboardSidebar";
import DashboardHeader from "@/components/dashboard-header/DashboardHeader";
import DashboardWrapper from "@/components/dashboard-wrapper/DashboardWrapper";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500"
});


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      themes={['dark', 'custom', 'light']}
      attribute="class"
      enableSystem
      disableTransitionOnChange
    >
      <>
        <DashboardSidebar />
        <div className="flex flex-col h-full w-full">
          <DashboardHeader />
          <DashboardWrapper children={children} />
        </div>
      </>
    </ThemeProvider>
  );
}
