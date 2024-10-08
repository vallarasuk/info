import React, { lazy, Suspense, useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { useMediaQuery } from "react-responsive";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/Helper/NotFound";
import ProfileCard from "./Components/Lib/ProfileCard";
import BottomNavbar from "./Components/Navbar/BottomNavbar";
import "./Components/Styles/App.css";
import "./Components/Styles/AppOne.css";

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

  const isSmallScreen = useMediaQuery({ maxWidth: 991 }); // Adjust the max width for small screens
  const isLargeScreen = useMediaQuery({ minWidth: 992 }); // Adjust the min width for large screens

  return (
    <HelmetProvider>
      <Router>
        <div className="appOne-wrapper">
          {/* Navbar and BottomNavbar section */}
          {isLargeScreen && <Navbar />}
          {isSmallScreen && <BottomNavbar />}

          <div className="container-fluid">
            <div className="row">
              {/* Left side - Your profile info card */}
              <div className="col-lg-4">{isLargeScreen && <ProfileCard />}</div>

              {/* Right side - Other content */}
              <div className="col-lg-8 px-lg-3 py-md-5">
                <div className="split-screen-container pt-md-4">
                  <Suspense
                    fallback={
                      <div className="loading-container">Loading...</div>
                    }
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
                        {/* Add the 404 page */}
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    )}
                  </Suspense>
                </div>
                {/* Footer section */}
                {/* <Footer /> */}
              </div>
            </div>
          </div>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default AppOne;
