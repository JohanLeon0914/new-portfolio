import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { AiOutlineMail } from "react-icons/ai";
import { MdPictureAsPdf } from "react-icons/md";
import { FaLinkedin, FaGithub, FaGitlab } from "react-icons/fa";
import Link from "next/link";

function Main() {
  const hi = "Hi, I'm ";
  const handleDownload = () => {
    const certificateUrl = "/johan_leon_cv.pdf";

    // Trigger download
    const link = document.createElement("a");
    link.href = certificateUrl;
    link.download = "johan_leon_cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const presentation =
    "I'm a Systems Engineer student with experience in Full Stack web development, focusing especially on the Front-End area. I constantly seek fresh challenges and actively learn from every experience to foster my professional growth.";

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
        <div className="mt-20">
          <p className="uppercase text-sm tracking-widest text-gray-400">
            Lets build something together
          </p>
          <p className="uppercase text-sm tracking-widest text-gray-400 mb-2">
            johanleon991@gmail.com
          </p>
          <h1>
            {hi} <span className="text-[#5651e5]">Johan León</span>
          </h1>
          <h2 className="text-5xl lg:text-6xl px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h2>
          <p className="py-4 text-gray-400 max-w-[70%] m-auto">
            {presentation}
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link
              href="https://www.linkedin.com/in/johan-alberto-leon-18b688229/"
              target="_blank"
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/JohanLeon0914"
              target="_blank"
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <FaGithub />
            </Link>
            <Link
              href="#contact"
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineMail />
            </Link>
            <Link
              onClick={handleDownload}
              href="#home"
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <MdPictureAsPdf />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
