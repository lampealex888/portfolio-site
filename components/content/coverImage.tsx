import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  priority?: boolean;
  contentType?: string;
};

const CoverImage = ({ title, src, slug, priority, contentType }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={
        "shadow-sm w-full hover:shadow-lg transition-shadow duration-200"
      }
      priority={priority}
      width={1300}
      height={630}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link
          as={`/${contentType}/${slug}`}
          href={`/${contentType}/[slug]`}
          aria-label={title}
        >
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
