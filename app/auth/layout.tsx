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
      <main>{children}</main>
    </div>
  )
}

