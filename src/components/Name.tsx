import { motion, useScroll, useTransform } from "framer-motion";
import { NUMBER_OF_PAGES } from "../common";

export const Name = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const x = useTransform(
    scrollYProgress,
    [0, 1 / NUMBER_OF_PAGES, 1],
    [0, 150, 150]
  );
  const xLeft = useTransform(x, (i) => `${-i}vh`);
  const xRight = useTransform(x, (i) => `${i}vh`);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        src="/blue-gradient.png"
        style={{
          height: "25vh",
          y: scrollY,
          x: xRight,
        }}
      ></motion.img>
      <motion.span
        initial={{ opacity: 0, scaleX: 0.5 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: "min(5vw,5vh)",
          fontWeight: 700,
          letterSpacing: "0rem",
          textAlign: "center",
          x: xLeft,
          y: scrollY,
        }}
      >
        <main>Sushanth Kille</main>
      </motion.span>
    </div>
  );
};
