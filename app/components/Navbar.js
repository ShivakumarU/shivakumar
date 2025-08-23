'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Me', href: '#contact' },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="bg-gray-900 fixed w-full top-0 z-50 border-b-[0.1px] border-gray-500 shadow-[0px_1px_10px_rgba(255,255,255,0.4)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center md:h-16 h-14">
          {/* Logo */}
          <Link href="#home" className="flex items-center">
            <span className="md:text-2xl text-md font-bold text-orange-200">
              🔱 Shiva<span className="text-red-500 ml-2">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                    ${activeSection === item.href.replace('#', '')
                      ? "text-orange-400 before:w-full"
                      : "text-gray-100 hover:text-orange-400 before:w-0"}
                    before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:bg-orange-400 
                    before:transition-all before:duration-600 before:ease-out`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-orange-600"
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-1 pb-1 space-y-1 sm:px-3 bg-gray-800 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 border-b-[0.1px]
                    ${activeSection === item.href.replace('#', '')
                      ? "text-orange-400"
                      : "text-orange-100 hover:text-green-600"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
