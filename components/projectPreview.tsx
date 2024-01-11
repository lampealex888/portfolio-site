import DateFormatter from "./dateFormatter";
import CoverImage from "./coverImage";
import Link from "next/link";
import { markdownToPlainText } from "../lib/markdownFormatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  slug: string;
  content: string;
  tools: string[];
  demo: string;
  code: string;
};

const ProjectPreview = ({
  title,
  coverImage,
  date,
  slug,
  content,
  tools,
  demo,
  code,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          contentType="projects"
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
      <p className="text-lg leading-relaxed  mb-4">
        {content}{" "}
        <Link
          as={`/projects/${slug}`}
          href="/projects/[slug]"
          className="text-lg leading-relaxed link-hover"
        >
          Read more →
        </Link>
      </p>
      <div className="flex flex-row justify-around items-center">
        <span className="text-lg font-bold px-6">
          Tools used: <span className="font-normal">{tools.join(", ")}</span>
        </span>
        <a className="btn btn-outline px-3" href={demo}>
          Open Site
        </a>
        <a className="btn btn-outline px-3" href={code}>
          View Code
        </a>
      </div>
    </div>
  );
};

export default ProjectPreview;
