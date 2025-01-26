import { motion, useScroll, useTransform } from "framer-motion";
import { NUMBER_OF_PAGES } from "../common";

export const Name = () => {
  const { scrollY, scrollYProgress } = useScroll({ axis: "y", smooth: 0 });
  const x = useTransform(
    scrollYProgress,
    [0, 1 / NUMBER_OF_PAGES, 1],
    [0, 35, 35]
  );
  const xLeft = useTransform(x, (i) => `${-i}vw`);

  return (
    <div
      id="home"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          y: scrollY,
          x: xLeft,
          width: "max-content",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/blue-gradient.png"
          style={{
            height: "min(25vh,35vw)",
          }}
        ></img>
        <span
          style={{
            fontSize: "min(4vw,4vh)",
            fontWeight: 700,
            letterSpacing: "0",
            textAlign: "center",
          }}
        >
          <main>Sushanth Kille</main>
        </span>
      </motion.div>
    </div>
  );
};
