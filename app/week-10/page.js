"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";
import { useState } from "react";
import PageHeader from "../components/PageHeader";


export default function Week9Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    try {
      setError("");
      await gitHubSignIn();
    } catch (e) {
      setError("You shall not pass! try with a valid Github account you fool!");
      console.error(e);
    }
  };

  const handleSignOut = async () => {
    try {
      setError("");
      await firebaseSignOut();
    } catch (e) {
      setError("Logout failed. Please try again.");
      console.error(e);
    }
  };

  return (
    <main className="flex flex-col items-center text-center bg-gray-100 dark:bg-neutral-900 min-h-screen w-full">
          <PageHeader
            title="CPRG 306 assignments"
            description="Week 10 cloud firebase!"
            bgColor="bg-green-300 dark:bg-green-800"
            homeLink="Home"
          />
          <div className="p-6 text-center border-2 border-gray-300 rounded-lg justify-self-center mt-10 bg-gray-200 shadow-blue-950 shadow-md dark:bg-neutral-800">

        <h1 className="text-2xl font-bold mb-4">Welcome to Shopping List unlimited!</h1>

        {!user ? (
          <div>
            <p className="mb-4">Please sign in with your GitHub account.</p>
            <button
              onClick={handleSignIn}
              className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-700 hover:text-amber-50 px-4 py-2 rounded"
              >
              Sign in with GitHub
            </button>
          </div>
        ) : (
          <div>
            <p className="mb-4 text-center">
              Welcome, {user.displayName} ({user.email})
            </p>

            <div className="flex gap-4 justify-self-center">
              <Link
                href="/week-10/shopping-list"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                >
                Go to Shopping List
              </Link>

              <button
                onClick={handleSignOut}
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-red-400"
                >
                Logout
              </button>
            </div>
          </div>
        )}

        {error && <p className="text-red-600 mt-4">{error}</p>}
        </div>
      </main>
  );
}
