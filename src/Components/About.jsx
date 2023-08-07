// src/components/AboutUs/TimelineDesign.js
import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-scroll";
import "./Styles/About.css"

const About = () => {
  // Animation configuration for the timeline items
  const itemAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-50px)" },
    config: { duration: 1000 },
  });

  return (
    <section id="timeline">
      <h2>My Journey</h2>
      <div className="timeline">
        <animated.div style={itemAnimation} className="timeline-item">
          <div className="timeline-content">
            <h3>Education</h3>
            <p>Graduated with a degree in Computer Science from XYZ University.</p>
          </div>
          <span className="date">2015 - 2018</span>
        </animated.div>

        <animated.div style={itemAnimation} className="timeline-item">
          <div className="timeline-content">
            <h3>Professional Experience</h3>
            <p>Worked as a Front-end Developer at ABC Tech, contributing to various web development projects.</p>
          </div>
          <span className="date">2018 - Present</span>
        </animated.div>

        {/* Add more timeline items for your achievements and experiences */}
      </div>

      {/* Scroll button to scroll to the next section */}
      <div className="scroll-button">
        <Link to="skills" smooth={true} duration={1000}>
          <i className="fas fa-chevron-down"></i>
        </Link>
      </div>
    </section>
  );
};

export default About;
