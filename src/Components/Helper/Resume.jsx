import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

const Resume = ({ resumeDownloadLink }) => {
  const handleResumeDownload = () => {
    // Replace with the actual download link
    window.open(resumeDownloadLink, "_blank");
  };

  return (
    <div className="row mt-3">
      <div className="col-8 col-lg-12 offset-2 offset-lg-0 mt-4 mt-lg-3 shadow rounded-pill pointer">
        <button
          onClick={handleResumeDownload}
          className="text-decoration-none btn p-4 text-center"
        >
          <FontAwesomeIcon size="xl" icon={faFileDownload} />
          <span className="ms-2 fw-bold">RESUME</span>
        </button>
      </div>
    </div>
  );
};

export default Resume;
