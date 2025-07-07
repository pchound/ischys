'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const Section1 = () => {
    useEffect(() => {
        AOS.init({ once: false });
    }, []);

    return (
        <div className="bg-[radial-gradient(circle_at_center,_#f5deb3,_#f5f5dc)] py-16 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Text Section */}
                <div data-aos="fade-right" data-aos-duration="800">
                    <h1 className="text-black text-3xl md:text-4xl font-bold drop-shadow-xl mb-4">
                        1 in 4 teens suffer from depression
                    </h1>
                    <p className="text-lg text-gray-800">
                        Depression in adolescence is rising, and early support makes all the difference.
                    </p>

                    <div className="mt-6 flex justify-center">
                        <button className="bg-white text-black font-semibold py-2 px-6 rounded-xl shadow hover:bg-gray-100 transition cursor-pointer">
                            Learn more
                        </button>
                    </div>


                </div>



                {/* Image Section */}
                <div data-aos="zoom-in" data-aos-duration="1000" className="flex justify-center">
                    <Image
                        src="/sad-teen.jpg"
                        alt="Sad teen"
                        width={400}
                        height={400}
                        className="rounded-xl shadow-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Section1;
