'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

const BabyFooter = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Source+Serif+4:ital,opsz,wght@0,8..60,200;1,8..60,200&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <>


            <ul
              className="flex flex-col text-xs text-gray-500 text-center sm:text-center md:text-start md:flex-row md:justify-center"
              style={{
                fontFamily: '"Quicksand", sans-serif',
                fontWeight: 500
              }}
            >

            <li>
            <Link
                href="/legal"
                className="block px-3 py-2  hover:text-blue-700"
            >
                Legal
            </Link>
            </li>

            <li>
            <Link
                href="/privacy-policy"
                className="block px-3 py-2  hover:text-blue-700"
            >
                Privacy Policy
            </Link>
            </li>
        </ul>
    </>
  );
};

export default BabyFooter;
