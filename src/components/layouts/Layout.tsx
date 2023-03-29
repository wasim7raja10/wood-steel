import { ReactNode } from "react";
import Navbar from "../global/Navbar";
import Footer from "../global/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
