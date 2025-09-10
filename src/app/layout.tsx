import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UniCon - Where the University Meets Corporate",
  description: "Streamlining university sponsorship acquisition",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {/* Navbar */}
        <header className="bg-white shadow-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <h1 className="text-xl font-bold text-blue-600">
              <Link href="/">UniCon</Link>
            </h1>
            <nav className="space-x-6 text-sm font-medium">
              <Link href="/dashboard" className="hover:text-blue-600">
                Dashboard
              </Link>
              <Link href="/contacts" className="hover:text-blue-600">
                Contacts
              </Link>
              <Link href="/proposals" className="hover:text-blue-600">
                Proposals
              </Link>
              <Link href="/reports" className="hover:text-blue-600">
                Reports
              </Link>
              <Link href="/settings" className="hover:text-blue-600">
                Settings
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto max-w-7xl px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
