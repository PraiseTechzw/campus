"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { SearchIcon, MapPin } from "lucide-react"

// Mock data for listings
const mockListings = [
  {
    id: 1,
    title: "Calculus Early Transcendentals 8th Edition",
    price: 45,
    image: "/placeholder.svg?height=200&width=200",
    category: "textbooks",
    condition: "Used",
    seller: "John Doe",
    distance: "0.2mi from campus",
  },
  {
    id: 2,
    title: "MacBook Pro 2019 13-inch",
    price: 800,
    image: "/placeholder.svg?height=200&width=200",
    category: "electronics",
    condition: "Like New",
    seller: "Sarah Smith",
    distance: "0.5mi from campus",
  },
  {
    id: 3,
    title: "Wooden Desk and Chair",
    price: 120,
    image: "/placeholder.svg?height=200&width=200",
    category: "furniture",
    condition: "Used",
    seller: "Emily Wong",
    distance: "On campus",
  },
  {
    id: 4,
    title: "Python Programming Tutoring",
    price: 25,
    image: "/placeholder.svg?height=200&width=200",
    category: "services",
    condition: "Service",
    seller: "Michael Chen",
    distance: "Remote",
  },
  {
    id: 5,
    title: "Physics for Scientists and Engineers",
    price: 35,
    image: "/placeholder.svg?height=200&width=200",
    category: "textbooks",
    condition: "Like New",
    seller: "Alex Johnson",
    distance: "0.3mi from campus",
  },
  {
    id: 6,
    title: "Dorm Room Mini Fridge",
    price: 80,
    image: "/placeholder.svg?height=200&width=200",
    category: "electronics",
    condition: "Used",
    seller: "Lauren Miller",
    distance: "On campus",
  },
]

export default function ListingsPage() {
  const [priceRange, setPriceRange] = useState([0, 1000])

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold">Browse Listings</h1>

      {/* Filters Section */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-[250px_1fr]">
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-lg font-medium">Search</h3>
            <div className="relative">
              <SearchIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search listings..." className="pl-9" />
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium">Category</h3>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="textbooks">Textbooks</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="furniture">Furniture</SelectItem>
                <SelectItem value="services">Services</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium">Condition</h3>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Any Condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Condition</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="like-new">Like New</SelectItem>
                <SelectItem value="used">Used</SelectItem>
                <SelectItem value="service">Service</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium">Price Range</h3>
            <div className="space-y-3">
              <Slider defaultValue={[0, 1000]} max={1000} step={5} onValueChange={(value) => setPriceRange(value)} />
              <div className="flex items-center justify-between">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium">Location</h3>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Any Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Location</SelectItem>
                <SelectItem value="on-campus">On Campus</SelectItem>
                <SelectItem value="near-campus">Near Campus (&lt; 1mi)</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="w-full">Apply Filters</Button>
        </div>

        {/* Listings Grid */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-muted-foreground">{mockListings.length} results</p>
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="popularity">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mockListings.map((listing) => (
              <Card key={listing.id} className="overflow-hidden">
                <div className="aspect-square relative">
                  <Link href={`/listings/${listing.id}`}>
                    <Image
                      src={listing.image || "/placeholder.svg"}
                      alt={listing.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </Link>
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
                  <Link href={`/listings/${listing.id}`} className="hover:underline">
                    <h3 className="mb-2 line-clamp-2 font-semibold">{listing.title}</h3>
                  </Link>
                  <p className="text-xl font-bold">${listing.price}</p>
                </CardContent>
                <CardFooter className="flex justify-between p-4 pt-0 text-sm text-muted-foreground">
                  <p>Seller: {listing.seller}</p>
                  <p className="flex items-center">
                    <MapPin className="mr-1 h-3 w-3" />
                    {listing.distance}
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button>Load More</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

