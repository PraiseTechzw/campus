import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MessageSquare, Star } from "lucide-react"

interface ListingPreviewProps {
  title: string
  price: number
  description: string
  category: string
  condition: string
  images: string[]
  seller: {
    name: string
    avatar: string
    rating: number
  }
}

export function ListingPreview({
  title,
  price,
  description,
  category,
  condition,
  images,
  seller,
}: ListingPreviewProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border p-1">
        <div className="rounded-md bg-muted p-2 text-center text-sm text-muted-foreground">
          Preview Mode - This is how your listing will appear to others
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image src={images[0] || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
          {images.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <div key={index} className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Listing Details */}
        <div className="space-y-6">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <Badge variant="outline">{category}</Badge>
            </div>
            <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
            <p className="mt-2 text-3xl font-bold">${price.toFixed(2)}</p>
            <div className="mt-2 flex items-center text-sm text-muted-foreground">
              <Badge variant="secondary" className="mr-2">
                {condition}
              </Badge>
              <span>Posted just now</span>
              <span className="mx-2">•</span>
              <span>0 views</span>
            </div>
          </div>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium">Description</h3>
              <p className="mt-2 text-muted-foreground">{description}</p>
            </CardContent>
          </Card>

          <div className="flex items-center space-x-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={seller.avatar} alt={seller.name} />
              <AvatarFallback>{seller.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{seller.name}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Star className="mr-1 h-4 w-4 fill-amber-400 text-amber-400" />
                  <span>{seller.rating.toFixed(1)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="flex-1" disabled>
              <MessageSquare className="mr-2 h-5 w-5" />
              Message Seller
            </Button>
            <Button variant="outline" size="lg" className="flex-1" disabled>
              Make Offer
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

