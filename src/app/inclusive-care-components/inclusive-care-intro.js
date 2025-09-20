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
<div className="  items-center px-5 pt-10 mb-10">
    <div className=" bg-[linear-gradient(90deg,_#ff00001A,_#ffa5001A,_#ffff001A,_#00ff001A,_#00ffff1A,_#0000ff1A,_#8b00ff1A)]">
            <h1 className="text-[#1f1d1d] text-6xl font-bold drop-shadow-xl text-center pt-5 pb-5"
                style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 300
                }}
            >
                “A Place Where Every Story is Welcome.”
            </h1>
    </div>

            <div className="max-w-4xl mx-auto px-5 pt-3">
                <p className='text-[#0f0b0a] text-lg'
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



                 <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center
                 text-center text-xl text-[#000000] pt-5"
                       style={{
                            fontFamily: '"Quicksand", sans-serif',
                            fontWeight: 500
                        }} >
                    <div className='bg-cyan-700 text-white p-10 rounded-full flex items-center justify-center sm:h-20 md:h-60'>
                        Affirming care for all sexual orientations and gender identities
                    </div>

                    <div className='bg-cyan-700 text-white p-10 rounded-full flex items-center justify-center sm:h-20 md:h-60'>
                        Respect for religious beliefs and personal faith traditions
                    </div>

                    <div className='bg-cyan-700 text-white p-10 rounded-full flex items-center justify-center sm:h-20 md:h-60'>
                        A commitment to listening before assuming
                    </div>

                    <div className='bg-cyan-700 text-white p-10 rounded-full flex items-center justify-center sm:h-20 md:h-60'>
                        A space where you can be your full self
                    </div>

                 </div>
            </div>
            

    );
};
export default Intro;

