"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"

const nav = [
  { href: "/", label: "Home" },
  { href: "/project", label: "Projects" },
  { href: "/blog", label: "Blogs" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
  { href: "/reference", label: "Preview" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          
          <span className="font-bold text-teal-500 text-2xl">SAUMILI</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm text-gray-700 hover:text-gray-900">
              {n.label}
            </Link>
          ))}
          <Button asChild size="sm" className="bg-teal-500 hover:bg-teal-600 text-white">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </Button>
        </nav>

        <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen((s) => !s)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="text-sm text-gray-700" onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
            <Button asChild size="sm" className="w-fit bg-teal-500 hover:bg-teal-600 text-white">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
