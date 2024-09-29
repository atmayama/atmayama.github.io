import { useRef } from "react";
import { Name } from "./Name";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Content } from "./Content";

const App = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const transform = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotate = useSpring(transform);

  return (
    <div
      style={{ height: "200vh", width: "100vw", overflow: "scroll" }}
      ref={ref}
    >
      <div
        style={{
          position: "fixed",
          top: "1rem",
          left: "1rem",
        }}
      >
        <motion.div
          style={{
            width: "2em",
            height: "2em",
            borderRadius: "20%",
            backgroundColor: "whitesmoke",
            rotate,
          }}
          transition={{ type: "spring" }}
        ></motion.div>
      </div>
      <Name />
      <Content />
    </div>
  );
};

export default App;
