import React from "react";

const ProfileCard = () => {
  return (
    <div className="left-side shadow">
      <h2>Your Profile Info Card</h2>
      <p>Name: John Doe</p>
      <p>Email: johndoe@example.com</p>
      <div className="social-links">
        <a href="#/" className="social-link">
          Twitter
        </a>
        <a href="#/" className="social-link">
          Instagram
        </a>
        <a href="#/" className="social-link">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
