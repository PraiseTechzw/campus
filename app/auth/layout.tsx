import type React from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="inline-block font-bold text-xl">Campus Market</span>
        </Link>
        <ModeToggle />
      </div>
      <main>{children}</main>
    </div>
  )
}

