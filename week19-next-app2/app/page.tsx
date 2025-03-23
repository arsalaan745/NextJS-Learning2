

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-black-100">
      <h1 className="text-3xl font-semibold text-white-800 mb-6">Todo Application</h1>
      <div className="flex gap-4">
        <Link
          className="border border-indigo-600 text-indigo-600 rounded-md px-4 py-2 hover:bg-indigo-600 hover:text-white transition"
          href="/signin"
        >
          Sign In
        </Link>
        <Link
          className="border border-indigo-600 text-indigo-600 rounded-md px-4 py-2 hover:bg-indigo-600 hover:text-white transition"
          href="/signup"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

