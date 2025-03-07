"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, MapPin, Star, ChevronLeft, ChevronRight, Heart } from "lucide-react"

// Mock data for a single listing
const mockListing = {
  id: 1,
  title: "Calculus Early Transcendentals 8th Edition",
  price: 45,
  description:
    "Excellent condition calculus textbook. Minimal highlighting in the first few chapters. This is the required textbook for MATH 101 and 102. ISBN: 978-1234567890. I'm selling because I've completed the course and no longer need it. The book retails for $120 new at the campus bookstore.",
  category: "textbooks",
  condition: "Used",
  images: [
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
    "/placeholder.svg?height=500&width=500",
  ],
  seller: {
    id: 101,
    name: "John Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4.8,
    joinedDate: "September 2022",
    listings: 12,
    campusOnly: true,
    location: "Main Library",
  },
  postedDate: "2 days ago",
  views: 45,
}

// Mock data for related listings
const relatedListings = [
  {
    id: 2,
    title: "Physics for Scientists and Engineers",
    price: 35,
    image: "/placeholder.svg?height=200&width=200",
    condition: "Like New",
  },
  {
    id: 3,
    title: "Chemistry: The Central Science",
    price: 30,
    image: "/placeholder.svg?height=200&width=200",
    condition: "Used",
  },
  {
    id: 4,
    title: "Introduction to Linear Algebra",
    price: 25,
    image: "/placeholder.svg?height=200&width=200",
    condition: "Used",
  },
]

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === mockListing.images.length - 1 ? 0 : prevIndex + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? mockListing.images.length - 1 : prevIndex - 1))
  }

  const selectImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <Link href="/listings" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to listings
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image
              src={mockListing.images[currentImageIndex] || "/placeholder.svg"}
              alt={mockListing.title}
              fill
              className="object-cover"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous image</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next image</span>
            </Button>
          </div>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {mockListing.images.map((image, index) => (
              <button
                key={index}
                className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border ${
                  index === currentImageIndex ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => selectImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${mockListing.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Listing Details */}
        <div className="space-y-6">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <Badge variant="outline">{mockListing.category}</Badge>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsFavorite(!isFavorite)}
                className={isFavorite ? "text-red-500" : ""}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
                <span className="sr-only">{isFavorite ? "Remove from wishlist" : "Add to wishlist"}</span>
              </Button>
            </div>
            <h1 className="text-2xl font-bold sm:text-3xl">{mockListing.title}</h1>
            <p className="mt-2 text-3xl font-bold">${mockListing.price}</p>
            <div className="mt-2 flex items-center text-sm text-muted-foreground">
              <Badge variant="secondary" className="mr-2">
                {mockListing.condition}
              </Badge>
              <span>Posted {mockListing.postedDate}</span>
              <span className="mx-2">•</span>
              <span>{mockListing.views} views</span>
            </div>
          </div>

          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="meetup">Meetup</TabsTrigger>
              <TabsTrigger value="seller">Seller</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="space-y-4 pt-4">
              <div>
                <h3 className="font-medium">Description</h3>
                <p className="mt-2 text-muted-foreground">{mockListing.description}</p>
              </div>
            </TabsContent>
            <TabsContent value="meetup" className="space-y-4 pt-4">
              <div>
                <h3 className="font-medium">Meetup Location</h3>
                <div className="mt-2 flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-muted-foreground" />
                  <span>{mockListing.seller.location}</span>
                </div>
                <div className="mt-4 aspect-video overflow-hidden rounded-md border">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Campus map"
                    width={600}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  This seller only meets on campus for safety and convenience.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="seller" className="space-y-4 pt-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={mockListing.seller.avatar} alt={mockListing.seller.name} />
                  <AvatarFallback>{mockListing.seller.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <Link href={`/profile/${mockListing.seller.id}`} className="font-medium hover:underline">
                    {mockListing.seller.name}
                  </Link>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4 fill-amber-400 text-amber-400" />
                      <span>{mockListing.seller.rating}</span>
                    </div>
                    <span className="mx-2">•</span>
                    <span>{mockListing.seller.listings} listings</span>
                    <span className="mx-2">•</span>
                    <span>Joined {mockListing.seller.joinedDate}</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="flex-1">
              <MessageSquare className="mr-2 h-5 w-5" />
              Message Seller
            </Button>
            <Button variant="outline" size="lg" className="flex-1">
              Make Offer
            </Button>
          </div>
        </div>
      </div>

      {/* Related Listings */}
      <div className="mt-12">
        <h2 className="mb-4 text-2xl font-bold">More from this seller</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {relatedListings.map((listing) => (
            <Link key={listing.id} href={`/listings/${listing.id}`}>
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <div className="aspect-square relative">
                  <Image src={listing.image || "/placeholder.svg"} alt={listing.title} fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="line-clamp-1 font-medium">{listing.title}</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="font-bold">${listing.price}</p>
                    <Badge variant="outline" className="text-xs">
                      {listing.condition}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

