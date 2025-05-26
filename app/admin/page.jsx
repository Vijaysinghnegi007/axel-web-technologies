import React, { useEffect } from "react";
import { AdminDashboard } from "@/components/admin/admin-dashboard";

const metadata = {
  title: "Admin Dashboard | Next-Gen IT Solutions",
  description: "Admin dashboard for Next-Gen IT Solutions website management",
};

export default function AdminPage() {
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

  return <AdminDashboard />;
}
