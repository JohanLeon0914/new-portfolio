import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProjectsItem({ title, backgroundImg, projectURL, overview, tecnologys, deploy }) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-t from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt={title}
        width={650}
        height={450}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-widest text-center mb-2">
          {title}
        </h3>
        {/* <p className="pb-4 pt-2 text-white text-center">NextJS And Firebase</p> */}
        <Link
          href={{
            pathname: "/project",
            query: { 
              title,
              backgroundImg,
              projectURL,
              overview,
              tecnologys,
              deploy
            },
          }}
        >
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More info
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ProjectsItem;
