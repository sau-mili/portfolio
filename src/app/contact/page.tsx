import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactSection } from "@/components/sections/contact"

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
