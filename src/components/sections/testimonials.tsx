import { Reveal } from "@/components/reveal"
import { Quote } from "lucide-react"

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-14">
      <Reveal>
        <h2 className="mb-6 text-2xl font-semibold text-gray-900">Testimonials</h2>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {[1, 2].map((i) => (
          <Reveal key={i}>
            <blockquote className="rounded-lg border bg-white p-5">
              <p className="text-gray-700">
                <Quote className="text-teal-400 h-10 w-7"></Quote>
                “I had the pleasure of working with Saumili during GSSOC. She is incredibly easy to work with, and our collaborations were always productive and enjoyable. Saumili communicates well, ensuring that we were always on the same page and able to address any issues promptly. Her active communication made our work together seamless, and I never encountered any problems.”
              </p>
              <footer className="mt-3 text-sm text-gray-600">Joseph Martin</footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
