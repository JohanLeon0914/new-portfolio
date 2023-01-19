import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

function Main() {
  const hi = "Hi, i'm ";
  const presentation = "I am an systems Engineer student specialized in Web development, mostly focused on the frontend, using technologies such as React, NextJS and Angular. I am looking to take the next leap in my career in the profesional's world."
 
  const [text, count] = useTypewriter({
    words: [
      "A Front-End Web Developer",
      "React Developer",
      "Angular Developer",
      "Look All My Projects",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Lets build something together
          </p>
          <h1>
            {hi} <span className="text-[#5651e5]">Johan León</span>
          </h1>
          <h2 className="text-5xl lg:text-6xl px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            {presentation}
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedin />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
