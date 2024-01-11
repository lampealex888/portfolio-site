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
};

const ProjectPreview = ({ title, coverImage, date, slug, content }: Props) => {
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
      <p className="text-lg leading-relaxed mb-4">
        {content.length > 225 ? (
          <>
            {content.endsWith(" ") ? content.substring(0, 301) : content.substring(0, 300) + "... "}
            <Link
              as={`/projects/${slug}`}
              href="/projects/[slug]"
              className="text-lg leading-relaxed mb-4 link-hover"
            >
              Read more →
            </Link>
          </>
        ) : (
          content
        )}
      </p>
    </div>
  );
};

export default ProjectPreview;
