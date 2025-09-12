import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, TrendingUp, Bell, CheckCircle, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">U</span>
              </div>
              <span className="text-xl font-bold text-foreground">UniCon</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </Link>
              <Button asChild>
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">

                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  Simplify Sponsor Management with <span className="text-primary">UniCon</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty max-w-lg">
                  Automate sponsorship requests, track proposals, and manage financial relationships with corporate
                  sponsors efficiently.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8">
                  <Link href="/dashboard">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  Watch Demo
                </Button>
              </div>

            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 backdrop-blur-sm">
                <img
                  src="/landing-dashboard.png"
                  alt="UniCon Dashboard Preview"
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Why Choose UniCon?</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Everything you need to manage sponsorships efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Smart Proposal Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  Generate personalized sponsorship requests using AI-assisted templates and send them via email or
                  WhatsApp.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Real-time Tracking & Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  Monitor proposal status, track response rates, and generate comprehensive financial reports
                  automatically.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Secure Contact Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  Organize company contacts, track communication history, and manage sponsor relationships in one place.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Seamless Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-pretty">
                  Automated notifications and updates keep both university teams and sponsors informed throughout the
                  process.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">How UniCon Works</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Simple steps to streamline your sponsorship process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold">Upload Contacts</h3>
              <p className="text-muted-foreground text-pretty">
                Import your company contacts via CSV or add them manually to build your sponsor database.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold">Send Proposals</h3>
              <p className="text-muted-foreground text-pretty">
                Create personalized sponsorship packages and send them automatically via email or WhatsApp.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold">Track & Manage</h3>
              <p className="text-muted-foreground text-pretty">
                Monitor responses, manage contracts, and generate reports for successful sponsorship management.
              </p>
            </div>
          </div>
        </div>
      </section>
  

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Streamline Sponsor Management?</h2>
          <p className="text-xl opacity-90 text-pretty max-w-2xl mx-auto">
            Use UniCon to streamline and manage your university project sponsorships efficiently.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8">
            <Link href="/login">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">U</span>
                </div>
                <span className="text-xl font-bold">UniCon</span>
              </div>
              <p className="text-muted-foreground text-pretty">
                Streamlining sponsor management for university.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link href="#features" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
                <Link
                  href="#how-it-works"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  How It Works
                </Link>
                <Link href="/dashboard" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Dashboard
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <div className="space-y-2 text-sm">
                <Link href="/help" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </Link>
                <Link href="/contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
                <Link
                  href="/documentation"
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>support@unicon.edu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 UniCon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
