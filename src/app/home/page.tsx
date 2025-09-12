// app/layout.jsx
import type React from "react"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#063147] min-h-screen flex flex-col font-sans text-[#D2AE96]">
        <header className="bg-[#0C4969] border-b-2 border-[#447F9D] p-8 text-center">
          <h1 className="text-4xl font-bold">Sponsorship Management Portal</h1>
          <p className="mt-2 text-lg">
            Streamline sponsorships for university projects, career fairs, and more.
          </p>
        </header>
        <nav className="flex gap-6 justify-center mt-8 mb-8">
          <a href="/submit" className="bg-[#447F9D] text-[#D2AE96] px-4 py-2 rounded-lg font-semibold hover:bg-[#051821] transition">Submit Request</a>
          <a href="/dashboard" className="bg-[#447F9D] text-[#D2AE96] px-4 py-2 rounded-lg font-semibold hover:bg-[#051821] transition">My Dashboard</a>
          <a href="/about" className="bg-[#447F9D] text-[#D2AE96] px-4 py-2 rounded-lg font-semibold hover:bg-[#051821] transition">About</a>
          <a href="/login" className="bg-[#D2AE96] text-[#063147] px-4 py-2 rounded-lg font-semibold border border-[#447F9D] hover:bg-[#447F9D] hover:text-[#D2AE96] transition">Sponsor Login</a>
        </nav>
        <main className="flex-1 flex flex-col items-center">{children}</main>
        <footer className="bg-[#0C4969] border-t border-[#447F9D] py-4 text-center text-[#D2AE96] mt-auto">
          &copy; {new Date().getFullYear()} University Sponsorship Management
        </footer>
      </body>
    </html>
  );
}
