import DateFormatter from "./dateFormatter";
import CoverImage from "./coverImage";
import Link from "next/link";

type Props = {
  contentType: string;
  title: string;
  coverImage: string;
  date: string;
  slug: string;
  content: string;
  wordCount?: string;
  readingTime?: string;
  tools?: string[];
  demo?: string;
  code?: string;
};

const Preview = ({
  contentType,
  title,
  coverImage,
  date,
  slug,
  content,
  wordCount,
  readingTime,
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
          contentType={contentType}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/${contentType}/${slug}`}
          href={`/${contentType}/[slug]`}
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4 flex flex-row justify-between">
        <DateFormatter dateString={date} />
        {wordCount && readingTime && (
        <div>
          {wordCount} words ({readingTime} min read)
        </div>
      )}
      </div>
      <p className="text-lg leading-relaxed mb-4">
        {content}{" "}
        <Link
          as={`/${contentType}/${slug}`}
          href={`/${contentType}/[slug]`}
          className="text-lg leading-relaxed link-hover link-primary whitespace-nowrap"
        >
          Read more →
        </Link>
      </p>
      {tools && demo && code && (
        <div className="flex flex-col items-start xl:flex-row xl:items-center xl:justify-between">
          <span className="text-lg font-bold mb-4 xl:mb-0 xl:w-3/5">
            Tools used: <span className="font-normal">{tools.join(", ")}</span>
          </span>
          <div className="flex flex-row gap-2">
            <a className="btn btn-neutral" href={demo}>
              View Live Demo
            </a>
            <a className="btn btn-ghost" href={code}>
              View on GitHub
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Preview;
