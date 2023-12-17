import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Key, ReactChild, ReactFragment, ReactPortal } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { projectList } from "../utils/project-data";

export default function Project({ projectData }) {
  return (
    <div className={`bg-${projectData.backgroundColor} text-${projectData.textColor}`}>
      <Head>
        <title>{projectData.title}</title>
      </Head>

      <Header />

      <div className="max-w-3x1 mx-auto p-6">
        <Image
          src={projectData.cover}
          alt={projectData.title}
          width={600}
          height={400}
          className="rounded-md"
        />
        <h1 className="text-3x1 font-bold mt-4">{projectData.title}</h1>
        <p className="text-gray-600">{projectData.description}</p>
        <h3 className="text-x1 font-semibold mt-4">Tools used:</h3>
        <ul className="list-disc pl-6">
          {projectData.tools.map(
            (
              tool: boolean | ReactChild | ReactFragment | ReactPortal,
              index: Key
            ) => (
              <li key={index} className="text-gray-700">
                {tool}
              </li>
            )
          )}
        </ul>
        <div className="mt-4">
          <Link
            href={projectData.code}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            View the project code
          </Link>
          <br />
          <Link
            href={projectData.demo}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            View the project
          </Link>
        </div>
        <div className="mt-4">
          <Link href="/">Back to home</Link>
        </div>
      </div>

      <Footer />
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
