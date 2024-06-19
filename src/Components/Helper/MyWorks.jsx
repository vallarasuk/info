import React from "react";
import ProjectCard from "../Lib/ProjectCard";
import { Col } from "react-bootstrap";

const MyWorks = ({ projectsData }) => {
  return (
    <section className="works">
      <h2 className="text-end bg-secondary-subtle p-2 text-uppercase rounded-3 shadow mb-4">
        My Works
      </h2>
      <div className="work-list-title row">
        {projectsData.map((project, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="my-3">
            <ProjectCard
              title={project.title}
              description={project.description}
              gitLink={project.gitLink}
              livePreview={project.livePreview}
              previewImage={project.previewImage}
            />
          </Col>
        ))}
      </div>
    </section>
  );
};

export default MyWorks;
