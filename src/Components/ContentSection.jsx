import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
import HomePageData from "./Constant/HomeContent";
import MobileProfileCard from "./Lib/MobileProfileCard";

const ContentSection = () => {
  const {
    iconImage,
    titleIcon,
    cardImage,
    MobileProfileImage,
    resumeDownloadLink,
    resumeFileName,
    name,
    role,
    email,
    emailTo,
    mobile,
    mobileTo,
    instagramProfileLink,
    twitterProfileLink,
    linkedInProfileLink,
    githubProfileLink,
    title,
    description,
    skillsTitle,
    skills,
    projectsData,
    studies,
    aboutTitle,
    aboutDescription,
  } = HomePageData; // Assuming HomePageData is imported here

  return (
    <Container className="your-component">
      {/* Header Section */}
      {/* <header>
        <Row>
          <Col md={4} sm={12}>
            <img src={iconImage} alt="Profile" className="profile-image" />
          </Col>
          <Col md={8} sm={12}>
            <div className="title">
              <img src={titleIcon} alt="Title Icon" className="title-icon" />
              <h1>{name}</h1>
              <p>{role}</p>
            </div>
          </Col>
        </Row>
      </header> */}

      <MobileProfileCard/>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>{aboutDescription}</p>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>{skillsTitle}</h2>
        <Row>
          {skills.map((skill, index) => (
            <Col xs={12} md={6} key={index} className="text-center mb-lg-3">
              <div className="skill my-sm-4 ">
                <FontAwesomeIcon icon={skill.icon} size="2x" />
                <p className="text-capitalize">{skill.name}</p>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Projects Section */}
      {/* <section className="projects">
        <h2>Projects</h2>
        <Row>
          {projectsData.map((project, index) => (
            <Col md={6} sm={12} key={index}>
              <div className="project">
                <img src={project.previewImage} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.gitLink}>GitHub</a>
                  <a href={project.livePreview}>Live Preview</a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </section> */}

      {/* Studies Section */}
      <section className="studies">
        <h2>Education</h2>
        {studies.map((study, index) => (
          <div className="study" key={index}>
            <h3>{study.title}</h3>
            <p>{study.year}</p>
            <p>{study.institution}</p>
            <p>{study.description}</p>
          </div>
        ))}
      </section>
    </Container>
  );
};

export default ContentSection;
