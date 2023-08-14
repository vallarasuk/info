import React from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import "./Styles/Home.css";
import HomeContent from "./Constant/HomeContent";
import { useMediaQuery } from "react-responsive";
import MobileProfileCard from "./Lib/MobileProfileCard";
import SeoMetaTags from "./Constant/SeoMetaTags";

const Home = () => {
  const {
    projectButtonName,
    projectButtonlink,
    name,
    role,
    titleIcon,
    title,
    description,
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
        <SeoMetaTags name={name} role={role} titleIcon={titleIcon} />

        <div className="container-fluid">
          <div className="row align-items-center">
            {isSmallScreen ? (
              <div className="mb-5">
                <MobileProfileCard />
              </div>
            ) : (
              <div className="col-12 col-sm-10 offset-sm-1 text-secondary-emphasis my-4">
                <animated.div style={textAnimation}>
                  <h2 className="mb-4">{title}</h2>
                  {description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  <div className="profile">
                    <Link to={projectButtonlink} className="btn btn-primary">
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
