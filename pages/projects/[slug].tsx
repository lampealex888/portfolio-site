import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import ContentBody from "../../components/contentBody";
import ContentHeader from "../../components/contentHeader";
import Layout from "../../components/layout";
import { getProjectBySlug, getAllProjects } from "../../lib/projectAPI";
import ContentTitle from "../../components/contentTitle";
import Head from "next/head";
import { markdownToHtml } from "../../lib/markdownFormatter";
import type ProjectType from "../../interfaces/project";
import ContentNavigation from "../../components/contentNavigation";
import PageTrailAnimation from "../../components/pageTrailAnimation";

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
  const prevProject = moreProjects[currentIndex - 1] || null;

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <ContentTitle>Loading…</ContentTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{`${title} | Alex Lampe`}</title>
                <meta property="og:image" content={project.ogImage.url} />
              </Head>
              <PageTrailAnimation>
                <ContentHeader
                  title={project.title}
                  coverImage={project.coverImage}
                  date={project.date}
                />
                <ContentBody content={project.content} />
                <ContentNavigation
                nextSlug={nextProject ? nextProject.slug : null}
                prevSlug={prevProject ? prevProject.slug : null}
                contentType="projects"
              />
              </PageTrailAnimation>
            </article>
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
    "content",
    "ogImage",
    "coverImage",
    "code",
    "demo",
    "tools",
  ]);
  const content = await markdownToHtml(project.content || "");
  const moreProjects = getAllProjects(["title", "date", "slug"]);

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
