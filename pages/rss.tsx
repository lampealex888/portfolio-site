import { Feed } from "feed";
import { getAllPosts } from "../lib/postAPI";
import { markdownToPlainText } from "../lib/markdownFormatter";

const generateRssFeed = async (posts: any) => {
  const site_url =
    process.env.NODE_ENV === "production"
      ? "https://alampe.com"
      : "http://localhost:3000";

  const feed = new Feed({
    title: "Alex Lampe | Blog",
    description: "Thoughts on software development, design, and more.",
    id: `${site_url}`,
    link: `${site_url}`,
    language: "en",
    image: `${site_url}/opengraph-image.png`,
    favicon: `${site_url}/favicon.ico`,
    author: {
      name: "Alex Lampe",
      email: "ajl146@pitt.edu",
      link: `${site_url}`,
    },
    copyright: "",
  });

  posts.forEach((post: any) => {
    feed.addItem({
      title: post.title,
      id: site_url + post.slug,
      link: site_url + post.slug,
      description: post.content,
      date: new Date(post.date),
    });
  });

  return feed.rss2();
};

const Rss = () => {};

export async function getServerSideProps({ res }: any) {
  const allPosts = await Promise.all(
    getAllPosts(["title", "date", "slug", "coverImage", "content"]).map(
      async (post) => {
        post.content = await markdownToPlainText(post.content);
        if (post.content.length > 300) {
          if (post.content.endsWith(" ")) {
            post.content = post.content.substring(0, 301);
          } else {
            post.content = post.content.substring(0, 300);
          }
          post.content += "...";
        }
        return post;
      }
    )
  );

  const rss = await generateRssFeed(allPosts);

  res.setHeader("Content-Type", "text/xml");
  res.write(rss);
  res.end();

  return { props: {} };
}

export default Rss;
