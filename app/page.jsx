import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-400 w-full">
        <h1 className="text-4xl font-bold">Hello, World!</h1>
      </main>
    </React.Fragment>
  );
}
