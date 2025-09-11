'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Load Google Fonts (Libre Bodoni and Bodoni Moda)
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Libre+Bodoni:ital,wght@0,400..700;1,400..700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // Close Services on outside click
  useEffect(() => {
    const onClick = (e) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target)) setServicesOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  // Close menus on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // If main mobile menu closes, close Services too
  useEffect(() => {
    if (!menuOpen) setServicesOpen(false);
  }, [menuOpen]);

  return (
    <nav className="bg-white border-gray-200" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pt-10">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span
            className="text-center text-2xl font-semibold whitespace-nowrap dark:text-black"
            style={{ fontFamily: '"Libre Bodoni", serif' }}
          >
                    <Image
                      src="/logo2.jpg"
                      alt="Ischys Wellness"
                      width={400}
                      height={400}
                      className="mx-auto lg:w-72 "
                    />
          </span>
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
          aria-controls="primary-nav"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Collapsible nav */}
        <div
          id="primary-nav"
          style={{ fontFamily: '"Libre Bodoni", serif' }}
          className={`
            w-full md:w-auto overflow-hidden md:overflow-visible transition-all duration-500 ease-in-out
            ${menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
            md:max-h-full md:opacity-100 md:block
          `}
        >
          <ul className="md:overflow-visible flex flex-col md:flex-row p-4 md:p-0 mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-8 bg-gray-200 md:bg-white border border-gray-300 md:border-0 rounded-lg">
            <li>
              <Link href="/" className="block px-3 py-2 text-lg text-black hover:text-blue-700 hover:bg-gray-300 rounded">
                Home
              </Link>
            </li>

            <li>
              <Link href="/meet-the-team" className="block px-3 py-2 text-lg text-black hover:text-blue-700 hover:bg-gray-300 rounded">
                Meet Our Team
              </Link>
            </li>

            {/* Services dropdown */}
            <li ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                className="cursor-pointer flex items-center justify-between w-full md:w-auto px-3 py-2 text-left text-lg text-black hover:text-blue-700 hover:bg-gray-300 rounded md:hover:bg-transparent "
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
              >
                <span>Services</span>
                <svg
                  className={`ml-2 h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Mobile: inline; Desktop: absolute dropdown */}
              <div
                id="services-menu"
                className={`
                  ${servicesOpen ? 'block' : 'hidden'}
                   md:absolute md:top-full md:left-0 md:mt-2 md:w-64 md:rounded-lg md:border md:border-gray-200 md:bg-white md:shadow-lg md:p-2 md:z-50
                `}
                role="menu"
                aria-label="Services submenu"
              >
                <ul className="flex flex-col ">
                    <li>
                    <Link
                      href="/services"
                      className="block px-3 py-2 text-base text-gray-800 rounded hover:bg-gray-100"
                      role="menuitem"
                      onClick={() => setMenuOpen(false)}
                    >
                      General
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/anxiety"
                      className="block px-3 py-2 text-base text-gray-800 rounded hover:bg-gray-100"
                      role="menuitem"
                      onClick={() => setMenuOpen(false)}
                    >
                      Anxiety & Mood Care
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/therapy"
                      className="block px-3 py-2 text-base text-gray-800 rounded hover:bg-gray-100"
                      role="menuitem"
                      onClick={() => setMenuOpen(false)}
                    >
                      Depression
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/therapy"
                      className="block px-3 py-2 text-base text-gray-800 rounded hover:bg-gray-100"
                      role="menuitem"
                      onClick={() => setMenuOpen(false)}
                    >
                      Relationships
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/therapy"
                      className="block px-3 py-2 text-base text-gray-800 rounded hover:bg-gray-100"
                      role="menuitem"
                      onClick={() => setMenuOpen(false)}
                    >
                      Addiction
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/couples"
                      className="block px-3 py-2 text-base text-gray-800 rounded hover:bg-gray-100"
                      role="menuitem"
                      onClick={() => setMenuOpen(false)}
                    >
                      Trauma Recovery Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/anxiety"
                      className="block px-3 py-2 text-base text-gray-800 rounded hover:bg-gray-100"
                      role="menuitem"
                      onClick={() => setMenuOpen(false)}
                    >
                      Medication Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/trauma-emdr"
                      className="block px-3 py-2 text-base text-gray-800 rounded hover:bg-gray-100"
                      role="menuitem"
                      onClick={() => setMenuOpen(false)}
                    >
                      Emotional Coaching
                    </Link>
                    <li>
                    <Link
                      href="/services/therapy"
                      className="block px-3 py-2 text-base text-gray-800 rounded hover:bg-gray-100"
                      role="menuitem"
                      onClick={() => setMenuOpen(false)}
                    >
                      Autism & Neurodiversity
                    </Link>
                    <li>
                    <Link
                      href="/services/therapy"
                      className="block px-3 py-2 text-base text-gray-800 rounded hover:bg-gray-100"
                      role="menuitem"
                      onClick={() => setMenuOpen(false)}
                    >
                      Inclusive Care (LGBTQ + LDS + Everyone)
                    </Link>
                  </li>
                  </li>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link href="/about" className="block px-3 py-2 text-lg text-black hover:text-blue-700 hover:bg-gray-300 rounded">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block px-3 py-2 text-lg text-black hover:text-blue-700 hover:bg-gray-300 rounded">
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
