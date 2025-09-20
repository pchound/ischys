'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';

const Section1 = () => {

        useEffect(() => {
            AOS.init({ once: true });
        }, []);
    
    
        useEffect(() => {
            const link = document.createElement('link');
            link.href =
                'https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe:ital@0;1&display=swap" rel="stylesheet';
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }, []);

    return (
        
        <div data-aos="fade" data-aos-duration="1000" className="flex flex-col items-center justify-center z-2 ml-5 mr-5 pt-10" >
            <p className="text-4xl text-gray-500 md:w-4xl text-center"
            style={{ fontFamily: '"Alumni Sans Pinstripe", sans-serif',
                fontWeight: 700
             }}>
                Not sure where to start? Take the free quiz to identify your top challenges and get personalized recommendations.               
            </p>
            <br></br>
        <Link href="/quiz">
            <button className="bg-white text-black font-semibold py-2 px-6 rounded-xl shadow hover:bg-gray-100 transition cursor-pointer">
                Book Now
            </button>
        </Link>
        </div>
        
    );
};

export default Section1;
