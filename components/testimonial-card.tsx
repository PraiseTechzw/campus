import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  avatar: string
  quote: string
  program: string
}

export function TestimonialCard({ name, avatar, quote, program }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image src={avatar || "/placeholder.svg"} alt={name} fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-medium leading-none">{name}</p>
              <p className="text-sm text-muted-foreground">{program}</p>
            </div>
          </div>
          <div>
            <p className="text-muted-foreground italic">"{quote}"</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

