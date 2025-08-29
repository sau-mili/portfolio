"use client"

import { useMemo, useState } from "react"
import { Reveal } from "@/components/reveal"

type Project = {
  id: number
  title: string
  tag: "Web" | "App" | "Graphic"
  image: string
}

const allProjects: Project[] = [
  { id: 1, title: "SaaS Dashboard", tag: "Web", image: "/saas-dashboard-overview.png" },
  { id: 2, title: "Banking App", tag: "App", image: "/mobile-app-ui.png" },
  { id: 3, title: "Portfolio Site", tag: "Web", image: "/portfolio-website-showcase.png" },
  { id: 4, title: "Brand Kit", tag: "Graphic", image: "/brand-kit.png" },
  { id: 5, title: "Travel App", tag: "App", image: "/travel-app-ui.png" },
  { id: 6, title: "E‑commerce Landing", tag: "Web", image: "/ecommerce-landing.png" },
]

const filters = ["All", "Web", "App", "Graphic"] as const

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All")
  const items = useMemo(() => (active === "All" ? allProjects : allProjects.filter((p) => p.tag === active)), [active])

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <Reveal>
        <h2 className="text-balance text-2xl font-semibold text-gray-900 md:text-3xl">My Projects</h2>
        <p className="mt-2 max-w-prose text-sm text-gray-600">Selected work spanning product design and brand.</p>
      </Reveal>

      <div className="mt-6 flex flex-wrap gap-2">
        {filters.map((f) => {
          const activeState = active === f
          return (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={[
                "rounded-md px-3 py-1.5 text-sm transition",
                activeState
                  ? "bg-teal-500 text-white"
                  : "border border-black/10 bg-white text-gray-700 hover:bg-gray-50",
              ].join(" ")}
            >
              {f}
            </button>
          )
        })}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <Reveal key={p.id} delay={i * 60}>
            <article className="group overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition hover:shadow-md">
              <img alt={p.title} src={p.image || "/placeholder.svg"} className="h-44 w-full object-cover" />
              <div className="p-4">
                <p className="text-sm text-teal-600">{p.tag}</p>
                <h3 className="mt-1 font-semibold text-gray-900">{p.title}</h3>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
