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
    <Card className="overflow-hidden card-hover shadow-subtle">
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary/20">
              <Image src={avatar || "/placeholder.svg"} alt={name} width={48} height={48} className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-medium leading-none">{name}</p>
              <p className="text-sm text-muted-foreground">{program}</p>
            </div>
          </div>
          <div className="relative">
            <svg
              className="absolute -left-2 -top-2 h-6 w-6 text-primary/20"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>
            <p className="text-muted-foreground italic pl-4">{quote}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

