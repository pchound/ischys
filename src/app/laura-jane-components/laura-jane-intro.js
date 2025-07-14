'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';




const Intro = () => {



    return (
        /*<div className='text-[#59433b] bg-[#f5edce] bg-[url("/polka-dots.svg")] bg-repeat bg-blend-overlay p-10 rounded-2xl h-full max-w-7xl mx-auto'></div>*/
        <div className='text-[#59433b] bg-[#f5edce] p-10 rounded-2xl h-full max-w-7xl mx-auto'>
            <Image
                src="/sample-smile.jpg"
                alt="Anxiety Scribble"
                width={400}
                height={400}
                className="mx-auto w-24 sm:w-40 md:w-60 lg:w-70 rounded-full"
            />

            <h1 className=" black text-3xl md:text-3xl font-bold drop-shadow-xl text-center pt-5">
                Laura Jane
            </h1>

            <p className="text-[#88695e]  font-bold drop-shadow-xl  text-center">
                Highland Office <b></b>
                Supervising Therapist
            </p>

            <Link href="/">
                <div className="flex justify-center pt-4">
                    <button className="bg-white text-black font-semibold py-2 px-6 rounded-xl shadow hover:bg-gray-100 transition cursor-pointer mb-4">
                        Book now
                    </button>
                </div>
            </Link>

            <p className='text-s pt-2 pb-4'>


                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            </p>
        </div>


    );
};
export default Intro;

