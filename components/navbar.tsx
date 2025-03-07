"use client"

import * as React from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-xl">Campus Market</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {categories.map((category) => (
                        <ListItem
                          key={category.title}
                          title={category.title}
                          href={`/listings?category=${category.id}`}
                        >
                          {category.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/listings" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Browse</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="outline" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>Browse our categories or sign in to your account</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <Link
                    href="/listings"
                    className="px-2 py-1 text-lg"
                    onClick={() => document.querySelector<HTMLButtonElement>("[data-radix-collection-item]")?.click()}
                  >
                    Browse All
                  </Link>
                  <Link
                    href="/listings?category=textbooks"
                    className="px-2 py-1"
                    onClick={() => document.querySelector<HTMLButtonElement>("[data-radix-collection-item]")?.click()}
                  >
                    Textbooks
                  </Link>
                  <Link
                    href="/listings?category=electronics"
                    className="px-2 py-1"
                    onClick={() => document.querySelector<HTMLButtonElement>("[data-radix-collection-item]")?.click()}
                  >
                    Electronics
                  </Link>
                  <Link
                    href="/listings?category=furniture"
                    className="px-2 py-1"
                    onClick={() => document.querySelector<HTMLButtonElement>("[data-radix-collection-item]")?.click()}
                  >
                    Furniture
                  </Link>
                  <Link
                    href="/listings?category=services"
                    className="px-2 py-1"
                    onClick={() => document.querySelector<HTMLButtonElement>("[data-radix-collection-item]")?.click()}
                  >
                    Services
                  </Link>
                  <div className="border-t pt-4 mt-2">
                    <div className="flex flex-col gap-2">
                      <Button asChild>
                        <Link
                          href="/login"
                          onClick={() =>
                            document.querySelector<HTMLButtonElement>("[data-radix-collection-item]")?.click()
                          }
                        >
                          Sign In
                        </Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link
                          href="/signup"
                          onClick={() =>
                            document.querySelector<HTMLButtonElement>("[data-radix-collection-item]")?.click()
                          }
                        >
                          Sign Up
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

const categories = [
  {
    id: "textbooks",
    title: "Textbooks",
    description: "Find and sell used textbooks",
  },
  {
    id: "electronics",
    title: "Electronics",
    description: "Laptops, phones, and accessories",
  },
  {
    id: "furniture",
    title: "Furniture",
    description: "Desks, chairs, and dorm essentials",
  },
  {
    id: "services",
    title: "Services",
    description: "Tutoring, design, and more",
  },
]

