import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/context";

// import react-hot-toast
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Municipal Council - Official Website",
  description:
    "Official website of the Municipal Council providing civic services, information, and community updates.",
  generator: "nithu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {/* Toast container */}
         <Toaster
  position="top-right"
  reverseOrder={false}
  toastOptions={{
    success: {
      duration: 5000,
      style: {
        background: "oklch(0.2 0.08 250)", // primary color
        color: "#ffffff", // contrast text
        borderRadius: "1rem",
        padding: "1rem",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      },
      iconTheme: {
        primary: "#ffffff", // icon color
        secondary: "oklch(0.2 0.08 250)", // background of icon circle
      },
    },
    error: {
      duration: 5000,
      style: {
        background: "oklch(0.2 0.08 250)", // using same primary color for error
        color: "#ffffff",
        borderRadius: "1rem",
        padding: "1rem",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      },
      iconTheme: {
        primary: "#ffffff",
        secondary: "oklch(0.2 0.08 250)",
      },
    },
  }}
/>

          

          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
