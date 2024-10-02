import { Name } from "./components/Name";
import { Content } from "./components/Content";
import { Scroller } from "./components/Scroller";
import { Awesome } from "./components/Awesome";
import { Background } from "./components/Background";

const App = () => {
  return (
    <div
      style={{
        height: "200vh",
        width: "100vw",
        overflow: "scroll",
      }}
    >
      <Scroller />
      <Awesome />
      <Background />
      <Name />
      <Content />
    </div>
  );
};

export default App;
