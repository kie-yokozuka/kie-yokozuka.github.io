"use client";
import Link from "next/link";
import Image from "next/image";

const IconWork = () => (
  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" stroke="#fff" strokeWidth="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="#fff" strokeWidth="2"/></svg>
);
const IconAbout = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2"/><path d="M12 16v-4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="8" r="1" fill="#fff"/></svg>
);

const IconMail = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#fff" strokeWidth="2"/><path d="M3 7l9 6 9-6" stroke="#fff" strokeWidth="2"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#4B3B39] text-white px-4 sm:px-12 py-6 mt-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-bold text-lg">Kie Yokozuka</span>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/" className="flex items-center gap-1">🏠 Home</Link>
          <Link href="/work" className="flex items-center gap-1"><IconWork /> Work</Link>
          <Link href="/about" className="flex items-center gap-1"><IconAbout /> About</Link>
          <a href="https://www.linkedin.com/in/kie-yokozuka/" target="_blank" rel="noopener" className="flex items-center gap-1">
            <Image src="/images/InBug-White.png" alt="LinkedIn" width={24} height={24} />
            LinkedIn
          </a>
          <a href="mailto:kie.yokozuka@gmail.com" className="flex items-center gap-1"><IconMail /> Email</a>
        </nav>
      </div>
      <div className="text-center text-xs mt-4">© 2025 All rights Reserved to Kie Yokozuka</div>
    </footer>
  );
} 