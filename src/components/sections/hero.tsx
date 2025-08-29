import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"

const highlights = [
  { value: "35k+", label: "Reach on Social Media" },
  { value: "25+", label: "Clients" },
  { value: "150+", label: "Designs Delivered" },
]



export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-12 pb-10">
      <Reveal>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-5">
            <p className="text-sm text-primary font-medium">Hello! I’m Saumili, or Milkyartist!</p>
            <h1 className="text-pretty text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              A{" "}
              <span className="relative inline-block">
                Designer
                <svg className="scribble-svg" viewBox="0 0 200 20" fill="none" aria-hidden>
                  <path
                    className="animate-stroke"
                    d="M2 12 C 40 2, 90 18, 140 8 S 198 10, 198 10"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              , Illustrator, and Web Developer
            </h1>
            <p className="text-gray-600 leading-relaxed">
              I design clean interfaces, build snappy websites, and draw friendly visuals. I like simple processes,
              clear feedback, and shipping work that makes people smile.
            </p>
            <div className="flex items-center gap-3">
              {/* highlights  */}
              <div className="flex flex-wrap gap-6">
                {highlights.map((h, i) => (
                  <div key={i} className="flex flex-col items-start">
                    <span className="text-2xl font-bold text-teal-500">{h.value}</span>
                    <span className="text-sm text-gray-600">{h.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#work">See My Work</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/blogs">Read the Blog</a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative h-56 w-56 overflow-hidden rounded-full ring-4 ring-primary/20">
              <Image
                src={"/portrait.jpg?height=558&width=558&query=Your%20portrait%20placeholder"}
                alt="Your portrait placeholder"
                fill
                sizes="800px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
