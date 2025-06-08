import { Suspense } from "react"
import FaqHero from "@/components/pages/faqs/faq-hero"
import FaqCategories from "@/components/pages/faqs/faq-categories"
import FaqAccordion from "@/components/pages/faqs/faq-accordion"
import ContactCta from "@/components/pages/faqs/contact-cta"

export const metadata = {
  title: "FAQs | Axel Web Technologies",
  description: "Find answers to frequently asked questions about our services, processes, and technologies.",
}

function FaqsContent() {
  return (
    <>
      <FaqHero />
      <FaqCategories />
      <FaqAccordion />
      <ContactCta />
    </>
  )
}

export default function FaqsPage() {
  return (
    <main>
      <Suspense
        fallback={
          <div className="min-h-screen">
            <div className="h-96 bg-muted animate-pulse" />
            <div className="container py-16 space-y-8">
              <div className="flex gap-3 justify-center">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-10 w-32 bg-muted animate-pulse rounded-md" />
                ))}
              </div>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-16 bg-muted animate-pulse rounded-lg" />
                ))}
              </div>
            </div>
          </div>
        }
      >
        <FaqsContent />
      </Suspense>
    </main>
  )
}
