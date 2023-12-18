import Image from "next/image";
import dynamic from "next/dynamic";

type Icon = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const Clock = dynamic(() => import("../components/Clock"), { ssr: false });

const Footer: React.FC = () => {
  const icons: Icon[] = [
    {
      src: "icons/nextjs.svg",
      alt: "Next.js logo icon",
      width: 24, 
      height: 24,
    },
    {
      src: "icons/react.svg",
      alt: "React logo icon",
      width: 24,
      height: 24,
    },
    {
      src: "icons/typescript.svg",
      alt: "Typescript logo icon",
      width: 24,
      height: 24,
    },
    {
      src: "icons/tailwind-css.svg",
      alt: "Tailwind CSS logo icon",
      width: 24,
      height: 24,
    },
  ];

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
            {icons.map((icon) => (
              <a
                key={icon.src}
                href={icon.src}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image {...icon} />
              </a>
            ))}
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
