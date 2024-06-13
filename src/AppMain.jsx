import React, { lazy, Suspense, useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router } from "react-router-dom";
import HomeContent from "./Components/Constant/HomeContent";
import SeoMetaTags from "./Components/Constant/SeoMetaTags";
import ContentSection from "./Components/ContentSection";
import ProfileCard from "./Components/Lib/ProfileCard";
import "./Components/Styles/App.css";
import "./Components/Styles/AppOne.css";

// Lazy load components
const Home = lazy(() => import("./Components/Home"));
const About = lazy(() => import("./Components/About"));
const Projects = lazy(() => import("./Components/Projects"));
const Contact = lazy(() => import("./Components/Contact"));

const AppMain = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { name, role, titleIcon, keywords } = HomeContent;

  // Simulate loading time with useEffect hook
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed
  }, []);

  const isSmallScreen = useMediaQuery({ maxWidth: 991 });
  const isLargeScreen = useMediaQuery({ minWidth: 992 });

  return (
    <HelmetProvider>
      <SeoMetaTags
        name={name}
        role={role}
        titleIcon={titleIcon}
        keywords={keywords}
      />

      <Router>
        <div className="appOne-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 ps-0">
                {isLargeScreen && <ProfileCard />}
              </div>
              <div className="col-lg-8 px-lg-3 py-md-2">
                <div className="split-screen-container pt-md-4">
                  <Suspense
                    fallback={
                      <div className="loading-container">
                        <div className="spinner"></div>
                      </div>
                    }
                  >
                    {!isLoading && (
                      <ContentSection>
                        {/* Uncomment and adjust your Routes here */}
                        {/* <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/about" element={<About />} />
                          <Route path="/projects" element={<Projects />} />
                          <Route path="/contact" element={<Contact />} />
                        </Routes> */}
                      </ContentSection>
                    )}
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default AppMain;
