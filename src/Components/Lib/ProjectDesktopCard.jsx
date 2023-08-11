import React from "react";
import { Link } from "react-router-dom";
import styles from "./Styles/ProjectCardDesktop.module.css"; // Import the CSS module

const ProjectCardDesktop = ({
  title,
  description,
  gitLink,
  livePreview,
  previewImage,
}) => {
  return (
    <div className={styles.box}>
      {previewImage && (
        <img
          src={previewImage}
          alt={title || "Project"}
          className={styles.imgBx}
        />
      )}
      <div className={styles.content}>
        <div>
          <h2 className={styles.title}>{title || "Image Title"}</h2>
          <p className={styles.description}>
            {description ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto."}
          </p>
        </div>
      </div>
      {gitLink && (
        <a
          href={gitLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-primary ${styles.actionButton}`}
        >
          GitHub
        </a>
      )}
      {livePreview && (
        <Link
          to={livePreview}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-secondary ${styles.actionButton}`}
        >
          Live Preview
        </Link>
      )}
    </div>
  );
};

export default ProjectCardDesktop;
