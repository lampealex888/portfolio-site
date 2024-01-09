import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/Container";
import PostBody from "../../components/ContentBody";
import PostHeader from "../../components/ContentHeader";
import Layout from "../../components/Layout";
import { getPostBySlug, getAllPosts } from "../../lib/PostAPI";
import PostTitle from "../../components/ContentTitle";
import Head from "next/head";
import markdownToHtml from "../../lib/MarkdownToHtml";
import type PostType from "../../interfaces/Post";
import Link from "next/link";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  // Add `posts` to the function parameters
  const router = useRouter();
  const title = `${post.title}`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const currentIndex = morePosts.findIndex((p) => p.slug === post.slug);
  const nextPost = morePosts[currentIndex + 1] || null;

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />
              <PostBody content={post.content} />
            </article>
            {nextPost && (
              <div className="mb-32">
                <Link
                  className="text-2xl font-bold flex justify-end link hover:underline no-underline"
                  as={`/posts/${nextPost.slug}`}
                  href={`/posts/${nextPost.slug}`}
                >
                  Next Post: {nextPost.title} →
                </Link>
              </div>
            )}
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");
  const morePosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);

  return {
    props: {
      post: {
        ...post,
        content,
      },
      morePosts,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
