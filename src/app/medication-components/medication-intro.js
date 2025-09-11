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
                “The Right Medication Can Change Everything.”
            </h1>

            <div className="max-w-4xl mx-auto px-5 pt-3">
                <p className='text-[#0f0b0a]'
                    style={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontWeight: 300
                    }}
                >
Therapy is valuable—but sometimes it’s not enough on its own.
My focus is personalized medication management to help stabilize your mood, improve daily function, and give you a foundation for deeper healing.<br></br><br></br>

What you can expect:
                </p>
            </div>

                <div className="max-w-2xl mx-auto px-5 pt-3">
                    <ul className='text-[#0f0b0a]'
                        style={{
                            fontFamily: '"Quicksand", sans-serif',
                            fontWeight: 300
                        }}
                    >
                        <li>• Careful evaluation of symptoms and history</li>
                        <li>• Collaborative decision-making (you have a say)</li>
                        <li>• Monitoring and adjustments as needed</li>
                        <li>• Education so you feel informed and confident</li>
                    </ul>
                </div>
            </div>
            

    );
};
export default Intro;

