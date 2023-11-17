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
  return (
    <div div className="shadow p-3 rounded-3">
       {title ? (
          <h5 className="card-title text-center fw-bold mt-2 mb-lg-4 bg-opacity-25 rounded-3 shadow py-3 bg-info">{title}</h5>
        ) : (
          <Skeleton width={150} duration={1.5} />
        )}
      {previewImage && (
        <img
          src={previewImage}
          alt={title ? `${title} Project` : "Project"}
          className="card-img-top rounded-2 shadow-lg "
        />
      )}
      <div className="card-body">
       
        {/* {description ? (
          <p className="card-text">{description}</p>
        ) : (
          <Skeleton count={3} duration={1.5} />
        )} */}
      </div>
      <div className="card-footer d-flex justify-content-center my-3 py-2">
        {/* {gitLink && (
          <a
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mr-2"
          >
            GitHub
          </a>
        )} */}
        {livePreview && (
          <Link
            to={livePreview}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary shadow-lg"
          >
            Live Preview
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
