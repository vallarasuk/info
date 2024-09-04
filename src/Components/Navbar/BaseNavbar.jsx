import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Navbar as BootstrapNavbar, Container } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import "../Styles/Navbar.css";

const BaseNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const isXlDevice = useMediaQuery({ minWidth: 1200 });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Close the menu if it's open (optional)
      setShowMenu(false);
    }
  };

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
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a
                    href="#home"
                    className="nav-link mx-2"
                    onClick={() => scrollToSection("home")}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#about"
                    className="nav-link mx-2"
                    onClick={() => scrollToSection("about")}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#projects"
                    className="nav-link mx-2"
                    onClick={() => scrollToSection("projects")}
                  >
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#contact"
                    className="nav-link mx-2"
                    onClick={() => scrollToSection("contact")}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </BootstrapNavbar.Collapse>
          </Container>
        </BootstrapNavbar>
      </motion.div>
    </div>
  );
};

export default BaseNavbar;
