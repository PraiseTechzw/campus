"use client"

import { useState } from "react"
import { useAuth } from "@/components/hooks/use-auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bell, DollarSign, Package, ShoppingBag, Users } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for dashboard
  const stats = [
    {
      title: "Active Listings",
      value: "12",
      description: "Your current marketplace listings",
      icon: <Package className="h-5 w-5 text-primary" />,
      change: "+2 from last month",
      trend: "up",
      link: "/dashboard/listings",
    },
    {
      title: "Unread Messages",
      value: "3",
      description: "Messages awaiting your response",
      icon: <Bell className="h-5 w-5 text-primary" />,
      change: "-1 from yesterday",
      trend: "down",
      link: "/dashboard/messages",
    },
    {
      title: "Items Sold",
      value: "8",
      description: "Successfully completed sales",
      icon: <ShoppingBag className="h-5 w-5 text-primary" />,
      change: "+3 from last month",
      trend: "up",
      link: "/dashboard/sales",
    },
    {
      title: "Total Earnings",
      value: "$420",
      description: "Revenue from all your sales",
      icon: <DollarSign className="h-5 w-5 text-primary" />,
      change: "+$120 from last month",
      trend: "up",
      link: "/dashboard/earnings",
    },
  ]

  // Recent activity mock data
  const recentActivity = [
    {
      id: 1,
      type: "message",
      title: "New message from Sarah",
      description: "Regarding your Calculus textbook listing",
      time: "10 minutes ago",
      link: "/dashboard/messages/123",
    },
    {
      id: 2,
      type: "sale",
      title: "Item sold: MacBook Pro Charger",
      description: "Sold for $45",
      time: "2 hours ago",
      link: "/dashboard/sales/456",
    },
    {
      id: 3,
      type: "listing",
      title: "New listing created",
      description: "Physics Textbook 8th Edition",
      time: "Yesterday",
      link: "/listings/789",
    },
    {
      id: 4,
      type: "favorite",
      title: "Someone favorited your listing",
      description: "Desk Lamp - Black",
      time: "2 days ago",
      link: "/listings/101",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {user?.name || "User"}! Here's an overview of your marketplace activity.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Card key={i} className="card-hover">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-primary/10 p-1.5 flex items-center justify-center">
                    {stat.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                  <div className="mt-2 flex items-center text-xs">
                    {stat.trend === "up" ? (
                      <span className="text-success">↑</span>
                    ) : (
                      <span className="text-destructive">↓</span>
                    )}
                    <span className="ml-1">{stat.change}</span>
                  </div>
                  <Button variant="link" size="sm" asChild className="mt-2 p-0">
                    <Link href={stat.link}>View details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1 card-hover">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest interactions on the platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.slice(0, 3).map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 border-b pb-3 last:border-0">
                    <div className="rounded-full bg-primary/10 p-2">
                      {activity.type === "message" && <Bell className="h-4 w-4 text-primary" />}
                      {activity.type === "sale" && <DollarSign className="h-4 w-4 text-primary" />}
                      {activity.type === "listing" && <Package className="h-4 w-4 text-primary" />}
                      {activity.type === "favorite" && <Users className="h-4 w-4 text-primary" />}
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.description}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/dashboard/activity">View all activity</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="col-span-1 card-hover">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks you might want to perform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start btn-gradient" asChild>
                  <Link href="/listings/create">
                    <Package className="mr-2 h-4 w-4" />
                    Create New Listing
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/dashboard/messages">
                    <Bell className="mr-2 h-4 w-4" />
                    Check Messages
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/listings">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Browse Marketplace
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/dashboard/profile">
                    <Users className="mr-2 h-4 w-4" />
                    Update Profile
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sales Analytics</CardTitle>
              <CardDescription>Your marketplace performance over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center">
              <div className="flex flex-col items-center text-center">
                <BarChart className="h-10 w-10 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">Analytics Coming Soon</h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  We're working on providing detailed analytics for your marketplace activity. Check back soon for
                  insights on your sales, views, and more.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>All your recent interactions on the platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-4 border-b pb-4 last:border-0">
                  <div className="rounded-full bg-primary/10 p-3">
                    {activity.type === "message" && <Bell className="h-5 w-5 text-primary" />}
                    {activity.type === "sale" && <DollarSign className="h-5 w-5 text-primary" />}
                    {activity.type === "listing" && <Package className="h-5 w-5 text-primary" />}
                    {activity.type === "favorite" && <Users className="h-5 w-5 text-primary" />}
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium leading-none">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                    <Button variant="link" size="sm" className="p-0 h-auto" asChild>
                      <Link href={activity.link}>View details</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

