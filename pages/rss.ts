import { Feed } from "feed";
import { getAllPosts } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

const generateRssFeed = async (posts: any) => {
  const site_url =
    process.env.NODE_ENV === "production"
      ? "https://alampe.com"
      : "http://localhost:3000";

  const feed = new Feed({
    title: "Alex Lampe | Blog",
    description: "Exploring the Intriguing: A Chronicle of My Fascinations and Discoveries.",
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
      id: site_url + "/posts/" + post.slug,
      link: site_url + "/posts/" + post.slug,
      image: site_url + post.coverImage,
      content: post.content,
      date: new Date(post.date),
      author: [
        {
          name: "Alex Lampe",
          email: "ajl146@pitt.edu",
          link: `${site_url}`,
        },
      ],
    });
  });

  return feed.rss2();
};

const Rss = () => {};

export async function getServerSideProps({ res }: any) {
  const allPosts = await Promise.all(
    getAllPosts(["title", "date", "slug", "coverImage", "content"]).map(
      async (post) => {
        post.content = await markdownToHtml(post.content);
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
