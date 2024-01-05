import Image from "next/image";
import Head from "next/head";
import { Link as ScrollLink } from "react-scroll";

import { projectList } from "../utils/project-data";
import ProjectListing from "../components/ProjectListing";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Alex Lampe</title>
        <meta name="description" content="Your brief description here." />
        <link rel="icon" href="/code-icon.svg" />
      </Head>
      <div className="hero">
        <div className="hero-content">
          <div className="">
            <Image
              src="/images/frog-pic.gif"
              alt="Profile picture"
              width={400}
              height={400}
              className="rounded-full mx-auto"
            />
            <h1 className="text-5xl font-bold mt-5">Hello there!</h1>
            <p className="py-6">
              Welcome to my digital domain, where creativity meets code and
              pixels come to life. I'm a passionate web/game developer and
              programmer, dedicated to creating playful experiences through the
              fusion of innovative technology and artistic expression.
            </p>
            <ScrollLink to="projects" smooth={true} duration={500}>
              <button className="btn btn-primary">Check out my stuff ↓</button>
            </ScrollLink>
          </div>
        </div>
      </div>
      <div
        id="projects"
        className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {projectList.map((project) => (
          <ProjectListing key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Home;
