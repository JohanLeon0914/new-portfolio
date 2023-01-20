/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaGitlab } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import Link from "next/link";

function Contact() {
  const sendEmail = (event) => {
    event.preventDefault();
    sendAlert();
    emailjs
      .sendForm(
        "service_yydk9mm",
        "template_6nxh1xz",
        event.target,
        "mY6I5remDMwh5Txgh"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const sendAlert = () => {
    swal({
      title: "Gracias por tu mensaje",
      text: `Tu mensaje se ha enviado con exito`,
      icon: "success",
      button: "Aceptar",
    });
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-5">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/assets/contact.jpg"
                  alt="contact"
                />
              </div>
              <div className="py-2">
                <h2>Johan León</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  Talk to me if you are interested in me working on your project
                  or company
                </p>
              </div>
              <div>
                <p className="uppercase pt-4">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
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
                    href="https://gitlab.com/johanalbertols"
                    target="_blank"
                    className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <FaGitlab />
                  </Link>
                  <Link
                    href="#contact"
                    className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 w-full shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                      <input
                        type="text"
                        name="user_name"
                        required
                        className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                      />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 text-black"
                    required
                    name="user_message"
                    rows="10"
                  />
                </div>

                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
