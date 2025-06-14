import { Link, useNavigate } from "react-router-dom";
import "./../css/NavBar.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useSession } from "../providers/useSession";

type NavBarProps = {
  homeRef: React.RefObject<HTMLElement | null>;
  contactRef: React.RefObject<HTMLElement | null>;
};

const NavBar: React.FC<NavBarProps> = ({ homeRef, contactRef }) => {
  const navigate = useNavigate();
  const { setSession } = useSession();
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
            <Link
              to="/tryon"
              style={{ textDecoration: "none", color: "white" }}
            >
              TRY-ON
            </Link>
          </li>
          <li onClick={() => scrollToSection(contactRef)}>Contact</li>
          <li
            onClick={() => {
              setSession(false);
              localStorage.removeItem("generated_avatar");
              navigate("/");
            }}
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
