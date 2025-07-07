'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const VideoComponent = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
                src="/video/sample.mp4"
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
            <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="flex flex-col items-center space-y-4 px-4">
                    <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-xl text-center">
                        We can help
                    </h1>
                    <p className="text-white text-xl md:text-2xl drop-shadow-xl text-center">
                        You don't have to do this alone.<br></br>
                        Schedule your appointment now.
                    </p>
                    {/* Buttons Row */}
                    <div className="flex space-x-4 mt-2">
                        <button className="bg-white text-black font-semibold py-2 px-6 rounded-xl shadow hover:bg-gray-100 transition cursor-pointer">
                            Book Now
                        </button>
                        <button className="bg-tan-500 text-white font-semibold py-2 px-6 rounded-xl shadow hover:bg-tan-600 transition cursor-pointer">
                            Watch Video
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default VideoComponent;
