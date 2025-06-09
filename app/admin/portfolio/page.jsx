import { PortfolioManager } from "@/components/admin/portfolio-manager";
export const metadata = {
  title: "Portfolio Management | Admin Dashboard",
  description: "Manage portfolio items for Next-Gen IT Solutions website",
};

// Default export for the page component
export default function PortfolioManagementPage() {
  return <PortfolioManager />;
}

// Assuming PortfolioManager is defined in "@/components/admin/portfolio-manager"