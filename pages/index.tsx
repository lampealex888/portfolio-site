import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import PageTrailAnimation from "../components/pageTrailAnimation";
import Hero from "../components/hero";
import Listing from "../components/content/listing";
import { getAllPosts, getAllProjects } from "../lib/api";
import markdownToPlainText from "../lib/markdownToPlainText";
import { Post, Project } from "../interfaces/index";

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
        <title>Alex Lampe | Portfolio</title>
      </Head>
      <Container>
        <PageTrailAnimation>
          <Hero />
          <div id="projects">
            {Projects.length > 0 && <Listing contentType="projects" projects={Projects} />}
          </div>
          <div id="blog">
            {Posts.length > 0 && <Listing contentType="posts" posts={Posts} />}
          </div>
        </PageTrailAnimation>
      </Container>
    </Layout>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = await Promise.all(
    getAllPosts(["title", "date", "slug", "coverImage", "content"]).map(
      async (post) => {
        post.content = await markdownToPlainText(post.content);
        post.wordCount = post.content.split(/\s+/gu).length.toString();
        post.readingTime = (Math.max(Math.round(parseInt(post.wordCount) / 200), 1)).toString();
        
        if (post.content.length > 300) {
          if (post.content.endsWith(" ")) {
            post.content = post.content.substring(0, 301);
          } else {
            post.content = post.content.substring(0, 300);
          }
          post.content += "...";
        }
        return post;
      }
    )
  );

  const allProjects = await Promise.all(
    getAllProjects([
      "title",
      "date",
      "slug",
      "coverImage",
      "content",
      "tools",
      "demo",
      "code",
    ]).map(async (project) => {
      project.content = await markdownToPlainText(project.content);
      if (project.content.length > 300) {
        if (project.content.endsWith(" ")) {
          project.content = project.content.substring(0, 301);
        } else {
          project.content = project.content.substring(0, 300);
        }
        project.content += "...";
      }
      return project;
    })
  );

  return {
    props: { allPosts, allProjects },
  };
};
