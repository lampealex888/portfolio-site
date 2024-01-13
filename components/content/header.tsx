import CoverImage from "./coverImage";
import ContentTitle from "./title";
import DateFormatter from "./dateFormatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

const Header = ({ title, coverImage, date }: Props) => {
  return (
    <>
      <ContentTitle>{title}</ContentTitle>
      <div className="hidden md:block md:mb-12"></div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} priority={true} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-xl">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default Header;
