import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface HowItWorksStepProps {
  number: number
  title: string
  description: string
  illustration: React.ReactNode
}

export function HowItWorksStep({ number, title, description, illustration }: HowItWorksStepProps) {
  return (
    <Card className="h-full card-hover">
      <CardHeader className="flex items-center p-4">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
          {number}
        </div>
        <div className="h-32 w-32 mb-2">{illustration}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

