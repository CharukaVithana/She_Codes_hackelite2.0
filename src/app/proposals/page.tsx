"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";

type Proposal = {
  id: number;
  title: string;
  sponsor: string;
  amount: string;
  status: "Pending" | "Sent" | "Accepted" | "Declined";
};

export default function ProposalsPage() {
  const [proposals, setProposals] = useState<Proposal[]>([
    {
      id: 1,
      title: "Career Fair 2025",
      sponsor: "ABC Corp",
      amount: "$2000",
      status: "Accepted",
    },
    {
      id: 2,
      title: "Hackathon Sponsorship",
      sponsor: "XYZ Ltd",
      amount: "$1500",
      status: "Pending",
    },
    {
      id: 3,
      title: "Cultural Festival",
      sponsor: "PQR Industries",
      amount: "$1000",
      status: "Sent",
    },
  ]);

  return (
    <main className="p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Proposals</h1>
        <Link
          href="/proposals/create"
          className="flex items-center space-x-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" />
          <span>New Proposal</span>
        </Link>
      </div>

      {/* Proposal Cards */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {proposals.map((p) => (
          <div
            key={p.id}
            className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md"
          >
            <h2 className="text-lg font-semibold text-gray-800">{p.title}</h2>
            <p className="mt-1 text-sm text-gray-600">Sponsor: {p.sponsor}</p>
            <p className="mt-1 text-sm text-gray-600">Amount: {p.amount}</p>
            <span
              className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                p.status === "Accepted"
                  ? "bg-green-100 text-green-700"
                  : p.status === "Declined"
                  ? "bg-red-100 text-red-700"
                  : p.status === "Sent"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {p.status}
            </span>
            <div className="mt-4">
              <Link
                href={`/proposals/${p.id}`}
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
