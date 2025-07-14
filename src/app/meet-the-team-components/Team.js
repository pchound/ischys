'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';


const Team = () => {
    return (


        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center px-4 pt-20">

            {/*Section */}
            <div className='text-[#59433b] bg-[#f5edce] p-10 rounded-2xl h-full'>
                <Image
                    src="/sample-smile.jpg"
                    alt="Anxiety Scribble"
                    width={200}
                    height={200}
                    className="mx-auto w-24 sm:w-32 md:w-40 lg:w-48 rounded-full"
                />

                <h1 className=" black text-3xl md:text-3xl font-bold drop-shadow-xl text-center pt-5">
                    Laura Jane
                </h1>

                <p className="text-[#88695e]  font-bold drop-shadow-xl mb-4 text-center">
                    Highland Office <b></b>
                    Supervising Therapist
                </p>

                <p className='text-s pt-2 pb-4'>My counseling background is very diverse. I have years of experience working with court-ordered clients facing anything from drug and alcohol charges to domestic violence.</p>

                <Link href="/laura-jane">
                    <div className="flex justify-center pt-4">
                        <button className="bg-white text-black font-semibold py-2 px-6 rounded-xl shadow hover:bg-gray-100 transition cursor-pointer">
                            Learn more
                        </button>
                    </div>
                </Link>

            </div>

        </div>
    );
};
export default Team;
