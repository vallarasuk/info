import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faLaptopCode, faCertificate } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import "../Styles/TimeLine.css"; // Include Bootstrap styles

const StudyTimeline = ({ studies }) => {
    return (
        <div className="timeline timeline-vertical">
            {studies.map((study, index) => (
                <StudyItem key={index} study={study} index={index} />
            ))}
        </div>
    );
};

const StudyItem = ({ study, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger the animation once
        rootMargin: "-50px 0px", // Adjust root margin for intersection
    });

    const timelineClasses = `timeline-item ${inView ? "timeline-item-visible" : ""}`;

    return (
        <div ref={ref} className={timelineClasses}>
            <div className="timeline-icon mx-4">
                {study.icon === "graduation" && <FontAwesomeIcon icon={faGraduationCap} />}
                {study.icon === "coding" && <FontAwesomeIcon icon={faLaptopCode} />}
                {study.icon === "certificate" && <FontAwesomeIcon icon={faCertificate} />}
            </div>
            <div className="timeline-content">
                <h3 className="timeline-title">{study.title}</h3>
                <h4 className="timeline-institution">{study.institution}</h4>
                <p className="timeline-description">{study.description}</p>
            </div>
        </div>
    );
};

export default StudyTimeline;
