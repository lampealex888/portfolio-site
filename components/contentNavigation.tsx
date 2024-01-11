import Link from "next/link";

type Props = {
  nextSlug: string | null;
  prevSlug: string | null;
  contentType: string | null;
};

const ContentNavigation = ({ nextSlug, prevSlug, contentType }: Props) => {
  return (
    <>
      {nextSlug || prevSlug ? (
        <div className="my-6 flex flex-col justify-end sm:flex-row text-right">
          {prevSlug && (
            <Link
              className="text-2xl font-bold link hover:underline no-underline p-6"
              as={`/${contentType}/${prevSlug}`}
              href={`/${contentType}/${prevSlug}`}
            >
              ← Previous Project
            </Link>
          )}
          {nextSlug && (
            <Link
              className="text-2xl font-bold link hover:underline no-underline p-6"
              as={`/${contentType}/${nextSlug}`}
              href={`/${contentType}/${nextSlug}`}
            >
              Next Project →
            </Link>
          )}
        </div>
      ) : null}
    </>
  );
};

export default ContentNavigation;
