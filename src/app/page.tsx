"use client";
import { Button } from "@/components/ui/button";
import {ModeToggle}  from "../components/ui/ModeToggle";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black dark:text-gray-200 text-center px-6 py-12 relative">
     
      <div className="mb-6 pointer-events-none border dark:border-white dark:bg-gray-600">
        <Image src="/next.svg" alt="Icon" width={100} height={100} />
      </div>

      <h1 className="text-4xl font-bold mb-4">
        Next.js + Tailwind CSS + TypeScript Starter
      </h1>

      <p className="text-gray-600 mb-6 max-w-2xl">
        A starter for Next.js, Tailwind CSS, and TypeScript with Absolute Import,
        SEO, Link component, pre-configured with Husky.
      </p>

      <a
        href="https://github.com/AnshAjayMishra/NextJs-Boiler"
        className="text-pink-600 hover:text-cyan-300 underline mb-6"
      >
        See the repository &gt;
      </a>

      {/* Toggle Switch for Light/Dark Mode */}
      <div className="flex items-center gap-4">
        <p className="text-gray-700">Dark Mode:  <ModeToggle/></p>
        
      </div>

      <div className="flex gap-4 mt-6">
        <Link href="/components">
          <Button className="px-6 py-2">See all components</Button>
        </Link>
        <Link
          href="https://vercel.com/"
          target="_blank"
        >
          <Button variant="outline">Deploy to Vercel</Button>
        </Link>
      </div>

      <footer className="absolute bottom-6 text-gray-500 text-lg">
        © 2025 By{" "}
        <a
          href="https://github.com/anshajaymishra"
          className="underline hover:text-black"
        >
          Ansh Ajay Mishra
        </a>
      </footer>
    </div>
  );
}
