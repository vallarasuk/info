import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"; // Import the new icons
import HomeContent from "./Constant/HomeContent";
import { useSpring, animated } from "react-spring";
import "./ProfileCard.css";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";

const ProfileCard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {
    cardImage,
    name,
    role,
    // bio,
    linkedInProfileLink,
    githubProfileLink,
    instagramProfileLink,
    twitterProfileLink,
    email,
    mobile,
    mobileTo,
    emailTo,
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
          {/* <p>{bio}</p> */}
          <p>{email}</p>
          <p>{mobile}</p>
          <div className="social-links-container">
            <div className="row">
              <div className="col">
                <Link
                  to={linkedInProfileLink}
                  className="social-link linkedin shadow"
                >
                  <FontAwesomeIcon size="xl" icon={faLinkedin} />
                </Link>
              </div>
              <div className="col">
                <Link
                  to={githubProfileLink}
                  className="social-link github shadow"
                >
                  <FontAwesomeIcon size="xl" icon={faGithub} />
                </Link>
              </div>
              <div className="col">
                <Link
                  to={instagramProfileLink}
                  className="social-link instagram shadow"
                >
                  <FontAwesomeIcon size="xl" icon={faInstagram} />
                </Link>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <Link
                  to={twitterProfileLink}
                  className="social-link twitter shadow"
                >
                  <FontAwesomeIcon size="xl" icon={faTwitter} />
                </Link>
              </div>
              <div className="col">
                <Link to={mobileTo} className="social-link mobile shadow">
                  <FontAwesomeIcon size="xl" icon={faMobile} />
                </Link>
              </div>
              <div className="col">
                <Link to={emailTo} className="social-link mail shadow">
                  <FontAwesomeIcon size="xl" icon={faEnvelope} />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </animated.div>
  );
};

export default ProfileCard;
