import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { projectList } from "../utils/project-data";
import ProjectListing from "../components/project-listing";
import Clock from "../components/clock";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alex Lampe - Web/Game Developer</title>
        <meta name="description" content="Your brief description here." />
        <link rel="icon" href="/code-icon.svg" />
      </Head>

      <header>
        <nav>
          <Link href="/">
            <Image
              src="icons/home-icon.svg"
              alt="Home icon"
              width={24}
              height={24}
            />
          </Link>
          <ul>
            <li>
              <Link target="_blank" href="https://github.com/lampealex888">
                <Image
                  src="icons/github-icon.svg"
                  alt="GitHub logo icon"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/alex-lampe-8233691b4/"
              >
                <Image
                  src="icons/linkedin-icon.svg"
                  alt="LinkedIn logo icon"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link target="_blank" href="https://itch.io/profile/lampealex888">
                <Image
                  src="icons/itchio-icon.svg"
                  alt="Itch.io logo icon"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero">
          <Image
            src="/images/frog-pic.gif"
            alt="Profile picture"
            width={200}
            height={200}
          />
          <h1>Hey! I'm Alex Lampe</h1>
          <p>Web/Game Developer | Tech Enthusiast</p>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <p>
          I'm not just a web/game developer; I'm also an optimist and 
          altruist at heart. I believe in using technology to make a positive 
          impact and creating experiences that bring joy and value to users. 
          I'm excited to connect with like-minded individuals who share a 
          vision for a brighter, more inclusive digital future.
          </p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          {projectList.map((project) => (
            <ProjectListing key={project.slug} project={project} />
          ))}
        </section>
      </main>

      <footer id="contact">
        <Clock />
      </footer>
    </div>
  );
}
