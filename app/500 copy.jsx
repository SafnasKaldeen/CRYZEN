"use client";

import Link from "next/link";

export default function Custom500() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center p-6">
      <h1 className="text-6xl font-bold mb-4">500</h1>
      <p className="text-2xl mb-8">Internal Server Error</p>
      <p className="mb-8">
        Something went wrong on our end. Please try again later.
      </p>
      <Link href="/">
        <div className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
          Go Back Home
        </div>
      </Link>
      <style jsx>{`
        .min-h-screen {
          background-image: url("/images/500-background.jpg"); /* Replace with your background image path */
          background-size: cover;
          background-position: center;
        }
      `}</style>
    </div>
  );
}
