'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const VideoComponent = () => {


    useEffect(() => {
        const link = document.createElement('link');
        link.href =
            'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Source+Serif+4:ital,opsz,wght@0,8..60,200;1,8..60,200&display=swap" rel="stylesheet';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
                src="/video/intro.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                Your browser does not support the video tag.
            </video>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(114,227,255,0.6)] to-[rgba(33,107,245,0.3)] z-10"></div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20" >
                <div className="flex flex-col items-center space-y-4 px-4"

                >
                    <h1 className="text-white text-2xl md:text-4xl font-bold drop-shadow-xl text-center"
                    >
                        You’re Not Broken—You’re Overloaded.<br></br> Let’s Bring You Back to Calm.
                    </h1>
                    <p className="text-white md:text-sm drop-shadow-xl text-center md:w-xl">
                        Expert Psychiatric Care for Anxiety, Depression, ADHD & Trauma — In-person and Telehealth in Utah.
                    </p>
                    {/* Buttons Row */}
                    <div className="flex space-x-4 mt-2">

                        <Link href="https://laura-jane-hyte-garner7671.clientsecure.me">
                            <button className="bg-white text-black font-semibold py-2 px-6 rounded-xl shadow hover:bg-gray-100 transition cursor-pointer">
                                Book Now
                            </button>
                        </Link>
                        {/*<Link href="/">
                            <button className="bg-white text-black font-semibold py-2 px-6 rounded-xl shadow hover:bg-gray-100 transition cursor-pointer">
                                Watch Video
                            </button>
                        </Link>*/}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default VideoComponent;
