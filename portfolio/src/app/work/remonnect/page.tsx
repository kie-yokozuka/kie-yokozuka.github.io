"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

// アイコンコンポーネント
const IconContents = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#4B3B39" strokeWidth="2"/>
    <polyline points="14,2 14,8 20,8" stroke="#4B3B39" strokeWidth="2"/>
    <line x1="16" y1="13" x2="8" y2="13" stroke="#4B3B39" strokeWidth="2"/>
    <line x1="16" y1="17" x2="8" y2="17" stroke="#4B3B39" strokeWidth="2"/>
    <polyline points="10,9 9,9 8,9" stroke="#4B3B39" strokeWidth="2"/>
  </svg>
);

const IconOverview = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" stroke="#4B3B39" strokeWidth="2"/>
    <path d="m21 21-4.35-4.35" stroke="#4B3B39" strokeWidth="2"/>
  </svg>
);

const IconProblem = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="#4B3B39" strokeWidth="2"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="#4B3B39" strokeWidth="2"/>
    <line x1="12" y1="17" x2="12.01" y2="17" stroke="#4B3B39" strokeWidth="2"/>
  </svg>
);

const IconSolution = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path d="M9 12l2 2 4-4" stroke="#4B3B39" strokeWidth="2"/>
    <path d="M21 12c-1 0-2.4-.4-3.5-1.5S16 8 16 7s.4-2.4 1.5-3.5S20 2 21 2s2.4.4 3.5 1.5S26 6 26 7s-.4 2.4-1.5 3.5S22 12 21 12z" stroke="#4B3B39" strokeWidth="2"/>
  </svg>
);

const IconPersona = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#4B3B39" strokeWidth="2"/>
    <circle cx="12" cy="7" r="4" stroke="#4B3B39" strokeWidth="2"/>
  </svg>
);

const IconSiteMap = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <polygon points="1,6 1,22 8,18 16,22 23,18 23,2 16,6 8,2 1,6" stroke="#4B3B39" strokeWidth="2"/>
    <line x1="8" y1="2" x2="8" y2="18" stroke="#4B3B39" strokeWidth="2"/>
    <line x1="16" y1="6" x2="16" y2="22" stroke="#4B3B39" strokeWidth="2"/>
  </svg>
);

const IconUserFlow = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path d="M9 18l6-6-6-6" stroke="#4B3B39" strokeWidth="2"/>
  </svg>
);

const IconDesignSystem = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3" stroke="#4B3B39" strokeWidth="2"/>
    <path d="M12 1v6m0 6v6" stroke="#4B3B39" strokeWidth="2"/>
    <path d="M4.22 4.22l4.24 4.24m6.28 6.28l4.24 4.24" stroke="#4B3B39" strokeWidth="2"/>
    <path d="M1 12h6m6 0h6" stroke="#4B3B39" strokeWidth="2"/>
    <path d="M4.22 19.78l4.24-4.24m6.28-6.28l4.24-4.24" stroke="#4B3B39" strokeWidth="2"/>
  </svg>
);

const IconMockup = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="#4B3B39" strokeWidth="2"/>
    <line x1="8" y1="21" x2="16" y2="21" stroke="#4B3B39" strokeWidth="2"/>
    <line x1="12" y1="17" x2="12" y2="21" stroke="#4B3B39" strokeWidth="2"/>
  </svg>
);

const IconTesting = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path d="M9 12l2 2 4-4" stroke="#4B3B39" strokeWidth="2"/>
    <path d="M21 12c-1 0-2.4-.4-3.5-1.5S16 8 16 7s.4-2.4 1.5-3.5S20 2 21 2s2.4.4 3.5 1.5S26 6 26 7s-.4 2.4-1.5 3.5S22 12 21 12z" stroke="#4B3B39" strokeWidth="2"/>
  </svg>
);

const IconTakeaway = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="#4B3B39" strokeWidth="2"/>
  </svg>
);

const IconMembers = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#4B3B39" strokeWidth="2"/>
    <circle cx="9" cy="7" r="4" stroke="#4B3B39" strokeWidth="2"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#4B3B39" strokeWidth="2"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#4B3B39" strokeWidth="2"/>
  </svg>
);

const IconRole = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#4B3B39" strokeWidth="2"/>
    <circle cx="12" cy="7" r="4" stroke="#4B3B39" strokeWidth="2"/>
  </svg>
);

const IconDuration = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="#4B3B39" strokeWidth="2"/>
    <polyline points="12,6 12,12 16,14" stroke="#4B3B39" strokeWidth="2"/>
  </svg>
);

const IconPlatform = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="#4B3B39" strokeWidth="2"/>
    <line x1="8" y1="21" x2="16" y2="21" stroke="#4B3B39" strokeWidth="2"/>
    <line x1="12" y1="17" x2="12" y2="21" stroke="#4B3B39" strokeWidth="2"/>
  </svg>
);

const IconTools = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="#4B3B39" strokeWidth="2"/>
  </svg>
);

const IconMethods = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3" stroke="#4B3B39" strokeWidth="2"/>
    <path d="M12 1v6m0 6v6" stroke="#4B3B39" strokeWidth="2"/>
    <path d="M4.22 4.22l4.24 4.24m6.28 6.28l4.24 4.24" stroke="#4B3B39" strokeWidth="2"/>
    <path d="M1 12h6m6 0h6" stroke="#4B3B39" strokeWidth="2"/>
    <path d="M4.22 19.78l4.24-4.24m6.28-6.28l4.24-4.24" stroke="#4B3B39" strokeWidth="2"/>
  </svg>
);

export default function RemonnectPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCF9F6] text-[#4B3B39]">
      <Header />

      {/* Main */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-8 flex flex-col gap-16">
        
        {/* Hero Section */}
        <section className="pt-12 pb-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Remonnect</h1>
              <p className="text-lg text-gray-600">A social networking app for remote workers</p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-64 h-96 bg-gray-200 rounded-3xl transform rotate-12 opacity-60"></div>
                <div className="absolute -bottom-4 -right-4 w-64 h-96 bg-gray-200 rounded-3xl transform -rotate-12 opacity-60"></div>
                <div className="relative z-10 w-64 h-96 bg-gray-300 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contents */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <IconContents />
            <h2 className="text-2xl font-bold">Contents</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {[
              "Overview", "Problem", "Solution", "Persona", "Site map",
              "User flow", "Design system", "Mockup", "Testing", "Key takeaway"
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Overview */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <IconOverview />
            <h2 className="text-2xl font-bold">Overview</h2>
          </div>
          <div className="space-y-4 mb-8">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Remonnect is a social networking app for remote workers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Users can connect with other remote workers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Users can join communities and share experiences.</span>
              </li>
            </ul>
            <p>Users can find networking opportunities and build professional relationships.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { icon: <IconMembers />, title: "Members", value: "3 members" },
              { icon: <IconRole />, title: "Role", value: "UI/UX designer" },
              { icon: <IconDuration />, title: "Duration", value: "4 weeks" },
              { icon: <IconPlatform />, title: "Platform", value: "Mobile app, iOS/Android" },
              { icon: <IconTools />, title: "Tools", value: "Figma, Miro, Lottie, UX.info" },
              { icon: <IconMethods />, title: "Methods", value: "User interview, UI/UX Research, Design Sprint, A/B testing" }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  {item.icon}
                  <span className="font-semibold text-sm">{item.title}</span>
                </div>
                <p className="text-sm text-gray-600">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Problem */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <IconProblem />
            <h2 className="text-2xl font-bold">Problem</h2>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              Many users experience frustration when trying to make reservations across different websites and apps. 
              This often involves lengthy and confusing processes that can be time-consuming and inefficient.
            </p>
          </div>
        </section>

        {/* Solution */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <IconSolution />
            <h2 className="text-2xl font-bold">Solution</h2>
          </div>
          <div className="space-y-4 mb-8">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Search by area, cuisine, or rating.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Easily check real-time table status.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Choose to reserve a table or join a virtual waitlist.</span>
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-3"></div>
              <p className="text-sm text-center">Community Discovery</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-3"></div>
              <p className="text-sm text-center">Profile & Networking</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-3"></div>
              <p className="text-sm text-center">Messaging & Events</p>
            </div>
          </div>
        </section>

        {/* Persona */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <IconPersona />
            <h2 className="text-2xl font-bold">Persona</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-3xl font-bold text-green-600 mb-4">persona</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">Mia Mitchell</h4>
                  <p className="text-gray-600">International Student</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Background</h5>
                  <p className="text-sm text-gray-700">A remote worker who values professional connections but struggles with isolation and finding networking opportunities.</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Goals</h5>
                  <p className="text-sm text-gray-700">Connect with other remote workers, build professional relationships, and find networking opportunities.</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Frustrations</h5>
                  <p className="text-sm text-gray-700">Feeling isolated while working remotely, difficulty finding relevant networking events, and lack of professional community.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <div className="relative">
                  <div className="absolute -top-2 -right-2 w-20 h-12 border-2 border-dashed border-gray-400 rounded-full flex items-center justify-center">
                    <span className="text-xs text-gray-600">Student</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Site Map */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <IconSiteMap />
            <h2 className="text-2xl font-bold">Site map</h2>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Site Map Diagram</p>
            </div>
          </div>
        </section>

        {/* User Flow */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <IconUserFlow />
            <h2 className="text-2xl font-bold">User flow</h2>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">User Flow Diagrams</p>
            </div>
          </div>
        </section>

        {/* Design System */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <IconDesignSystem />
            <h2 className="text-2xl font-bold">Design system</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Color Palette</h3>
              <div className="grid grid-cols-7 gap-2">
                {['#3B82F6', '#808080', '#10B981', '#F59E0B', '#8B5CF6', '#EF4444', '#06B6D4'].map((color, i) => (
                  <div key={i} className="w-8 h-8 rounded" style={{backgroundColor: color}}></div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Typography</h3>
              <div className="space-y-2">
                <p className="text-2xl font-bold">Heading 1</p>
                <p className="text-xl font-semibold">Heading 2</p>
                <p className="text-lg">Body Text</p>
                <p className="text-sm">Small Text</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Components</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">Primary Button</button>
                  <button className="border border-gray-300 px-4 py-2 rounded">Secondary Button</button>
                </div>
                <input type="text" placeholder="Input field" className="border border-gray-300 px-3 py-2 rounded w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Mockup */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <IconMockup />
            <h2 className="text-2xl font-bold">Mockup</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {['Splash Screen', 'Login/Signup', 'Home Feed', 'Profile'].map((title, i) => (
              <div key={i} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-3"></div>
                <p className="text-sm text-center">{title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testing */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <IconTesting />
            <h2 className="text-2xl font-bold">Testing</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Usability Evaluation & Accessibility",
                content: "WCAG standard compliance, iOS/Android standard fit, several bugs to update."
              },
              {
                title: "Concept Testing",
                content: "Need to understand user wants and concerns about sharing personal information."
              },
              {
                title: "User Interview",
                content: "Need to understand user wants and concerns about sharing personal information."
              },
              {
                title: "Survey",
                content: "Need to understand user wants and concerns about sharing personal information."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Takeaway */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <IconTakeaway />
            <h2 className="text-2xl font-bold">Key takeaway</h2>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Keep consistent colors, images, and fonts.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Avoid complicated wording.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Keep it simple and user-friendly.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center py-8">
          <hr className="border-[#e5d8cf] mb-8" />
          <p className="mb-2 text-lg">Get Impressed? <span className="font-bold text-xl">Contact Me!</span></p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener" className="flex items-center gap-2 bg-[#4B3B39] text-white rounded-full px-6 py-2 font-semibold justify-center">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="4" stroke="white" strokeWidth="2"/>
                <path d="M7 10v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="7" cy="7" r="1" fill="white"/>
                <path d="M11 16v-3a2 2 0 0 1 4 0v3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              LinkedIn
            </a>
            <a href="mailto:hello@example.com" className="flex items-center gap-2 bg-[#4B3B39] text-white rounded-full px-6 py-2 font-semibold justify-center">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="white" strokeWidth="2"/>
                <path d="M3 7l9 6 9-6" stroke="white" strokeWidth="2"/>
              </svg>
              Email
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 