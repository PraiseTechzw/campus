"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/components/hooks/use-auth"
import { useRouter } from "next/navigation"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Search, Shield, ShieldOff, Trash, UserCog } from "lucide-react"

// Mock data for users
const mockUsers = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@university.edu",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "admin",
    university: "State University",
    status: "active",
    joinedAt: "2023-01-15",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@university.edu",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "user",
    university: "State University",
    status: "active",
    joinedAt: "2023-02-20",
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael.brown@techinst.edu",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "user",
    university: "Tech Institute",
    status: "active",
    joinedAt: "2023-03-05",
  },
  {
    id: "4",
    name: "Emily Johnson",
    email: "emily.johnson@university.edu",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "user",
    university: "State University",
    status: "suspended",
    joinedAt: "2023-04-10",
  },
  {
    id: "5",
    name: "David Lee",
    email: "david.lee@techinst.edu",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "user",
    university: "Tech Institute",
    status: "active",
    joinedAt: "2023-05-12",
  },
]

export default function AdminUsersPage() {
  const { isAdmin, isLoading } = useAuth()
  const router = useRouter()
  const [users, setUsers] = useState(mockUsers)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredUsers, setFilteredUsers] = useState(mockUsers)

  useEffect(() => {
    if (!isLoading && !isAdmin) {
      router.push("/dashboard")
    }
  }, [isAdmin, isLoading, router])

  useEffect(() => {
    if (searchQuery) {
      const filtered = users.filter(
        (user) =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.university.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setFilteredUsers(filtered)
    } else {
      setFilteredUsers(users)
    }
  }, [searchQuery, users])

  const handlePromoteToAdmin = (userId: string) => {
    setUsers(users.map((user) => (user.id === userId ? { ...user, role: "admin" } : user)))
  }

  const handleRemoveAdmin = (userId: string) => {
    setUsers(users.map((user) => (user.id === userId ? { ...user, role: "user" } : user)))
  }

  const handleSuspendUser = (userId: string) => {
    setUsers(users.map((user) => (user.id === userId ? { ...user, status: "suspended" } : user)))
  }

  const handleActivateUser = (userId: string) => {
    setUsers(users.map((user) => (user.id === userId ? { ...user, status: "active" } : user)))
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground">Manage all users in the platform</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search users..."
              className="pl-8 w-full md:w-[300px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>A list of all users registered in the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>University</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">{user.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{user.university}</TableCell>
                  <TableCell>
                    {user.role === "admin" ? (
                      <Badge variant="default">Admin</Badge>
                    ) : (
                      <Badge variant="outline">User</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    {user.status === "active" ? (
                      <Badge variant="success" className="bg-green-500">
                        Active
                      </Badge>
                    ) : (
                      <Badge variant="destructive">Suspended</Badge>
                    )}
                  </TableCell>
                  <TableCell>{new Date(user.joinedAt).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <UserCog className="h-4 w-4 mr-1" />
                          <span>Manage</span>
                          <ChevronDown className="h-4 w-4 ml-1" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {user.role !== "admin" ? (
                          <DropdownMenuItem onClick={() => handlePromoteToAdmin(user.id)}>
                            <Shield className="h-4 w-4 mr-2" />
                            Make Admin
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem onClick={() => handleRemoveAdmin(user.id)}>
                            <ShieldOff className="h-4 w-4 mr-2" />
                            Remove Admin
                          </DropdownMenuItem>
                        )}

                        {user.status === "active" ? (
                          <DropdownMenuItem onClick={() => handleSuspendUser(user.id)}>
                            <Trash className="h-4 w-4 mr-2" />
                            Suspend User
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem onClick={() => handleActivateUser(user.id)}>
                            <Shield className="h-4 w-4 mr-2" />
                            Activate User
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

