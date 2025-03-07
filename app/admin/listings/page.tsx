"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/components/hooks/use-auth"
import { useRouter } from "next/navigation"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown, Eye, Search, ThumbsDown, ThumbsUp, Trash } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data for listings
const mockListings = [
  {
    id: "1",
    title: "Calculus Early Transcendentals 8th Edition",
    price: 45,
    category: "textbooks",
    status: "active",
    featured: false,
    reported: false,
    createdAt: "2023-06-10",
    image: "/placeholder.svg?height=60&width=60",
    seller: {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@university.edu",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "2",
    title: "MacBook Pro 2019 13-inch",
    price: 800,
    category: "electronics",
    status: "active",
    featured: true,
    reported: false,
    createdAt: "2023-06-15",
    image: "/placeholder.svg?height=60&width=60",
    seller: {
      id: "3",
      name: "Michael Brown",
      email: "michael.brown@techinst.edu",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "3",
    title: "Wooden Desk and Chair",
    price: 120,
    category: "furniture",
    status: "pending",
    featured: false,
    reported: false,
    createdAt: "2023-06-18",
    image: "/placeholder.svg?height=60&width=60",
    seller: {
      id: "4",
      name: "Emily Johnson",
      email: "emily.johnson@university.edu",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "4",
    title: "Python Programming Tutoring",
    price: 25,
    category: "services",
    status: "active",
    featured: false,
    reported: true,
    createdAt: "2023-06-20",
    image: "/placeholder.svg?height=60&width=60",
    seller: {
      id: "5",
      name: "David Lee",
      email: "david.lee@techinst.edu",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "5",
    title: "Physics for Scientists and Engineers",
    price: 35,
    category: "textbooks",
    status: "removed",
    featured: false,
    reported: true,
    createdAt: "2023-06-22",
    image: "/placeholder.svg?height=60&width=60",
    seller: {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@university.edu",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
]

export default function AdminListingsPage() {
  const { isAdmin, isLoading } = useAuth()
  const router = useRouter()
  const [listings, setListings] = useState(mockListings)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredListings, setFilteredListings] = useState(mockListings)

  useEffect(() => {
    if (!isLoading && !isAdmin) {
      router.push("/dashboard")
    }
  }, [isAdmin, isLoading, router])

  useEffect(() => {
    if (searchQuery) {
      const filtered = listings.filter(
        (listing) =>
          listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          listing.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          listing.seller.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setFilteredListings(filtered)
    } else {
      setFilteredListings(listings)
    }
  }, [searchQuery, listings])

  const handleFeatureListing = (listingId: string) => {
    setListings(listings.map((listing) => (listing.id === listingId ? { ...listing, featured: true } : listing)))
  }

  const handleUnfeatureListing = (listingId: string) => {
    setListings(listings.map((listing) => (listing.id === listingId ? { ...listing, featured: false } : listing)))
  }

  const handleApproveListing = (listingId: string) => {
    setListings(listings.map((listing) => (listing.id === listingId ? { ...listing, status: "active" } : listing)))
  }

  const handleRemoveListing = (listingId: string) => {
    setListings(listings.map((listing) => (listing.id === listingId ? { ...listing, status: "removed" } : listing)))
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Listing Management</h1>
          <p className="text-muted-foreground">Manage all marketplace listings</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search listings..."
              className="pl-8 w-full md:w-[300px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Listings</CardTitle>
          <CardDescription>A list of all listings in the marketplace</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Listing</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Seller</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredListings.map((listing) => (
                <TableRow key={listing.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-md">
                        <Image
                          src={listing.image || "/placeholder.svg"}
                          alt={listing.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium line-clamp-1">{listing.title}</div>
                        <div className="text-xs text-muted-foreground">
                          {new Date(listing.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                      {listing.reported && (
                        <Badge variant="destructive" className="ml-2">
                          Reported
                        </Badge>
                      )}
                      {listing.featured && (
                        <Badge variant="default" className="ml-2">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{listing.category}</Badge>
                  </TableCell>
                  <TableCell>${listing.price}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={listing.seller.avatar} alt={listing.seller.name} />
                        <AvatarFallback>{listing.seller.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{listing.seller.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {listing.status === "active" && (
                      <Badge variant="success" className="bg-green-500">
                        Active
                      </Badge>
                    )}
                    {listing.status === "pending" && (
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                        Pending
                      </Badge>
                    )}
                    {listing.status === "removed" && <Badge variant="destructive">Removed</Badge>}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <span>Manage</span>
                          <ChevronDown className="h-4 w-4 ml-1" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link href={`/listings/${listing.id}`}>
                            <Eye className="h-4 w-4 mr-2" />
                            View Listing
                          </Link>
                        </DropdownMenuItem>

                        {listing.status === "pending" && (
                          <DropdownMenuItem onClick={() => handleApproveListing(listing.id)}>
                            <ThumbsUp className="h-4 w-4 mr-2" />
                            Approve Listing
                          </DropdownMenuItem>
                        )}

                        {listing.status !== "removed" && (
                          <DropdownMenuItem onClick={() => handleRemoveListing(listing.id)}>
                            <Trash className="h-4 w-4 mr-2" />
                            Remove Listing
                          </DropdownMenuItem>
                        )}

                        {!listing.featured ? (
                          <DropdownMenuItem onClick={() => handleFeatureListing(listing.id)}>
                            <ThumbsUp className="h-4 w-4 mr-2" />
                            Feature Listing
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem onClick={() => handleUnfeatureListing(listing.id)}>
                            <ThumbsDown className="h-4 w-4 mr-2" />
                            Unfeature Listing
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

