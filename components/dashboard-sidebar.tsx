"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { useAuth } from "@/components/hooks/use-auth"
import {
  LayoutDashboard,
  ListFilter,
  MessageSquare,
  Package,
  Settings,
  ShieldCheck,
  User,
  Users,
  LogOut,
  FileText,
  Star,
  HelpCircle,
  Plus,
  Bell,
} from "lucide-react"

export function DashboardSidebar() {
  const pathname = usePathname()
  const { user, isAdmin, signOut } = useAuth()

  const isActivePath = (path: string) => {
    if (path === "/dashboard" && pathname === "/dashboard") {
      return true
    }
    if (path !== "/dashboard" && pathname.startsWith(path)) {
      return true
    }
    return false
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="flex items-center px-2 py-3">
          <span className="text-xl font-bold">Campus Market</span>
        </Link>
      </SidebarHeader>
      <SidebarSeparator />

      <SidebarContent>
        {/* User Section */}
        <SidebarGroup>
          <div className="flex items-center px-3 py-2">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src={user?.avatar || undefined} alt={user?.name || "User"} />
              <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">{user?.name || "User"}</p>
              <p className="text-xs text-muted-foreground">{user?.email || ""}</p>
            </div>
            {isAdmin && <ShieldCheck className="ml-auto h-4 w-4 text-primary" />}
          </div>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActivePath("/dashboard")}
                  tooltip="Dashboard"
                  className={isActivePath("/dashboard") ? "sidebar-active-item pl-4" : "pl-2"}
                >
                  <Link href="/dashboard">
                    <LayoutDashboard />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActivePath("/dashboard/listings")}
                  tooltip="Listings"
                  className={isActivePath("/dashboard/listings") ? "sidebar-active-item pl-4" : "pl-2"}
                >
                  <Link href="/dashboard/listings">
                    <Package />
                    <span>My Listings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActivePath("/dashboard/messages")}
                  tooltip="Messages"
                  className={isActivePath("/dashboard/messages") ? "sidebar-active-item pl-4" : "pl-2"}
                >
                  <Link href="/dashboard/messages">
                    <MessageSquare />
                    <span>Messages</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActivePath("/dashboard/favorites")}
                  tooltip="Favorites"
                  className={isActivePath("/dashboard/favorites") ? "sidebar-active-item pl-4" : "pl-2"}
                >
                  <Link href="/dashboard/favorites">
                    <Star />
                    <span>Favorites</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Marketplace */}
        <SidebarGroup>
          <SidebarGroupLabel>Marketplace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActivePath("/listings/create")}
                  tooltip="Create Listing"
                  className={isActivePath("/listings/create") ? "sidebar-active-item pl-4" : "pl-2"}
                >
                  <Link href="/listings/create">
                    <Plus />
                    <span>Create Listing</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActivePath("/listings")}
                  tooltip="Browse"
                  className={isActivePath("/listings") ? "sidebar-active-item pl-4" : "pl-2"}
                >
                  <Link href="/listings">
                    <ListFilter />
                    <span>Browse Listings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Account Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActivePath("/dashboard/profile")}
                  tooltip="Profile"
                  className={isActivePath("/dashboard/profile") ? "sidebar-active-item pl-4" : "pl-2"}
                >
                  <Link href="/dashboard/profile">
                    <User />
                    <span>Profile</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActivePath("/dashboard/notifications")}
                  tooltip="Notifications"
                  className={isActivePath("/dashboard/notifications") ? "sidebar-active-item pl-4" : "pl-2"}
                >
                  <Link href="/dashboard/notifications">
                    <Bell />
                    <span>Notifications</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActivePath("/dashboard/settings")}
                  tooltip="Settings"
                  className={isActivePath("/dashboard/settings") ? "sidebar-active-item pl-4" : "pl-2"}
                >
                  <Link href="/dashboard/settings">
                    <Settings />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Admin Section - Only visible to admins */}
        {isAdmin && (
          <SidebarGroup>
            <SidebarGroupLabel>Administration</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={isActivePath("/admin/users")}
                    tooltip="Users"
                    className={isActivePath("/admin/users") ? "sidebar-active-item pl-4" : "pl-2"}
                  >
                    <Link href="/admin/users">
                      <Users />
                      <span>Users</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={isActivePath("/admin/listings")}
                    tooltip="Listings"
                    className={isActivePath("/admin/listings") ? "sidebar-active-item pl-4" : "pl-2"}
                  >
                    <Link href="/admin/listings">
                      <Package />
                      <span>Listings</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={isActivePath("/admin/reports")}
                    tooltip="Reports"
                    className={isActivePath("/admin/reports") ? "sidebar-active-item pl-4" : "pl-2"}
                  >
                    <Link href="/admin/reports">
                      <FileText />
                      <span>Reports</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* Help & Support */}
        <SidebarGroup>
          <SidebarGroupLabel>Help & Support</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActivePath("/help")}
                  tooltip="Help Center"
                  className={isActivePath("/help") ? "sidebar-active-item pl-4" : "pl-2"}
                >
                  <Link href="/help">
                    <HelpCircle />
                    <span>Help Center</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => signOut()} tooltip="Sign Out">
              <LogOut />
              <span>Sign Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

