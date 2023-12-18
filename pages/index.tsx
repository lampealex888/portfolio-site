import Image from "next/image";
import Head from "next/head";
import { Link as ScrollLink } from "react-scroll";

import Header from "../components/Header";
import Footer from "../components/Footer";
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

      <body>
        <Header />

        <main className="container mx-auto">
          <section id="hero" className="text-center mt-16">
            <div>
              <Image
                src="/images/frog-pic.gif"
                alt="Profile picture"
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
              <h1 className="text-5xl font-bold mt-4">
                Hi! I'm Alex Lampe
              </h1>
              <p className="text-3xl mt-2">Student at Pitt - Web/Game Developer</p>
            </div>
            <div>
              <ScrollLink to="projects" smooth={true} duration={500}>
                <p className="mt-16 hover:underline">↓ Check out some of my projects below ↓</p>
              </ScrollLink>
            </div>
          </section>

          <section id="projects" className="mt-20">
            <h2 className="text-5xl font-bold mb-8">Projects</h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {projectList.map((project) => (
                <ProjectListing key={project.slug} project={project} />
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </body>
    </div>
  );
}

export default Home;