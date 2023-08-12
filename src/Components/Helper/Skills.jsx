import React from "react";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skill = ({ skills, skillsTitle }) => {
  // Animation configuration for the skills section
  const skillsAnimation = useSpring({
    opacity: 1,
    y: 0,
    from: { opacity: 0, y: 20 },
    config: { duration: 1000 },
  });

  return (
    <animated.div className="skills-section" style={skillsAnimation}>
      {/* Render the skills title */}
      <h3>{skillsTitle}</h3>
      {/* Render the list of skills with responsive cards and icons */}
      <div className="row">
        {skills.map((skill, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card border-0 shadow">
              <div className="card-body text-center">
                <FontAwesomeIcon icon={skill.icon} className="icon" />
                <h5 className="card-title mt-3">{skill.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </animated.div>
  );
};

export default Skill;
