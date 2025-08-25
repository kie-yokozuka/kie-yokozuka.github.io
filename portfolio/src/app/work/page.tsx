"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// 仮アイコン（SVG）
const IconWork = () => (
  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" stroke="#4B3B39" strokeWidth="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="#4B3B39" strokeWidth="2"/></svg>
);
const IconLinkedIn = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="4" stroke="#4B3B39" strokeWidth="2"/><path d="M7 10v6" stroke="#4B3B39" strokeWidth="2" strokeLinecap="round"/><circle cx="7" cy="7" r="1" fill="white"/><path d="M11 16v-3a2 2 0 0 1 4 0v3" stroke="#4B3B39" strokeWidth="2" strokeLinecap="round"/></svg>
);
const IconMail = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#4B3B39" strokeWidth="2"/><path d="M3 7l9 6 9-6" stroke="#4B3B39" strokeWidth="2"/></svg>
);

const works = [
  { src: "/images/TableUp.png", alt: "Table Up" },
  { src: "/images/Remonnect.png", alt: "Remonnect" },
  { src: "/images/FlamingoCafe.png", alt: "Flamingo Cafe Redesign" },
  { src: "/images/MindfulTime.png", alt: "Mindful Time" },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCF9F6] text-[#4B3B39]">
      <Header />

      {/* Main */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-8 flex flex-col gap-12">
        {/* Hero */}
        <section className="pt-12 pb-6" id="about">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Hello! I'm Kie and a UI/UX designer.</h1>
          <p className="mb-2 text-lg">Check out my works and say hello<span className="ml-1">👋</span></p>
          <p className="flex items-center gap-2 text-base">
            <span className="inline-block"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#4B3B39" strokeWidth="2"/><path d="M8 12h8" stroke="#4B3B39" strokeWidth="2" strokeLinecap="round"/></svg></span>
            See more detail <Link href="/about" className="underline font-semibold">about me</Link>
          </p>
        </section>

        {/* Divider */}
        <hr className="border-[#e5d8cf]" />

        {/* My Works */}
        <section id="work">
          <div className="flex items-center gap-2 mb-6">
            <span><IconWork /></span>
            <h2 className="text-2xl font-bold">My Works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {works.map((work, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <Link href={work.alt === "Table Up" ? "/work/tableup" : work.alt === "Remonnect" ? "/work/remonnect" : "#"}>
                  <div className="relative aspect-[4/3] flex items-center justify-center group cursor-pointer">
                    <Image 
                      src={work.src} 
                      alt={work.alt} 
                      width={420} 
                      height={500} 
                      style={{width: "auto", height: "auto"}}
                      className="object-cover w-full h-full"
                    />
                    {/* ホバーオーバーレイ */}
                    <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center">
                        <h3 className="text-3xl font-semibold mb-3">{work.alt}</h3>
                        <p className="text-lg opacity-90">Click to view details</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <hr className="border-[#e5d8cf]" />

        {/* Contact */}
        <section className="text-center py-8">
          <p className="mb-2 text-lg">Get interested? <span className="font-bold text-xl">Contact Me!</span></p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener" className="flex items-center gap-2 bg-[#4B3B39] text-white rounded-full px-6 py-2 font-semibold justify-center"><IconLinkedIn /> LinkedIn</a>
            <a href="mailto:hello@example.com" className="flex items-center gap-2 bg-[#4B3B39] text-white rounded-full px-6 py-2 font-semibold justify-center"><IconMail /> Email</a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 