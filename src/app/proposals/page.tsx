import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import NavBar from "@/components/NavBar"
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Send,
  Clock,
  CheckCircle,
  XCircle,
  Bell,
  Settings,
  LogOut,
  Calendar,
  DollarSign,
} from "lucide-react"
import Link from "next/link"

export default function ProposalsPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Proposals</h1>
            <p className="text-muted-foreground mt-2">Create and track sponsorship proposals</p>
          </div>
          <Button asChild>
            <Link href="/proposals/new">
              <Plus className="mr-2 h-4 w-4" />
              New Proposal
            </Link>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sent</CardTitle>
              <Send className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">+12 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">26% of total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Accepted</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <p className="text-xs text-muted-foreground">51% success rate</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Declined</CardTitle>
              <XCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">21</div>
              <p className="text-xs text-muted-foreground">24% of total</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search proposals..." className="pl-10" />
                </div>
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Date Range
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Proposals Table */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All Proposals</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="accepted">Accepted</TabsTrigger>
            <TabsTrigger value="declined">Declined</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>All Proposals</CardTitle>
                <CardDescription>Complete list of sponsorship proposals and their status</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Event & Sponsor</TableHead>
                      <TableHead>Package</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Sent Date</TableHead>
                      <TableHead>Response Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div>
                          <div className="font-medium">Career Fair 2024</div>
                          <div className="text-sm text-muted-foreground">TechCorp Inc</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Gold Sponsor</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          <span className="font-medium">25,000</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="default">Accepted</Badge>
                      </TableCell>
                      <TableCell>Dec 15, 2024</TableCell>
                      <TableCell>Dec 18, 2024</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Download PDF</DropdownMenuItem>
                            <DropdownMenuItem>Generate Contract</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <div className="font-medium">Tech Symposium</div>
                          <div className="text-sm text-muted-foreground">Global Solutions</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">Silver Sponsor</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          <span className="font-medium">15,000</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Pending</Badge>
                      </TableCell>
                      <TableCell>Dec 12, 2024</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Send Reminder</DropdownMenuItem>
                            <DropdownMenuItem>Edit Proposal</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <div className="font-medium">Student Awards</div>
                          <div className="text-sm text-muted-foreground">Innovation Ltd</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">Bronze Sponsor</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          <span className="font-medium">5,000</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="destructive">Declined</Badge>
                      </TableCell>
                      <TableCell>Dec 10, 2024</TableCell>
                      <TableCell>Dec 14, 2024</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>View Feedback</DropdownMenuItem>
                            <DropdownMenuItem>Archive</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <div className="font-medium">Career Fair 2024</div>
                          <div className="text-sm text-muted-foreground">DataFlow Inc</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Gold Sponsor</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          <span className="font-medium">25,000</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Pending</Badge>
                      </TableCell>
                      <TableCell>Dec 20, 2024</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Send Reminder</DropdownMenuItem>
                            <DropdownMenuItem>Edit Proposal</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div>
                          <div className="font-medium">Tech Symposium</div>
                          <div className="text-sm text-muted-foreground">MegaCorp</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Platinum Sponsor</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          <span className="font-medium">50,000</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="default">Accepted</Badge>
                      </TableCell>
                      <TableCell>Dec 08, 2024</TableCell>
                      <TableCell>Dec 11, 2024</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Download PDF</DropdownMenuItem>
                            <DropdownMenuItem>Generate Contract</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pending">
            <Card>
              <CardHeader>
                <CardTitle>Pending Proposals</CardTitle>
                <CardDescription>Proposals awaiting response from sponsors</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Pending proposals content would be filtered here...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="accepted">
            <Card>
              <CardHeader>
                <CardTitle>Accepted Proposals</CardTitle>
                <CardDescription>Successfully accepted sponsorship proposals</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Accepted proposals content would be filtered here...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="declined">
            <Card>
              <CardHeader>
                <CardTitle>Declined Proposals</CardTitle>
                <CardDescription>Proposals that were declined by sponsors</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Declined proposals content would be filtered here...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
