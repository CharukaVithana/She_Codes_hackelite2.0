"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProposalDetailsPage() {
  const { id } = useParams();

  // For now: mock data (replace with API call later)
  const proposal = {
    id,
    title: "Career Fair 2025",
    sponsor: "ABC Corp",
    amount: "$2000",
    description:
      "Sponsorship proposal for the upcoming Career Fair 2025. Includes branding opportunities and booth setup.",
    status: "Accepted",
  };

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-2xl font-bold text-gray-800">{proposal.title}</h1>
      <p className="mt-2 text-gray-600">Sponsor: {proposal.sponsor}</p>
      <p className="text-gray-600">Amount: {proposal.amount}</p>
      <p className="mt-4 text-gray-700">{proposal.description}</p>

      <span
        className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-medium ${
          proposal.status === "Accepted"
            ? "bg-green-100 text-green-700"
            : proposal.status === "Declined"
            ? "bg-red-100 text-red-700"
            : proposal.status === "Sent"
            ? "bg-blue-100 text-blue-700"
            : "bg-gray-100 text-gray-700"
        }`}
      >
        {proposal.status}
      </span>

      <div className="mt-6 flex space-x-4">
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          Send Reminder
        </button>
        <button className="rounded-lg border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
          Download PDF
        </button>
      </div>

      <div className="mt-6">
        <Link href="/proposals" className="text-sm text-blue-600 hover:underline">
          ← Back to Proposals
        </Link>
      </div>
    </main>
  );
}
