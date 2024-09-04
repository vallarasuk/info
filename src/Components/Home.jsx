import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import HomeContent from "./Constant/HomeContent";
import SeoMetaTags from "./Constant/SeoMetaTags";
import MobileProfileCard from "./Lib/MobileProfileCard";
import "./Styles/Home.css";

const Home = () => {
  const {
    projectButtonName,
    projectButtonlink,
    name,
    role,
    titleIcon,
    title,
    description,
    keywords
  } = HomeContent;

  const textAnimation = useSpring({
    opacity: 1,
    y: 0,
    from: { opacity: 0, y: 20 },
    config: { duration: 1000 },
  });

  const titleAnimation = useSpring({
    opacity: 1,
    y: 0,
    from: { opacity: 0, y: -20 },
    config: { duration: 800 },
  });

  const buttonAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800, delay: 300 },
  });

  const isSmallScreen = useMediaQuery({ maxWidth: 991 });

  return (
    <>
      <section className="home-section" id="home">
        <SeoMetaTags name={name} role={role} titleIcon={titleIcon} keywords = {keywords} />

        <div className="container">
          <div className="row align-items-center">
            {isSmallScreen ? (
              <div className="mb-5">
                <MobileProfileCard />
              </div>
            ) : (
              <div className="col-12 col-sm-10 offset-sm-1 text-secondary-emphasis my-4">
                <animated.h2 className="text-title mb-4" style={titleAnimation}>
                  {title}
                </animated.h2>
                <animated.div style={{ ...textAnimation, ...buttonAnimation }}>
                  {description.map((paragraph, index) => (
                    <p key={index} className="text-description">
                      {paragraph}
                    </p>
                  ))}
                  <div className="profile">
                    <Link to={projectButtonlink} className="btn btn-attractive">
                      {projectButtonName}
                    </Link>
                  </div>
                </animated.div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
