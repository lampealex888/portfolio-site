import Head from "next/head";
import Post from "../interfaces/post";
import Project from "../interfaces/project";
import Layout from "../components/layout";
import Container from "../components/container";
import Hero from "../components/hero";
import PostListing from "../components/postListing";
import ProjectListing from "../components/projectListing";
import { getAllPosts } from "../lib/postAPI";
import { getAllProjects } from "../lib/projectAPI";

type Props = {
  allPosts: Post[];
  allProjects: Project[];
};

const Index = ({ allPosts, allProjects }: Props) => {
  const Posts = allPosts;
  const Projects = allProjects;
  return (
    <Layout>
      <Head>
        <title>Alex Lampe</title>
      </Head>
      <Container>
        <Hero />
        <div id="projects">
          {Projects.length > 0 && <ProjectListing projects={Projects} />}
        </div>
        <div id="blog">{Posts.length > 0 && <PostListing posts={Posts} />}</div>
      </Container>
    </Layout>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  const allProjects = getAllProjects([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "code",
    "demo",
    "tools",
  ]);

  return {
    props: { allPosts, allProjects },
  };
};
