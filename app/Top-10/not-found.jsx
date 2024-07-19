"use client";

import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center p-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Oops! Page Not Found</p>
      <p className="mb-8">
        It seems the page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/">
        <div className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
          Go Back Home
        </div>
      </Link>
      <style jsx>{`
        .min-h-screen {
          background-image: url("/images/404-background.jpg"); /* Replace with your background image path */
          background-size: cover;
          background-position: center;
        }
      `}</style>
    </div>
  );
}
