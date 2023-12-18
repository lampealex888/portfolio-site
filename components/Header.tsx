import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="text-white p-4">
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="icons/home-icon.svg"
            alt="Home icon"
            width={24}
            height={24}
            className="mr-2"
          />
          Alex Lampe
        </Link>

        <ul className="flex space-x-4">
          <li>
            {/* TODO: Add resume link */}
            <a href="" className="hover:underline">
              Resume
            </a>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://github.com/lampealex888"
            >
              <Image
                src="icons/github-icon.svg"
                alt="GitHub logo icon"
                width={24}
                height={24}
                className=""
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
                className=""
              />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://itch.io/profile/lampealex888"
            >
              <Image
                src="icons/itchio-icon.svg"
                alt="Itch.io logo icon"
                width={24}
                height={24}
                className=""
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
