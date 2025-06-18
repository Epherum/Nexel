import "./globals.scss";
import PageAnimatePresence from "./components/HOC/PageAnimatePresence";
import { Gilroy, Mazius } from "./fonts/font";
import { Metadata } from "next";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
export const metadata = {
  title: "Emira Tlili",
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
        className={`${Gilroy.variable} ${Mazius.variable}`}
        id="page-container"
      >
        <main>
          <Navbar />
          <PageAnimatePresence>{children}</PageAnimatePresence>
          <Footer />
        </main>
      </body>
    </html>
  );
}
