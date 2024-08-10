import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "./Styles/ProjectCard.css";

const ProjectCard = ({
  title,
  description,
  gitLink,
  livePreview,
  previewImage,
}) => {
  const CardContent = () => (
    <>
      {title ? (
        <h5 className="card-title text-center fw-bold bg-info text-white p-3 rounded-top">
          {title}
        </h5>
      ) : (
        <Skeleton width={150} duration={1.5} />
      )}
      {previewImage && (
        <div className="card-img-container">
          <picture>
            <img
              src={previewImage}
              alt={title ? `${title} Project` : "Project"}
              className="card-img-top rounded"
              style={{ maxWidth: "100%", height: "auto" }}
              loading="lazy"
            />
          </picture>
        </div>
      )}
      <div className="card-body p-3">
        {description ? (
          <p className="card-text">{description}</p>
        ) : (
          <Skeleton count={3} duration={1.5} />
        )}
      </div>
      <div className="card-footer d-flex justify-content-center py-3">
        {gitLink && (
          <a
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary me-2 rounded-pill"
            style={{ textDecoration: "none" }} // Added inline style for text-decoration none
          >
            GitHub
          </a>
        )}
        {livePreview && (
          <Link
            to={livePreview}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary rounded-pill"
            style={{ textDecoration: "none" }} // Added inline style for text-decoration none
          >
            Live Preview
          </Link>
        )}
      </div>
    </>
  );

  return livePreview ? (
    <Link
      to={livePreview}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <div className="project-card">
        <CardContent />
      </div>
    </Link>
  ) : (
    <div className="project-card">
      <CardContent />
    </div>
  );
};

export default ProjectCard;
