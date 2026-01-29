'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';

const Intro = () => {

    useEffect(() => {
        const link = document.createElement('link');
        link.href =
            'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Source+Serif+4:ital,opsz,wght@0,8..60,200;1,8..60,200&display=swap" rel="stylesheet';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    return (
        <div className='bg-gray-100'>
        <div className="max-w-6xl mx-auto items-center px-5 pt-10 mb-10 ">
            
        
            <h1 className="text-[#88695e] font-bold drop-shadow-xl mb-4 text-center text-5xl"
                style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 300
                }}
            >
                “Anxiety and Depression Don’t Have to Define You.”
            </h1>

            <div className="max-w-4xl mx-auto px-5 pt-3 text-2xl">
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


<div className='bg-white'>
    <br></br><br></br>
            <h1 className="text-[#88695e] text-3xl font-bold drop-shadow-xl mb-4 text-center"
                style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 300
                }}
            >
                Teen Depression: What Parents & Teens Should Know
            </h1>



            <div className="max-w-6xl mx-auto px-5 pt-3 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <p className='text-[#0f0b0a]'
                    style={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontWeight: 300
                    }}
                >
Teen depression is common—and treatable. In 2021, about 1 in 5 U.S. adolescents (12–17) had a major depressive episode in the past year, and nearly 1 in 7 had severe impairment. Girls were affected more than boys. Separate CDC data show about 4 in 10 high-schoolers reported persistent sadness or hopelessness. If this is your teen (or you), you’re not alone—and help works. 
<br></br><br></br>
What it can look like: withdrawal from friends, sleep/appetite changes, irritability, trouble concentrating, hopelessness, or self-harm thoughts. Depression isn’t a character flaw—it’s a medical condition that responds to the right plan.


                </p>
                <div className="flex justify-center">
                    <Image
                        src="/sad-teen2.jpg"
                        alt="Sad teen"
                        width={400}
                        height={400}
                        className="rounded-xl shadow-xl"
                    />
                </div>


            </div>
            <br></br><br></br>
            </div>

            <br></br>


        <div className="flex flex-col items-center justify-center z-2 ml-5 mr-5 pt-10" >
            <p className="text-4xl text-gray-500 md:w-4xl text-center"
            style={{ fontFamily: '"Alumni Sans Pinstripe", sans-serif',
                fontWeight: 700
             }}>
                Are you a teen who&apos;s depressed? Take the free quiz to identify their top challenges and get personalized recommendations.           
            </p>
<br></br>
                <p className="text-xs text-gray-500 md:w-4xl text-center"
               >
                    This quiz is not a diagnostic tool. It is only for informational purposes and to help guide you to the right resources.               
                </p>
            <br></br>
            <Link href="/depression-quiz">
                <button className="bg-white text-black font-semibold py-2 px-6 rounded-xl shadow hover:bg-gray-100 transition cursor-pointer">
                    Take quiz
                </button>
            </Link>
            <br></br>
        </div>
        
            </div>
            

    );
};
export default Intro;

