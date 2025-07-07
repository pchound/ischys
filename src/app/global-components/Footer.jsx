'use client';
import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <p className="text-md text-gray-500 text-center pt-7 pb-7">
            &copy; {currentYear} All rights reserved
        </p>
    );
};

export default Footer;
