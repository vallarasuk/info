import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SocialLinks = ({ linkedInProfileLink, githubProfileLink, emailTo }) => {
  return (
    <div className="social-links-container">
      <div className="row">
        <div className="col">
          <Link to={linkedInProfileLink} className="social-link linkedin">
            <FontAwesomeIcon size="xl" icon={faLinkedin} />
          </Link>
        </div>
        <div className="col">
          <Link to={githubProfileLink} className="social-link github">
            <FontAwesomeIcon size="xl" icon={faGithub} />
          </Link>
        </div>
        <div className="col">
          <Link to={emailTo} className="social-link mail">
            <FontAwesomeIcon size="xl" icon={faEnvelope} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
