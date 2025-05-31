import "./../css/NavBar.css";
import React from "react";

type NavBarProps = {
  homeRef: React.RefObject<HTMLElement | null>;
  aboutRef: React.RefObject<HTMLElement | null>;
  contactRef: React.RefObject<HTMLElement | null>;
};

const NavBar: React.FC<NavBarProps> = ({ homeRef, aboutRef, contactRef }) => {
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id="navCont">
      <div id="navLeft">
        <h4>SNAZZY AVATAR</h4>
      </div>
      <div id="navRight">
        <ul>
          <li onClick={() => scrollToSection(homeRef)}>Home</li>
          <li>TRY-ON</li>
          <li onClick={() => scrollToSection(aboutRef)}>About Us</li>
          <li onClick={() => scrollToSection(contactRef)}>Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
