import Link from "next/link";

type Props = {
  nextSlug: string | null;
  prevSlug: string | null;
  contentType: string | null;
};

const Navigation = ({ nextSlug, prevSlug, contentType }: Props) => {
  return (
    <>
      {nextSlug || prevSlug ? (
        <div className="my-6 flex flex-col justify-end sm:flex-row text-right">
          {prevSlug && (
            <Link
              className="text-xl font-bold link-hover no-underline p-6"
              href={`/${contentType}/${prevSlug}`}
            >
              {contentType === "posts"
                ? "← Previous Post"
                : "← Previous Project"}
            </Link>
          )}
          {nextSlug && (
            <Link
              className="text-xl font-bold link-hover no-underline p-6"
              href={`/${contentType}/${nextSlug}`}
            >
              {contentType === "posts" ? "Next Post →" : "Next Project →"}
            </Link>
          )}
        </div>
      ) : null}
    </>
  );
};

export default Navigation;
