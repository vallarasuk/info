import React from "react";
import { Helmet } from "react-helmet-async";
import { animated, useSpring } from "react-spring";
import { Link } from "react-router-dom";
import "./Styles/Home.css";
import HomeContent from "./Constant/HomeContent";
import Skill from "./Skills";

const Home = () => {
  const {
    title,
    description,
    ctaButtonText,
    ctaButtonLink,
    skills,
    skillsTitle,
    name,
    role,
    titleIcon,
  } = HomeContent;

  const textAnimation = useSpring({
    opacity: 1,
    y: 0,
    from: { opacity: 0, y: 20 },
    config: { duration: 1000 },
  });

  return (
    <>
      <section className="home-section">
        <Helmet>
          <title>{name} - React Developer | Frontend Web Developer</title>
          <meta
            name="description"
            content="Welcome to the portfolio home page of Vallarasu Kanthasamy, a talented React Developer and Frontend Web Developer. Explore my portfolio, skills, and contact me for collaboration or inquiries."
          />
          <meta
            name="keywords"
            content="React developer, Frontend developer, Web developer, Portfolio, Skills, Collaboration, Inquiry"
          />
          <meta name="author" content={`${name} - ${role}`} />
          <meta property="og:title" content={`${name} - React Developer`} />
          <meta
            property="og:description"
            content="Explore my portfolio and skills in web development. Contact me for collaboration or inquiries."
          />
          <meta property="og:image" content={titleIcon} />
          <meta property="og:url" content="https://vallarasuk.com/" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@your-twitter-handle" />
          <meta name="twitter:title" content={`${name} - React Developer`} />
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
        </Helmet>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <animated.div style={textAnimation}>
                <h2>{title}</h2>
                {description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                <Link to={ctaButtonLink} className="btn btn-primary">
                  {ctaButtonText}
                </Link>
              </animated.div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Skill skills={skills} skillsTitle={skillsTitle} />
      </section>
    </>
  );
};

export default Home;
