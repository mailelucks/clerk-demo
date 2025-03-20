"use client";

import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    if (!isLoaded) return;

    if (!isSignedIn) {
      localStorage.setItem("logoutNotice", "true");
      router.replace("/");
    } else {
      setCheckingAuth(false);
    }
  }, [isSignedIn, isLoaded, router]);

  if (checkingAuth) return <p>Checking authentication...</p>;

  return (
    <div>
      <h1>Welcome to your dashboard</h1>
      <p>You are logged in.</p>
    </div>
  );
}
