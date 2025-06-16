import { Link, useNavigate, useLocation } from "react-router-dom";
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
  const loc = useLocation();
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
          {loc.pathname !== "/home" ? (
            <li
              onClick={() =>
                loc.pathname === "/home"
                  ? scrollToSection(homeRef)
                  : navigate("/#home")
              }
            >
              Home
            </li>
          ) : (
            <></>
          )}
          {loc.pathname === "/home" ? (
            <li>
              <Link
                to="/tryon"
                style={{ textDecoration: "none", color: "white" }}
              >
                TRY-ON
              </Link>
            </li>
          ) : (
            <></>
          )}
          {loc.pathname === "/home" ? (
            <li
              onClick={() =>
                loc.pathname === "/home"
                  ? scrollToSection(contactRef)
                  : navigate("/#contact")
              }
            >
              Contact
            </li>
          ) : (
            <></>
          )}
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
