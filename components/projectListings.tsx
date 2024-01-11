import type Project from "../interfaces/project";
import ProjectPreview from "./projectPreview";

type Props = {
  projects: Project[];
};

const ProjectListings = ({ projects }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
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

export default ProjectListings;
