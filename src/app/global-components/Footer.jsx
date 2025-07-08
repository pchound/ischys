'use client';
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>

            <p className="text-md text-gray-500 text-center">
                (123) 456-7890
            </p>

            <p className="text-md text-gray-500 text-center">
                123 Maple Street. Anytown, PA 17101
            </p>


            <p className="text-sm text-gray-500 text-center pt-4 pb-2">
                &copy; {currentYear} All rights reserved
            </p>

        </div>
    );
};

export default Footer;
