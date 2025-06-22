import "@/styles/globals.scss";
import PageAnimatePresence from "../components/HOC/PageAnimatePresence";
import { Gilroy, Mazius, Clovergrotesk } from "../fonts/font"; // 1. Import Clovergrotesk
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
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
        className={`${Clovergrotesk.variable} ${Gilroy.variable} ${Mazius.variable}`}
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
