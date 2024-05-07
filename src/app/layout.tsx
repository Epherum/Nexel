import "./globals.css";
import PageAnimatePresence from "./components/HOC/PageAnimatePresence";
import Nav from "./components/Header/Nav";
import { Gilroy, Mazius } from "./fonts/font";
import { Metadata } from "next";

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
          <div className="spacer"></div>
          <Nav />
          <PageAnimatePresence>{children}</PageAnimatePresence>
        </main>
      </body>
    </html>
  );
}
