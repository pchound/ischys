'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';



const ContactBasic = () => {

    useEffect(() => {
        const link = document.createElement('link');
        link.href =
            'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Source+Serif+4:ital,opsz,wght@0,8..60,200;1,8..60,200&display=swap" rel="stylesheet';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    return (
        <div className="max-w-6xl mx-auto items-center px-5 pb-10">

            <div className=' text-[#ffffff] rounded-lg text-4xl font-bold drop-shadow-xl text-center'>
                <h2 className="p-0 text-[#382f25] rounded-lg text-2xl font-bold drop-shadow-xl text-center "
                    style={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontWeight: 300
                    }}
                >
                    Phone
                </h2>

                <h2 className="text-[#292420] rounded-lg text-xl font-bold drop-shadow-xl text-center pb-5"
                    style={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontWeight: 300
                    }}
                >
                    (123) 456-789
                </h2>
            </div>


            <div className=' text-[#ffffff] rounded-lg text-4xl font-bold drop-shadow-xl  text-center'>
                <h2 className="p-0 text-[#382f25] rounded-lg text-2xl font-bold drop-shadow-xl text-center"
                    style={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontWeight: 300
                    }}
                >
                    Address
                </h2>
                <h2 className="text-[#292420] rounded-lg text-xl font-bold drop-shadow-xl mb-4 text-center"
                    style={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontWeight: 300
                    }}
                >

                    123 Maple Street. Anytown, PA 17101
                </h2>

            </div>

        </div>
    );
};
export default ContactBasic;

