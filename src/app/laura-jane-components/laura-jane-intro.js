'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from "react";

const Intro = () => {
  return (
    <>
      <div className="text-[#59433b] bg-[#f5edce] p-10 rounded-2xl h-full max-w-7xl mx-auto">
        <Image
          src="/sample-smile.jpg"
          alt="Anxiety Scribble"
          width={400}
          height={400}
          className="mx-auto w-24 sm:w-40 md:w-60 lg:w-72 rounded-full"
        />

        <h1 className="text-3xl md:text-3xl font-bold drop-shadow-xl text-center pt-5">
          Laura Jane
        </h1>

        <p className="text-[#88695e] font-bold drop-shadow-xl text-center">
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

        <p
          className="text-md pt-2 pb-4 md:ml-8 md:mr-8 lg:ml-[7.5rem] lg:mr-[7.5rem]"
          style={{ fontFamily: '"Quicksand", sans-serif' }}
        >
          I’ve seen what unresolved trauma can do—how it hides under the mask of “high-functioning,” how it wears down the body and the mind. I’ve lived through my own storms and stood beside patients in theirs.
          <br /><br />
          I’m Laura Jane, a Licensed Psychiatric-Mental Health Nurse Practitioner with a DEA license to prescribe and a vision for care that blends science and soul. My approach is clinical, trauma-informed, and deeply human.
        </p>
      </div>
<br></br>


<div className="text-[#59433b] bg-[#f5edce] p-10 rounded-2xl h-full max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-3xl font-bold drop-shadow-xl text-center pt-5"
                            style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontWeight: 300
                }}>
                Fun facts about me:
            </h1>


      {/* Container with group class so children can react to hover */}
      <div className="group relative w-64 h-30 bg-[#4b3931] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
        {/* Visible content */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
          Fact #1
        </div>

        {/* Hidden content that fades in */}
        <div className="text-center absolute inset-0 bg-[#f5edce] bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-[#59433b] text-sm transition-opacity duration-300">
          <div className='ml-5 mr-5'>
          I have acting experience—storytelling is part of how I connect.
          </div>
        </div>
      </div>
 




</div>
    </>
  );
};

export default Intro;
