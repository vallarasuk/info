import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import HomeContent from "../Constant/HomeContent";
import Resume from "../Helper/Resume";
import SocialLinks from "../Helper/SocialLinks";
import "../Lib/Styles/ProfileCard.css";
import ProfileImage from "../Helper/ProfileImage";
import ProfileInfo from "../Helper/ProfileInfo";

const ProfileCard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {
    cardImage,
    name,
    roles,
    linkedInProfileLink,
    githubProfileLink,
    email,
    emailTo,
    resumeDownloadLink,
    resumeFileName,
    mobile,
    loadingAnimation,
    mobileProfileImage
  } = HomeContent;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1);
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
          <ProfileImage
            cardImage={cardImage}
            mobileProfileImage={mobileProfileImage}
            alt={name}
            loadingAnimation={loadingAnimation}
          />
          <ProfileInfo name={name} roles={roles} email={email} />
          <SocialLinks
            linkedInProfileLink={linkedInProfileLink}
            githubProfileLink={githubProfileLink}
            emailTo={emailTo}
            mobile={mobile}
          />
          <Resume
            resumeDownloadLink={resumeDownloadLink}
            resumeFileName={resumeFileName}
          />
        </>
      )}
    </animated.div>
  );
};

export default ProfileCard;
