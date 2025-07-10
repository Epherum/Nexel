import "@/styles/globals.css";
import { Clovergrotesk } from "@/fonts/font";
import Navbar from "@/components/layout/Navbar";
import SmoothScrollWrapper from "@/utils/SmoothScrollWrapper";
import { Analytics } from "@vercel/analytics/next";
import {
  CursorContext,
  CursorProvider,
} from "@/components/cursor/CursorContext";

// --- START: Import the new Cursor component ---
import Cursor from "@/components/cursor/Cursor";
// --- END: Import the new Cursor component ---

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
        <body
          suppressHydrationWarning
          className={`${Clovergrotesk.variable} antialiased `}
        >
          {/* --- START: Add the Cursor component here --- */}
          <Cursor />
          {/* --- END: Add the Cursor component here --- */}
          <main>
            {/* <Navbar /> */}
            <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
          </main>
          <Analytics />
        </body>
      </CursorProvider>
    </html>
  );
}
