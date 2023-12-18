import Link from "next/link";
import Image from "next/image";
import { Key, ReactChild, ReactFragment, ReactPortal } from "react";

import { ProjectType } from "../utils/project-data";

type ProjectListingProps = {
  project: ProjectType;
};

const ProjectListing = ({ project }: ProjectListingProps) => {
  return (
    <div
      className={`bg-${project.backgroundColor} text-${project.textColor} p-4 rounded-lg shadow-lg mb-4`}
    >
      <Link href={project.slug}>
        <div className="relative mb-4">
          <Image
            src={project.cover}
            alt={project.title}
            width={800}
            height={400}
            className="rounded-md"
          />
        </div>
        <h3 className="text-4xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <p className="mt-2">Tools Used: </p>
        <div className="grid grid-cols-2 gap-4">
          <ul className="list-disc pl-6">
            {project.tools.slice(0, Math.ceil(project.tools.length / 2)).map(
              (
                tool: boolean | ReactChild | ReactFragment | ReactPortal,
                index: Key
              ) => (
                <li key={index} className="">
                  {tool}
                </li>
              )
            )}
          </ul>
          <ul className="list-disc">
            {project.tools.slice(Math.ceil(project.tools.length / 2)).map(
              (
                tool: boolean | ReactChild | ReactFragment | ReactPortal,
                index: Key
              ) => (
                <li key={index} className="">
                  {tool}
                </li>
              )
            )}
          </ul>
        </div>
      </Link>
      <div className="flex space-x-4 mt-4">
        <a
          href={project.code}
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          Code
        </a>
        <a
          href={project.demo}
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectListing;
