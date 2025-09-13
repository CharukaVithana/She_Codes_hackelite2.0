import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import NavBar from "@/components/NavBar"
import {
  Bell,
  CheckCircle,
  XCircle,
  Clock,
  Mail,
  MessageSquare,
  Settings,
  LogOut,
  MoreHorizontal,
  Trash2,
  KanbanSquareDashed as MarkAsUnread,
} from "lucide-react"
import Link from "next/link"

const notifications = [
  {
    id: 1,
    type: "proposal_accepted",
    title: "TechCorp accepted your proposal",
    message: "TechCorp Inc has accepted the Gold Sponsorship proposal for Career Fair 2024",
    time: "2 hours ago",
    read: false,
    icon: CheckCircle,
    color: "text-green-500",
  },
  {
    id: 2,
    type: "proposal_sent",
    title: "Proposal sent to DataFlow Inc",
    message: "Your sponsorship proposal for Tech Symposium has been successfully sent",
    time: "5 hours ago",
    read: false,
    icon: Mail,
    color: "text-blue-500",
  },
  {
    id: 3,
    type: "proposal_declined",
    title: "Innovation Ltd declined proposal",
    message: "Innovation Ltd has declined the Bronze Sponsorship for Student Awards",
    time: "1 day ago",
    read: true,
    icon: XCircle,
    color: "text-red-500",
  },
  {
    id: 4,
    type: "contract_signed",
    title: "Contract signed with MegaCorp",
    message: "MegaCorp has signed the Platinum Sponsorship contract for Tech Symposium",
    time: "2 days ago",
    read: true,
    icon: CheckCircle,
    color: "text-green-500",
  },
  {
    id: 5,
    type: "reminder",
    title: "Follow up reminder",
    message: "Global Solutions hasn't responded to your proposal sent 7 days ago",
    time: "3 days ago",
    read: false,
    icon: Clock,
    color: "text-yellow-500",
  },
  {
    id: 6,
    type: "new_sponsor",
    title: "New sponsor added",
    message: "StartupTech Inc has been added to your sponsor database",
    time: "4 days ago",
    read: true,
    icon: MessageSquare,
    color: "text-blue-500",
  },
]

export default function NotificationsPage() {
  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
            <p className="text-muted-foreground mt-2">
              Stay updated with your sponsorship activities
              {unreadCount > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {unreadCount} unread
                </Badge>
              )}
            </p>
          </div>
          <Button variant="outline">Mark All as Read</Button>
        </div>

        {/* Notifications */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All Notifications</TabsTrigger>
            <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
            <TabsTrigger value="proposals">Proposals</TabsTrigger>
            <TabsTrigger value="contracts">Contracts</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {notifications.map((notification) => {
              const IconComponent = notification.icon
              return (
                <Card key={notification.id} className={`${!notification.read ? "border-primary/50 bg-primary/5" : ""}`}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className={`mt-1 ${notification.color}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className={`font-medium ${!notification.read ? "font-semibold" : ""}`}>
                            {notification.title}
                          </h4>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-muted-foreground">{notification.time}</span>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <MarkAsUnread className="mr-2 h-4 w-4" />
                                  {notification.read ? "Mark as unread" : "Mark as read"}
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-destructive">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                        {!notification.read && <div className="w-2 h-2 bg-primary rounded-full"></div>}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </TabsContent>

          <TabsContent value="unread">
            <div className="space-y-4">
              {notifications
                .filter((n) => !n.read)
                .map((notification) => {
                  const IconComponent = notification.icon
                  return (
                    <Card key={notification.id} className="border-primary/50 bg-primary/5">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <div className={`mt-1 ${notification.color}`}>
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold">{notification.title}</h4>
                              <span className="text-sm text-muted-foreground">{notification.time}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{notification.message}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
            </div>
          </TabsContent>

          <TabsContent value="proposals">
            <div className="space-y-4">
              {notifications
                .filter((n) => ["proposal_accepted", "proposal_sent", "proposal_declined"].includes(n.type))
                .map((notification) => {
                  const IconComponent = notification.icon
                  return (
                    <Card
                      key={notification.id}
                      className={`${!notification.read ? "border-primary/50 bg-primary/5" : ""}`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <div className={`mt-1 ${notification.color}`}>
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <h4 className={`font-medium ${!notification.read ? "font-semibold" : ""}`}>
                                {notification.title}
                              </h4>
                              <span className="text-sm text-muted-foreground">{notification.time}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{notification.message}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
            </div>
          </TabsContent>

          <TabsContent value="contracts">
            <div className="space-y-4">
              {notifications
                .filter((n) => n.type === "contract_signed")
                .map((notification) => {
                  const IconComponent = notification.icon
                  return (
                    <Card
                      key={notification.id}
                      className={`${!notification.read ? "border-primary/50 bg-primary/5" : ""}`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <div className={`mt-1 ${notification.color}`}>
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <h4 className={`font-medium ${!notification.read ? "font-semibold" : ""}`}>
                                {notification.title}
                              </h4>
                              <span className="text-sm text-muted-foreground">{notification.time}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{notification.message}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
