import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Shield, Users, AlertTriangle, Clock, MapPin, MessageSquare } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-6">
      <section className="py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Campus Marketplace</h1>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Campus Marketplace is a platform designed specifically for university students to buy, sell, and connect
              within their campus community. Our mission is to create a safe, convenient, and sustainable way for
              students to exchange goods and services.
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <Button asChild>
                <Link href="/signup">Join Now</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/listings">Browse Listings</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] w-full">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Students using Campus Marketplace"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 border-t">
        <h2 className="text-2xl font-bold text-center sm:text-3xl">Why Choose Campus Marketplace?</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <Shield className="h-6 w-6 mb-2 text-primary" />
              <CardTitle>Campus Safety</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                All users are verified with their university email, and transactions happen on or near campus for added
                security.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Users className="h-6 w-6 mb-2 text-primary" />
              <CardTitle>Student Community</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Connect with fellow students who understand your needs and schedule, making transactions more
                convenient.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Clock className="h-6 w-6 mb-2 text-primary" />
              <CardTitle>Quick & Convenient</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Find what you need quickly from people on your campus, without having to travel far or pay for shipping.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 md:py-16 border-t">
        <h2 className="text-2xl font-bold text-center sm:text-3xl">Frequently Asked Questions</h2>
        <div className="mt-8 mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I create an account?</AccordionTrigger>
              <AccordionContent>
                To create an account, click on the "Sign Up" button and enter your university email address. You'll
                receive a verification email to confirm your account. Once verified, you can set up your profile and
                start buying or selling.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I report a suspicious user?</AccordionTrigger>
              <AccordionContent>
                If you encounter a suspicious user or listing, click the "Report" button on their profile or listing
                page. Provide as much detail as possible about the issue. Our moderation team reviews all reports within
                24 hours and takes appropriate action.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is there a fee to use Campus Marketplace?</AccordionTrigger>
              <AccordionContent>
                No, Campus Marketplace is completely free for students to use. We do not charge any listing fees,
                transaction fees, or membership fees. Our goal is to provide a valuable service to the campus community.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How do I arrange a meetup safely?</AccordionTrigger>
              <AccordionContent>
                We recommend meeting in public places on campus during daylight hours. Popular meetup spots include the
                student union, library, or campus coffee shops. Always let a friend know where you're going and who
                you're meeting. Use our in-app messaging to coordinate details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What items are prohibited on Campus Marketplace?</AccordionTrigger>
              <AccordionContent>
                Prohibited items include but are not limited to: illegal items, weapons, alcohol, tobacco products,
                prescription medications, counterfeit goods, and adult content. Academic dishonesty services like essay
                writing are also prohibited. Full details can be found in our Terms of Service.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-12 md:py-16 border-t">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Contact Us</h2>
            <p className="mt-4 text-muted-foreground">
              Have questions or feedback? We'd love to hear from you. Fill out the form and our team will get back to
              you as soon as possible.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span>Student Union Building, State University</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                <span>support@campusmarketplace.edu</span>
              </div>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What's this about?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={4} />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 md:py-16 border-t">
        <div className="text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Safety Tips</h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            Your safety is our top priority. Here are some important tips to keep in mind when using Campus Marketplace.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <AlertTriangle className="h-6 w-6 mb-2 text-primary" />
              <CardTitle>Meet in Public Places</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Always meet in well-lit, public areas on campus. The library, student union, or campus coffee shops are
                great options.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Users className="h-6 w-6 mb-2 text-primary" />
              <CardTitle>Bring a Friend</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                When possible, bring a friend along to meetups, especially for high-value items or when meeting someone
                new.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Shield className="h-6 w-6 mb-2 text-primary" />
              <CardTitle>Verify Before You Buy</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Inspect items thoroughly before completing a transaction. For electronics, test them to ensure they work
                properly.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

