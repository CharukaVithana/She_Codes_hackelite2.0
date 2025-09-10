import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function NotificationsPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Notifications & Follow-ups</h1>
          <p className="text-sm text-muted-foreground">
            Stay updated on sponsor activities and manage follow-ups
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Filter</Button>
          <Button variant="outline">Mark All Read</Button>
          <Button variant="outline">Settings</Button>
        </div>
      </header>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-sm text-gray-500">Unread</h2>
          <p className="text-xl font-bold">12</p>
          <p className="text-xs text-muted-foreground">+3 today</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-sm text-gray-500">Action Required</h2>
          <p className="text-xl font-bold">5</p>
          <p className="text-xs text-red-500">2 urgent</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-sm text-gray-500">Follow-ups Due</h2>
          <p className="text-xl font-bold">8</p>
          <p className="text-xs text-red-500">3 overdue</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-sm text-gray-500">Completed Today</h2>
          <p className="text-xl font-bold">15</p>
          <p className="text-xs text-green-500">+7 vs yesterday</p>
        </div>
      </div>

      {/* Important Notifications */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Important Notifications</h2>
          <Button variant="outline" size="sm">Mark All Read</Button>
        </div>

        <div className="space-y-4">
          {/* Example notification card */}
          <div className="p-4 bg-white rounded shadow space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">TechCorp Inc.</h3>
              <Badge variant="destructive">High</Badge>
            </div>
            <p className="text-sm font-medium">Action Required</p>
            <p className="text-sm text-muted-foreground">
              Accepted Platinum sponsorship proposal
            </p>
            <p className="text-xs text-muted-foreground">
              Contact: Sarah Johnson • 2 minutes ago
            </p>
            <div className="flex gap-2 mt-2">
              <Button size="sm" variant="outline">Generate Contract</Button>
              <Button size="sm" variant="secondary">View Sponsor</Button>
            </div>
          </div>

          {/* You can map more notifications like above */}
        </div>
      </section>
    </div>
  )
}
