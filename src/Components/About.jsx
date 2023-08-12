import React from "react";
import "./Styles/About.css";
import StudyTimeline from "./Helper/Studies";
import Title from "./Helper/Title";


const About = () => {
  // Define your studies data
  const studies = [
    {
      year: "2020 - Present",
      title: "Master's Degree in Front-End Development",
      institution: "University of Web Development",
      description:
        "Studied advanced front-end development techniques and web design principles.",
      icon: "graduation", // Use 'graduation' icon for this entry
    },
    {
      year: "2018 - 2020",
      title: "Bachelor's Degree in Computer Science",
      institution: "Tech University",
      description:
        "Completed coursework in computer science, algorithms, data structures, and software engineering.",
      icon: "graduation", // Use 'graduation' icon for this entry
    },
  ];

  return (
    <div className="about-container">
      {/* About Me Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8 offset-sm-2">
              <div className="about-content mt-sm-5">
                <Title text="About Me: A Passionate React Developer" />
                <p className="about-description">
                  Hi, I'm Vallarasu K, a passionate React developer with a
                  strong focus on creating exceptional web experiences. I'm
                  dedicated to delivering high-quality front-end solutions
                  that combine technical expertise with creativity. With a
                  background in computer science and years of hands-on
                  experience, I bring a unique perspective to every project
                  I work on.
                </p>
                {/* Additional content */}
                <p className="about-description">
                  I completed my SSLC with 87% from the National Matriculation
                  School and later pursued a Diploma in Mechanical Engineering.
                  I have a year of focused learning in front-end development.
                  Currently, I am thriving in the role of a React Developer at
                  Thidiff Technology, located in Bangalore. I'm passionate
                  about creating efficient and user-friendly web applications
                  that make a meaningful impact.
                </p>
                {/* Link to the skills page */}
                <p className="about-description">
                  To see a list of my skills and certifications, please visit
                  the <a href="/skills">Skills Page</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studies Timeline Section */}
      <section id="studies" className="studies-section mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-8 offset-sm-2">
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
