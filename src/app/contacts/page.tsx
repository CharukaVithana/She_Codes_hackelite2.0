"use client";

import { useState } from "react";
import { Plus, Upload } from "lucide-react";

type Contact = {
  id: number;
  name: string;
  company: string;
  email: string;
  status: "Pending" | "Contacted" | "Accepted" | "Declined";
};

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: 1,
      name: "Jane Smith",
      company: "ABC Corp",
      email: "jane@abccorp.com",
      status: "Accepted",
    },
    {
      id: 2,
      name: "John Doe",
      company: "XYZ Ltd",
      email: "john@xyz.com",
      status: "Pending",
    },
    {
      id: 3,
      name: "Priya Patel",
      company: "PQR Industries",
      email: "priya@pqr.com",
      status: "Contacted",
    },
  ]);

  return (
    <main className="p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Contacts</h1>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            <Plus className="h-4 w-4" />
            <span>Add Contact</span>
          </button>
          <button className="flex items-center space-x-2 rounded-lg border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
            <Upload className="h-4 w-4" />
            <span>Upload CSV</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="mt-8 overflow-x-auto rounded-xl bg-white shadow-sm">
        <table className="min-w-full text-left text-sm text-gray-700">
          <thead className="border-b bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Company</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c.id} className="border-b last:border-none">
                <td className="px-6 py-3">{c.name}</td>
                <td className="px-6 py-3">{c.company}</td>
                <td className="px-6 py-3">{c.email}</td>
                <td className="px-6 py-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      c.status === "Accepted"
                        ? "bg-green-100 text-green-700"
                        : c.status === "Declined"
                        ? "bg-red-100 text-red-700"
                        : c.status === "Contacted"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
