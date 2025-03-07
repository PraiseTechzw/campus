import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MessageSquare, Package, PlusCircle, Eye, DollarSign } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  // Mock data for demonstration
  const stats = [
    {
      title: "Active Listings",
      value: "12",
      description: "Products currently listed",
      icon: <Package className="h-6 w-6" />,
    },
    {
      title: "Messages",
      value: "24",
      description: "Unread messages",
      icon: <MessageSquare className="h-6 w-6" />,
    },
    {
      title: "Total Earnings",
      value: "$1,200",
      description: "From all sales",
      icon: <DollarSign className="h-6 w-6" />,
    },
  ]

  const recentActivity = [
    {
      type: "Message",
      details: "New message from Sarah about 'MacBook Pro'",
      time: "2 hours ago",
    },
    {
      type: "View",
      details: "Your 'Calculus Textbook' listing received 5 new views",
      time: "Yesterday",
    },
    {
      type: "Sale",
      details: "You sold 'Desk Lamp' for $25",
      time: "2 days ago",
    },
    {
      type: "Message",
      details: "New message from John about 'Desk Chair'",
      time: "3 days ago",
    },
    {
      type: "View",
      details: "Your 'Physics Textbook' listing received 12 new views",
      time: "5 days ago",
    },
  ]

  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/listings/create">
              <PlusCircle className="mr-2 h-4 w-4" /> Create Listing
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <h2 className="mt-10 text-xl font-semibold">Recent Activity</h2>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Activity Feed</CardTitle>
          <CardDescription>Your recent interactions and notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivity.map((activity, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {activity.type === "Message" && <MessageSquare className="inline mr-2 h-4 w-4" />}
                    {activity.type === "View" && <Eye className="inline mr-2 h-4 w-4" />}
                    {activity.type === "Sale" && <DollarSign className="inline mr-2 h-4 w-4" />}
                    {activity.type}
                  </TableCell>
                  <TableCell>{activity.details}</TableCell>
                  <TableCell>{activity.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold">Quick Actions</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Button asChild variant="outline" size="lg" className="h-20">
            <Link href="/listings/create" className="flex flex-col items-center justify-center">
              <PlusCircle className="mb-1 h-6 w-6" />
              <span>Create Listing</span>
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-20">
            <Link href="/messages" className="flex flex-col items-center justify-center">
              <MessageSquare className="mb-1 h-6 w-6" />
              <span>View Messages</span>
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-20">
            <Link href="/profile/edit" className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-1 h-6 w-6"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>Edit Profile</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

