import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import Container from "../../components/container";
import Template from "../../components/template";
import PageTrailAnimation from "../../components/pageTrailAnimation";
import ContentTitle from "../../components/content/title";
import ContentHeader from "../../components/content/header";
import ContentBody from "../../components/content/body";
import Comment from "../../components/comment";
import ContentNavigation from "../../components/content/navigation";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import type { Post } from "../../interfaces";

type Props = {
  post: Post;
  morePosts: Post[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  const title = `${post.title}`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const currentIndex = morePosts.findIndex((p) => p.slug === post.slug);
  const nextPost = morePosts[currentIndex + 1] || null;
  const prevPost = morePosts[currentIndex - 1] || null;

  return (
    <Layout>
      <Template key={router.asPath}>
        <Container>
          {router.isFallback ? (
            <ContentTitle>Loading…</ContentTitle>
          ) : (
            <>
              <Head>
                <title>{`${title} | Alex Lampe`}</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PageTrailAnimation>
                <ContentHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                />
                <ContentBody content={post.content} />
                <Comment />
                <ContentNavigation
                  nextSlug={nextPost ? nextPost.slug : null}
                  prevSlug={prevPost ? prevPost.slug : null}
                  contentType="posts"
                />
              </PageTrailAnimation>
            </>
          )}
        </Container>
      </Template>
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
      morePosts: morePosts,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map(({ slug }) => {
      return {
        params: {
          slug: slug,
        },
      };
    }),
    fallback: false,
  };
}
