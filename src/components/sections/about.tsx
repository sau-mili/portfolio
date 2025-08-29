import { Reveal } from "@/components/reveal"
import { NotepadText } from "lucide-react"
import { BrushStroke } from "@/components/ui/brush-stroke"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-14">
      <Reveal>
        <div className="mb-6 flex items-center gap-2">
          <NotepadText className="h-5 w-5 text-teal-500" />
          <div className="relative inline-block">
            <h2 className="relative z-10 text-2xl font-semibold text-gray-900">
              About Me
            </h2>
            <BrushStroke className="absolute left-0 bottom-1 w-full h-6 text-teal-300 z-0" />
          </div>
        </div>
        <p className="max-w-3xl text-gray-700 leading-relaxed">
          I’m a hybrid creative who enjoys designing crisp interfaces, coding delightful interactions, 
          and doodling characters on the side. I prefer simple systems, honest timelines, and building 
          things that last. If you’ve got a product that needs love—design, dev, or visuals—I’m your person.
        </p>
      </Reveal>
    </section>
  )
}
