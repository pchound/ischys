'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';


const Intro = () => {

    useEffect(() => {
        const link = document.createElement('link');
        link.href =
            'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Source+Serif+4:ital,opsz,wght@0,8..60,200;1,8..60,200&display=swap" rel="stylesheet';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    return (
        <div className="max-w-6xl mx-auto items-center px-5 pt-10 mb-10">
            <h1 className="text-[#88695e] text-3xl font-bold drop-shadow-xl mb-4 text-center"
                style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 300
                }}
            >
                “Anxiety and Depression Don’t Have to Define You.”
            </h1>

            <div className="max-w-4xl mx-auto px-5 pt-3">
                <p className='text-[#0f0b0a]'
                    style={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontWeight: 300
                    }}
                >
If you’re here, you may feel exhausted, hopeless, or like your mind never quiets. You’re not alone—and you’re not weak.
I offer:
                </p>
            </div>

                <div className="max-w-2xl mx-auto px-5 pt-3">
                    <ul className='text-[#0f0b0a]'
                        style={{
                            fontFamily: '"Quicksand", sans-serif',
                            fontWeight: 300
                        }}
                    >
                        <li>• Thorough evaluation of mood, sleep, and energy patterns</li>
                        <li>• Medication options to improve stability and clarity</li>
                        <li>• Holistic supports to help medication work more effectively</li>
                    </ul>
                </div>
            </div>
            

    );
};
export default Intro;

