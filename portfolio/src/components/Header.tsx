"use client";
import Link from "next/link";

const IconLinkedIn = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="4" stroke="#4B3B39" strokeWidth="2"/><path d="M7 10v6" stroke="#4B3B39" strokeWidth="2" strokeLinecap="round"/><circle cx="7" cy="7" r="1" fill="#4B3B39"/><path d="M11 16v-3a2 2 0 0 1 4 0v3" stroke="#4B3B39" strokeWidth="2" strokeLinecap="round"/></svg>
);
const IconMail = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#4B3B39" strokeWidth="2"/><path d="M3 7l9 6 9-6" stroke="#4B3B39" strokeWidth="2"/></svg>
);

export default function Header() {
  return (
    <header className="bg-[#4B3B39] text-white px-4 sm:px-12 py-4 flex items-center justify-between">
      <span className="font-bold text-xl tracking-wide">Kie Yokozuka</span>
      <nav className="flex items-center gap-2 sm:gap-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/work" className="hover:underline">Work</Link>
        <Link href="/about" className="bg-white text-[#4B3B39] font-semibold rounded-full px-4 py-1 mr-1">About</Link>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener" className="p-2 hover:bg-[#6d5c57] rounded-full"><IconLinkedIn /></a>
        <a href="mailto:hello@example.com" className="p-2 hover:bg-[#6d5c57] rounded-full"><IconMail /></a>
      </nav>
    </header>
  );
} 