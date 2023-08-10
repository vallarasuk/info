import React from "react";
import { Helmet } from "react-helmet-async";
import { animated, useSpring } from "react-spring";
import { Link } from "react-router-dom";
import "./Styles/Home.css";
import HomeContent from "./Constant/HomeContent"; // Import the HomeContent
import Skill from "./Skills"; // Import the Skill component

const Home = () => {
  // Destructuring the data from HomeContent
  const {
    title,
    description,
    // imageURL,
    ctaButtonText,
    ctaButtonLink,
    skills,
    skillsTitle,
    name,
    role,
    titleIcon,
  } = HomeContent;

  // Text animation configuration
  const textAnimation = useSpring({
    opacity: 1,
    y: 0,
    from: { opacity: 0, y: 20 },
    config: { duration: 1000 },
  });

  // Image animation configuration
  // const imageAnimation = useSpring({
  //   opacity: 1,
  //   scale: 1,
  //   from: { opacity: 0, scale: 0.9 },
  //   config: { duration: 1000, delay: 500 },
  // });

  return (
    <>
      {/* Home Section */}
      <section className="home-section">
        {/* Helmet for SEO */}
        <Helmet>
          <title>{name}</title>
          <meta
            name="description"
            content="Welcome to the portfolio home page of Vallarasu Kanthasamy, a React Front End Developer."
          />
          {/* Add more relevant meta tags for SEO */}
          <meta
            name="keywords"
            content="portfolio, web development, projects, React, frontend developer, Vallarasu Kanthasamy"
          />
          <meta name="author" content={`${name} - ${role}`} />
          <meta property="og:title" content={`${name}`} />
          <meta
            property="og:description"
            content="Explore my portfolio and skills in web development. Contact me for collaboration or inquiries."
          />
          <meta property="og:image" content={titleIcon} />
          <meta property="og:url" content="https://vallarasuk.com/" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@your-twitter-handle" />
          <meta name="twitter:title" content={`${name} - ${role}`} />
          <meta
            name="twitter:description"
            content="Explore my portfolio and skills in web development. Contact me for collaboration or inquiries."
          />
          <meta name="twitter:image" content={titleIcon} />
          <link rel="icon" href={titleIcon} type="image/png" />
          <link
            rel="shortcut icon"
            href="./Assects/Profile.jpg"
            type="image/x-icon"
          />
          {/* Set favicon */}
        </Helmet>
        {/* Content for the home section */}
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <animated.div style={textAnimation}>
                <h2>{title}</h2>
                {description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                {/* Replace the anchor tag with Link component */}
                <Link to={ctaButtonLink} className="btn btn-primary">
                  {ctaButtonText}
                </Link>
              </animated.div>
            </div>
            {/* Uncomment the following section to display the image */}
            {/* <div className="col-lg-6">
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
            </div> */}
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
