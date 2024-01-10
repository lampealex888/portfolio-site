import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import ContentBody from "../../components/contentBody";
import ContentHeader from "../../components/contentHeader";
import Layout from "../../components/layout";
import { getProjectBySlug, getAllProjects } from "../../lib/ProjectAPI";
import ContentTitle from "../../components/contentTitle";
import Head from "next/head";
import markdownToHtml from "../../lib/MarkdownToHtml";
import type ProjectType from "../../interfaces/Project";
import Link from "next/link";

type Props = {
  project: ProjectType;
  moreProjects: ProjectType[];
  preview?: boolean;
};

export default function Projects({ project, moreProjects, preview }: Props) {
  const router = useRouter();
  const title = `${project.title}`;
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const currentIndex = moreProjects.findIndex((p) => p.slug === project.slug);
  const nextProject = moreProjects[currentIndex + 1] || null;

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <ContentTitle>Loading…</ContentTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
                <meta property="og:image" content={project.ogImage.url} />
              </Head>
              <ContentHeader
                title={project.title}
                coverImage={project.coverImage}
                date={project.date}
              />
              <ContentBody content={project.content} />
            </article>
            {nextProject && (
              <div className="mb-32">
                <Link
                  className="text-2xl font-bold flex justify-end link hover:underline no-underline"
                  as={`/projects/${nextProject.slug}`}
                  href={`/projects/${nextProject.slug}`}
                >
                  Next Project: {nextProject.title} →
                </Link>
              </div>
            )}
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const project = getProjectBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "code",
    "demo",
    "tools",
  ]);
  const content = await markdownToHtml(project.content || "");
  const moreProjects = getAllProjects([
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "code",
    "demo",
    "tools",
  ]);

  return {
    props: {
      project: {
        ...project,
        content,
      },
      moreProjects: moreProjects,
    },
  };
}

export async function getStaticPaths() {
  const projects = getAllProjects(["slug"]);

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
}
