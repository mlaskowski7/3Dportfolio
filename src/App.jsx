import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import { technologies1, technologies2, technologies3 } from "./constants";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-her-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech technologies={technologies1} />
        <Experience />
        <Tech technologies={technologies2} />
        <Works />
        <Tech technologies={technologies3} />
        <div className="realtive z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
