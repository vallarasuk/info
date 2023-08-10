import React, { useState, useEffect } from "react";
import ProjectCard from "./Lib/ProjectCard"; // Import the new component
import Skeleton from "react-loading-skeleton";
import HomePageData from "./Constant/HomeContent"; // Import the HomePageData object

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { projectsData } = HomePageData; // Extract projectsData from HomePageData

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed
  }, []);

  return (
    <section>
      <h2>Projects</h2>
      <div className="row">
        {isLoading
          ? projectsData.map((project, index) => (
              <div className="col-md-4" key={index}>
                <div className="card project-card">
                  <div className="card-body">
                    <Skeleton height={40} count={1} />
                    <Skeleton count={3} />
                  </div>
                </div>
              </div>
            ))
          : projectsData.map((data, index) => (
              <div className="col-md-4" key={index}>
                <ProjectCard
                  title={data.title}
                  description={data.description}
                  gitLink={data.gitLink}
                  livePreview={data.livePreview}
                  previewImage={data.previewImage}
                />
              </div>
            ))}
      </div>
    </section>
  );
};

export default Projects;
