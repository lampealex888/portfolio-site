import Image from "next/image";
import Head from "next/head";

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

      <Header />

      <main className="container mx-auto p-4">
        <section id="hero" className="text-center mt-16">
          <Image
            src="/images/frog-pic.gif"
            alt="Profile picture"
            width={200}
            height={200}
            className="rounded-full mx-auto"
          />
          <div>
            <h1 className="text-xl font-bold underline mt-4">
              Hi! I'm Alex Lampe
            </h1>
            <p className="text-lg">Student at Pitt</p>
            <p className="text-lg">Web/Game Developer</p>
          </div>
        </section>

        <section id="projects" className="mt-16">
          <h2 className="text-5x1 font-bold mb-8">Projects</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projectList.map((project) => (
              <ProjectListing key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;