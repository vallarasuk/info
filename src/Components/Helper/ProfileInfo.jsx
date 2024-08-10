import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";

const ProfileInfo = ({ name, email }) => {
  const roles = [
    "Software Developer",
    "WordPress Plugin Developer",
    "React Developer",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Role change effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const currentRole = roles[currentRoleIndex];

  // Animation configuration
  const animationConfig = {
    tension: 170,
    friction: 26,
  };

  // Intersection observer for triggering animation
  const [bottomRef, bottomInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  // Bottom animation spring
  const bottomAnimation = useSpring({
    transform: bottomInView ? "translateY(0px)" : "translateY(50px)",
    opacity: bottomInView ? 1 : 0,
    config: animationConfig,
  });

  // Role change animation spring
  const roleAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(10px)" },
    reset: true,
    config: { duration: 1000 },
  });

  return (
    <div className="profile-info">
      <animated.h2 className="mt-3 my-name" style={bottomAnimation}>
        {name}
      </animated.h2>
      <animated.p className="mt-4 fw-semibold my-role" style={roleAnimation}>
        {currentRole}
      </animated.p>
      <animated.p className="h5 email-text mt-4" style={bottomAnimation}>
        <a href={`mailto:${email}`} className="text-decoration-none text-black">
          {email}
        </a>
      </animated.p>
      <animated.div
        className="extra-info"
        style={bottomAnimation}
        ref={bottomRef}
      ></animated.div>
    </div>
  );
};

export default ProfileInfo;
