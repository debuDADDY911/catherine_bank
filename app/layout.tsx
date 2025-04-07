// app/layout.tsx - Optimized Version
import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
import { LoaderProvider } from "@/components/context/LoaderContext";
import { GlobalLoadingProvider } from "@/components/context/GlobalLoadingContext";
import AudioConfig from "@/components/AudioConfig";
import GlobalLoader from "@/components/GlobalLoader";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Catherine De Sienne - The Merchant Bank",
  description: "Catherine De Sienne - The Merchant Bank",
  icons: "/globe2.png",
};

// Simple fallback loader
function SimpleLoader() {
  return (
    <div className="fixed inset-0 bg-[#0D090A] flex items-center justify-center z-[99999]">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-primary">
        <Suspense fallback={<SimpleLoader />}>
          <GlobalLoadingProvider>
            <LoaderProvider>
              <ClientWrapper>
                <AudioConfig>
                  {children}
                  <GlobalLoader />
                </AudioConfig>
              </ClientWrapper>
            </LoaderProvider>
          </GlobalLoadingProvider>
        </Suspense>
      </body>
    </html>
  );
}
