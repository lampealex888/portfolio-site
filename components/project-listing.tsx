import Link from 'next/link';

import { ProjectType } from "../utils/project-data";

type ProjectListingProps = {
  project: ProjectType;
};

export default function ProjectListing({ project }: ProjectListingProps) {
  return (
    <Link href={`${project.slug}`}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </Link>
  );
}