import Link from "next/link";
import Image from "next/image";
import { Key, ReactChild, ReactFragment, ReactPortal } from "react";

import { ProjectType } from "../utils/project-data";

type ProjectListingProps = {
  project: ProjectType;
};

const ProjectListing = ({ project }: ProjectListingProps) => {
  return (
    <div className="card min-h-full w-full bg-base-100 transition-shadow hover:shadow-xl">
      <Link href={project.demo}>
        <figure>
          <Image
            src={project.cover}
            alt={project.title}
            width="800"
            height="400"
            className="rounded-md max-h-64 object-cover"
          />
        </figure>
      </Link>
      <div className="card-body">
        <Link href={project.demo}>
          <h2 className="card-title link link-primary">{project.title}</h2>
        </Link>
        <p>{project.description}</p>
        <p className="">Tools Used: {project.tools.join(", ")}</p>
        <ul className="list-disc pl-6"></ul>
        <div className="flex justify-around">
          <Link href={project.demo} className="btn btn-primary w-1/3">
            Live Demo
          </Link>
          <Link href={project.code} className="btn btn-primary w-1/3">
            Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectListing;
