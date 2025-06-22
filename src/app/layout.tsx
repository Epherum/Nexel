import "@/styles/globals.scss";
import PageAnimatePresence from "../components/HOC/PageAnimatePresence";
import { Gilroy, Mazius, Clovergrotesk } from "../fonts/font"; // 1. Import Clovergrotesk
import Navbar from "../components/layout/Navbar";
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
      <body
        className={`${Clovergrotesk.variable} ${Gilroy.variable} ${Mazius.variable}`}
        id="page-container"
      >
        <main>
          <Navbar />
          <PageAnimatePresence>{children}</PageAnimatePresence>
        </main>
      </body>
    </html>
  );
}
