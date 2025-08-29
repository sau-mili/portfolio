import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"

export function ContactSection({ center = false }: { center?: boolean }) {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-14">
      <Reveal>
        <h2 className={`mb-2 text-2xl font-semibold text-gray-900 ${center ? "text-center" : ""}`}>
          Let’s Design & Build
        </h2>
        <p className={`mb-6 text-gray-700 ${center ? "text-center" : ""}`}>
          Got a project? I’m available for web design/dev, branding, and illustration work. Tell me a bit about what you
          need and I’ll get back shortly.
        </p>
      </Reveal>
      <form className="grid gap-4 rounded-lg border bg-white p-5">
        <div className="grid gap-2 sm:grid-cols-2">
          <label className="text-sm text-gray-700">
            <span className="mb-1 block">Name</span>
            <input className="w-full rounded-md border px-3 py-2" placeholder="Your name" />
          </label>
          <label className="text-sm text-gray-700">
            <span className="mb-1 block">Email</span>
            <input type="email" className="w-full rounded-md border px-3 py-2" placeholder="you@example.com" />
          </label>
        </div>
        <label className="text-sm text-gray-700">
          <span className="mb-1 block">Message</span>
          <textarea
            className="min-h-[120px] w-full rounded-md border px-3 py-2"
            placeholder="Tell me about your project…"
          />
        </label>
        <div>
          <Button type="button" className="bg-teal-500 hover:bg-teal-600 text-white">
            Send Message
          </Button>
        </div>
      </form>
    </section>
  )
}
