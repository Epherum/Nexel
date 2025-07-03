import "@/styles/globals.css";
import { Clovergrotesk } from "@/fonts/font"; // 1. Import Clovergrotesk
import Navbar from "@/components/layout/Navbar";

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
          {children}
        </main>
      </body>
    </html>
  );
}
