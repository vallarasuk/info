import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import HomeContent from "../Constant/HomeContent";
import Resume from "../Helper/Resume";
import SocialLinks from "../Helper/SocialLinks";
import "../Lib/Styles/ProjectCard.css";
import ProfileImage from "../Helper/ProfileImage";
import ProfileInfo from "../Helper/ProfileInfo";

const ProfileCard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {
    cardImage,
    name,
    role,
    linkedInProfileLink,
    githubProfileLink,
    email,
    emailTo,
    resumeDownloadLink,
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
          <ProfileImage imageSrc={cardImage} alt={name} />

          <ProfileInfo name={name} role={role} email={email} />

          {/* Use the SocialLinks component */}
          <SocialLinks
            linkedInProfileLink={linkedInProfileLink}
            githubProfileLink={githubProfileLink}
            emailTo={emailTo}
          />
          {/* Resume Download */}
          <Resume resumeDownloadLink={resumeDownloadLink} />
        </>
      )}
    </animated.div>
  );
};

export default ProfileCard;
