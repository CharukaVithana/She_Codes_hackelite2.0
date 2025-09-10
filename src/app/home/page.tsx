'use client';

import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Streamlining University Sponsorships
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Connect Financial Teams with Corporate Sponsors through secure proposal links, automated follow-ups, and real-time progress tracking. No login required for sponsors.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/login" className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-100">
            Team Login
          </Link>
          <Link href="#features" className="border border-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-blue-600">
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Everything You Need to Succeed</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow rounded p-6 text-left">
            <h3 className="font-semibold text-xl mb-2">Centralized Management</h3>
            <p>All sponsor communications and tracking in one place.</p>
          </div>
          <div className="bg-white shadow rounded p-6 text-left">
            <h3 className="font-semibold text-xl mb-2">Increased Success Rate</h3>
            <p>Automated follow-ups and professional proposals.</p>
          </div>
          <div className="bg-white shadow rounded p-6 text-left">
            <h3 className="font-semibold text-xl mb-2">Secure & Transparent</h3>
            <p>Role-based access with complete audit trails.</p>
          </div>
        </div>
      </section>

      {/* Role Access Section */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Access Your Dashboard</h2>
        <p className="mb-12 max-w-xl mx-auto">
          Choose your role to access the appropriate dashboard. Sponsors receive secure proposal links directly.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white shadow rounded p-6 text-left">
            <h3 className="font-semibold text-xl mb-4">Financial Team</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Full access to sponsor management, proposals, and contracts</li>
              <li>Upload sponsor contacts</li>
              <li>Send multi-channel proposals</li>
              <li>Track responses & follow-ups</li>
              <li>Manage contracts & payments</li>
            </ul>
          </div>
          <div className="bg-white shadow rounded p-6 text-left">
            <h3 className="font-semibold text-xl mb-4">Sponsors</h3>
            <p>View and respond to proposals securely with no login required.</p>
          </div>
        </div>
      </section>

      {/* Tools / Capabilities Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Comprehensive Tools for Financial Teams</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow rounded p-6 text-left">
            <h3 className="font-semibold text-xl mb-2">Automated Outreach</h3>
            <p>Send personalized proposals via email, WhatsApp, and SMS with AI assistance.</p>
          </div>
          <div className="bg-white shadow rounded p-6 text-left">
            <h3 className="font-semibold text-xl mb-2">Real-time Analytics</h3>
            <p>Track sponsorship success rates, response times, and funding goals with detailed dashboards.</p>
          </div>
          <div className="bg-white shadow rounded p-6 text-left">
            <h3 className="font-semibold text-xl mb-2">Document Management</h3>
            <p>Secure storage for contracts, receipts, and sponsorship agreements with version control.</p>
          </div>
          <div className="bg-white shadow rounded p-6 text-left">
            <h3 className="font-semibold text-xl mb-2">Smart Notifications</h3>
            <p>Instant alerts when sponsors respond with automated follow-up reminders.</p>
          </div>
          <div className="bg-white shadow rounded p-6 text-left">
            <h3 className="font-semibold text-xl mb-2">Bulk Import</h3>
            <p>Upload sponsor contact lists via CSV with validation and duplicate detection.</p>
          </div>
          <div className="bg-white shadow rounded p-6 text-left">
            <h3 className="font-semibold text-xl mb-2">Secure Access</h3>
            <p>Financial team dashboard access with secure sponsor proposal links.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-10 px-6 mt-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="font-bold mb-2 text-lg">UC</h3>
            <p>UniCon — Streamlining university sponsorship management with transparency and efficiency.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-lg">Product</h3>
            <ul className="space-y-1">
              <li>Features</li>
              <li>Pricing</li>
              <li>Demo</li>
              <li>Support</li>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Documentation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-lg">Company</h3>
            <ul className="space-y-1">
              <li>About</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm border-t border-white pt-4">
          © 2024 UniCon. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
