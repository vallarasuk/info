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
  console.log("img---------------------------->", previewImage);
  return (
    <div className="card project-card">
      {previewImage && (
        <img
          src={previewImage}
          alt={title || "Project"}
          className="card-img-top"
        />
      )}
      <div className="card-body">
        {title ? (
          <h5 className="card-title">{title}</h5>
        ) : (
          <Skeleton width={150} duration={1.5} />
        )}
        {description ? (
          <p className="card-text">{description}</p>
        ) : (
          <Skeleton count={3} duration={1.5} />
        )}
        {gitLink && (
          <a
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mr-2"
          >
            GitHub
          </a>
        )}
        {livePreview && (
          <Link
            to={livePreview}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Live Preview
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
