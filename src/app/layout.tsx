import "@/styles/globals.css";
import { Clovergrotesk } from "@/fonts/font";
import Navbar from "@/components/layout/Navbar";
import SmoothScrollWrapper from "@/utils/SmoothScrollWrapper";

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
      <body className={`${Clovergrotesk.variable} `}>
        {/* --- START: Add the Cursor component here --- */}
        <Cursor />
        {/* --- END: Add the Cursor component here --- */}
        <main>
          <Navbar />
          <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
        </main>
      </body>
    </html>
  );
}
