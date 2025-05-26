import ContactHero from "@/components/pages/contact/contact-hero";
import ContactInfo from "@/components/pages/contact/contact-info";
import ContactForm from "@/components/pages/contact/contact-form";
import ContactMap from "@/components/pages/contact/contact-map";
import FAQ from "@/components/pages/contact/faq";

export const metadata = {
  title: "Contact Us | Axel Web Technologies",
  description: "Get in touch with our team for inquiries, quotes, or to discuss your project needs.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <FAQ />
    </main>
  );
}
