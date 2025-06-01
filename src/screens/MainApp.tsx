import { useRef } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Intro from "./Intro";
import Footer from "./Footer";

const MainApp: React.FC = () => {
  const homeRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  return (
    <div>
      <NavBar homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} />
      <Home ref={homeRef} />
      <AboutUs ref={aboutRef} />
      <Intro />
      <Footer ref={contactRef} />
    </div>
  );
};

export default MainApp;
