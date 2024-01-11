import PostPreview from "./postPreview";
import type Post from "../interfaces/post";

type Props = {
  posts: Post[];
};

const PostListings = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
        Blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            content={post.content}
          />
        ))}
      </div>
    </section>
  );
};

export default PostListings;
