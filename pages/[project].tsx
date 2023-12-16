import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import Head from 'next/head';

import { projectList } from '../utils/project-data';

export default function Project({ projectData }) {
  return (
    <div>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <h1>{projectData.title}</h1>
      <p>{projectData.description}</p>
      <Link href="/">Back to home
      </Link>
    </div>
  );
};

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
};

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