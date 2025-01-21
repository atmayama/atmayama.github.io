export const Content = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
      <div
        style={{
          width: "0px",
          borderRight: "2px dotted whitesmoke",
          borderRadius: "1px",
          height: "50%",
        }}
      ></div>
      <div
        style={{
          flex: "20",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          padding: "0 5%",
          alignItems: "start",
          gap: "1rem",

          fontSize: "1.2rem",
        }}
      >
        <a
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            gap: "1rem",

            cursor: "pointer",
            color: "whitesmoke",
            textDecoration: "none",
          }}
          href="./resume.pdf"
          target="_blank"
        >
          <img
            src="./resume.svg"
            height="30"
            width="30"
            style={{ objectFit: "contain" }}
          />{" "}
          Resume
        </a>
        <a
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            gap: "1rem",
            cursor: "pointer",

            color: "whitesmoke",
            textDecoration: "none",
          }}
          href="https://github.com/atmayama"
          target="_blank"
        >
          <img
            src="./github.svg"
            height="30"
            width="30"
            style={{ objectFit: "contain" }}
          />
          Github
        </a>
        <a
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            gap: "1rem",

            cursor: "pointer",

            color: "whitesmoke",
            textDecoration: "none",
          }}
          href="https://www.linkedin.com/in/atmayama/"
          target="_blank"
        >
          <img
            src="./linkedin.svg"
            height="30"
            width="30"
            style={{ objectFit: "contain" }}
          />{" "}
          Linkedin
        </a>
        <a
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
            gap: "1rem",

            cursor: "pointer",

            color: "whitesmoke",
            textDecoration: "none",
          }}
          href="mailto:sushanthkille@gmail.com"
          target="_blank"
        >
          <img
            src="./mail.svg"
            height="30"
            width="30"
            style={{ objectFit: "contain" }}
          />
          Email
        </a>
      </div>
    </div>
  );
};
