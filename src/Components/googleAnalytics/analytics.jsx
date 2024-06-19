// src/Components/googleAnalytics/analytics.js
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const measurementId = "G-SKZ1Q8BBSV"; // Replace with your GA4 Measurement ID

const initializeAnalytics = () => {
  ReactGA.initialize(measurementId);
};

// Component to handle tracking
const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on location change
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null; // This component doesn't render anything
};

export { initializeAnalytics, GoogleAnalytics };
