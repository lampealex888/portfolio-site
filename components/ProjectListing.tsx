import Link from "next/link";
import Image from "next/image";

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
        <h3 className="text-x1 font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
      </Link>
      <div className="flex space-x-4">
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
      <p className="mt-2">Tools Used: {project.tools.join(", ")}</p>
    </div>
  );
};

export default ProjectListing;
