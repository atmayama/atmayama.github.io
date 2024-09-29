export const Name = () => {
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
      <span
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
        }}
      >
        Sushanth Kille
      </span>
    </div>
  );
};
