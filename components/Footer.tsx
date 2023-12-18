import Image from "next/image";
import React, { useState, useEffect } from 'react';

type Icon = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

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
        <li>
        <div className="flex flex-col items-center justify-center">
          <p>{currentTime}</p>
          <p>{currentDate}</p>
        </div>
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
