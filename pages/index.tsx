import Head from "next/head";
import Post from "../interfaces/post";
import Project from "../interfaces/project";
import Layout from "../components/layout";
import Container from "../components/container";
import Hero from "../components/hero";
import PostListing from "../components/postListings";
import ProjectListing from "../components/projectListings";
import { getAllPosts } from "../lib/postAPI";
import { getAllProjects } from "../lib/projectAPI";
import { markdownToPlainText } from "../lib/markdownFormatter";

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
  const allPosts = await Promise.all(
    getAllPosts(["title", "date", "slug", "coverImage", "content"]).map(
      async (post) => {
        post.content = await markdownToPlainText(post.content);
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
    getAllProjects(["title", "date", "slug", "coverImage", "content"]).map(
      async (project) => {
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
      }
    )
  );
  
  return {
    props: { allPosts, allProjects },
  };
};
