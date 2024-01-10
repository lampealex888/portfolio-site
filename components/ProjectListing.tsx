import type Project from "../interfaces/Project";
import ProjectPreview from "./projectPreview";

type Props = {
  projects: Project[];
};

const MoreStories = ({ projects }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {projects.map((project) => (
          <ProjectPreview
            key={project.slug}
            title={project.title}
            coverImage={project.coverImage}
            date={project.date}
            slug={project.slug}
            excerpt={project.excerpt}
            code={project.code}
            demo={project.demo}
            tools={project.tools}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
