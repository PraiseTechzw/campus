import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CategoryCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  color?: string
}

export function CategoryCard({ title, description, icon, href, color = "bg-gray-100" }: CategoryCardProps) {
  return (
    <Link href={href} className="block transition-transform hover:scale-105">
      <Card className="h-full overflow-hidden">
        <CardHeader className={`${color} flex flex-row items-center gap-2 p-4`}>
          <div className="rounded-full bg-white p-2">{icon}</div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}

