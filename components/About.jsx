/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

function About() {
  const p = "// I am not your normal developer";
  const about =
    "Passionate frontend developer with over 4 years of professional experience. Skilled in creating engaging and user-friendly web applications. Graduated from Fransisco de Paula Santander University with a degree in Systems Engineering. Demonstrated expertise in various personal and university projects showcased in my portfolio and on Github. Seeking opportunities to utilize my skills and contribute to innovative projects.";
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-5">Who I Am?</h2>
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
