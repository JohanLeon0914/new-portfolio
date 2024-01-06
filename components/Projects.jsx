import projects from "../public/jsons/projects.json";
import React, { useState } from "react";

import ProjectsItem from "./ProjectsItem";

function Projects() {
  const h2 = "What I've Built?";
  const initialProjectsToShow = 6;
  const [projectsToShow, setProjectsToShow] = useState(initialProjectsToShow);
  const visibleProjects = projects.slice(0, projectsToShow);
  const handleLoadMore = () => {
    setProjectsToShow(projectsToShow + initialProjectsToShow);
  };
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-5">{h2}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <ProjectsItem
              key={index}
              title={project.title}
              backgroundImg={project.backgroundImg}
              projectURL={project.projectURL}
              overview={project.overview}
              tecnologys={project.tecnologys}
              deploy={project.deploy}
              images={project.images}
            />
          ))}
        </div>
        {projectsToShow < projects.length && (
            <div className="flex justify-center py-8">
              <button
                onClick={handleLoadMore}
                className="font-bold py-2 px-4 mt-8"
              >
                Load more
              </button>
            </div>
          )}
      </div>
    </div>
  );
}

export default Projects;
