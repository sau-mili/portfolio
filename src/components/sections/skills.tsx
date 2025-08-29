import { Reveal } from "@/components/reveal"

const skillGroups = [
  { title: "Web Dev", items: ["Next.js", "React", "TypeScript", "Tailwind", "HTML", "CSS", "JavaScript"] },
  { title: "Web Design", items: ["Figma", "Wireframing", "Prototyping", "Design Systems", "UI-UX", "Spline"] },
  { title: "Illustration & Graphics", items: ["Illustrator", "Photoshop","Adobe Creative Suite", "Procreate"] },
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-14">
      <Reveal>
        <h2 className="mb-6 text-2xl font-semibold text-gray-900">Skills</h2>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((g) => (
          <Reveal key={g.title}>
            <div className="rounded-lg border bg-white p-5">
              <h3 className="mb-3 font-medium text-gray-900">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="rounded-full border px-3 py-1 text-xs text-gray-700">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
