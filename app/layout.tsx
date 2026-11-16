import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "ATScV - AI Resume Builder | Build ATS-Friendly Resumes",
  description:
    "Create professional, ATS-friendly resumes with ATScV AI Resume Builder. Build, optimize, and check your resume with AI-powered tools.",
  keywords: [
    "AI Resume Builder",
    "ATS Resume",
    "Resume Optimizer",
    "ATS Score Checker",
    "Professional Resume Templates",
  ],
  applicationName: "ATScV",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
