type Project = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string
  }
  content: string;
  code: string;
  demo: string;
  tools: string[];
};

export default Project;
