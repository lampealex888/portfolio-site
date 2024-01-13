import DateFormatter from "./dateFormatter";
import CoverImage from "./coverImage";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  slug: string;
  content: string;
};

const PostPreview = ({ title, coverImage, date, slug, content }: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          contentType="posts"
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">
        {content}{" "}
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="text-lg leading-relaxed link-hover"
        >
          Read more →
        </Link>
      </p>
    </div>
  );
};

export default PostPreview;
