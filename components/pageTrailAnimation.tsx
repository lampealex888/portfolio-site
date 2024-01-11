import { useTrail, animated } from "@react-spring/web";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Trail = ({ children }: Props)  => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200},
    from: { opacity: 0, transform: "translate3d(0, 30px, 0)" },
    to: { opacity: 1, transform: "translate3d(0, 0px, 0)"},
  });
  return (
    <div>
      {trail.map(({ ...style }, index) => (
        <animated.div key={index} style={style}>
          <animated.div>{items[index]}</animated.div>
        </animated.div>
      ))}
    </div>
  );
};

export default Trail;