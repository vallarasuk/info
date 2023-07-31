import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css"; // Import your custom CSS for the navbar

const CustomNavbar = ({ isDarkMode, toggleDarkMode }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* Hide the Bootstrap Navbar on mobile devices */}
      <BootstrapNavbar
        expand="lg"
        className={`custom-navbar ${isDarkMode ? "dark-mode" : "light-mode"}`}
        sticky="top" // Add sticky="top" to make the navbar sticky
      >
        <Container fluid>
          <BootstrapNavbar.Brand href="/">Your Logo</BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
          </BootstrapNavbar.Toggle>
          <BootstrapNavbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>

      {/* Render the custom mobile navbar */}
      <div className="mobile-navbar">
        <div
          className={`hamburger ${showMenu ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className={`mobile-menu ${showMenu ? "show-menu" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setShowMenu(false)}>
            Home
          </Link>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="nav-link"
            onClick={() => setShowMenu(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            onClick={() => setShowMenu(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default CustomNavbar;
