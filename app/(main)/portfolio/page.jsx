import PortfolioHero from "@/components/pages/portfolio/portfolio-hero";
import PortfolioCategories from "@/components/pages/portfolio/portfolio-categories";
import PortfolioGrid from "@/components/pages/portfolio/portfolio-grid";
import ClientLogos from "@/components/pages/portfolio/client-logos";
import CTA from "@/components/shared/cta";

export const metadata = {
  title: "Portfolio | Axel Web Technologies",
  description: "Explore our portfolio of successful projects across various industries and technologies.",
};

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioHero />
      <PortfolioCategories />
      <PortfolioGrid />
      <ClientLogos />
      <CTA
        title="Have a project in mind?"
        description="Let's discuss how we can bring your vision to life with our expertise."
        buttonText="Start a Project"
        buttonLink="/contact"
      />
    </main>
  );
}
