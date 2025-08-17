'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About Me', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Me', href: '#contact' },
  ];

  return (
    <nav className="bg-gray-900 fixed w-full top-0 z-50 border-b-[0.1px] border-gray-500 shadow-[0px_1px_10px_rgba(255,255,255,0.4)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center md:h-16 h-12">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="md:text-2xl text-md font-bold text-orange-200">
              🔱 Shiva
                <span className="text-pink-400 ml-2" >
                  .
                </span>

              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block ">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-3 py-2 rounded-md text-sm font-medium text-gray-100 transition-colors duration-200 hover:text-orange-400
                            before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-orange-400 
                            before:translate-y-[0px] before:transition-all before:duration-600 before:ease-out 
                            hover:before:w-full"
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
              className="text-gray-300 hover:text-orange-600 focus:outline-none focus:text-gray-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-1 pb-1 space-y-1 sm:px-3 bg-gray-800 shadow-lg text-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-orange-100 hover:text-green-600 block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 border-b-[0.1px]"
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
