import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Switch from "react-switch";
import "./Components/Styles/App.css";

// Lazy load components
const Home = lazy(() => import("./Components/Home"));
const About = lazy(() => import("./Components/About"));
const Projects = lazy(() => import("./Components/Projects"));
const Contact = lazy(() => import("./Components/Contact"));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Simulate loading time with useEffect hook
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <HelmetProvider>
      <Router>
        {/* Navbar section */}
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div className={`app-wrapper ${isDarkMode ? "dark-mode" : "light-mode"}`}>
          {/* Add the switch toggle */}
          <div className="dark-mode-toggle">
            <Switch
              onChange={toggleDarkMode}
              checked={isDarkMode}
              onColor="#218c74"
              offColor="#e74c3c"
              onHandleColor="#fff"
              offHandleColor="#fff"
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              height={20}
              width={48}
              className="react-switch"
              id="dark-mode-toggle"
            />
          </div>

          <Suspense fallback={<div className="loading-container">Loading...</div>}>
            {/* Add loading animation with icons */}
            {isLoading ? (
              <div className="loading-container">
                <div className="icon">
                  {/* Use FontAwesome or any other icon library */}
                  <i className={`fa fa-spinner fa-spin fa-3x ${isDarkMode ? "text-white" : "text-black"}`}></i>
                </div>
              </div>
            ) : (
              <Routes>
                <Route
                  path="/"
                  element={
                    <TransitionGroup>
                      <CSSTransition
                        key="home"
                        in={true}
                        appear={true}
                        timeout={500}
                        classNames="fade"
                      >
                        <Home />
                      </CSSTransition>
                    </TransitionGroup>
                  }
                />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            )}
          </Suspense>
        </div>
        {/* Footer section */}
        <Footer isDarkMode={isDarkMode} />
      </Router>
    </HelmetProvider>
  );
};

export default App;
