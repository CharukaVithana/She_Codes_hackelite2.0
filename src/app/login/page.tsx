"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        {/* Header */}
        <h1 className="mb-6 text-center text-2xl font-bold text-blue-600">
          {isLogin ? "Financial Team Login" : "Financial Team Signup"}
        </h1>

        {/* Toggle buttons */}
        <div className="mb-6 flex justify-center space-x-4">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              isLogin ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              !isLogin ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Signup
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {!isLogin && (
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-lg border px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
          )}

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full rounded-lg border px-3 py-2 text-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        {/* Footer */}
        {isLogin && (
          <p className="mt-4 text-center text-xs text-gray-600">
            Don’t have an account?{" "}
            <button
              onClick={() => setIsLogin(false)}
              className="font-medium text-blue-600 hover:underline"
            >
              Sign up
            </button>
          </p>
        )}
      </div>
    </main>
  );
}
