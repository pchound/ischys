'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Load Google Fonts (Libre Bodoni and Bodoni Moda)
    useEffect(() => {
        const link = document.createElement('link');
        link.href =
            'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Libre+Bodoni:ital,wght@0,400..700;1,400..700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    return (

        <nav className="bg-white border-gray-200" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pt-10 ">
                {/* Logo with Libre Bodoni */}
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span
                        className="text-center text-2xl font-semibold whitespace-nowrap dark:text-black"
                        style={{ fontFamily: '"Libre Bodoni", serif' }}
                    >
                        ISCHYS <br /> WELLNESS
                    </span>
                </a>

                {/* Mobile menu toggle */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
                >
                    <span className="sr-only">Toggle menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>

                {/* Dropdown menu (animated) */}
                <div
                    style={{ fontFamily: '"Libre Bodoni", serif' }}
                    className={`
            w-full md:w-auto overflow-hidden md:overflow-visible transition-all duration-500 ease-in-out
            ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} 
            md:max-h-full md:opacity-100 md:block
          `}
                >
                    <ul className="flex flex-col md:flex-row p-4 md:p-0 mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-8 bg-gray-200 md:bg-white border border-gray-300 md:border-0 rounded-lg">
                        <li><Link href="/" className="block px-3 py-2 text-lg text-black hover:text-blue-700 hover:bg-gray-300 rounded">Home</Link></li>
                        <li><Link href="/meet-the-team" className="block px-3 py-2 text-lg text-black hover:text-blue-700 hover:bg-gray-300 rounded">Meet Our Team</Link></li>
                        <li><Link href="/about" className="block px-3 py-2 text-lg text-black hover:text-blue-700 hover:bg-gray-300 rounded">About</Link></li>
                        <li><Link href="/contact" className="block px-3 py-2 text-lg text-black hover:text-blue-700 hover:bg-gray-300 rounded">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
