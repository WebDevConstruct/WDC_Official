"use client"
import Link from "next/link";

// app/not-found.tsx
export default function NotFound() {
  return (
    <div style={{ padding: "4rem", textAlign: "center" }}>
      <h1>404 — Page Not Found</h1>
      <Link href="/">Return Home</Link>
    </div>
  );
}