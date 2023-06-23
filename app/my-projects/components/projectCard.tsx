import Image from "next/image";
import React from "react";
import { Project } from "../../data/types";
import { AiFillGithub } from "react-icons/ai";
import { FaRegWindowMaximize } from "react-icons/fa";
interface IProjectCardProps {
  data: Project;
}
const ProjectCard: React.FC<IProjectCardProps> = ({ data }) => {
  return (
    <div className="rounded-lg shadow-lg bg-grey-light w-full sm:w-1/3-g ">
      <Image
        aria-label={`Image of ${data.title}`}
        width={500}
        height={250}
        priority={false}
        alt={data.title}
        src={`/images/${data.image}`}
        className="object-cover w-full h-48"
      />
      <div className="p-4">
        <h3 className="text-lg font-medium">{data.title}</h3>
        <p className="text-sm mt-2 min-h-50">{data.body1}</p>
        <p className="text-sm mt-2 min-h-50">{data.body2}</p>
        <div className="flex flex-row mt-4 justify-between">
          <a href={data.links[0].url} className="flex items-center">
            <AiFillGithub />
            <span className="text-black">{data.links[0].text}</span>
          </a>
          <a href={data.links[1].url} className="flex items-center">
            <FaRegWindowMaximize />
            <span className="text-black">{data.links[1].text}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
