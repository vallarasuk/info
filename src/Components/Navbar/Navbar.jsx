import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";

const CustomNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const isXlDevice = useMediaQuery({ minWidth: 1200 });

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <BootstrapNavbar expand="lg" className="custom-navbar" sticky="top">
          <Container fluid={isXlDevice}>
            <BootstrapNavbar.Brand
              className="text-white text-uppercase"
              href="/"
            >
              <img
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
                <NavLink
                  to="/"
                  className="nav-link mx-2"
                  activeClassName="active"
                  exact
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="nav-link mx-2"
                  activeClassName="active"
                >
                  About
                </NavLink>
                <NavLink
                  to="/projects"
                  className="nav-link mx-2"
                  activeClassName="active"
                >
                  Projects
                </NavLink>
                <NavLink
                  to="/contact"
                  className="nav-link mx-2"
                  activeClassName="active"
                >
                  Contact
                </NavLink>
              </Nav>
            </BootstrapNavbar.Collapse>
          </Container>
        </BootstrapNavbar>
      </motion.div>
    </div>
  );
};

export default CustomNavbar;
