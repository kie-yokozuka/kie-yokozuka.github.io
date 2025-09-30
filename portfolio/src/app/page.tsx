import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

// 仮アイコン（SVG）
const IconWork = () => (
  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" stroke="#4B3B39" strokeWidth="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="#4B3B39" strokeWidth="2"/></svg>
);


const works = [
  { src: "/images/TableUp.png", alt: "Table Up" },
  { src: "/images/Remonnect.png", alt: "Remonnect" },
  { src: "/images/FlamingoCafe.png", alt: "Flamingo Cafe Redesign" },
  { src: "/images/MindfulTime.png", alt: "Mindful Time" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCF9F6] text-[#4B3B39]">
      <Header />

      {/* Main */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-8 flex flex-col gap-12">
        {/* Hero */}
        <section className="pt-12 pb-6" id="about">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Hello! I&apos;m Kie and a UI/UX designer.</h1>
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
                <Link href="#">
                {/* <Link href={work.alt === "Table Up" ? "/work/tableup" : work.alt === "Remonnect" ? "/work/remonnect" : "#"}> */}
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
                        <h3 className="text-3xl font-semibold mb-3">Coming Soon</h3>
                        {/* <h3 className="text-3xl font-semibold mb-3">{work.alt}</h3> */}
                        {/* <p className="text-lg opacity-90">Click to view details</p> */}
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
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
