"use client"

import { Reveal } from "@/components/reveal"

const services = [
  {
    title: "Web Development",
    desc: "Seamless endtoend frontend web development in most recent tech-stacks.",
  },
  {
    title: "UI-UX Design",
    desc: "From flows to polished wireframes and interfaces for mobile app to websites.",
  },
  {
    title: "Graphic Design",
    desc: "Logos, visual systems, marketing assets, illustrations... you name it!",
  },
]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <Reveal>
        <h2 className="text-balance text-2xl font-semibold text-gray-900 md:text-3xl">Services</h2>
        <p className="mt-2 max-w-prose text-sm text-gray-600">I partner end‑to‑end — strategy, UX, and UI.</p>
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 80}>
            <article className="group rounded-xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex size-10 items-center justify-center rounded-md bg-teal-100 text-teal-600">
                {/* simple icon */}
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor">
                  <path d="M4 7h16M4 12h10M4 17h16" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <span className="mt-4 inline-block text-sm font-medium text-teal-600">Learn more →</span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
