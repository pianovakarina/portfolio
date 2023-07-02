import React from "react";
import { projects } from "../data/data";
import ProjectCard from "./components/projectCard";
import { Project } from "../data/types";

const MyProjects: React.FC = () => {
  return (
    <div className="flex flex-col m-auto content-center w-11/12 mt-10 ">
      <h2 className="text-2xl mb-4 font-bold">My projects</h2>
      <div className="flex flex-row flex-wrap gap-10 mt-6">
        {projects.map((project) => {
          return <ProjectCard key={project.title} data={project} />;
        })}
      </div>
    </div>
  );
};

export default MyProjects;
