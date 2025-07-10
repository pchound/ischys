'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';




const ContactIntro = () => {

    useEffect(() => {
        const link = document.createElement('link');
        link.href =
            'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Source+Serif+4:ital,opsz,wght@0,8..60,200;1,8..60,200&display=swap" rel="stylesheet';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    return (
        <div className="max-w-6xl mx-auto items-center pt-10 ">
            <h1 className="text-[#88695e] text-5xl font-bold drop-shadow-xl mb-4 text-center"
                style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 300
                }}
            >
                Ready to start your journey for better mental help?
            </h1>

            <div className="max-w-4xl mx-auto items-center pt-3">
                <p className='text-[#0f0b0a]'
                    style={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontWeight: 300
                    }}
                >
                    Contact stuff goes here. Complicated thing for another day.
                </p>
            </div>
        </div>
    );
};
export default ContactIntro;

