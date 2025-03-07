"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/components/hooks/use-auth"
import { useRouter } from "next/navigation"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { AlertOctagon, Check, ChevronDown, Eye, Search, XCircle } from "lucide-react"
import Link from "next/link"

// Mock data for reports
const mockReports = [
  {
    id: "1",
    type: "listing",
    targetId: "4",
    targetTitle: "Python Programming Tutoring",
    reason: "Inappropriate pricing",
    details: "The price is way too high for tutoring services.",
    reporter: {
      id: "3",
      name: "Michael Brown",
      email: "michael.brown@techinst.edu",
    },
    reportedAt: "2023-07-15",
    status: "pending",
  },
  {
    id: "2",
    type: "user",
    targetId: "5",
    targetTitle: "David Lee",
    reason: "Scam attempts",
    details: "This user has been asking for payments outside the platform.",
    reporter: {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@university.edu",
    },
    reportedAt: "2023-07-16",
    status: "investigating",
  },
  {
    id: "3",
    type: "listing",
    targetId: "5",
    targetTitle: "Physics for Scientists and Engineers",
    reason: "Counterfeit item",
    details: "The book is a photocopied version, not an original.",
    reporter: {
      id: "4",
      name: "Emily Johnson",
      email: "emily.johnson@university.edu",
    },
    reportedAt: "2023-07-17",
    status: "resolved",
  },
  {
    id: "4",
    type: "listing",
    targetId: "2",
    targetTitle: "MacBook Pro 2019 13-inch",
    reason: "Misleading description",
    details: "The laptop is described as new but has signs of wear.",
    reporter: {
      id: "3",
      name: "Michael Brown",
      email: "michael.brown@techinst.edu",
    },
    reportedAt: "2023-07-18",
    status: "dismissed",
  },
  {
    id: "5",
    type: "message",
    targetId: "101",
    targetTitle: "Chat between Jane and David",
    reason: "Harassment",
    details: "Receiving threatening messages regarding a listing.",
    reporter: {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@university.edu",
    },
    reportedAt: "2023-07-19",
    status: "pending",
  },
]

export default function AdminReportsPage() {
  const { isAdmin, isLoading } = useAuth()
  const router = useRouter()
  const [reports, setReports] = useState(mockReports)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredReports, setFilteredReports] = useState(mockReports)

  useEffect(() => {
    if (!isLoading && !isAdmin) {
      router.push("/dashboard")
    }
  }, [isAdmin, isLoading, router])

  useEffect(() => {
    if (searchQuery) {
      const filtered = reports.filter(
        (report) =>
          report.targetTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          report.reason.toLowerCase().includes(searchQuery.toLowerCase()) ||
          report.reporter.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setFilteredReports(filtered)
    } else {
      setFilteredReports(reports)
    }
  }, [searchQuery, reports])

  const handleInvestigateReport = (reportId: string) => {
    setReports(reports.map((report) => (report.id === reportId ? { ...report, status: "investigating" } : report)))
  }

  const handleResolveReport = (reportId: string) => {
    setReports(reports.map((report) => (report.id === reportId ? { ...report, status: "resolved" } : report)))
  }

  const handleDismissReport = (reportId: string) => {
    setReports(reports.map((report) => (report.id === reportId ? { ...report, status: "dismissed" } : report)))
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
            Pending
          </Badge>
        )
      case "investigating":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">
            Investigating
          </Badge>
        )
      case "resolved":
        return (
          <Badge variant="success" className="bg-green-500">
            Resolved
          </Badge>
        )
      case "dismissed":
        return (
          <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-300">
            Dismissed
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Report Management</h1>
          <p className="text-muted-foreground">Manage user reports and complaints</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search reports..."
              className="pl-8 w-full md:w-[300px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Reports</CardTitle>
          <CardDescription>A list of all user reports in the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Target</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Reporter</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>
                    <Badge variant="outline">{report.type.charAt(0).toUpperCase() + report.type.slice(1)}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{report.targetTitle}</div>
                    <div className="text-xs text-muted-foreground">ID: {report.targetId}</div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{report.reason}</div>
                    <div className="text-xs text-muted-foreground line-clamp-1">{report.details}</div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{report.reporter.name}</div>
                    <div className="text-xs text-muted-foreground">{report.reporter.email}</div>
                  </TableCell>
                  <TableCell>{new Date(report.reportedAt).toLocaleDateString()}</TableCell>
                  <TableCell>{getStatusBadge(report.status)}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <span>Actions</span>
                          <ChevronDown className="h-4 w-4 ml-1" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {report.type === "listing" && (
                          <DropdownMenuItem asChild>
                            <Link href={`/listings/${report.targetId}`}>
                              <Eye className="h-4 w-4 mr-2" />
                              View Listing
                            </Link>
                          </DropdownMenuItem>
                        )}

                        {report.type === "user" && (
                          <DropdownMenuItem asChild>
                            <Link href={`/profile/${report.targetId}`}>
                              <Eye className="h-4 w-4 mr-2" />
                              View User
                            </Link>
                          </DropdownMenuItem>
                        )}

                        {report.status === "pending" && (
                          <DropdownMenuItem onClick={() => handleInvestigateReport(report.id)}>
                            <AlertOctagon className="h-4 w-4 mr-2" />
                            Mark as Investigating
                          </DropdownMenuItem>
                        )}

                        {(report.status === "pending" || report.status === "investigating") && (
                          <>
                            <DropdownMenuItem onClick={() => handleResolveReport(report.id)}>
                              <Check className="h-4 w-4 mr-2" />
                              Resolve Report
                            </DropdownMenuItem>

                            <DropdownMenuItem onClick={() => handleDismissReport(report.id)}>
                              <XCircle className="h-4 w-4 mr-2" />
                              Dismiss Report
                            </DropdownMenuItem>
                          </>
                        )}

                        {report.status === "resolved" || report.status === "dismissed" ? (
                          <DropdownMenuItem onClick={() => handleInvestigateReport(report.id)}>
                            <AlertOctagon className="h-4 w-4 mr-2" />
                            Reopen Report
                          </DropdownMenuItem>
                        ) : null}
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

