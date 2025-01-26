import { motion } from "framer-motion";
import { ReactNode } from "react";

const AlignedPage = ({ children, id }: { children: ReactNode; id: string }) => {
  return (
    <div
      id={id}
      style={{
        height: "100vh",
        padding: "0 0 0 30vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      {children}
    </div>
  );
};

export const Content = () => {
  return (
    <AlignedPage id="about">
      <section>
        <div style={{ flex: "80", padding: "0 5%", fontSize: "min(4vw,4vh)" }}>
          Cross-Domain Developer with expertise in Web/App Development, Data
          Engineering, and DevOps.
        </div>
        <div style={{ flex: "80", padding: "0 5%", fontSize: "min(4vw,4vh)" }}>
          Specializing in Full Stack Development, with a primary focus on
          Frontend technologies(Vanilla + ReactTS)
        </div>
      </section>
    </AlignedPage>
  );
};

export const Contact = () => {
  return (
    <AlignedPage id="contact">
      <Link href="./resume.pdf" imgSrc="./resume.svg" text="Resume" />
      <Link
        href="https://github.com/atmayama"
        imgSrc="./github.svg"
        text="Github"
      />
      <Link
        href="https://www.linkedin.com/in/atmayama/"
        imgSrc="./linkedin.svg"
        text="Linkedin"
      />
      <Link
        href="mailto:sushanthkille@gmail.com"
        imgSrc="./mail.svg"
        text="Email"
      />
    </AlignedPage>
  );
};

const Link = ({
  href,
  imgSrc,
  text,
}: {
  href: string;
  imgSrc: string;
  text: string;
}) => {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      style={{
        display: "flex",
        width: "20rem",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        gap: "1rem",

        cursor: "pointer",
        color: "whitesmoke",
        textDecoration: "none",

        padding: "1rem",
        border: "1px solid ",
        borderRadius: "1rem",
      }}
      href={href}
      target="_blank"
    >
      <img
        src={imgSrc}
        height="30"
        width="30"
        style={{ objectFit: "contain" }}
      />
      {text}
    </motion.a>
  );
};
