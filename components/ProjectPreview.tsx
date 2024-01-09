import DateFormatter from "./DateFormatter";
import CoverImage from "./CoverImage";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  code: string;
  demo: string;
  tools: string[];
};

const ProjectPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  code,
  demo,
  tools,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          content="projects"
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/projects/${slug}`}
          href="/projects/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <p className="text-md mb-4">Tools Used: {tools.join(", ")}</p>
      <div className="flex justify-around">
        <Link href={demo} className="btn btn-accent w-1/3">
          <p>Open Site</p>
        </Link>
        <Link href={code} className="btn btn-secondary w-1/3">
          <p>View Code</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectPreview;
