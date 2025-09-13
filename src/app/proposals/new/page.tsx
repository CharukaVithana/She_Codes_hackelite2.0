import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Send,
  Save,
  Calendar,
  DollarSign,
  Users,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
  Building2,
  Package,
} from "lucide-react"
import Link from "next/link"

export default function NewProposalPage() {
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
                <Link href="/proposals" className="text-primary font-medium">
                  Proposals
                </Link>
                <Link href="/reports" className="text-muted-foreground hover:text-foreground transition-colors">
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/proposals">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Proposals
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Create New Proposal</h1>
            <p className="text-muted-foreground mt-2">Send a sponsorship proposal to potential sponsors</p>
          </div>
        </div>

        <form className="space-y-8">
          {/* Event Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Event Information</span>
              </CardTitle>
              <CardDescription>Select the event you're seeking sponsorship for</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="event">Event *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an event" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="career-fair-2024">Career Fair 2024</SelectItem>
                      <SelectItem value="tech-symposium">Tech Symposium</SelectItem>
                      <SelectItem value="student-awards">Student Awards Ceremony</SelectItem>
                      <SelectItem value="research-conference">Research Conference</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event-date">Event Date</Label>
                  <Input id="event-date" type="date" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="event-description">Event Description</Label>
                <Textarea
                  id="event-description"
                  placeholder="Brief description of the event and its objectives"
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Sponsor Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Building2 className="h-5 w-5" />
                <span>Sponsor Selection</span>
              </CardTitle>
              <CardDescription>Choose the sponsors to send this proposal to</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 border rounded-lg">
                  <Checkbox id="techcorp" className="bg-blue-200" />
                  <div className="flex items-center space-x-3 flex-1">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>TC</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">TechCorp Inc</div>
                      <div className="text-sm text-muted-foreground">John Smith - HR Director</div>
                    </div>
                  </div>
                  <Badge variant="secondary">Technology</Badge>
                </div>
                <div className="flex items-center space-x-3 p-3 border rounded-lg">
                  <Checkbox id="globalsolutions" className="bg-blue-200"/>
                  <div className="flex items-center space-x-3 flex-1">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>GS</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Global Solutions</div>
                      <div className="text-sm text-muted-foreground">Maria Garcia - Marketing Manager</div>
                    </div>
                  </div>
                  <Badge variant="secondary">Consulting</Badge>
                </div>
                <div className="flex items-center space-x-3 p-3 border rounded-lg">
                  <Checkbox id="dataflow" className="bg-blue-200"/>
                  <div className="flex items-center space-x-3 flex-1">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>DF</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">DataFlow Inc</div>
                      <div className="text-sm text-muted-foreground">Sarah Wilson - Community Manager</div>
                    </div>
                  </div>
                  <Badge variant="secondary">Data Analytics</Badge>
                </div>
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                <Users className="mr-2 h-4 w-4" />
                Browse All Sponsors
              </Button>
            </CardContent>
          </Card>

          {/* Sponsorship Packages */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Package className="h-5 w-5" />
                <span>Sponsorship Packages</span>
              </CardTitle>
              <CardDescription>Define the sponsorship tiers and benefits</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Platinum Package */}
              <div className="border rounded-lg p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-lg">Platinum Sponsor</h4>
                  <Badge variant="secondary">Premium</Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="platinum-amount">Amount</Label>
                    <Input id="platinum-amount" placeholder="Rs. 50,000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="platinum-spots">Available Spots</Label>
                    <Input id="platinum-spots" placeholder="2" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="platinum-benefits">Benefits</Label>
                  <Textarea
                    id="platinum-benefits"
                    placeholder="• Logo on all event materials&#10;• Speaking opportunity&#10;• Premium booth location&#10;• VIP networking access"
                    className="min-h-[100px]"
                  />
                </div>
              </div>

              {/* Gold Package */}
              <div className="border rounded-lg p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-lg">Gold Sponsor</h4>
                  <Badge variant="outline">Popular</Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="gold-amount">Amount</Label>
                      <Input id="gold-amount" placeholder="Rs.25,000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gold-spots">Available Spots</Label>
                    <Input id="gold-spots" placeholder="5" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gold-benefits">Benefits</Label>
                  <Textarea
                    id="gold-benefits"
                    placeholder="• Logo on event website and materials&#10;• Exhibition booth&#10;• Networking reception access&#10;• Social media mentions"
                    className="min-h-[100px]"
                  />
                </div>
              </div>

              {/* Silver Package */}
              <div className="border rounded-lg p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-lg">Silver Sponsor</h4>
                  <Badge variant="outline">Standard</Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="silver-amount">Amount</Label>
                      <Input id="silver-amount" placeholder="Rs.15,000"/>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="silver-spots">Available Spots</Label>
                    <Input id="silver-spots" placeholder="10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="silver-benefits">Benefits</Label>
                  <Textarea
                    id="silver-benefits"
                    placeholder="• Logo on event website&#10;• Small exhibition space&#10;• Event program listing&#10;• Certificate of appreciation"
                    className="min-h-[100px]"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Message & Delivery */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <span>Proposal Message</span>
              </CardTitle>
              <CardDescription>Customize the message that will be sent to sponsors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="subject">Email Subject</Label>
                <Input id="subject" placeholder="Sponsorship Opportunity - Career Fair 2024" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Dear [Contact Name],&#10;&#10;We hope this message finds you well. We are excited to invite [Company Name] to partner with us as a sponsor for our upcoming Career Fair 2024...&#10;&#10;Best regards,&#10;[Your Name]"
                  className="min-h-[200px]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="delivery-method">Delivery Method</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select delivery method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="both">Email + WhatsApp</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="send-time">Send Time</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Send immediately" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="now">Send immediately</SelectItem>
                      <SelectItem value="schedule">Schedule for later</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <Button variant="outline" asChild>
              <Link href="/proposals">Cancel</Link>
            </Button>
            <Button variant="outline">
              <Save className="mr-2 h-4 w-4" />
              Save Draft
            </Button>
            <Button type="submit">
              <Send className="mr-2 h-4 w-4" />
              Send Proposal
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
