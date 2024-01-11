import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/BottomNavbar.css";

const BottomNavbar = () => {
  const location = useLocation();

  // Mapping of route paths to section IDs
  const sections = {
    "/": "home",
    "/about": "about",
    "/projects": "projects",
    "/contact": "contact",
  };

  // Function to scroll to the specified section smoothly
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


//version updated
  return (
    <nav className="navbar fixed-bottom navbar-light bg-light bottom-navbar">
      {Object.keys(sections).map((path) => (
        <Link
          to={path}
          key={path}
          onClick={() => scrollToSection(sections[path])}
          className={`bottom-navbar__item nav-link ${
            location.pathname === path ? "active" : ""
          }`}
        >
          {path === "/" && (
            <FontAwesomeIcon icon={faHome} className="bottom-navbar__icon" />
          )}
          {path === "/about" && (
            <FontAwesomeIcon icon={faUser} className="bottom-navbar__icon" />
          )}
          {path === "/projects" && (
            <FontAwesomeIcon
              icon={faBriefcase}
              className="bottom-navbar__icon"
            />
          )}
          {path === "/contact" && (
            <FontAwesomeIcon
              icon={faEnvelope}
              className="bottom-navbar__icon"
            />
          )}
        </Link>
      ))}
    </nav>
  );
};

export default BottomNavbar;
