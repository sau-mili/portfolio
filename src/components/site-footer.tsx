import Link from "next/link"
import { Github, Linkedin, Instagram } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Saumili Roy</p>
        <div className="flex items-center gap-4">
          <Link aria-label="GitHub" href="https://github.com/sau-mili" className="text-gray-700 hover:text-teal-500">
            <Github className="h-5 w-5" />
          </Link>
          <Link aria-label="LinkedIn" href="https://www.linkedin.com/saumili-roy" className="text-gray-700 hover:text-teal-500">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link aria-label="Instagram" href="https://instagram.com/milkyartist_" className="text-gray-700 hover:text-teal-500">
            <Instagram className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
