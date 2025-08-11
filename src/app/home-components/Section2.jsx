'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const Section2 = () => {

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
        <div data-aos="fade" data-aos-duration="1000" className="flex items-center justify-center z-2 ml-5 mr-5" >
            <p className="text-4xl text-gray-500 md:w-4xl text-center"
            style={{ fontFamily: '"Alumni Sans Pinstripe", sans-serif',
                fontWeight: 700
             }}>
                <br></br><br></br>
                Healing isn’t just about medication. It’s about safety, trust, and care that understands your whole story.
                With years in nursing, trauma-informed training, and a mission fueled by my own experiences with healing, I help you find relief without feeling rushed, judged, or dismissed.
                <br></br><br></br><br></br>
            </p>
        </div>
    );
};

export default Section2;
