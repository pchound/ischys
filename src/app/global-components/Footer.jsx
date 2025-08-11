'use client';
import React from 'react';
import { useEffect } from 'react';

const Footer = () => {
    
        useEffect(() => {
            const link = document.createElement('link');
            link.href =
                'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Source+Serif+4:ital,opsz,wght@0,8..60,200;1,8..60,200&display=swap" rel="stylesheet';
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }, []);
    
    const currentYear = new Date().getFullYear();
    return (
        <div>

            <p className='text-gray-500 text-center'
                style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 500
                }}
            >
                If you are in crisis, do not use this service.<br></br>
                Please dial 911 or the suicide and crisis hotline at 988.<br></br><br></br>
            </p>



            <p className='text-gray-500 text-center'
                style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 500
                }}
            >
                (123) 456-7890
            </p>





            <p className='text-gray-500 text-center'
                style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 500
                }}
            >
                123 Maple Street. Anytown, PA 17101
            </p>


            <p className='text-gray-500 text-center'
                style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 500
                }}
            >
                &copy; {currentYear} All rights reserved
            </p><br></br><br></br>

        </div>
    );
};

export default Footer;
