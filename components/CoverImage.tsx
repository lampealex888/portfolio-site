import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  content?: string;
};

const CoverImage = ({ title, src, slug, content }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={
        "shadow-sm w-full hover:shadow-lg transition-shadow duration-200"
      }
      width={1300}
      height={630}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link
          as={`/${content}/${slug}`}
          href={`/${content}/${slug}`}
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
