import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import HomeContent from "./Constant/HomeContent";
import { useSpring, animated } from "react-spring";
import "./ProfileCard.css";

const ProfileCard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {
    cardImage,
    name,
    role,
    twitterProfileLink,
    instagramProfileLink,
    linkedInProfileLink,
  } = HomeContent;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const fadeInProps = useSpring({
    opacity: isLoading ? 0 : 1,
    marginTop: isLoading ? -20 : 0,
  });

  return (
    <animated.div
      className={`left-side shadow ${isLoading ? "loading" : ""}`}
      style={fadeInProps}
    >
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner">
            <div className="loading-inner-circle"></div>
          </div>
        </div>
      )}
      {!isLoading && (
        <>
          <img
            src={cardImage}
            alt={name}
            className="profile-image shadow img-fluid"
          />
          <h2>{name}</h2>
          <p>{role}</p>
          <div className="profile-card-social-links">
            <Link
              to={twitterProfileLink}
              className="social-link twitter shadow"
            >
              <FontAwesomeIcon size="xl" icon={faTwitter} />
            </Link>
            <Link
              to={instagramProfileLink}
              className="social-link instagram shadow"
            >
              <FontAwesomeIcon size="xl" icon={faInstagram} />
            </Link>
            <Link
              to={linkedInProfileLink}
              className="social-link linkedin shadow"
            >
              <FontAwesomeIcon size="xl" icon={faLinkedin} />
            </Link>
          </div>
        </>
      )}
    </animated.div>
  );
};

export default ProfileCard;
