"use client";

const IconLinkedIn = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="4" stroke="#4B3B39" strokeWidth="2"/><path d="M7 10v6" stroke="#4B3B39" strokeWidth="2" strokeLinecap="round"/><circle cx="7" cy="7" r="1" fill="#4B3B39"/><path d="M11 16v-3a2 2 0 0 1 4 0v3" stroke="#4B3B39" strokeWidth="2" strokeLinecap="round"/></svg>
);
const IconMail = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#4B3B39" strokeWidth="2"/><path d="M3 7l9 6 9-6" stroke="#4B3B39" strokeWidth="2"/></svg>
);

export default function ContactSection() {
  return (
    <section className="text-center py-8">
      <p className="mb-2 text-lg">Get interested? <span className="font-bold text-xl">Contact Me!</span></p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener" className="flex items-center gap-2 bg-[#4B3B39] text-white rounded-full px-6 py-2 font-semibold justify-center"><IconLinkedIn /> LinkedIn</a>
        <a href="mailto:hello@example.com" className="flex items-center gap-2 bg-[#4B3B39] text-white rounded-full px-6 py-2 font-semibold justify-center"><IconMail /> Email</a>
      </div>
    </section>
  );
} 