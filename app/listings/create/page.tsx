"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImagePlus, X, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ListingPreview } from "@/components/listing-preview"

export default function CreateListingPage() {
  const router = useRouter()
  const [images, setImages] = useState<string[]>([])
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    condition: "",
    campusOnly: true,
  })
  const [activeTab, setActiveTab] = useState("edit")

  // Mock function to handle image upload
  const handleImageUpload = () => {
    if (images.length >= 5) {
      return
    }
    // In a real app, this would handle actual file uploads
    // For now, we'll just add a placeholder image
    setImages([...images, `/placeholder.svg?height=200&width=200&text=Image ${images.length + 1}`])
  }

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({ ...formData, campusOnly: checked })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit the form data to an API
    console.log("Form submitted:", formData, images)

    // Redirect to the listings page
    router.push("/listings")
  }

  const isFormValid = () => {
    return (
      formData.title.trim() !== "" &&
      formData.description.trim() !== "" &&
      formData.category !== "" &&
      formData.price.trim() !== "" &&
      formData.condition !== "" &&
      images.length > 0
    )
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold">Create Listing</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="edit">Edit</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="edit" className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="e.g., Calculus Textbook 8th Edition"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Describe your item in detail..."
                    rows={5}
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="textbooks">Textbooks</SelectItem>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="furniture">Furniture</SelectItem>
                        <SelectItem value="services">Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="condition">Condition</Label>
                    <Select
                      value={formData.condition}
                      onValueChange={(value) => handleSelectChange("condition", value)}
                    >
                      <SelectTrigger id="condition">
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="like-new">Like New</SelectItem>
                        <SelectItem value="used">Used</SelectItem>
                        <SelectItem value="service">Service</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="campusOnly" checked={formData.campusOnly} onCheckedChange={handleCheckboxChange} />
                  <Label
                    htmlFor="campusOnly"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Meetup only on campus
                  </Label>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <Label>Images (max 5)</Label>
                  <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {images.map((image, index) => (
                      <div key={index} className="relative aspect-square rounded-md border">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Listing image ${index + 1}`}
                          className="h-full w-full rounded-md object-cover"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="icon"
                          className="absolute right-1 top-1 h-6 w-6"
                          onClick={() => removeImage(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    {images.length < 5 && (
                      <button
                        type="button"
                        onClick={handleImageUpload}
                        className="flex aspect-square items-center justify-center rounded-md border border-dashed text-muted-foreground hover:bg-muted"
                      >
                        <ImagePlus className="h-8 w-8" />
                      </button>
                    )}
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Upload up to 5 images. First image will be the cover.
                  </p>
                </div>

                {!isFormValid() && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>Please fill in all required fields and add at least one image.</AlertDescription>
                  </Alert>
                )}
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Button type="button" variant="outline" onClick={() => router.push("/listings")}>
                Cancel
              </Button>
              <Button type="submit" disabled={!isFormValid()}>
                Create Listing
              </Button>
            </div>
          </form>
        </TabsContent>
        <TabsContent value="preview" className="mt-6">
          {isFormValid() ? (
            <ListingPreview
              title={formData.title}
              price={Number.parseFloat(formData.price) || 0}
              description={formData.description}
              category={formData.category}
              condition={formData.condition}
              images={images}
              seller={{
                name: "You",
                avatar: "/placeholder.svg?height=40&width=40",
                rating: 5.0,
              }}
            />
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <AlertCircle className="mb-2 h-10 w-10 text-muted-foreground" />
                <h3 className="text-lg font-medium">Preview not available</h3>
                <p className="text-center text-muted-foreground">
                  Please fill in all required fields and add at least one image to see the preview.
                </p>
                <Button className="mt-4" onClick={() => setActiveTab("edit")}>
                  Back to Edit
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

