import React, { useEffect } from "react";
import AdminSidebar from "@/components/admin/admin-sidebar";
import AdminHeader from "@/components/admin/admin-header";
import AdminAuthCheck from "@/components/admin/admin-auth-check";

const metadata = {
  title: "Admin Dashboard | Axel Web Technologies",
  description: "Admin dashboard for Axel Web Technologies website",
};

export default function AdminLayout({ children }) {
  useEffect(() => {
    document.title = metadata.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", metadata.description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = metadata.description;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <AdminAuthCheck>
      <div className="min-h-screen flex flex-col md:flex-row bg-muted/30">
        <AdminSidebar />
        <div className="flex-1 flex flex-col min-h-screen max-h-screen overflow-hidden">
          <AdminHeader />
          <main className="flex-1 p-4 md:p-6 overflow-y-auto">{children}</main>
        </div>
      </div>
    </AdminAuthCheck>
  );
}
