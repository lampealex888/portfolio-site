import Image from "next/image";
import dynamic from "next/dynamic";

const Clock = dynamic(() => import("../components/Clock"), { ssr: false });

const Footer: React.FC = () => {
  return (
    <footer className="text-white p-4">
      <ul className="flex items-center justify-between">
        <li>
          <a 
            href={`mailto:lampealex888@gmail.com`} 
            target="_blank"
            className="hover:underline"
          >
            Connect with me
          </a>
        </li>
        <li>
          <Clock />
        </li>
        <li className="flex flex-col items-center space-x-2">
          <p>Made with: </p>
          <div className="flex flex-row">
            <a href="https://nextjs.org/" target="_blank">
              <Image
                src="icons/nextjs.svg"
                alt="Next.js logo icon"
                width={24}
                height={24}
              />
            </a>
            <a href="https://reactjs.org/" target="_blank">
              <Image
                src="icons/react.svg"
                alt="React logo icon"
                width={24}
                height={24}
              />
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank">
              <Image
                src="icons/typescript.svg"
                alt="Typescript logo icon"
                width={24}
                height={24}
              />
            </a>
            <a href="https://tailwindcss.com/" target="_blank">
              <Image
                src="icons/tailwind-css.svg"
                alt="Tailwind CSS logo icon"
                width={24}
                height={24}
              />
            </a>
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
