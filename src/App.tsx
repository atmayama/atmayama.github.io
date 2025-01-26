import { Name } from "./components/Name";
import { Contact, Content } from "./components/Content";
import { Scroller } from "./components/Scroller";
import { Awesome } from "./components/Awesome";
import { Background } from "./components/Background";
import { NUMBER_OF_PAGES } from "./common";
import { Nav } from "./components/Nav";

const App = () => {
  return (
    <div
      style={{
        height: `${NUMBER_OF_PAGES}00vh`,
        width: "100vw",
        overflow: "scroll",
        scrollBehavior: "smooth",
      }}
    >
      <Scroller />
      <Nav />
      <Awesome />
      <Background />
      <Name />
      <Content />
      <Contact />
    </div>
  );
};

export default App;
