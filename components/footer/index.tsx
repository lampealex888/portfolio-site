import Link from "next/link";
import Clock from "./clock";
import { useEffect, useState } from "react"
import ThemeChange from "./themeChange";


const Footer = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="bg-base-300 py-8 px-4 min-w-[300px]">
      <div className="flex mx-auto max-w-7xl items-center justify-between flex-col gap-2 sm:flex-row">
        <Link
          href={`mailto:ajl146@pitt.edu`}
          className="btn btn-ghost link no-underline text-lg normal-case"
        >
          Contact
        </Link>
        {isClient ? <Clock /> : null }
        <ThemeChange />
      </div>
    </div>
  );
};

export default Footer;
