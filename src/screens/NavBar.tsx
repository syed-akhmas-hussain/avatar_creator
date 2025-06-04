import { Link } from "react-router-dom";
import "./../css/NavBar.css";
import React from "react";

type NavBarProps = {
  homeRef: React.RefObject<HTMLElement | null>;
  contactRef: React.RefObject<HTMLElement | null>;
};

const NavBar: React.FC<NavBarProps> = ({ homeRef, contactRef }) => {
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
          <li>
            <Link to="/tryon" style={{ color: "white" }}>
              TRY-ON
            </Link>
          </li>
          <li onClick={() => scrollToSection(contactRef)}>Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
