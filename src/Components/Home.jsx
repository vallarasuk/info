import React from "react";
import { Helmet } from "react-helmet-async";
import { animated, useSpring } from "react-spring";
import "./Styles/Home.css";
import HomeContent from "./Constant/HomeContent"; // Import the HomeContent
import Skill from "./Skills"; // Import the Skill component

const Home = () => {
  // Destructuring the data from HomeContent
  const {
    title,
    description,
    imageURL,
    ctaButtonText,
    ctaButtonLink,
    skills,
    skillsTitle,
  } = HomeContent;

  // Text animation configuration
  const textAnimation = useSpring({
    opacity: 1,
    y: 0,
    from: { opacity: 0, y: 20 },
    config: { duration: 1000 },
  });

  // Image animation configuration
  const imageAnimation = useSpring({
    opacity: 1,
    scale: 1,
    from: { opacity: 0, scale: 0.9 },
    config: { duration: 1000, delay: 500 },
  });

  return (
    <>
      {/* Home Section */}
      <section className="home-section">
        {/* Helmet for SEO */}
        <Helmet>
          <title>Your Name - Home</title>
          <meta
            name="description"
            content="Welcome to my portfolio home page."
          />
          {/* Add more relevant meta tags for SEO */}
          <meta
            name="keywords"
            content="portfolio, web development, projects, React"
          />
          <meta name="author" content="Your Name" />
          <meta property="og:title" content={`Your Name - ${title}`} />
          <meta property="og:description" content={description.join(" ")} />
          <meta property="og:image" content={imageURL} />
          <meta property="og:url" content="https://example.com/" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@your-twitter-handle" />
          <meta name="twitter:title" content={`Your Name - ${title}`} />
          <meta name="twitter:description" content={description.join(" ")} />
          <meta name="twitter:image" content={imageURL} />
        </Helmet>
        {/* Content for the home section */}
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <animated.div style={textAnimation}>
                <h2>{title}</h2>
                {description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                <a href={ctaButtonLink} className="btn btn-primary">
                  {ctaButtonText}
                </a>
              </animated.div>
            </div>
            <div className="col-lg-6">
              <animated.div style={imageAnimation} className="text-center">
                <img
                  src={imageURL}
                  alt="Your_image"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    borderRadius: "8px",
                  }}
                />
              </animated.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Section */}
      <section>
        <Skill skills={skills} skillsTitle={skillsTitle} />
      </section>
    </>
  );
};

export default Home;
