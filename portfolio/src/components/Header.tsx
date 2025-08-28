"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const IconMail = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" stroke="white" strokeWidth="2"/><path d="M3 7l9 6 9-6" stroke="white" strokeWidth="2"/></svg>
);

export default function Header() {
  const pathname = usePathname();

  const getLinkStyle = (href: string) => {
    let isActive = false;
    
    if (href === "/") {
      // Workリンクの場合、/（TOPページ）または/work/で始まるパスでアクティブ
      isActive = pathname === "/" || (pathname ? pathname.startsWith("/work/") : false);
    } else {
      // その他のリンクは完全一致
      isActive = pathname === href;
    }
    
    return isActive 
      ? "bg-white text-[#4B3B39] font-semibold rounded-full px-4 py-1 mr-1"
      : "hover:underline";
  };

  return (
    <header className="bg-[#4B3B39] text-white px-4 sm:px-12 py-4 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl tracking-wide">
        <Image src="/images/logo.png" alt="Logo" width={160} height={300} style={{width: "auto"}} />
      </Link>
      <nav className="flex items-center gap-2 sm:gap-4">
        <Link href="/" className={getLinkStyle("/")}>Work</Link>
        <Link href="/about" className={getLinkStyle("/about")}>About</Link>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener" className="p-2 hover:bg-[#6d5c57] rounded-full">
          <Image src="/images/InBug-White.png" alt="LinkedIn" width={24} height={24} />
        </a>
        <a href="mailto:hello@example.com" className="p-2 hover:bg-[#6d5c57] rounded-full"><IconMail /></a>
      </nav>
    </header>
  );
} 