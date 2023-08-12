import React from "react";
import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";

const ProfileInfo = ({ name, role, email }) => {
  const animationConfig = {
    duration: 1000, // Set the duration to 1 second
    tension: 200,
    friction: 20,
  };

  // Use the useInView hook to detect when the component is in the viewport
  const [bottomRef, bottomInView] = useInView({
    triggerOnce: true, // Trigger the animation once
    rootMargin: "-100px", // Add a root margin to start the animation earlier
  });

  const bottomAnimation = useSpring({
    transform: bottomInView ? "translateY(0px)" : "translateY(50px)",
    from: { transform: "translateY(50px)" },
    config: animationConfig,
  });

  return (
    <div className="profile-info">
      <animated.h2 className="mt-3" style={bottomAnimation}>
        {name}
      </animated.h2>
      <animated.p className="mt-3 fw-semibold" style={bottomAnimation}>
        {role}
      </animated.p>
      <animated.p className="email-text" style={bottomAnimation}>
        <a href={`mailto:${email}`} className="text-decoration-none text-black-50">
          {email}
        </a>
      </animated.p>
      <animated.div className="extra-info" style={bottomAnimation} ref={bottomRef}>
        {/* Content that will be animated when it becomes visible */}
      </animated.div>
    </div>
  );
};

export default ProfileInfo;
