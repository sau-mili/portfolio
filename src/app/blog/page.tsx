import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function BlogsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-20">
        <h1 className="mb-3 text-3xl font-semibold text-gray-900">Blogs</h1>
        <p className="text-gray-700">
          Blog posts will live here. For now, I will just wait.
        </p>
      </main>
      <SiteFooter />
    </>
  )
}
