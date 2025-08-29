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
        <section className="relative overflow-hidden">
          {/* Blob 1 (top-left) */}
          <svg
            className="absolute top-10 left-10 w-64 h-64 text-teal-400 opacity-40 animate-blob1"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M29.5,-39.3C38.4,-27.8,45.7,-18.6,54.7,-4.3C63.6,10,74.1,29.4,68.6,40.2C63.1,51,41.6,53.2,24.6,53.1C7.6,53,-5,50.7,-19.9,48.1C-34.9,45.6,-52.1,42.8,-63.3,32.3C-74.6,21.7,-79.7,3.4,-73.1,-9.1C-66.4,-21.7,-47.9,-28.4,-33.8,-38.9C-19.6,-49.5,-9.8,-63.9,0.3,-64.2C10.3,-64.6,20.7,-50.8,29.5,-39.3Z"
              transform="translate(100 100)"
            />
          </svg>

          {/* Blob 2 (bottom-right) */}
          <svg
            className="absolute bottom-10 right-10 w-72 h-72 text-teal-300 opacity-40 animate-blob2"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M26.2,-43.3C31.1,-37.6,30.4,-25.6,39.3,-15.3C48.1,-5,66.6,3.6,72.6,15.4C78.6,27.1,72.1,42,59,43.4C45.8,44.7,25.9,32.6,13.5,27.9C1.2,23.2,-3.7,26,-8.1,25.7C-12.6,25.3,-16.8,21.7,-16.1,17C-15.4,12.3,-9.9,6.5,-15.8,-0.8C-21.7,-8.2,-39,-17,-43.7,-25.4C-48.3,-33.8,-40.2,-41.9,-30.8,-45.5C-21.4,-49.2,-10.7,-48.4,0,-48.4C10.6,-48.3,21.2,-48.9,26.2,-43.3Z"
              transform="translate(100 100)"
            />
          </svg>

          {/* Blob 3 (middle-left, lighter teal) */}
          <svg
            className="absolute top-1/3 left-1/4 w-56 h-56 text-teal-200 opacity-30 animate-blob3"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M34,-45.5C47.5,-39.1,65.5,-35.7,72.3,-25.7C79.2,-15.7,74.9,0.8,65.6,13.5C56.3,26.2,41.9,35,28.2,43.5C14.5,52.1,1.4,60.4,-10.4,60.6C-22.2,60.9,-32.7,53.1,-41.5,43.5C-50.3,34,-57.3,22.7,-57.5,10.9C-57.7,-0.9,-51,-12.9,-42,-21.9C-33.1,-30.8,-21.9,-36.7,-9.1,-42.6C3.7,-48.6,18.4,-54,34,-45.5Z"
              transform="translate(100 100)"
            />
          </svg>

          {/* Blob 4 (middle-right, very light teal) */}
          <svg
            className="absolute top-1/2 right-1/3 w-48 h-48 text-teal-100 opacity-25 animate-blob4"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M39.1,-56.4C50.8,-50.5,61.3,-42.3,66.2,-31.2C71.1,-20.1,70.5,-6.1,66.1,5.8C61.6,17.6,53.4,27.2,44.3,38.8C35.2,50.5,25.2,64.1,12.8,68.1C0.3,72,-15.6,66.2,-29.1,58.4C-42.6,50.6,-53.7,40.7,-61.1,28.3C-68.5,15.8,-72.1,0.8,-68.6,-11.1C-65,-23,-54.4,-31.8,-43.2,-39.7C-32,-47.6,-20,-54.5,-7.3,-55.6C5.5,-56.8,11,-52.2,39.1,-56.4Z"
              transform="translate(100 100)"
            />
          </svg>

          {/* Content */}
          <Hero />
          <About />
        </section>

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
