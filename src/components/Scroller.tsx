import { motion, useScroll, useTransform } from "framer-motion";

export const Scroller = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const move = useTransform(scrollYProgress, [0, 1], [0, 32]);

  return (
    <div
      style={{
        height: "100vh",
        position: "fixed",
        padding: "1rem",
        left: 0,
      }}
    >
      <motion.div
        style={{
          width: "2em",
          height: "2em",
          borderRadius: "20%",
          backgroundColor: "whitesmoke",
          translateY: move,
          rotate,
        }}
        transition={{ type: "spring" }}
      ></motion.div>
    </div>
  );
};
