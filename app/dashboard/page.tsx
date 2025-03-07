import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { HeroIllustration } from "@/components/illustrations/hero-illustration"
import { CategoryCard } from "@/components/category-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { SignUpIllustration } from "@/components/illustrations/signup-illustration"
import { ListingIllustration } from "@/components/illustrations/listing-illustration"
import { ExchangeIllustration } from "@/components/illustrations/exchange-illustration"
import { CategoryIcons } from "@/components/illustrations/category-icons"

export default function Home() {
  const categories = [
    {
      id: "textbooks",
      title: "Textbooks",
      description: "Find and sell used textbooks",
      icon: "textbooks",
      color: "bg-blue-100 dark:bg-blue-950/40",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      id: "electronics",
      title: "Electronics",
      description: "Laptops, phones, and accessories",
      icon: "electronics",
      color: "bg-purple-100 dark:bg-purple-950/40",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      id: "furniture",
      title: "Furniture",
      description: "Desks, chairs, and dorm essentials",
      icon: "furniture",
      color: "bg-amber-100 dark:bg-amber-950/40",
      iconColor: "text-amber-600 dark:text-amber-400",
    },
    {
      id: "services",
      title: "Services",
      description: "Tutoring, design, and more",
      icon: "services",
      color: "bg-green-100 dark:bg-green-950/40",
      iconColor: "text-green-600 dark:text-green-400",
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "/avatars/avatar-1.svg",
      quote: "Sold my old laptop in 2 hours! So much easier than other marketplace apps.",
      program: "Computer Science",
    },
    {
      id: 2,
      name: "Maria Garcia",
      avatar: "/avatars/avatar-2.svg",
      quote: "Found all my textbooks for the semester at half the bookstore price.",
      program: "Business Administration",
    },
    {
      id: 3,
      name: "David Kim",
      avatar: "/avatars/avatar-3.svg",
      quote: "The campus-only meetups make transactions so much safer and convenient.",
      program: "Engineering",
    },
  ]

  const steps = [
    {
      number: 1,
      title: "Sign Up",
      description: "Create an account using your campus email to join our verified student marketplace.",
      illustration: <SignUpIllustration className="w-full h-full" />,
      benefits: ["Verified student-only community", "Secure campus email authentication", "Free to join and use"],
    },
    {
      number: 2,
      title: "List Item",
      description: "Take a photo, set a price, and publish your listing in under a minute.",
      illustration: <ListingIllustration className="w-full h-full" />,
      benefits: ["Quick and easy listing process", "Set your own prices", "Reach local campus buyers"],
    },
    {
      number: 3,
      title: "Meet & Exchange",
      description: "Connect with buyers or sellers and meet at a designated campus spot.",
      illustration: <ExchangeIllustration className="w-full h-full" />,
      benefits: ["Safe on-campus meetups", "No shipping hassles", "Direct person-to-person exchange"],
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background py-16 md:py-24">
        <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gradient">
                  Your Campus Hub for Buying, Selling, and Connecting
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join thousands of students at your campus who are already saving money and finding exactly what they
                  need.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="btn-gradient" asChild>
                  <Link href="/signup">Join Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="group" asChild>
                  <Link href="/listings">
                    Browse Listings{" "}
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-square">
                <HeroIllustration className="w-full h-full" />
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
                icon={<CategoryIcons type={category.icon} className={`h-8 w-8 ${category.iconColor}`} />}
                href={`/listings?category=${category.id}`}
                color={category.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900/50 py-16 md:py-24">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/30 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-500/30 blur-3xl"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-2">
              Simple Process
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient">How It Works</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Our platform makes buying and selling within your campus community simple, safe, and efficient.
            </p>
          </div>

          <div className="relative mt-16">
            {/* Process Steps */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-xl font-bold shadow-lg">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 left-full h-1 w-8 bg-primary/20 -translate-y-1/2 hidden md:block"></div>
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="bg-background rounded-xl p-6 shadow-subtle border border-border/50 hover:shadow-stronger transition-all duration-300 w-full">
                    <div className="h-32 w-full flex items-center justify-center mb-4">{step.illustration}</div>
                    <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>
                    <p className="text-muted-foreground text-center">{step.description}</p>
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <h4 className="text-sm font-medium text-primary mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {step.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <svg
                              className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Process Connector */}
            <div className="md:hidden absolute top-0 bottom-0 left-1/2 w-1 bg-primary/20 -translate-x-1/2 z-0"></div>
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" className="btn-gradient" asChild>
              <Link href="/signup">Get Started Today</Link>
            </Button>
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
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
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
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-12 md:py-16">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-white blur-3xl"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Join?</h2>
              <p className="max-w-[700px] text-primary-foreground/80 md:text-xl">
                Create your account today and start buying, selling, and connecting with your campus community.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" className="shadow-lg" asChild>
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

