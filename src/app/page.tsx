"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SignIn, SignedOut, SignedIn, useAuth } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();
  const [showLogoutNotice, setShowLogoutNotice] = useState(false);

  useEffect(() => {
    if (!isLoaded) return;

    if (isSignedIn) {
      router.replace("/dashboard");
    }

    if (localStorage.getItem("logoutNotice") === "true") {
      setShowLogoutNotice(true);
      localStorage.removeItem("logoutNotice");
    }
  }, [isSignedIn, isLoaded, router]);

  return (
    <>
      <SignedIn>
        <p>Redirecting to dashboard...</p>
      </SignedIn>

      <SignedOut>
        <h1>Welcome to Grassroots Visualization</h1>
        {showLogoutNotice && (
          <div
            className="bg-red-100 flex justify-center align-center p-4 mb-4"
            role="alert"
          >
            <p className="red-800 bold">
              You were logged out. Please sign in again.
            </p>
          </div>
        )}
        <p>Please sign in to continue.</p>
        <SignIn />
      </SignedOut>
    </>
  );
}
