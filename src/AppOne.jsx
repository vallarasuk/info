import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";
import "./Components/Styles/AppOne.css";
import ProfileCard from "./Components/ProfileCard";

// Lazy load components
const Home = lazy(() => import("./Components/Home"));
const About = lazy(() => import("./Components/About"));
const Projects = lazy(() => import("./Components/Projects"));
const Contact = lazy(() => import("./Components/Contact"));

const AppOne = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time with useEffect hook
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="appOne-wrapper">
          {/* Navbar section */}
          <Navbar />

          <div className="split-screen-container">
            {/* Left side - Your profile info card */}
            <ProfileCard />

            {/* Right side - Other content */}
            <div className="right-side">
              <Suspense
                fallback={<div className="loading-container">Loading...</div>}
              >
                {/* Add loading animation with icons */}
                {isLoading ? (
                  <div className="loading-container">
                    <div className="icon">
                      {/* Use FontAwesome or any other icon library */}
                      <i className="fa fa-spinner fa-spin fa-3x text-black"></i>
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
          </div>

          {/* Footer section */}
          {/* <Footer /> */}
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default AppOne;
