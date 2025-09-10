'use client';
import React from 'react';
import Link from 'next/link';
import { Bell, FileText, Users, BarChart2, Home } from 'lucide-react';

const NavBar = () => {
  return (
    <nav className="bg-white shadow flex justify-between items-center px-6 py-4">
      {/* Logo / App Name */}
      <div className="text-xl font-bold">
        <Link href="/">UniCon</Link>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-6">
        <li>
          <Link href="/dashboard" className="flex items-center gap-1 hover:text-blue-600">
            <Home size={18} /> Dashboard
          </Link>
        </li>
        <li>
          <Link href="/contacts" className="flex items-center gap-1 hover:text-blue-600">
            <Users size={18} /> Contacts
          </Link>
        </li>
        <li>
          <Link href="/proposals" className="flex items-center gap-1 hover:text-blue-600">
            <FileText size={18} /> Proposals
          </Link>
        </li>
        <li>
          <Link href="/reports" className="flex items-center gap-1 hover:text-blue-600">
            <BarChart2 size={18} /> Reports
          </Link>
        </li>
        <li>
          <Link href="/notifications" className="flex items-center gap-1 hover:text-blue-600 relative">
            <Bell size={18} />
            <span className="absolute -top-1 -right-2 w-4 h-4 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">3</span>
          </Link>
        </li>
      </ul>

      {/* User Info / Profile */}
      <div className="flex items-center gap-4">
        <span className="hidden md:inline font-medium">Financial Team</span>
        <img
          src="/avatar.png"
          alt="Profile"
          className="w-8 h-8 rounded-full border border-gray-300"
        />
      </div>
    </nav>
  );
};

export default NavBar;
