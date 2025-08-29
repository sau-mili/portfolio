import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"

export default function ShopPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="mb-3 text-3xl font-semibold text-gray-900">Shop</h1>
        <p className="mb-6 text-gray-700">Coming soon. I’m cooking up prints, icons, and resources.</p>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">Notify Me</Button>
      </main>
      <SiteFooter />
    </>
  )
}
