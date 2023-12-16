import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import { projectList } from "../utils/project-data";
import { ReactChild, ReactFragment, ReactPortal, Key } from "react";

export default function Project({ projectData }) {
  return (
    <div>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <Image
        src={projectData.image}
        alt={projectData.title}
        width={600}
        height={400}
      />
      <h1>{projectData.title}</h1>
      <p>{projectData.description}</p>
      <h3>Tools used:</h3>
      <ul>
        {projectData.tools.map((tool: boolean | ReactChild | ReactFragment | ReactPortal, index: Key) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
      <Link target="_blank" href={projectData.code}>
        View the project code
      </Link>
      <br />
      <Link target="_blank" href={projectData.link}>
        View the project
      </Link>
      <br />
      <Link href="/">Back to home</Link>
    </div>
  );
}

export async function getStaticPaths() {
  const projectPaths = projectList.map((project) => {
    return {
      params: {
        project: project.slug,
      },
    };
  });

  return {
    paths: projectPaths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectData = projectList.find(
    (project) => project.slug === params.project
  );

  return {
    props: {
      projectData,
    },
  };
}
