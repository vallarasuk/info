import React from "react";

const ProfileInfo = ({ name, role, email }) => {
  return (
    <div className="profile-info">
      <h2 className="heading">{name}</h2>
      <p className="heading">{role}</p>
      <p className="email-text">{email}</p>
    </div>
  );
};

export default ProfileInfo;
