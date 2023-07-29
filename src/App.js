import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CSSTransition } from "react-transition-group";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

// Lazy load components
const Home = lazy(() => import("./Components/Home"));
const About = lazy(() => import("./Components/About"));
const Projects = lazy(() => import("./Components/Projects"));
const Contact = lazy(() => import("./Components/Contact"));

const App = () => {

  return (
    <HelmetProvider>
      <Router>
        {/* navbar section */}
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <CSSTransition
                  in={true}
                  appear={true}
                  timeout={500}
                  classNames="fade"
                >
                  <Home />
                </CSSTransition>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        {/* Footer section */}
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default App;
