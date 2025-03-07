"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { useAuth } from "@/components/hooks/use-auth"
import { Loader2 } from "lucide-react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated
    if (!isLoading && !user) {
      router.push("/auth/login")
    }
  }, [user, isLoading, router])

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  // If not authenticated and not loading, don't render children
  if (!user && !isLoading) {
    return null
  }

  return (
    <SidebarProvider defaultOpen>
      <DashboardSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="sticky top-0 z-10 h-16 border-b bg-background flex items-center px-4 md:px-6">
          <SidebarTrigger className="mr-2" />
          <div className="ml-auto flex items-center space-x-4"></div>
        </header>
        <SidebarInset>
          <div className="container mx-auto p-4 md:p-6">{children}</div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

