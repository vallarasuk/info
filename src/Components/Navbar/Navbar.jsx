import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const CustomNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* Hide the Bootstrap Navbar on mobile devices */}
      <BootstrapNavbar
        expand="lg"
        className="custom-navbar"
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

    </>
  );
};

export default CustomNavbar;
