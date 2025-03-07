import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MessageSquare, Calendar, MapPin, Shield, CheckCircle } from "lucide-react"

// Mock user data
const mockUser = {
  id: 101,
  name: "Sarah Smith",
  avatar: "/placeholder.svg?height=100&width=100",
  bio: "Computer Science student at State University. I sell textbooks and electronics that I no longer need. Fast responses and fair prices!",
  rating: 4.8,
  reviews: 24,
  joinedDate: "September 2022",
  responseTime: "Usually within 2 hours",
  verified: true,
  campusVerified: true,
  location: "State University",
}

// Mock listings data
const mockListings = [
  {
    id: 1,
    title: "Calculus Early Transcendentals 8th Edition",
    price: 45,
    image: "/placeholder.svg?height=200&width=200",
    category: "textbooks",
    condition: "Used",
    postedDate: "2 days ago",
  },
  {
    id: 2,
    title: "MacBook Pro 2019 13-inch",
    price: 800,
    image: "/placeholder.svg?height=200&width=200",
    category: "electronics",
    condition: "Like New",
    postedDate: "1 week ago",
  },
  {
    id: 3,
    title: "Wooden Desk and Chair",
    price: 120,
    image: "/placeholder.svg?height=200&width=200",
    category: "furniture",
    condition: "Used",
    postedDate: "2 weeks ago",
  },
]

// Mock reviews data
const mockReviews = [
  {
    id: 1,
    user: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 5,
    text: "Great seller! The textbook was in excellent condition as described. Quick responses and easy meetup.",
    date: "2 weeks ago",
  },
  {
    id: 2,
    user: {
      name: "Emily Wong",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 5,
    text: "Sarah was very responsive and the transaction was smooth. Would definitely buy from her again!",
    date: "1 month ago",
  },
  {
    id: 3,
    user: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 4,
    text: "Good experience overall. The item was as described, though the meetup time had to be rescheduled once.",
    date: "2 months ago",
  },
]

export default function ProfilePage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto py-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[300px_1fr]">
        {/* Profile Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4 h-24 w-24">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
                    <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {mockUser.verified && (
                    <div className="absolute -right-1 -top-1 rounded-full bg-primary p-1 text-primary-foreground">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                  )}
                </div>
                <h1 className="text-xl font-bold">{mockUser.name}</h1>
                <div className="mt-1 flex items-center justify-center">
                  <div className="flex items-center">
                    <Star className="mr-1 h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-medium">{mockUser.rating}</span>
                  </div>
                  <span className="mx-2 text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{mockUser.reviews} reviews</span>
                </div>
                <Button className="mt-4 w-full">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Message
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 font-semibold">About</h2>
              <div className="space-y-4 text-sm">
                <p>{mockUser.bio}</p>
                <div className="flex items-start">
                  <Calendar className="mr-2 mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Member since</p>
                    <p className="text-muted-foreground">{mockUser.joinedDate}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-2 mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">{mockUser.location}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageSquare className="mr-2 mt-0.5 h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Response time</p>
                    <p className="text-muted-foreground">{mockUser.responseTime}</p>
                  </div>
                </div>
                {mockUser.campusVerified && (
                  <div className="flex items-start">
                    <Shield className="mr-2 mt-0.5 h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Campus verified</p>
                      <p className="text-muted-foreground">Verified student at {mockUser.location}</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div>
          <Tabs defaultValue="listings">
            <TabsList className="w-full">
              <TabsTrigger value="listings" className="flex-1">
                Listings
              </TabsTrigger>
              <TabsTrigger value="reviews" className="flex-1">
                Reviews
              </TabsTrigger>
            </TabsList>
            <TabsContent value="listings" className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {mockListings.map((listing) => (
                  <Link key={listing.id} href={`/listings/${listing.id}`}>
                    <Card className="overflow-hidden transition-all hover:shadow-md">
                      <div className="aspect-square relative">
                        <Image
                          src={listing.image || "/placeholder.svg"}
                          alt={listing.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <Badge variant="outline" className="rounded-sm">
                            {listing.category}
                          </Badge>
                          <Badge variant="secondary" className="rounded-sm">
                            {listing.condition}
                          </Badge>
                        </div>
                        <h3 className="line-clamp-1 font-medium">{listing.title}</h3>
                        <div className="mt-2 flex items-center justify-between">
                          <p className="font-bold">${listing.price}</p>
                          <p className="text-xs text-muted-foreground">{listing.postedDate}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                {mockReviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src={review.user.avatar} alt={review.user.name} />
                          <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">{review.user.name}</p>
                            <p className="text-xs text-muted-foreground">{review.date}</p>
                          </div>
                          <div className="mt-1 flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="mt-2 text-sm">{review.text}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

