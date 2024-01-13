import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import Container from "../../components/container";
import Template from "../../components/template";
import PageTrailAnimation from "../../components/pageTrailAnimation";
import ContentTitle from "../../components/content/title";
import ContentHeader from "../../components/content/header";
import ContentBody from "../../components/content/body";
import Comment from "../../components/comment";
import ContentNavigation from "../../components/content/navigation";
import { getProjectBySlug, getAllProjects } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import type { Project } from "../../interfaces/index";

type Props = {
  project: Project;
  moreProjects: Project[];
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
            <Head>
              <title>{`${title} | Alex Lampe`}</title>
              <meta property="og:image" content={project.ogImage.url} />
            </Head>
            <Template key={router.asPath}>
              <PageTrailAnimation>
                <ContentHeader
                  title={project.title}
                  coverImage={project.coverImage}
                  date={project.date}
                />
                <ContentBody content={project.content} />
                <Comment />
                <ContentNavigation
                  nextSlug={nextProject ? nextProject.slug : null}
                  prevSlug={prevProject ? prevProject.slug : null}
                  contentType="projects"
                />
              </PageTrailAnimation>
            </Template>
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
    paths: projects.map(({ slug }) => {
      return {
        params: {
          slug: slug,
        },
      };
    }),
    fallback: false,
  };
}
