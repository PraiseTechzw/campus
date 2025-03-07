import { Button } from "@/components/ui/button"
import { ChevronRight, Book, Laptop, Sofa, Briefcase } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TestimonialCard } from "@/components/testimonial-card"
import { CategoryCard } from "@/components/category-card"
import { HowItWorksStep } from "@/components/how-it-works-step"

export default function Home() {
  const categories = [
    {
      id: "textbooks",
      title: "Textbooks",
      description: "Find and sell used textbooks",
      icon: Book,
      color: "bg-blue-100",
    },
    {
      id: "electronics",
      title: "Electronics",
      description: "Laptops, phones, and accessories",
      icon: Laptop,
      color: "bg-purple-100",
    },
    {
      id: "furniture",
      title: "Furniture",
      description: "Desks, chairs, and dorm essentials",
      icon: Sofa,
      color: "bg-amber-100",
    },
    {
      id: "services",
      title: "Services",
      description: "Tutoring, design, and more",
      icon: Briefcase,
      color: "bg-green-100",
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      quote: "Sold my old laptop in 2 hours! So much easier than other marketplace apps.",
      program: "Computer Science",
    },
    {
      id: 2,
      name: "Maria Garcia",
      avatar: "/placeholder.svg?height=40&width=40",
      quote: "Found all my textbooks for the semester at half the bookstore price.",
      program: "Business Administration",
    },
    {
      id: 3,
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      quote: "The campus-only meetups make transactions so much safer and convenient.",
      program: "Engineering",
    },
  ]

  const steps = [
    {
      number: 1,
      title: "Sign Up",
      description: "Create an account using your campus email to join our verified student marketplace.",
      icon: "/placeholder.svg?height=60&width=60",
    },
    {
      number: 2,
      title: "List Item",
      description: "Take a photo, set a price, and publish your listing in under a minute.",
      icon: "/placeholder.svg?height=60&width=60",
    },
    {
      number: 3,
      title: "Meet & Exchange",
      description: "Connect with buyers or sellers and meet at a designated campus spot.",
      icon: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Your Campus Hub for Buying, Selling, and Connecting
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join thousands of students at your campus who are already saving money and finding exactly what they
                  need.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/signup">Join Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/listings">
                    Browse Listings <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Students exchanging textbooks"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Browse Categories</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Find exactly what you're looking for from our wide variety of campus listings.
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                description={category.description}
                icon={<category.icon className="h-6 w-6" />}
                href={`/listings?category=${category.id}`}
                color={category.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Our platform makes buying and selling within your campus community simple and safe.
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <HowItWorksStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Students Say</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Hear from students who have successfully used our platform.
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                avatar={testimonial.avatar}
                quote={testimonial.quote}
                program={testimonial.program}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Join?</h2>
              <p className="max-w-[700px] text-primary-foreground/80 md:text-xl">
                Create your account today and start buying, selling, and connecting with your campus community.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">Create Account</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/listings">Browse Listings</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

