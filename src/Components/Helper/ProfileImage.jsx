import React from "react";
import { Link } from "react-router-dom";

const ProfileImage = ({ imageSrc, alt }) => {
  return (
    <Link to="/about" className="profile-image-link">
      <img src={imageSrc} alt={alt} className="profile-image img-fluid" />
    </Link>
  );
};

export default ProfileImage;
