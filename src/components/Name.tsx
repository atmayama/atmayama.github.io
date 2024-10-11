import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { NUMBER_OF_PAGES } from "../common";

export const Name = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const x = useTransform(
    scrollYProgress,
    [0, 1 / NUMBER_OF_PAGES, 1],
    [0, -100, -100]
  );
  const xPercent = useTransform(x, (i) => `${i}%`);

  return (
    <div
      style={{
        height: "100vh",
        width: "max-content",
        maxWidth: "100vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "start",
      }}
    >
      <motion.span
        style={{
          fontSize: "10vw",
          fontWeight: 700,
          fontFamily: "Roboto Mono",
          letterSpacing: "0rem",
          overflow: "clip",
          textWrap: "nowrap",
          margin: "auto",
          paddingLeft: "5%",
          borderRight: ".2em solid white",
          animation: "typed 2s steps(14),blink-caret 1s step-end infinite",
          x: xPercent,
          y: scrollY,
        }}
      >
        <main>Sushanth Kille</main>
      </motion.span>
    </div>
  );
};
