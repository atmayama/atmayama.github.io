export const Nav = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        padding: "1rem",

        position: "fixed",
        top: "0",
        right: "0",
      }}
    >
      <a href="/" style={{ color: "white" }}>
        home
      </a>
      <a href="#about" style={{ color: "white" }}>
        about
      </a>
      <a href="#contact" style={{ color: "white" }}>
        contact
      </a>
    </div>
  );
};
