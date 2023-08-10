import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import "../Styles/Navbar.css";
// import HomePageData from "../Constant/HomeContent";

const CustomNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isXlDevice = useMediaQuery({ minWidth: 1200 });

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* Hide the Bootstrap Navbar on mobile devices */}
      <BootstrapNavbar expand="lg" className="custom-navbar" sticky="top">
        <Container fluid={isXlDevice}>
          <BootstrapNavbar.Brand className="text-white text-uppercase" href="/">
            <img
              // src={HomePageData.iconImage}
              src="https://us.123rf.com/450wm/arbuzu/arbuzu1811/arbuzu181100005/111437501-letter-v-logo-icon-design-template-elements.jpg?ver=6"
              alt="logo icon"
              className="logo-icon"
            />
          </BootstrapNavbar.Brand>
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
