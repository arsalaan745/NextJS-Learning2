"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-screen bg-dark-900">
      <div className="border bg-white p-8 rounded-2xl flex flex-col gap-3 w-80">
        <h2 className="text-xl font-semibold text-gray-700 text-center">Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          onChange={e=>{setUsername(e.target.value)}}
          className="text-gray-800 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={e=>{setPassword(e.target.value)}}
          className="text-gray-800 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={async () => {
            await axios.post("http://localhost:3000/api/v1/signup", {
              username,
              password
            })
           router.push("/signin");
          }}
          className="bg-indigo-600 text-white rounded-md py-2 font-medium hover:bg-indigo-700 transition"
        >
          SignUp
        </button>
      </div>
    </div>
  );
}
