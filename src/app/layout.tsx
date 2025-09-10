import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "../components/NavBar";

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

        <NavBar />
        {/* Main Content */}
        <main className="mx-auto max-w-7xl px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
