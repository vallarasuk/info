import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

const Resume = ({ resumeDownloadLink, resumeFileName }) => {
  const handleResumeDownload = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0]; // Format: YYYY-MM-DD
  
    // Create an anchor element
    const link = document.createElement("a");
    link.href = resumeDownloadLink;
    link.target = "_blank"; // Open in a new tab/window
    link.download = `${resumeFileName}_${formattedDate}.png`; // Include resumeFileName and today's date in the file name
  
    // Add the anchor element to the DOM
    document.body.appendChild(link);
  
    // Dispatch a click event on the anchor
    link.dispatchEvent(new MouseEvent("click"));
  
    // Clean up: Remove the anchor element from the DOM after the click event is dispatched
    document.body.removeChild(link);
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
