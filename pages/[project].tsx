import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Key, ReactChild, ReactFragment, ReactPortal } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { projectList } from "../utils/project-data";


const Project: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  index,
  projectData,
}) => {
  return (
    <div>
      <Head>
        <title>{projectData.title}</title>
      </Head>

      <body className="flex flex-col justify-between min-h-screen">
        <Header />
        <div className={`bg-[${projectData.backgroundColor}] text-[${projectData.textColor}] max-w-3xl mx-auto p-6`}>
          <Image
            src={projectData.cover}
            alt={projectData.title}
            width={600}
            height={400}
            className="rounded-md mx-auto"
          />
          <h1 className="text-3xl font-bold mt-4 text-center">{projectData.title}</h1>
          <p className="text-sm text-center">{projectData.date}</p>
          <p className="mt-4">{projectData.description}</p>
          <h3 className="text-x1 font-semibold mt-4">Tools used:</h3>
          <div className="grid grid-cols-2 gap-4">
            <ul className="list-disc pl-6">
              {projectData.tools.slice(0, Math.ceil(projectData.tools.length / 2)).map(
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
              {projectData.tools.slice(Math.ceil(projectData.tools.length / 2)).map(
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
          <div className="mt-4 flex flex-row justify-evenly">
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
          <div className="mt-4 text-center text-blue-500 hover:underline">
            <Link href="/">← Back to home</Link>
          </div>
        </div>

        <Footer />
      </body>
    </div>
  );
}

export default Project;

export const getStaticPaths = async () => {
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

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const projectSlug = context.params.project;

  const index = projectList.findIndex((project) => project.slug === projectSlug);

  if (index === -1) {
    throw new Error(`Project with slug ${projectSlug} not found!`);
  }

  return {
    props: {
      index,
      projectData: projectList[index]
    },
  };
}
