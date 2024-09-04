import React from "react";
import HomePageData from "./Constant/HomeContent";
import StudyTimeline from "./Helper/Studies";
import Title from "./Helper/Title";
import "./Styles/About.css";


const About = () => {
  // Define your studies data

  const {studies, aboutDescription,aboutTitle} =HomePageData;

  return (
    <div className="about-container my-4">
      {/* About Me Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-10 offset-sm-1">
              <div className="about-content">
                <Title text="About Me: A Passionate React Developer" />
                <p className="about-description">
                  {aboutTitle}
                </p>
                {/* Additional content */}
                <p className="about-description">
                  {aboutDescription}
                </p>
                {/* Link to the skills page */}
                {/* <p className="about-description">
                  To see a list of my skills and certifications, please visit
                  the <a href="/skills">Skills Page</a>.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studies Timeline Section */}
      <section id="studies" className="studies-section mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-10 offset-sm-1">
              <div className="studies-content">
                <Title text={"My Studies"} />
                {/* Use the StudyTimeline component */}
                <StudyTimeline studies={studies} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
