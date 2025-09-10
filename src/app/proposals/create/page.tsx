"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateProposalPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    sponsor: "",
    amount: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New Proposal:", form);
    // TODO: Send to backend with axios
    router.push("/proposals"); // redirect after save
  };

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-2xl font-bold text-gray-800">Create New Proposal</h1>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter proposal title"
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Sponsor</label>
          <input
            type="text"
            name="sponsor"
            value={form.sponsor}
            onChange={handleChange}
            placeholder="Sponsor name"
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Amount</label>
          <input
            type="text"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="$1000"
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            placeholder="Describe the event/project..."
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Submit Proposal
        </button>
      </form>
    </main>
  );
}

