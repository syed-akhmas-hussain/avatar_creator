import { useEffect, useRef } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Intro from "./Intro";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const MainApp: React.FC = () => {
  const loc = useLocation();
  const homeRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const { hash } = loc;
    if (hash === "/#home") {
      setTimeout(() => {
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else if (hash === "/#contact") {
      setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, [loc]);
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
