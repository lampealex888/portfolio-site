import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Title = ({ children }: Props) => {
  return (
    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left mt-16">
      {children}
    </h1>
  );
};

export default Title;