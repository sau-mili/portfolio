import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WorkShowcase } from "@/components/sections/work-showcase"

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <WorkShowcase />
      </main>
      <SiteFooter />
    </>
  )
}
