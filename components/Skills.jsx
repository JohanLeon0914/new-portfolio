import Image from "next/image";
import React from "react";

function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-5">What I can do?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/html.png"
                  alt="html"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/css.png"
                  alt="css"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/javascript.png"
                  alt="html"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/type.png"
                  alt="typescript"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/react.png"
                  alt="react"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/angular.png"
                  alt="angular"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Angular</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/Next.js.png"
                  alt="nextjs"
                  width={105}
                  height={105}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NextJS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/node.png"
                  alt="node"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NodeJS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/ionic_logo.avif"
                  alt="ionic"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Ionic</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/tailwind.png"
                  alt="tailwind"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/firebase.png"
                  alt="firebase"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>FireBase</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/mongo.png"
                  alt="mongodb"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/git.png"
                  alt="git"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Git</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/github-mark-white.png"
                  alt="github"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
