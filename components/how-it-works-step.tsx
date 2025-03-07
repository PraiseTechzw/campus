import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface HowItWorksStepProps {
  number: number
  title: string
  description: string
  icon: string
}

export function HowItWorksStep({ number, title, description, icon }: HowItWorksStepProps) {
  return (
    <Card className="h-full">
      <CardHeader className="flex items-center p-4">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
          {number}
        </div>
        <div className="relative h-16 w-16 shrink-0">
          <Image src={icon || "/placeholder.svg"} alt={title} fill className="object-contain" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

