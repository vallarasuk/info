import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomePageData from "./Constant/HomeContent";
import MyWorks from "./Helper/MyWorks";
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
    <Container className="your-component p-0">
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

      <MobileProfileCard />

      <div className="mobile-content-section ">
        <h2 className="text-end bg-secondary-subtle p-2 text-uppercase rounded-3 shadow mb-4 ">
          {title}
        </h2>
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {/* About Section */}
      <section className="about">
        <h2 className="text-end bg-secondary-subtle p-2 text-uppercase rounded-3 shadow mb-4">
          About Me
        </h2>
        <p>{aboutDescription}</p>
      </section>

      {/* Work Section */}

      <section className="works">
        <MyWorks projectsData={projectsData} />
      </section>

      {/* Skills Section */}
      <section className="skills">
        <div className="my-4">
          <h2 className="text-end bg-secondary-subtle p-2 text-uppercase rounded-3 shadow mb-4">
            {skillsTitle}
          </h2>
          <Row className="gap-5 d-flex justify-content-center">
            {skills.map((skill, index) => (
              <Col
                xs={12}
                md={6}
                lg={3}
                key={index}
                className="text-center mb-lg-3 shadow p-3 p-lg-4 rounded-3"
              >
                <div className="skill my-sm-3">
                  <FontAwesomeIcon icon={skill.icon} size="2x" />
                  <p className="text-capitalize">{skill.name}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
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
        <h2 className="text-end bg-secondary-subtle p-2 text-uppercase rounded-3 shadow mb-4">
          Education
        </h2>
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
