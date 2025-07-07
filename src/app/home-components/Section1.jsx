'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Section1 = () => {
    return (
        <div className="bg-radial from-[#f4e2d8] to-[#ebc295] py-12 px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-screen-xl mx-auto">
                {/* Text on the left */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-black text-3xl md:text-4xl font-bold drop-shadow-xl">
                        1 in 4 teens suffer from depression
                    </h1>
                </div>

                {/* Image on the right */}
                <div className="md:w-1/2">
                    <Image
                        src="/images/sad-teen.jpg"
                        alt="Descriptive alt text"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg mx-auto md:mx-0"
                    />
                </div>
            </div>
        </div>
    );
};

export default Section1;
