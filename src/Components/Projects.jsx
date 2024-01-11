import React from "react";
import ProjectCard from "./Lib/ProjectCard";
import HomePageData from "./Constant/HomeContent";
import Title from "./Helper/Title";
import { motion } from "framer-motion";

const Projects = () => {
  const { projectsData } = HomePageData;

  // Animation variants for the project cards
  const projectCardVariants = {
    initial: { opacity: 0, scale: 0.8, y: 50 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: -50 },
  };

  return (
    <section id="projects my-4">
      <Title text="Projects" />
      <motion.div
        className="row"
        variants={{
          animate: { transition: { staggerChildren: 0.2 } },
        }}
        initial="initial"
        animate="animate"
      >
        {projectsData.map((data, index) => (
          <motion.div
            className="col-md-6"
            key={index}
            variants={projectCardVariants}
          >
            <ProjectCard
              title={data.title}
              description={data.description}
              gitLink={data.gitLink}
              livePreview={data.livePreview}
              previewImage={data.previewImage}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
