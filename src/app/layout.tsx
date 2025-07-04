import "@/styles/globals.css";
import { Clovergrotesk } from "@/fonts/font"; // 1. Import Clovergrotesk
import Navbar from "@/components/layout/Navbar";
import SmoothScrollWrapper from "@/utils/SmoothScrollWrapper"; // 1. Import the new wrapper

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
        <main>
          <Navbar />
          <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
        </main>
      </body>
    </html>
  );
}
