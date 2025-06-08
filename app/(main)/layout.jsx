import React from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Breadcrumb from "@/components/layout/breadcrumb";
import ScrollToTop from "@/components/ui/scroll-to-top";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb />
      <main className="flex-1 relative">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
