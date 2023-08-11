import React from "react";
import { motion } from "framer-motion";
import "./Styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* About Me Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8 offset-sm-2">
              <div className="about-content mt-sm-5">
                {/* Animation for section heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="about-heading text-center mb-3"
                >
                  About Me
                </motion.h2>
                {/* Animation for section content */}
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="about-description"
                >
                  Hi, I'm Vallarasu K, a passionate React developer with a
                  strong focus on creating exceptional web experiences. I'm
                  dedicated to delivering high-quality front-end solutions that
                  combine technical expertise with creativity. With a background
                  in computer science and years of hands-on experience, I bring
                  a unique perspective to every project I work on.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
