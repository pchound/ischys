'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from "react";

const Intro = () => {
  return (
    <>
      <div className="text-[#59433b] bg-[#f5edce] p-10 rounded-2xl h-full max-w-7xl mx-auto">
        <Image
          src="/laura-garner.jpg"
          alt="Anxiety Scribble"
          width={400}
          height={400}
          className="mx-auto w-24 sm:w-40 md:w-60 lg:w-72 rounded-full"
        />

        <h1 className="text-3xl md:text-3xl font-bold drop-shadow-xl text-center pt-5">
          Laura Jane Test
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
        Hi, I’m Laura Jane Hyte-Garner, and if there’s one thing you should know about me, it’s this: I believe healing happens when people feel truly seen, heard, and connected.

<br></br><br></br>

For more than 30 years, I’ve walked alongside people through their hardest moments—as a nurse, a Psychiatric-Mental Health Nurse Practitioner, a mentor, and an advocate. My career has taken me from hospital rooms to veterans’ clinics, from community health programs to private practice, but my heart has always stayed the same: I am here to help people find hope and strength, even when life feels overwhelming.

<br></br><br></br>

I specialize in mental health and addiction care, serving veterans, families, individuals with autism, and the LGBTQ+ community. These groups hold a special place in my heart because I know how often they are overlooked, dismissed, or told to “just deal with it.” My approach is different: I combine the best of evidence-based medicine with natural, whole-person care. That means not just treating symptoms, but restoring balance, resilience, and joy to people’s lives.

<br></br><br></br>

I also know what it feels like to struggle. My own journey hasn’t been easy—navigating grief, setbacks, and obstacles in both my personal life and my career. But those experiences shaped me into the clinician I am today. They taught me empathy, grit, and the belief that no one is ever broken beyond repair.

<br></br><br></br>

When I dreamed of building my own clinics, I imagined spaces that felt less like doctor’s offices and more like sanctuaries—welcoming, calm, and stigma-free. Places where veterans can finally exhale, where families can rebuild trust, where young people can know they belong. And because I believe access matters, I want to bring these clinics not only to cities, but also to rural Utah, where resources are scarce but the need is just as great.

<br></br><br></br>

Beyond serving patients, I am committed to shaping the future of mental health care. I know how difficult it is for students to find clinical placements—it was one of the hardest parts of my own training. That’s why I’m building a practice that also functions as a training hub for future therapists and Psychiatric-Mental Health Nurse Practitioners. Supporting the next generation is one of the best ways I can give back to the profession that has given me so much.

<br></br><br></br>

At the core of everything I do is connection: connecting people to care, families to healing, communities to hope, and students to mentorship. That is what fuels me every single day.

<br></br><br></br>

So, if you’re here, I want you to know—you don’t have to walk this journey alone. Whether you’re a veteran seeking healing, a family coping with addiction, or someone simply trying to find your way through the stress of life, you belong here. And together, we’ll find a path forward.


        </p>
      </div>
<br></br>







<div className="text-[#59433b] bg-[#f5edce] p-10 rounded-2xl h-full max-w-7xl mx-auto">
  <h1
    className="text-3xl drop-shadow-xl text-center pt-5 mb-5"
    style={{
      fontFamily: '"Quicksand", sans-serif',
      fontWeight: 300,
    }}
  >
    Fun facts about me:
  </h1>

  {/* Row of 3 facts */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
    {/* FACT 1 */}
    <div className="group relative w-64 h-32 bg-[#4b3931] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
      <div
        className="absolute inset-0 flex items-center justify-center text-white text-xl"
        style={{
          fontFamily: '"Quicksand", sans-serif',
          fontWeight: 300,
        }}
      >
        Fact #1
      </div>
      <div className="text-center absolute inset-0 bg-[#f5edce] bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-[#59433b] text-sm transition-opacity duration-300">
        <div
          className="px-4"
          style={{
            fontFamily: '"Quicksand", sans-serif',
            fontWeight: 500,
          }}
        >
          I have acting experience—storytelling is part of how I connect.
        </div>
      </div>
    </div>

    {/* FACT 2 */}
    <div className="group relative w-64 h-32 bg-[#4b3931] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
      <div
        className="absolute inset-0 flex items-center justify-center text-white text-xl"
        style={{
          fontFamily: '"Quicksand", sans-serif',
          fontWeight: 300,
        }}
      >
        Fact #2
      </div>
      <div className="text-center absolute inset-0 bg-[#f5edce] bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-[#59433b] text-sm transition-opacity duration-300">
        <div
          className="px-4"
          style={{
            fontFamily: '"Quicksand", sans-serif',
            fontWeight: 500,
          }}
        >
          I believe your environment shapes your healing, which is why I’m creating a clinic that feels like a sanctuary.
        </div>
      </div>
    </div>

    {/* FACT 3 */}
    <div className="group relative w-64 h-32 bg-[#4b3931] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
      <div
        className="absolute inset-0 flex items-center justify-center text-white text-xl"
        style={{
          fontFamily: '"Quicksand", sans-serif',
          fontWeight: 300,
        }}
      >
        Fact #3
      </div>
      <div className="text-center absolute inset-0 bg-[#f5edce] bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-[#59433b] text-sm transition-opacity duration-300">
        <div
          className="px-4"
          style={{
            fontFamily: '"Quicksand", sans-serif',
            fontWeight: 500,
          }}
        >
          I’m endlessly curious about the brain and its ability to change.
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Intro;
