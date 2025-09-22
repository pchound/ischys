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
<div
  className=""
             >

           <br></br>
           
        <div className="max-w-6xl mx-auto items-center px-5 p-10 mb-10 bg-white border-4 border-blue-950 border-radius: rounded-xl">
            <h1 className="text-[#1d51c2] text-5xl font-bold drop-shadow-xl mb-4 text-center"
                style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 300
                }}
            >
                “Supporting Every Mind, Every Way.”
            </h1>

                <Image
                src="/autism.png"
                alt="Autism"
                width={200}
                height={200}
                className="mx-auto w-40   rounded-full"
                />


            <div className="max-w-4xl mx-auto px-5 pt-3 text-xl">
                <p className='text-[#0f0b0a]'
                    style={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontWeight: 300
                    }}
                >
Autism and neurodivergence aren’t things to “fix”—they’re ways of experiencing the world. My role is to support mental health in a way that respects your strengths, challenges, and sensory needs.
This includes:
                </p>
            </div>

                <div className="max-w-2xl mx-auto px-5 pt-3">
                    <ul className='text-[#0f0b0a]'
                        style={{
                            fontFamily: '"Quicksand", sans-serif',
                            fontWeight: 300
                        }}
                    >
                        <li>• Tailored medication plans for co-occurring conditions (anxiety, ADHD, depression)</li>
                        <li>• Patience and flexibility in communication style</li>
                        <li>• Collaboration with families, educators, and therapists</li>
                    </ul>
                </div>
            </div>
  
</div>
    );
};
export default Intro;

