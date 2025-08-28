"use client";
import Image from "next/image";


const IconMail = () => (
  <span 
    className="material-icons" 
    style={{ 
      color: '#FFFFFF', 
      fontSize: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    mail
  </span>
);

export default function ContactSection() {
  return (
    <section className="text-center py-8">
      <p className="mb-2 text-lg">Get interested? <span className="font-bold text-xl">Contact Me!</span></p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
        <a 
          href="https://www.linkedin.com/in/kie-yokozuka/" 
          target="_blank" 
          rel="noopener" 
          className="group flex items-center gap-2 bg-[#4B3B39] text-white rounded-full px-6 py-2 font-semibold justify-center transition-all duration-300 hover:bg-[#5d4a47] hover:scale-105 hover:shadow-lg transform active:scale-95"
        >
          <span className="transition-transform duration-300 group-hover:scale-110">
            <Image src="/images/InBug-White.png" alt="LinkedIn" width={24} height={24} />
          </span>
          LinkedIn
        </a>
        <a 
          href="mailto:kie.yokozuka@gmail.com" 
          className="group flex items-center gap-2 bg-[#4B3B39] text-white rounded-full px-6 py-2 font-semibold justify-center transition-all duration-300 hover:bg-[#5d4a47] hover:scale-105 hover:shadow-lg transform active:scale-95"
        >
          <span className="transition-transform duration-300 group-hover:scale-110">
            <IconMail />
          </span>
          Email
        </a>
      </div>
    </section>
  );
} 