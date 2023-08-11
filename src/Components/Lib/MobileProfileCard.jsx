import React from "react";
import { useSpring, animated } from "react-spring";
import HomeContent from "../Constant/HomeContent";
import "./Styles/MobileProfileCard.css";
import ProfileImage from "../Helper/ProfileImage";
import ProfileInfo from "../Helper/ProfileInfo";
import SocialLinks from "../Helper/SocialLinks";
import Resume from "../Helper/Resume";

const MobileProfileCard = () => {
  const {
    name,
    role,
    linkedInProfileLink,
    githubProfileLink,
    email,
    emailTo,
    MobileProfileImage,
    resumeDownloadLink,
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
      className="mobile-profile-card-container"
      style={cardAnimation}
    >
      <div className="mobile-profile-card">
        {/* Use the ProfileImage component */}
        <ProfileImage imageSrc={MobileProfileImage} alt={name} />

        {/* Use the ProfileInfo component */}
        <ProfileInfo name={name} role={role} email={email} />

        {/* Use the SocialLinks component */}
        <SocialLinks
          linkedInProfileLink={linkedInProfileLink}
          githubProfileLink={githubProfileLink}
          emailTo={emailTo}
        />

        {/* Use the Resume component */}
        <Resume resumeDownloadLink={resumeDownloadLink} />
      </div>
    </animated.div>
  );
};

export default MobileProfileCard;
