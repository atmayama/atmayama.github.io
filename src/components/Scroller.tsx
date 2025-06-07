import { motion, useScroll, useTransform } from "framer-motion";

export const Scroller = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <div
      style={{
        height: "100vh",
        position: "fixed",
        padding: "1rem",
        left: 0,
      }}
    >
      <motion.div style={{ height: `${rotate}%` }}></motion.div>
      <motion.div
        style={{
          width: "2em",
          height: "2rem",
          borderRadius: "20%",
          backgroundColor: "whitesmoke",
          rotate,
        }}
        transition={{ type: "spring", delay: 0.5 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      ></motion.div>
    </div>
  );
};
