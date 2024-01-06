import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaGitlab } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className={`fixed w-full h-20 z-[100] ${isScrolled && "shadow-xl bg-[#141414]" }`}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href='#home'>
          <Image src="/assets/logo.png" alt="/" width="85" height="50" />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="#home">
              <li className="ml-10 text-sm uppercase hover:border-b"> Home </li>
            </Link>
            <Link href="#about">
              <li className="ml-10 text-sm uppercase hover:border-b">
                {" "}
                About{" "}
              </li>
            </Link>
            <Link href="#experience">
              <li className="ml-10 text-sm uppercase hover:border-b">
                {" "}
                Experience{" "}
              </li>
            </Link>
            <Link href="#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">
                {" "}
                Skills{" "}
              </li>
            </Link>
            <Link href="#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                {" "}
                Projects{" "}
              </li>
            </Link>
            <Link href="#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                {" "}
                Contact{" "}
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer p-5">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen  bg-[#141414] text-white p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href='#home'>
                <Image src="/assets/logo.png" alt="/" width="47" height="25" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Lets build something legendary together
              </p>
              <p className="w-[85%] md:w-[90%] py-4">
                johanleon991@gmail.com
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="#home">
                <li onClick={() => setNav(false)} className="py-4 text-sm"> Home </li>
              </Link>
              <Link href="#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm"> About </li>
              </Link>
              <Link href="#experience">
                <li onClick={() => setNav(false)} className="py-4 text-sm"> Experience </li>
              </Link>
              <Link href="#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm"> Skills </li>
              </Link>
              <Link href="#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm"> Projects </li>
              </Link>
              <Link href="#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm"> Contact </li>
              </Link>
            </ul>
            <div className="pt-7">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Connect to me
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link href="https://www.linkedin.com/in/johan-alberto-leon-18b688229/" target='_blank' className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedin />
                </Link>
                <Link href="https://github.com/JohanLeon0914" target='_blank' className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </Link>
                <Link href="#contact" onClick={() => setNav(false)} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
