import React from "react";
import HomeContent from "../../Constant/HomeContent";

const ProfileImageLoader = () => {
  const { loadingAnimation, alt } = HomeContent;

  return <img src={loadingAnimation} alt={alt} />;
};

export default ProfileImageLoader;
