// src/AppMain.js
import React, { lazy, Suspense, useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router } from "react-router-dom";
import HomeContent from "./Components/Constant/HomeContent";
import SeoMetaTags from "./Components/Constant/SeoMetaTags";
import ContentSection from "./Components/ContentSection";
import {
  GoogleAnalytics,
  initializeAnalytics,
} from "./Components/googleAnalytics/analytics"; // Import GA components
import ProfileCard from "./Components/Lib/ProfileCard";
import "./Components/Styles/App.css";
import "./Components/Styles/AppOne.css";

import { RiseLoader } from "react-spinners";

// Lazy load components
const Home = lazy(() => import("./Components/Home"));
const About = lazy(() => import("./Components/About"));
const Projects = lazy(() => import("./Components/Projects"));
const Contact = lazy(() => import("./Components/Contact"));

const AppMain = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { name, role, titleIcon, keywords } = HomeContent;

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed

    // Initialize Google Analytics
    initializeAnalytics();
  }, []);

  const isSmallScreen = useMediaQuery({ maxWidth: 991 }); // Adjust the max width for small screens
  const isLargeScreen = useMediaQuery({ minWidth: 992 }); // Adjust the min width for large screens

  return (
    <HelmetProvider>
      <SeoMetaTags
        name={name}
        role={role}
        titleIcon={titleIcon}
        keywords={keywords}
      />

      <Router>
        {/* Initialize and track Google Analytics */}
        <GoogleAnalytics />

        <div className="appOne-wrapper">
          {/* Navbar and BottomNavbar section */}
          {/* {isLargeScreen && <Navbar />} */}
          {/* {isSmallScreen && <BottomNavbar />} */}
          <div className="container-fluid p-0 p-sm-3">
            <div className="row">
              {/* Left side - Your profile info card */}
              <div className="col-lg-4 ps-0">
                {isLargeScreen && <ProfileCard />}
              </div>

              {/* Right side - Other content */}
              <div className="col-lg-8 px-lg-3 py-md-2">
                <div className="split-screen-container pt-md-4">
                  <Suspense
                    fallback={
                      <div className="loading-container">Loading...</div>
                    }
                  >
                    {isLoading ? (
                      <div className="loading-container">
                        <div className="icon">
                          <RiseLoader color="#000000" />
                          {/* <i className="fa fa-spinner fa-spin fa-3x text-secondary"></i> */}
                        </div>
                      </div>
                    ) : (
                      // <Routes>
                      //   <Route
                      //     path="/"
                      //     element={
                      //       <TransitionGroup>
                      //         <CSSTransition
                      //           key="home"
                      //           in={true}
                      //           appear={true}
                      //           timeout={500}
                      //           classNames="fade"
                      //         >
                      //           <Home />
                      //         </CSSTransition>
                      //       </TransitionGroup>
                      //     }
                      //   />
                      //   <Route path="/about" element={<About />} />
                      //   <Route path="/projects" element={<Projects />} />
                      //   <Route path="/contact" element={<Contact />} />
                      //   {/* Add the 404 page */}
                      //   <Route path="*" element={<NotFound />} />
                      // </Routes>
                      <ContentSection />
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

export default AppMain;
