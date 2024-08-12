import React, { useEffect, useState } from "react";

const ProfileImage = ({
  cardImage,
  alt,
  mobileProfileImage,
  loadingAnimation,
}) => {
  const [desktopImageLoaded, setDesktopImageLoaded] = useState(false);
  const [mobileImageLoaded, setMobileImageLoaded] = useState(false);

  useEffect(() => {
    if (cardImage) {
      const desktopImg = new Image();
      desktopImg.src = cardImage;
      desktopImg.onload = () => setDesktopImageLoaded(true);
      desktopImg.onerror = () => setDesktopImageLoaded(false); // Handle load error
    } else {
      console.error("cardImage is undefined.");
    }

    if (mobileProfileImage) {
      const mobileImg = new Image();
      mobileImg.src = mobileProfileImage;
      mobileImg.onload = () => setMobileImageLoaded(true);
      mobileImg.onerror = () => setMobileImageLoaded(false); // Handle load error
    } else {
      console.error("mobileProfileImage is undefined.");
    }
  }, [cardImage, mobileProfileImage]);

  return (
    <>
      <img
        src={desktopImageLoaded && cardImage ? cardImage : loadingAnimation}
        alt={alt || "vallarasu k"}
        className="profile-image img-fluid d-md-block d-none"
        loading="lazy"
        decoding="async"
      />
      <img
        src={
          mobileImageLoaded && mobileProfileImage
            ? mobileProfileImage
            : loadingAnimation
        }
        alt={alt || "vallarasu k"}
        className="profile-image img-fluid d-md-none"
        loading="lazy"
        decoding="async"
      />
    </>
  );
};

export default ProfileImage;
