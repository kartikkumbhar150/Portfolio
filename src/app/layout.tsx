import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import ThreeBackground from "@/components/ThreeBackground";
import CursorGlow from "@/components/CursorGlow";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCodeFont = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kartik Kumbhar | Portfolio",
  description: "Portfolio of Kartik Kumbhar, a Software Engineer & AI Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interFont.variable} ${firaCodeFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground relative z-0">
        <Providers>
          <ThreeBackground />
          <CursorGlow />
          {children}
        </Providers>
      </body>
    </html>
  );
}
