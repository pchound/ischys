'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';


const Team = () => {
    return (


        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center px-4">

            {/*Section 1 */}
            <div className='text-[#59433b] bg-[#f5edce] p-5 rounded-2xl max-w-sm mx-auto'>
                <h1 className="color: black text-3xl md:text-3xl font-bold drop-shadow-xl mb-4 text-center">
                    Laura Jane
                </h1>

                <Image
                    src="/sample-smile.jpg"
                    alt="Anxiety Scribble"
                    width={200}
                    height={200}
                    className="mx-auto w-24 sm:w-32 md:w-40 lg:w-48 rounded-full"
                />

                <p className='text-s'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            {/*Section 2 */}
            <div className='text-[#59433b] bg-[#f5edce] p-5 rounded-2xl'>
                <h1 className="color: black text-3xl md:text-3xl font-bold drop-shadow-xl mb-4 text-center">
                    Laura Jane
                </h1>

                <Image
                    src="/sample-smile.jpg"
                    alt="Anxiety Scribble"
                    width={200}
                    height={200}
                    className="mx-auto w-24 sm:w-32 md:w-40 lg:w-48 rounded-full"
                />

                <p className='text-s pt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            {/*Section 3 */}
            <div className='text-[#59433b] bg-[#f5edce] p-5 rounded-2xl'>
                <h1 className="color: black text-3xl md:text-3xl font-bold drop-shadow-xl mb-4 text-center">
                    Laura Jane
                </h1>

                <Image
                    src="/sample-smile.jpg"
                    alt="Anxiety Scribble"
                    width={200}
                    height={200}
                    className="mx-auto w-24 sm:w-32 md:w-40 lg:w-48 rounded-full"
                />

                <p className='text-s'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            {/*Section 4 */}
            <div className='text-[#59433b] bg-[#f5edce] p-5 rounded-2xl'>
                <h1 className="color: black text-3xl md:text-3xl font-bold drop-shadow-xl mb-4 text-center">
                    Laura Jane
                </h1>

                <Image
                    src="/sample-smile.jpg"
                    alt="Anxiety Scribble"
                    width={200}
                    height={200}
                    className="mx-auto w-24 sm:w-32 md:w-40 lg:w-48 rounded-full"
                />

                <p className='text-s'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>




        </div>
    );
};
export default Team;
