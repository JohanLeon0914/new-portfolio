/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

function About() {
  const p = "// I am not yout normal developer";
  const about =
    "I am a frontend developer born in Colombia, who started his career to become a professional more than 4 years ago, at the Fransisco de Paula Santander University as a systems engineer, all these years I have been acquiring more and more knowledge in different projects Personal and from my university, you can see all these projects in this portfolio and by visiting my Github. I hope my capabilities meet your expectations and you connect with me.";
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-5">Who I Am</h2>
          <p className="py-2 text-gray-400">{p}</p>
          <p className="py-2 text-gray-400">{about}</p>
          <Link href='#projects'>
            <p className="py-2 text-gray-400 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <img className="rounded-xl" src="/assets/yo.jpg" alt="me" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
