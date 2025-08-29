"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"

type Work = {
  id: string
  title: string
  type: "web" | "graphic"
  sub?: string
  img: string
}

const works: Work[] = [
  // Website Development (kept first as highest priority)
  { id: "w1", title: "AgriPact", type: "web", img: "/web-1.png" },
  { id: "w2", title: "Ghost Busting Game", type: "web", img: "/web-2.png" },

  // Graphic Design — prioritized subs: UI > Logo > Packaging > Illustrations > Marketing > Newsletters > Patterns
  { id: "g-ui-1", title: "Finance App UI", type: "graphic", sub: "UI Design", img: "/web-ui1.png" },
    { id: "g-ui-2", title: "Finance App UI", type: "graphic", sub: "UI Design", img: "/web-ui2.png" },
  
  { id: "g-logo-1", title: "Brand Logo Set", type: "graphic", sub: "Logo Design", img: "/logo1.png" },
  { id: "g-logo-2", title: "Brand Logo Set", type: "graphic", sub: "Logo Design", img: "/logo2.png" },
  { id: "g-logo-3", title: "Brand Logo Set", type: "graphic", sub: "Logo Design", img: "/logo3.png" },
  { id: "g-logo-4", title: "Brand Logo Set", type: "graphic", sub: "Logo Design", img: "/logo4.png" },


  {
    id: "g-pack-1",
    title: "Cafe Packaging",
    type: "graphic",
    sub: "Packaging Design",
    img: "/coffee-branding.png",
  },


  {
    id: "g-ill-1",
    title: "Character Series",
    type: "graphic",
    sub: "Illustrations",
    img: "/illus-1.png",
  },
    {
    id: "g-ill-2",
    title: "Character Series",
    type: "graphic",
    sub: "Illustrations",
    img: "/illus-2.png",
  },
    {
    id: "g-ill-3",
    title: "Movie Series",
    type: "graphic",
    sub: "Illustrations",
    img: "/illus-3.png",
  },



  {
    id: "g-mkt-1",
    title: "Restaurant Marketing",
    type: "graphic",
    sub: "Flyer/Social/Marketing",
    img: "/flyer1.png",
  },
  {
    id: "g-mkt-2",
    title: "Service App Marketing",
    type: "graphic",
    sub: "Flyer/Social/Marketing",
    img: "/flyer2.png",
  },


  {
    id: "g-news-1",
    title: "Product Brochure",
    type: "graphic",
    sub: "Newsletters/Brochures",
    img: "/newsletter.png",
  },
  {
    id: "g-news-2",
    title: "Invitation",
    type: "graphic",
    sub: "Newsletters/Brochures",
    img: "/invite.png",
  },


  {
    id: "g-pat-1",
    title: "Wallpaper Pattern Pack",
    type: "graphic",
    sub: "Patterns/Wallpapers",
    img: "/pattern1.png",
  },
  {
    id: "g-pat-2",
    title: "Wallpaper Pattern Pack",
    type: "graphic",
    sub: "Patterns/Wallpapers",
    img: "/pattern2.png",
  },
  {
    id: "g-pat-3",
    title: "Wallpaper Pattern Pack",
    type: "graphic",
    sub: "Patterns/Wallpapers",
    img: "/pattern3.png",
  },
]

const graphicSubs = [
  "UI Design",
  "Logo Design",
  "Packaging Design",
  "Illustrations",
  "Flyer/Social/Marketing",
  "Newsletters/Brochures",
  "Patterns/Wallpapers",
]

export function WorkShowcase({ compact = false }: { compact?: boolean }) {
  const [primary, setPrimary] = useState<"web" | "graphic">("web")
  const [sub, setSub] = useState<string>("UI Design")

  const filtered = useMemo(() => {
    if (primary === "web") return works.filter((w) => w.type === "web")
    return works.filter((w) => w.type === "graphic" && (!sub || w.sub === sub))
  }, [primary, sub])

  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-14">
      <Reveal>
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Work, Not Boring</h2>
            <p className="text-gray-600">Selected projects across web development and graphic design.</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant={primary === "web" ? "default" : "outline"}
              className={primary === "web" ? "bg-teal-500 hover:bg-teal-600 text-white" : ""}
              onClick={() => setPrimary("web")}
            >
              Website Development
            </Button>
            <Button
              variant={primary === "graphic" ? "default" : "outline"}
              className={primary === "graphic" ? "bg-teal-500 hover:bg-teal-600 text-white" : ""}
              onClick={() => setPrimary("graphic")}
            >
              Graphic Design
            </Button>
          </div>
        </div>
      </Reveal>

      {primary === "graphic" && (
        <div className="mb-6 flex flex-wrap gap-2">
          {graphicSubs.map((s) => (
            <button
              key={s}
              onClick={() => setSub(s)}
              className={`rounded-full border px-3 py-1 text-xs ${
                sub === s ? "bg-teal-500 text-white border-teal-500" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <div className={`grid gap-6 ${compact ? "sm:grid-cols-3" : "sm:grid-cols-auto lg:grid-cols-auto"}`}>
        {filtered.map((w) => (
          <Reveal key={w.id}>
            <article className="group overflow-hidden rounded-lg border bg-white">
              <div className="relative aspect-[4/3]">
                <Image
                src={w.img || "/placeholder.svg"}
                alt={w.title}
                width={1024}         // pick a sensible default max width
                height={0}          // 0 means "calculate height from source ratio"
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{w.title}</h3>
                <p className="text-sm text-gray-600">{w.type === "web" ? "Web Development" : w.sub}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
