import CoverImage from "./coverImage";
import PostTitle from "./contentTitle";
import DateFormatter from "./dateFormatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

const ContentHeader = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12"></div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-xl">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default ContentHeader;
