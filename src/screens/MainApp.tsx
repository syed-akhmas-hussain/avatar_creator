import { useRef } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Intro from "./Intro";
import Footer from "./Footer";

const MainApp: React.FC = () => {
  const homeRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  return (
    <div>
      <NavBar homeRef={homeRef} contactRef={contactRef} />
      <Home ref={homeRef} />
      <Intro />
      <Footer ref={contactRef} />
    </div>
  );
};

export default MainApp;
