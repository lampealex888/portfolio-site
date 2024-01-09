import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content flex flex-col md:flex-row-reverse md:justify-between mt-16 mb-16 md:mb-12">
        <Image
          src="/assets/frog-pic.gif"
          alt="Profile picture"
          width="200"
          height="200"
          className="rounded-full"
        />
        <div className="max-w-lg">
          <h1 className="text-6xl md:text-7xl font-bold py-3">Hi there!</h1>
          <p className="text-xl py-3">
            Welcome to my portfolio! I'm a passionate web/game developer and
            computer science student at the University of Pittsburgh. I love to
            create and learn new things, and I'm always looking for
            opportunities to do so.
          </p>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="flex justify-center py-3"
          >
            <button className="btn btn-primary">Check out my stuff ↓</button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
