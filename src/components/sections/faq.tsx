import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { Reveal } from "@/components/reveal"

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-14">
      <Reveal>
        <h2 className="mb-6 text-2xl font-semibold text-gray-900 text-center">FAQ</h2>
      </Reveal>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="process">
          <AccordionTrigger>What’s your typical process?</AccordionTrigger>
          <AccordionContent>
            Kickoff call → scope & timelines → moodboard/wireframes → design iterations → build → ship. Clear updates,
            no surprises.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="tools">
          <AccordionTrigger>Which tools do you use?</AccordionTrigger>
          <AccordionContent>Figma, Adobe Suite, Next.js/React, Tailwind, and Vercel deployment, according to te requirement.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="timeline">
          <AccordionTrigger>How fast can we start?</AccordionTrigger>
          <AccordionContent>Depends on type of project, Usually within 1–2 days. Rush projects depend on scope.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
