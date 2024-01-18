import type { Project, Post } from "../../interfaces";
import Preview from "./preview";

type Props = {
  contentType: string;
  projects?: Project[];
  posts?: Post[];
};

const Listing = ({ contentType, projects, posts }: Props) => {
  return (
    <section className="mb-32">
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        {contentType === "projects" ? "Projects" : "Posts"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32">
        {contentType === "posts" &&
          posts &&
          posts.map((post) => (
            <Preview
              key={post.slug}
              contentType="posts"
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              content={post.content}
            />
          ))}
        {contentType === "projects" &&
          projects &&
          projects.map((project) => (
            <Preview
              key={project.slug}
              contentType="projects"
              title={project.title}
              coverImage={project.coverImage}
              date={project.date}
              slug={project.slug}
              content={project.content}
              tools={project.tools}
              demo={project.demo}
              code={project.code}
            />
          ))}
      </div>
    </section>
  );
};

export default Listing;
