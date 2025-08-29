import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import "./globals.css"
import "./fx.css"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingGraphics from "@/components/floating-graphics"
import Preloader from "@/components/preloader"

// Fonts: headings/body (Geist) + mono (Geist Mono)
// const geistSans = Geist({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-geist-sans",
// })
// const geistMono = Geist_Mono({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-geist-mono",
// })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})


export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
      <body className="min-h-dvh bg-background text-foreground font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Preloader />
          <FloatingGraphics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
