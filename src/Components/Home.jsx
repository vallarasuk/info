import React from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
// import { Helmet } from "react-helmet-async";
import "./Styles/Home.css";
import HomeContent from "./Constant/HomeContent"; // Import the HomeContent
import Skill from "./Skills"; // Import the Skill component
import { useMediaQuery } from "react-responsive";
import MobileProfileCard from "./Lib/MobileProfileCard";
import SeoMetaTags from "./Constant/SeoMetaTags";

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

  const isSmallScreen = useMediaQuery({ maxWidth: 991 });

  return (
    <>
      <section className="home-section" id="home">
        {/* Use the SeoMetaTags component */}
        <SeoMetaTags name={name} role={role} titleIcon={titleIcon} />

        <div className="container-fluid">
          <div className="row align-items-center">
            {isSmallScreen && <MobileProfileCard />}
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

      <section className="mt-4">
        <Skill skills={skills} skillsTitle={skillsTitle} />
      </section>
    </>
  );
};

export default Home;
