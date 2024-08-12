import React from "react";
import PropTypes from "prop-types"; // For prop type validation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// SocialLinks Component
const SocialLinks = ({
  linkedInProfileLink,
  githubProfileLink,
  emailTo,
  mobile,
}) => {
  // Check if the link is a valid URL
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="mt-4 social-links">
      <div className="row justify-content-center">
        {mobile && (
          <div className="col-auto p-1">
            <a
              href={`https://wa.me/${mobile}`} // Correct link format
              className="social-link whatsapp shadow"
              aria-label="Send WhatsApp message"
            >
              <FontAwesomeIcon size="xl" icon={faWhatsapp} />
            </a>
          </div>
        )}

        {linkedInProfileLink && isValidUrl(linkedInProfileLink) && (
          <div className="col-auto p-1">
            <a
              href={linkedInProfileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin shadow"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon size="xl" icon={faLinkedin} />
            </a>
          </div>
        )}
        {githubProfileLink && isValidUrl(githubProfileLink) && (
          <div className="col-auto p-1">
            <a
              href={githubProfileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link github shadow"
              aria-label="GitHub Profile"
            >
              <FontAwesomeIcon size="xl" icon={faGithub} />
            </a>
          </div>
        )}
        {emailTo && (
          <div className="col-auto p-1">
            <a
              href={`mailto:${emailTo}`}
              className="social-link mail shadow"
              aria-label="Send Email"
            >
              <FontAwesomeIcon size="xl" icon={faEnvelope} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

// Prop type validation
SocialLinks.propTypes = {
  linkedInProfileLink: PropTypes.string,
  githubProfileLink: PropTypes.string,
  emailTo: PropTypes.string,
  whatsappLink: PropTypes.string,
};

// Default props
SocialLinks.defaultProps = {
  linkedInProfileLink: "",
  githubProfileLink: "",
  emailTo: "",
  whatsappLink: "",
};

export default SocialLinks;
