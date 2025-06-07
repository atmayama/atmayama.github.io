import { motion, useScroll, useTransform } from "framer-motion";
import { NUMBER_OF_PAGES } from "../common";

export const Name = () => {
  const { scrollYProgress } = useScroll({ axis: "y", smooth: 0 });
  const range = useTransform(scrollYProgress, [0,1/NUMBER_OF_PAGES,1],[50,5,5]);
  const top = useTransform(range, i=>`max(5vw,${i}vh)`)
  const left = useTransform(range, i=>`max(5vh,${i}vw)`)
  const scale = useTransform(scrollYProgress, [0,1/NUMBER_OF_PAGES,1],[1,0.25,0.25]);
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
          width: "max-content",
          position:"fixed",
          top,
          left,
          scale,
          translate: "-50% -50%",
        }}
      >
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>

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
          </div>
      </motion.div>
    </div>
  );
};
