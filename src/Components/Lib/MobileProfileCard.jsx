import React from "react";
import { animated, useSpring } from "react-spring";
import HomeContent from "../Constant/HomeContent";
import ProfileImage from "../Helper/ProfileImage";
import ProfileInfo from "../Helper/ProfileInfo";
import Resume from "../Helper/Resume";
import SocialLinks from "../Helper/SocialLinks";
import "./Styles/MobileProfileCard.css";

const MobileProfileCard = () => {
  const {
    name,
    role,
    linkedInProfileLink,
    githubProfileLink,
    email,
    emailTo,
    mobileProfileImage,
    resumeDownloadLink,
    resumeFileName,
  } = HomeContent;

  // Define the animation effect for the profile card
  const cardAnimation = useSpring({
    opacity: 1,
    y: 0,
    x: 0,
    from: { opacity: 0, y: 20, x: 20 },
    config: { duration: 1000 },
  });

  return (
    <animated.div
      className="mobile-profile-card-container  d-flex justify-content-center align-items-center mb-2 d-md-none"
      style={cardAnimation}
    >
      <div className="text-center">
        {/* Use the ProfileImage component */}
        <ProfileImage mobileProfileImage={mobileProfileImage} alt={name} />

        {/* Use the ProfileInfo component */}
        <ProfileInfo name={name} role={role} email={email} />

        {/* Use the SocialLinks component */}
        <SocialLinks
          linkedInProfileLink={linkedInProfileLink}
          githubProfileLink={githubProfileLink}
          emailTo={emailTo}
        />
        {/* Use the Resume component */}
        <Resume
          resumeDownloadLink={resumeDownloadLink}
          resumeFileName={resumeFileName}
        />
      </div>
    </animated.div>
  );
};

export default MobileProfileCard;
