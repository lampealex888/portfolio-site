type Props = {
  content: string;
};

const Body = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className="prose prose-img:rounded-xl"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default Body;
