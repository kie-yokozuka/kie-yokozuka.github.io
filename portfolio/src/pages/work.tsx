"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

// 仮アイコン（SVG）
const IconWork = () => (
  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" stroke="#4B3B39" strokeWidth="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="#4B3B39" strokeWidth="2"/></svg>
);
const IconAbout = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#4B3B39" strokeWidth="2"/><path d="M12 16v-4" stroke="#4B3B39" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="8" r="1" fill="#4B3B39"/></svg>
);
const IconLinkedIn = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="4" stroke="#4B3B39" strokeWidth="2"/><path d="M7 10v6" stroke="#4B3B39" strokeWidth="2" strokeLinecap="round"/><circle cx="7" cy="7" r="1" fill="#4B3B39"/><path d="M11 16v-3a2 2 0 0 1 4 0v3" stroke="#4B3B39" strokeWidth="2" strokeLinecap="round"/></svg>
);
const IconMail = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#4B3B39" strokeWidth="2"/><path d="M3 7l9 6 9-6" stroke="#4B3B39" strokeWidth="2"/></svg>
);

const works = [
  { src: "/work1.png", alt: "Work 1" },
  { src: "/work2.png", alt: "Work 2" },
  { src: "/work3.png", alt: "Work 3" },
  { src: "/work4.png", alt: "Work 4" },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCF9F6] text-[#4B3B39]">
      <Header />
      {/* Main */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-8 flex flex-col gap-12">
        {/* Hero */}
        <section className="pt-12 pb-6" id="about">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Hello! I’m Kie and a UI/UX designer.</h1>
          <p className="mb-2 text-lg">Check out my works and say hello<span className="ml-1">👋</span></p>
          <p className="flex items-center gap-2 text-base">
            <span className="inline-block"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#4B3B39" strokeWidth="2"/><path d="M8 12h8" stroke="#4B3B39" strokeWidth="2" strokeLinecap="round"/></svg></span>
            See more detail <a href="#about" className="underline font-semibold">about me</a>
          </p>
        </section>
        {/* Divider */}
        <hr className="border-[#e5d8cf]" />
        {/* My Works */}
        <section id="work">
          <div className="flex items-center gap-2 mb-6">
            <span>{/* アイコンは省略 */}</span>
            <h2 className="text-2xl font-bold">My Works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {works.map((work, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-white shadow-sm flex items-center justify-center aspect-[4/3]">
                {/* 仮画像: public/にwork1.png等を後で追加 */}
                <div className="w-full h-full flex items-center justify-center bg-[#e5d8cf]">
                  <span className="text-[#b6a89e] text-lg">Work Image</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Divider */}
        <hr className="border-[#e5d8cf]" />
        {/* Contact */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
} 