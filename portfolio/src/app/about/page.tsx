"use client";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";

// Icon Components
const IconFire = () => (
  <span 
    className="material-icons" 
    style={{ color: '#4B3B39', fontSize: '24px' }}
  >
    local_fire_department
  </span>
);

const IconCode = () => (
  <span 
    className="material-icons" 
    style={{ color: '#4B3B39', fontSize: '24px' }}
  >
    code
  </span>
);

const IconGraduation = () => (
  <span 
    className="material-icons" 
    style={{ color: '#4B3B39', fontSize: '24px' }}
  >
    school
  </span>
);

const IconTree = () => (
  <span 
    className="material-icons" 
    style={{ color: '#4B3B39', fontSize: '24px' }}
  >
    beach_access
  </span>
);

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCF9F6] text-[#4B3B39]">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[640px] overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/Profile_About.jpg"
            alt="Kie Yokozuka"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 70%' }}
            priority
          />
          
          {/* White Overlay */}
          <div 
            className="absolute inset-0" 
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
          ></div>
          
          <div className="relative h-full max-w-5xl mx-auto px-4 sm:px-8 flex items-center justify-center">
            {/* Text Content - Right aligned with compact width */}
            <div className="text-right mr-0 ml-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-2 text-[#4B3B39]">Kie Yokozuka</h1>
              <p className="text-xl md:text-2xl text-[#4B3B39]">UI/UX Designer</p>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="bg-[#FCF9F6] py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Hi! I&apos;m Kie, a UI/UX designer!
            </h2>
            
            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* With passions for... */}
              <div className="bg-[#FCF9F6] border border-[#4B3B39] rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <IconFire />
                  <h3 className="text-xl font-semibold">With passions for ...</h3>
                </div>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#4B3B39] rounded-full"></span>
                    Usability
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#4B3B39] rounded-full"></span>
                    Accessibility
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#4B3B39] rounded-full"></span>
                    Prototyping
                  </li>
                </ul>
              </div>

              {/* With a web development background */}
              <div className="bg-[#FCF9F6] border border-[#4B3B39] rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <IconCode />
                  <h3 className="text-xl font-semibold">With a web development background</h3>
                </div>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#4B3B39] rounded-full"></span>
                    4+ years of experience
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#4B3B39] rounded-full"></span>
                    HTML, CSS, JavaScript, React
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#4B3B39] rounded-full"></span>
                    PHP, MySQL
                  </li>
                </ul>
              </div>

              {/* Education & Certification */}
              <div className="bg-[#FCF9F6] border border-[#4B3B39] rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <IconGraduation />
                  <h3 className="text-xl font-semibold">Education & Certification</h3>
                </div>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#4B3B39] rounded-full"></span>
                    Google UX Certification
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#4B3B39] rounded-full"></span>
                    CICCC UI/UX Program
                  </li>
                </ul>
              </div>

              {/* Outside of work */}
              <div className="bg-[#FCF9F6] border border-[#4B3B39] rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <IconTree />
                  <h3 className="text-xl font-semibold">Outside of work</h3>
                </div>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#4B3B39] rounded-full"></span>
                    Traveling ✈️
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#4B3B39] rounded-full"></span>
                    Snowboarding 🏂
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
} 