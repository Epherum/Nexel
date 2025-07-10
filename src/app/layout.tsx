// src/app/layout.tsx (or your RootLayout file)
import "@/styles/globals.css";
import { Clovergrotesk } from "@/fonts/font";
import Navbar from "@/components/layout/Navbar";
import SmoothScrollWrapper from "@/utils/SmoothScrollWrapper";
import { Analytics } from "@vercel/analytics/next";
import Cursor from "@/components/cursor/Cursor";
import { CursorProvider } from "@/components/cursor/CursorContext";
import { PreloaderProvider } from "@/context/PreloaderContext"; // ✅ Import the new provider
import { ViewTransitions } from "next-view-transitions";

export const metadata = {
  title: "Nexel | Digital Design Agency",
  icon: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CursorProvider>
        <ViewTransitions>
          <body
            suppressHydrationWarning
            className={`${Clovergrotesk.variable} antialiased `}
          >
            <Cursor />

            <main>
              {/* ✅ Wrap the layout with the provider */}
              <PreloaderProvider>
                <Navbar /> {/* Now Navbar can access the context */}
                <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
              </PreloaderProvider>
            </main>
            <Analytics />
          </body>
        </ViewTransitions>
      </CursorProvider>
    </html>
  );
}
