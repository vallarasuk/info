import React, { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { useMediaQuery } from "react-responsive";
import BaseNavbar from "./Components/Navbar/BaseNavbar";
import "./Components/Styles/App.css";
import "./Components/Styles/AppOne.css";
import ProfileCard from "./Components/Lib/ProfileCard";
import BottomNavbar from "./Components/Navbar/BottomNavbar";

const AppMain = () => {
  const [isLoading, setIsLoading] = useState(true);

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
      <div className="appOne-wrapper">
        {isLargeScreen && <BaseNavbar />}
        {isSmallScreen && <BottomNavbar />}

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">{isLargeScreen && <ProfileCard />}</div>
            <div className="col-lg-8 px-lg-3 py-md-5">
              <div className="split-screen-container pt-md-4">
                <div className="loading-container">
                  {isLoading ? (
                    <div className="icon">
                      <i className="fa fa-spinner fa-spin fa-3x text-black"></i>
                    </div>
                  ) : (
                    <div>
                      <div id="home">
                        <h1>Home Section</h1>
                        {/* Add content for the Home section */}
                      </div>
                      <div id="about">
                        <h1>About Section</h1>
                        {/* Add content for the About section */}
                      </div>
                      <div id="projects">
                        <h1>Projects Section</h1>
                        {/* Add content for the Projects section */}
                      </div>
                      <div id="contact">
                        <h1>Contact Section</h1>
                        {/* Add content for the Contact section */}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default AppMain;
