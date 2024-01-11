import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import ContentBody from "../../components/contentBody";
import ContentHeader from "../../components/contentHeader";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/postAPI";
import PostTitle from "../../components/contentTitle";
import Head from "next/head";
import { markdownToHtml } from "../../lib/markdownFormatter";
import type PostType from "../../interfaces/post";
import ContentNavigation from "../../components/contentNavigation";
import PageTrailAnimation from "../../components/pageTrailAnimation";

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
  const prevPost = morePosts[currentIndex - 1] || null;
  console.log(nextPost, prevPost);

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <Head>
              <title>{`${title} | Alex Lampe`}</title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <article>
              <PageTrailAnimation>
                <ContentHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                />
                <ContentBody content={post.content} />
              </PageTrailAnimation>
              <ContentNavigation
                nextSlug={nextPost ? nextPost.slug : null}
                prevSlug={prevPost ? prevPost.slug : null}
                contentType="posts"
              />
            </article>
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
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");
  const morePosts = getAllPosts(["title", "date", "slug"]);

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
