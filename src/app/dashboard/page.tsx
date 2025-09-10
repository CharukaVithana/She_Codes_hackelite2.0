"use client";

import {
  BarChart3,
  FileText,
  Users,
  MessageSquare,
  Settings,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="mt-1 text-gray-600">
          Overview of sponsorship activities and progress.
        </p>

        {/* Stats Cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-sm font-medium text-gray-500">
              Total Sponsors Contacted
            </h2>
            <p className="mt-2 text-2xl font-bold text-gray-800">120</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-sm font-medium text-gray-500">
              Proposals Sent
            </h2>
            <p className="mt-2 text-2xl font-bold text-gray-800">45</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h2 className="text-sm font-medium text-gray-500">
              Sponsorships Confirmed
            </h2>
            <p className="mt-2 text-2xl font-bold text-green-600">18</p>
          </div>
        </div>

        {/* Placeholder for charts/activities */}
        <div className="mt-10 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800">
            Recent Activities
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li>✅ Proposal accepted by ABC Corp</li>
            <li>📧 Proposal sent to XYZ Ltd</li>
            <li>⏳ Follow-up required for PQR Industries</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
