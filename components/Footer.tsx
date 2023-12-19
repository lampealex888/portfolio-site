import Image from "next/image";
import { useState, useEffect } from 'react';

type Icon = {
  href: string;
  src: string;
  alt: string;
}

type DateOptions = {
  weekday: 'long';
  year: 'numeric';
  month: 'short';
  day: 'numeric';
};

type TimeOptions = {
  hour: 'numeric';
  minute: 'numeric';
  second: 'numeric';
  hour12: false;
};

type FooterProps = {
  // Add any props here if needed
};

const Footer: React.FC<FooterProps> = () => {
  const [isClient, setIsClient] = useState(false)
  
  const techs: Icon[] = [
    {
      href: "https://nextjs.org/",
      src: "icons/nextjs.svg",
      alt: "Next.js logo icon"
    },
    {
      href: "https://react.dev/",
      src: "icons/react.svg",
      alt: "React logo icon"
    },
    {
      href: "https://www.typescriptlang.org/",
      src: "icons/typescript.svg",
      alt: "Typescript logo icon"
    },
    {
      href: "https://tailwindcss.com/",
      src: "icons/tailwind-css.svg",
      alt: "Tailwind CSS logo icon"
    },
  ];

  const [currentDate, setCurrentDate] = useState<string>(
    new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    } as DateOptions)
      .split(',')
      .join('')
  );

  const [currentTime, setCurrentTime] = useState<string>(
    new Date().toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
    } as TimeOptions)
  );

  useEffect(() => {
    setIsClient(true);
    const intervalId = setInterval(() => {
      setCurrentDate(
        new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        } as DateOptions)
          .split(',')
          .join('')
      );
      setCurrentTime(
        new Date().toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: false,
        } as TimeOptions)
      );
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

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
        {isClient ? 
          <li>
            <div className="flex flex-col items-center justify-center">
              <p>{currentTime}</p>
              <p>{currentDate}</p>
            </div>
          </li> : null}
        <li className="flex flex-col items-center space-x-2">
          <p>Made with: </p>
          <div className="flex flex-row">
            {techs.map((tech) => (
              <a
                key={tech.src}
                href={tech.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image 
                src={tech.src}
                alt={tech.alt}
                height="24"
                width="24"
                className="mr-2" />
              </a>
            ))}
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
