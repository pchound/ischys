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
                “A Place Where Every Story is Welcome.”
            </h1>

            <div className="max-w-4xl mx-auto px-5 pt-3">
                <p className='text-[#0f0b0a]'
                    style={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontWeight: 300
                    }}
                >
Whether you identify as LGBTQ+, are part of the LDS faith, both, or neither—you belong here.
I believe healing happens in an environment of respect, safety, and understanding. My role is not to judge your values, but to honor your humanity.
This means:
                </p>
            </div>

                <div className="max-w-2xl mx-auto px-5 pt-3">
                    <ul className='text-[#0f0b0a]'
                        style={{
                            fontFamily: '"Quicksand", sans-serif',
                            fontWeight: 300
                        }}
                    >
                        <li>• Affirming care for all sexual orientations and gender identities</li>
                        <li>• Respect for religious beliefs and personal faith traditions</li>
                        <li>• A commitment to listening before assuming</li>
                        <li>• A space where you can be your full self</li>
                    </ul>
                </div>
            </div>
            

    );
};
export default Intro;

