import Link from "next/link";
import Image from "next/image";

type HeaderProps = {
  // Add any props here if needed
};

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="bg-base-200">
      <div className="navbar m-auto max-w-7xl flex-col gap-2 sm:flex-row text-white">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl normal-case">
            <Image
              src="icons/home-icon.svg"
              alt="Home icon"
              width={24}
              height={24}
              className="mr-2"
            />
            <p>Alex Lampe</p>
          </Link>
        </div>

        <div className="flex-none">
          <Link
            target="_blank"
            href="https://flowcv.com/resume/4oihw2osgj"
            rel="noopener noreferrer"
            className="btn btn-ghost text-lg normal-case"
          >
            Resume
          </Link>
          <Link
            target="_blank"
            href="https://github.com/lampealex888"
            rel="noopener noreferrer"
            className="btn btn-circle btn-ghost"
          >
            <Image
              src="icons/github-icon.svg"
              alt="GitHub logo icon"
              width={24}
              height={24}
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/alex-lampe-8233691b4/"
            rel="noopener noreferrer"
            className="btn btn-circle btn-ghost"
          >
            <Image
              src="icons/linkedin-icon.svg"
              alt="LinkedIn logo icon"
              width={24}
              height={24}
            />
          </Link>
          <Link
            target="_blank"
            href="https://itch.io/profile/lampealex888"
            rel="noopener noreferrer"
            className="btn btn-circle btn-ghost"
          >
            <Image
              src="icons/itchio-icon.svg"
              alt="Itch.io logo icon"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
