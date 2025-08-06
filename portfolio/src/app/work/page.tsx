"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";

// 仮アイコン（SVG）
const IconWork = () => (
  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" stroke="#4B3B39" strokeWidth="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="#4B3B39" strokeWidth="2"/></svg>
);

const works = [
  { src: "/work1.png", alt: "Work 1", title: "Project 1", description: "UI/UX Design for mobile app" },
  { src: "/work2.png", alt: "Work 2", title: "Project 2", description: "Website redesign project" },
  { src: "/work3.png", alt: "Work 3", title: "Project 3", description: "E-commerce platform design" },
  { src: "/work4.png", alt: "Work 4", title: "Project 4", description: "Brand identity design" },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCF9F6] text-[#4B3B39]">
      <Header />
      
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-8 flex flex-col gap-12 py-8">
        {/* Hero */}
        <section className="pt-12 pb-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">My Portfolio</h1>
          <p className="mb-2 text-lg">Check out my works and say hello<span className="ml-1">👋</span></p>
          <p className="flex items-center gap-2 text-base">
            <span className="inline-block">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="#4B3B39" strokeWidth="2"/>
                <path d="M8 12h8" stroke="#4B3B39" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            See more detail <Link href="/about" className="underline font-semibold">about me</Link>
          </p>
        </section>

        {/* Divider */}
        <hr className="border-[#e5d8cf]" />

        {/* My Works */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <IconWork />
            <h2 className="text-2xl font-bold">My Works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {works.map((work, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="aspect-[4/3] bg-[#e5d8cf] flex items-center justify-center">
                  <span className="text-[#b6a89e] text-lg">Work Image {i + 1}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                  <p className="text-gray-600">{work.description}</p>
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