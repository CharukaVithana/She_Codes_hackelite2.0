"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

export default function SponsorPortalPage() {
  const { token } = useParams();
  const [action, setAction] = useState<string | null>(null);

  // For now, mock proposal (later fetch from backend using token)
  const proposal = {
    title: "Career Fair 2025 Sponsorship",
    organizer: "University of Moratuwa",
    amount: "Rs.2000",
    benefits: [
      "Logo on event banners",
      "Dedicated booth at venue",
      "Social media promotion",
    ],
  };

  const handleAction = (choice: string) => {
    setAction(choice);
    console.log(`Sponsor chose: ${choice} for token: ${token}`);
    // TODO: Call backend API with token + choice
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
        {/* Proposal Info */}
        <h1 className="text-2xl font-bold text-gray-800">{proposal.title}</h1>
        <p className="mt-2 text-gray-600">Organizer: {proposal.organizer}</p>
        <p className="text-gray-600">Requested Amount: {proposal.amount}</p>

        <h2 className="mt-6 text-lg font-semibold text-gray-800">
          Sponsorship Benefits
        </h2>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-700">
          {proposal.benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => handleAction("Accepted")}
            className="flex-1 rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            Accept
          </button>
          <button
            onClick={() => handleAction("Declined")}
            className="flex-1 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Decline
          </button>
          <button
            onClick={() => handleAction("Request Info")}
            className="flex-1 rounded-lg bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
          >
            Request Info
          </button>
        </div>

        {/* Confirmation Message */}
        {action && (
          <p className="mt-6 text-center text-sm font-medium text-blue-600">
            ✅ You have chosen: {action}. Thank you!
          </p>
        )}
      </div>
    </main>
  );
}
