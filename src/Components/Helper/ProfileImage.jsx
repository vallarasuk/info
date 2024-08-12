import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProfileImage = ({
  imageSrc,
  alt,
  mobileProfileImage,
  loadingAnimation,
}) => {
  const [desktopImageLoaded, setDesktopImageLoaded] = useState(false);
  const [mobileImageLoaded, setMobileImageLoaded] = useState(false);

  useEffect(() => {
    // Load desktop image
    const desktopImg = new Image();
    desktopImg.src = imageSrc;
    desktopImg.onload = () => setDesktopImageLoaded(true);

    // Load mobile image
    const mobileImg = new Image();
    mobileImg.src = mobileProfileImage;
    mobileImg.onload = () => setMobileImageLoaded(true);
  }, [imageSrc, mobileProfileImage]);

  return (
    <Link to="/about" className="profile-image-link">
      <img
        src={desktopImageLoaded ? imageSrc : loadingAnimation}
        alt={alt}
        className="profile-image img-fluid d-md-block d-none"
        loading="lazy"
        decoding="async"
      />
      <img
        src={mobileImageLoaded ? mobileProfileImage : loadingAnimation}
        alt={alt}
        className="profile-image img-fluid d-md-none"
        loading="lazy"
        decoding="async"
      />
    </Link>
  );
};

export default ProfileImage;
