import React from "react";
import { Link } from "react-router-dom";

const ProfileImage = ({ imageSrc, alt, mobileProfileImage }) => {
  return (
    <Link to="/about" className="profile-image-link">
      <img
        src={imageSrc}
        alt={alt}
        className="profile-image img-fluid d-md-block d-none"
        loading="lazy"
        decoding="async"
      />
       <img
        src={mobileProfileImage}
        alt={alt}
        className="profile-image img-fluid d-md-none"
        loading="lazy"
        decoding="async"
      />
    </Link>
  );
};

export default ProfileImage;
