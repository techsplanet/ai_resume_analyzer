import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "RESUMIND - AI Resume Analyser",
  description: "An AI-powered resume analysis tool that helps job seekers optimize their resumes for better chances of landing interviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[url(/images/bg-main.svg)] bg-cover">
        {children}
      </body>
    </html>
  );
}
