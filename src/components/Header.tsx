import React from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="flex justify-end items-center p-4 gap-4">
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}
