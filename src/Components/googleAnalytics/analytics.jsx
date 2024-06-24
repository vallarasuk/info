// src/Components/googleAnalytics/analytics.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import GoogleTagManager from "./GoogleTagManager"; // Import the GTM component

const measurementId = "G-SKZ1Q8BBSV"; // Replace with your GA4 Measurement ID
const gtmId = "GTM-N8N9S2B7"; // Replace with your GTM ID

const initializeAnalytics = () => {
  ReactGA.initialize(measurementId);
};

// Component to handle tracking and GTM setup
const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on location change
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <>
      <GoogleTagManager gtmId={gtmId} />
    </>
  );
};

export { initializeAnalytics, GoogleAnalytics };
