import "./css/App.css";
import { useRef } from "react";
import Footer from "./screens/Footer";
import Intro from "./screens/Intro";
import Home from "./screens/Home";
import NavBar from "./screens/NavBar";
import AboutUs from "./screens/AboutUs";
// import AuthNav from "./auth/AuthNav";
// import SignIn from "./auth/SignIn";
// import SignUp from "./auth/SignUp";

const App: React.FC = () => {
  const homeRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  return (
    <div id="app">
      <NavBar homeRef={homeRef} aboutRef={aboutRef} contactRef={contactRef} />
      <Home ref={homeRef} />
      <AboutUs ref={aboutRef} />
      <Intro />
      <Footer ref={contactRef} />
      {/* <AuthNav />
      <SignIn />
      <SignUp /> */}
    </div>
  );
};

export default App;
