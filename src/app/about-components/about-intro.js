'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';




const AboutIntro = () => {

    useEffect(() => {
        const link = document.createElement('link');
        link.href =
            'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Source+Serif+4:ital,opsz,wght@0,8..60,200;1,8..60,200&display=swap" rel="stylesheet';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    return (
        <div className="max-w-6xl mx-auto items-center px-5 pt-10 ">
            <h1 className="text-[#88695e] text-5xl font-bold drop-shadow-xl mb-4 text-center"
                style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 300
                }}
            >
                Mission Statement
            </h1>

            <div className="max-w-4xl mx-auto items-center px-5 pt-3">
                <p className='text-[#0f0b0a]'
                    style={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontWeight: 300
                    }}
                >
                   Our mission is to provide compassionate, whole-person, and inclusive mental health care that blends evidence-based medicine with natural approaches. We are dedicated to expanding healing for Utah’s veterans, families, and communities most impacted by social determinants of health—such as  addiction and mental wellbeing stigma—through personalized, life-changing treatment that restores hope, fosters resilience, and delivers innovative care in a supportive and healing environment. 
                </p>

<br></br><br></br>


            <h1 className="text-[#88695e] text-4xl font-bold drop-shadow-xl mb-4 text-center"
                style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 300
                }}
            >
                How I help.
            </h1>


                <p className='text-[#0f0b0a]'
                    style={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontWeight: 300
                    }}
                >
                    
                   As a Psychiatric-Mental Health Nurse Practitioner, I provide medication management plus non-pharmacologic supports (sleep, nutrition, movement, school collaboration). I see children, teens, and adults and offer a respectful, faith-friendly, inclusive space for all families.
                </p>
                    <br></br>

                    
                <p className='text-[#0f0b0a] text-center'
                    style={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontWeight: 300
                    }}
                > Call to book:<br></br> (801) 796-2552
                <br></br>
                or book online <a href="/contact" className="text-blue-500 underline">here</a>.
                </p>
                
               
            </div>
        </div>
    );
};
export default AboutIntro;

