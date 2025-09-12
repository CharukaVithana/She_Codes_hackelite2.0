'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart,
} from "recharts"
import {
  TrendingUp,
  DollarSign,
  Users,
  Calendar,
  Download,
  Bell,
  Settings,
  LogOut,
  FileText,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

const fundingData = [
  { event: "Career Fair", raised: 85000, goal: 100000 },
  { event: "Tech Symposium", raised: 42000, goal: 60000 },
  { event: "Student Awards", raised: 18000, goal: 30000 },
  { event: "Research Conf", raised: 65000, goal: 80000 },
]

const proposalStatusData = [
  { name: "Accepted", value: 45, color: "#22c55e" },
  { name: "Pending", value: 23, color: "#f59e0b" },
  { name: "Declined", value: 21, color: "#ef4444" },
]

const monthlyTrendData = [
  { month: "Jul", proposals: 12, accepted: 8, funds: 45000 },
  { month: "Aug", proposals: 15, accepted: 9, funds: 52000 },
  { month: "Sep", proposals: 18, accepted: 11, funds: 68000 },
  { month: "Oct", proposals: 22, accepted: 14, funds: 78000 },
  { month: "Nov", proposals: 19, accepted: 12, funds: 71000 },
  { month: "Dec", proposals: 25, accepted: 16, funds: 89000 },
]

const topSponsorsData = [
  { name: "MegaCorp", amount: 50000, events: 3 },
  { name: "TechCorp Inc", amount: 45000, events: 2 },
  { name: "DataFlow Inc", amount: 35000, events: 2 },
  { name: "Global Solutions", amount: 28000, events: 1 },
  { name: "Innovation Ltd", amount: 22000, events: 1 },
]

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">U</span>
                </div>
                <span className="text-xl font-bold text-foreground">UniCon</span>
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                  Dashboard
                </Link>
                <Link href="/sponsors" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sponsors
                </Link>
                <Link href="/proposals" className="text-muted-foreground hover:text-foreground transition-colors">
                  Proposals
                </Link>
                <Link href="/reports" className="text-primary font-medium">
                  Reports
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
            <p className="text-muted-foreground mt-2">Visualize your sponsorship performance and trends</p>
          </div>
          <div className="flex space-x-3">
            <Select defaultValue="last-6-months">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-month">Last Month</SelectItem>
                <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                <SelectItem value="last-6-months">Last 6 Months</SelectItem>
                <SelectItem value="last-year">Last Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Funds Raised</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Rs.284K</div>
              <p className="text-xs text-muted-foreground">+18% from last period</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">67%</div>
              <p className="text-xs text-muted-foreground">+5% from last period</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Sponsors</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">+12 new sponsors</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Events Funded</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">2 fully funded</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Analytics */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="funding">Funding Analysis</TabsTrigger>
            <TabsTrigger value="sponsors">Sponsor Performance</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Funding Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Funding Progress by Event</CardTitle>
                  <CardDescription>Current funding status for each event</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={fundingData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="event" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`Rs.${value.toLocaleString()}`, ""]} />
                      <Bar dataKey="raised" fill="hsl(var(--primary))" name="Raised" />
                      <Bar dataKey="goal" fill="hsl(var(--muted))" name="Goal" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Proposal Status */}
              <Card>
                <CardHeader>
                  <CardTitle>Proposal Status Distribution</CardTitle>
                  <CardDescription>Breakdown of proposal outcomes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={proposalStatusData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {proposalStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex justify-center space-x-4 mt-4">
                    {proposalStatusData.map((entry, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
                        <span className="text-sm">
                          {entry.name}: {entry.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Sponsors */}
            <Card>
              <CardHeader>
                <CardTitle>Top Sponsors by Contribution</CardTitle>
                <CardDescription>Highest contributing sponsors this period</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topSponsorsData.map((sponsor, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-primary">{index + 1}</span>
                        </div>
                        <div>
                          <div className="font-medium">{sponsor.name}</div>
                          <div className="text-sm text-muted-foreground">{sponsor.events} events sponsored</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">Rs.{sponsor.amount.toLocaleString()}</div>
                        <Badge variant="secondary" className="text-xs">
                          Top {index < 3 ? index + 1 : "5"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="funding" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Funding Trends Over Time</CardTitle>
                <CardDescription>Monthly funding progress and goals</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={monthlyTrendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`Rs.${value.toLocaleString()}`, ""]} />
                    <Area
                      type="monotone"
                      dataKey="funds"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sponsors" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sponsor Engagement Rate</CardTitle>
                  <CardDescription>Response rates by sponsor category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Technology Companies</span>
                        <span>78%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "78%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Financial Services</span>
                        <span>65%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Consulting Firms</span>
                        <span>58%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "58%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Healthcare</span>
                        <span>45%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "45%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sponsor Retention</CardTitle>
                  <CardDescription>Repeat sponsorship patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">85%</div>
                      <p className="text-sm text-muted-foreground">Overall retention rate</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">First-time sponsors</span>
                        <Badge variant="outline">34</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Returning sponsors</span>
                        <Badge variant="default">55</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Long-term partners (3+ years)</span>
                        <Badge variant="secondary">23</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Proposal Success Trends</CardTitle>
                <CardDescription>Monthly proposal volume and acceptance rates</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={monthlyTrendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="proposals"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      name="Proposals Sent"
                    />
                    <Line
                      type="monotone"
                      dataKey="accepted"
                      stroke="hsl(var(--chart-2))"
                      strokeWidth={2}
                      name="Accepted"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Export Options */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>Export Reports</span>
            </CardTitle>
            <CardDescription>Generate detailed reports for stakeholders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-20 flex-col bg-transparent">
                <BarChart3 className="h-6 w-6 mb-2" />
                <span>Financial Summary</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col bg-transparent">
                <Users className="h-6 w-6 mb-2" />
                <span>Sponsor Report</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col bg-transparent">
                <TrendingUp className="h-6 w-6 mb-2" />
                <span>Performance Analysis</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
