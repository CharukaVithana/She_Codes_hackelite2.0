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
  Users,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Building2,
  Mail,
  Bell,
  Settings,
  LogOut,
  Upload,
  Download,
} from "lucide-react"
import Link from "next/link"

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Sponsors</h1>
            <p className="text-muted-foreground mt-2">Manage your sponsor companies and contacts</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Import CSV
            </Button>
            <Button asChild>
              <Link href="/sponsors/new">
                <Plus className="mr-2 h-4 w-4" />
                Add Sponsor
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sponsors</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">142</div>
              <p className="text-xs text-muted-foreground">+12 new this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Sponsors</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">62% of total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Prospects</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">35</div>
              <p className="text-xs text-muted-foreground">25% of total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Inactive</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">13% of total</p>
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
                  <Input placeholder="Search sponsors..." className="pl-10" />
                </div>
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Sponsors Table */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All Sponsors</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="prospects">Prospects</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>All Sponsors</CardTitle>
                <CardDescription>Complete list of sponsor companies and their details</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Company</TableHead>
                      <TableHead>Contact Person</TableHead>
                      <TableHead>Industry</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Contact</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>TC</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">TechCorp Inc</div>
                            <div className="text-sm text-muted-foreground">techcorp.com</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">John Smith</div>
                          <div className="text-sm text-muted-foreground">HR Director</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Technology</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="default">Active</Badge>
                      </TableCell>
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
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Send Proposal</DropdownMenuItem>
                            <DropdownMenuItem>Contact History</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>GS</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">Global Solutions</div>
                            <div className="text-sm text-muted-foreground">globalsolutions.com</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">Maria Garcia</div>
                          <div className="text-sm text-muted-foreground">Marketing Manager</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Consulting</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">Prospect</Badge>
                      </TableCell>
                      <TableCell>Dec 12, 2024</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Send Proposal</DropdownMenuItem>
                            <DropdownMenuItem>Contact History</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>IL</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">Innovation Ltd</div>
                            <div className="text-sm text-muted-foreground">innovation-ltd.com</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">David Chen</div>
                          <div className="text-sm text-muted-foreground">Partnership Lead</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Software</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="destructive">Inactive</Badge>
                      </TableCell>
                      <TableCell>Nov 28, 2024</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Reactivate</DropdownMenuItem>
                            <DropdownMenuItem>Archive</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>DF</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">DataFlow Inc</div>
                            <div className="text-sm text-muted-foreground">dataflow.io</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">Sarah Wilson</div>
                          <div className="text-sm text-muted-foreground">Community Manager</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Data Analytics</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="default">Active</Badge>
                      </TableCell>
                      <TableCell>Dec 20, 2024</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Send Proposal</DropdownMenuItem>
                            <DropdownMenuItem>Contact History</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>MC</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">MegaCorp</div>
                            <div className="text-sm text-muted-foreground">megacorp.com</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">Robert Johnson</div>
                          <div className="text-sm text-muted-foreground">VP of Partnerships</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Enterprise</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="default">Active</Badge>
                      </TableCell>
                      <TableCell>Dec 19, 2024</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Send Proposal</DropdownMenuItem>
                            <DropdownMenuItem>Contact History</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="active">
            <Card>
              <CardHeader>
                <CardTitle>Active Sponsors</CardTitle>
                <CardDescription>Sponsors currently engaged in partnerships</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Active sponsors content would be filtered here...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prospects">
            <Card>
              <CardHeader>
                <CardTitle>Prospect Sponsors</CardTitle>
                <CardDescription>Potential sponsors to engage with</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Prospect sponsors content would be filtered here...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inactive">
            <Card>
              <CardHeader>
                <CardTitle>Inactive Sponsors</CardTitle>
                <CardDescription>Sponsors that are no longer active</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Inactive sponsors content would be filtered here...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
