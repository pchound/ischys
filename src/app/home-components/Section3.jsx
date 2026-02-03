'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const Section3 = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);


    useEffect(() => {
        const link = document.createElement('link');
        link.href =
            '';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    return (



        <div 
            
            className="text-[#2a4c5b] bg-[radial-gradient(circle_at_center,_#9fd5ff,_#d3ffff)] py-16 px-6 max-w-8xl w-full mx-auto"
            style={{ fontFamily: '"Quicksand", sans-serif' }}
        >

            <h2 data-aos="fade" data-aos-duration="1000"
             className="text-3xl md:text-4xl  drop-shadow-xl mb-4 text-center pb-10" >
                At Ischys Wellness, we can help with:
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center" >


                {/*Section 1 */}
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <h2 className="text-3xl md:text-3xl drop-shadow-xl mb-4 text-center">
                        Anxiety
                    </h2>

                    <Image
                        src="/anxiety-scribble.png"
                        alt="Anxiety Scribble"
                        width={200}
                        height={200}
                        className="mx-auto w-24 sm:w-32 md:w-40 lg:w-48"
                    />
                </div>



                {/*Section 2 */}
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <h2 className="text-3xl md:text-3xl drop-shadow-xl mb-4 text-center">
                        Depression
                    </h2>

                    <Image
                        src="/depression-cloud.png"
                        alt="Cloud"
                        width={200}
                        height={200}
                        className="mx-auto w-24 sm:w-32 md:w-40 lg:w-48"
                    />
                </div>


                {/*Section 3 */}
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                
                    <h2 className="text-3xl md:text-3xl  drop-shadow-xl mb-4 text-center">
                        Relationships
                    </h2>

                    <Image
                        src="/relationships.png"
                        alt="Cloud"
                        width={200}
                        height={200}
                        className="mx-auto w-24 sm:w-32 md:w-40 lg:w-48"
                    />
                </div>

                {/*Section 4 */}
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                
                    <h2 className="text-3xl md:text-3xl drop-shadow-xl mb-4 text-center">
                        Addiction
                    </h2>

                    <Image
                        src="/addiction.png"
                        alt="Addiction ball & chain"
                        width={200}
                        height={200}
                        className="mx-auto w-24 sm:w-32 md:w-40 lg:w-48"
                    />
                </div>

            <br></br><br></br>
            </div>
                <h2
                    className="text-3xl md:text-4xl  drop-shadow-xl mb-4 text-center " >
                    And many more:
                </h2>

                    <div className=" flex justify-center">
                        <button className="bg-white text-black font-semibold py-2 px-6 rounded-xl shadow hover:bg-gray-100 transition cursor-pointer">
                            Learn more
                        </button>
                    </div>
        </div>
    );
};

export default Section3;
