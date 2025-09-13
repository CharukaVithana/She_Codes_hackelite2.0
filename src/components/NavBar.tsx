"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Search, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function NavBar() {
  const pathname = usePathname() // Current route

  const navLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/proposals", label: "Proposals" },
    { href: "/reports", label: "Reports" },
  ]

  return (
    <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side - Logo + Links */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 hover:text-blue-500 transition-colors"
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">U</span>
              </div>
              <span className="text-xl font-bold text-foreground">UniCon</span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition-colors ${
                      isActive
                        ? "text-blue-800 font-semibold"
                        : "text-muted-foreground hover:text-blue-500"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Right Side - Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <Button variant="ghost" size="sm" className="hover:text-blue-500">
              <Search className="h-4 w-4" />
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="sm" asChild className="hover:text-blue-500">
              <Link href="/notifications">
                <Bell className="h-4 w-4" />
              </Link>
            </Button>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full hover:text-blue-500">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuItem asChild>
                  <Link href="/settings" className="flex items-center hover:text-blue-500">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/login" className="flex items-center hover:text-blue-500">
                    <LogOut className="mr-2 h-4 w-4" />
                    LogOut
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}
