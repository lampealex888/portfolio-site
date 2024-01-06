import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

import { projectList } from "../utils/project-data";
import ProjectListing from "../components/ProjectListing";

const Home: React.FC = () => {
  return (
    <div className="m-auto min-w-[300px] max-w-7xl">
      <div className="hero">
        <div className="hero-content my-20 flex flex-col md:flex-row-reverse md:justify-items-start">
          <Image
            src="/images/frog-pic.gif"
            alt="Profile picture"
            width="200"
            height="200"
            className="rounded-full mx-auto"
          />
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold mt-5">Hi there!</h1>
            <p className="py-6">
              Welcome to my portfolio! I'm a passionate web/game
              developer and computer science student at the University of
              Pittsburgh. I love to create and learn new things, and I'm always
              looking for opportunities to do so. I'm currently seeking a summer
              2024 internship, so if you're interested in working with me,
              please reach out!
            </p>
            <ScrollLink to="projects" smooth={true} duration={500}>
              <button className="btn btn-primary">Check out my stuff ↓</button>
            </ScrollLink>
          </div>
        </div>
      </div>
      <div id="projects" className="my-20 grid grid-cols-1 gap-4 md:grid-cols-2">
        {projectList.map((project) => (
          <ProjectListing key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Home;
