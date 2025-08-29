import Preloader from "@/components/preloader"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Skills } from "@/components/sections/skills"
import { WorkShowcase } from "@/components/sections/work-showcase"
import { FAQ } from "@/components/sections/faq"
import { Testimonials } from "@/components/sections/testimonials"
import { ContactSection } from "@/components/sections/contact"

export default function HomePage() {
  return (
    <>
      <Preloader />
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <WorkShowcase compact />
        <Testimonials />
        <FAQ />
        <ContactSection center />
      </main>
      <SiteFooter />
    </>
  )
}
