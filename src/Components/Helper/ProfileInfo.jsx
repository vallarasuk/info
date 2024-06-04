import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";

const ProfileInfo = ({ name, email }) => {
  const roles = [
    "Software Developer",
    "Wordpress Plugin Developer",
    "React Developer",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const currentRole = roles[currentRoleIndex];

  const animationConfig = {
    duration: 1000,
    tension: 200,
    friction: 20,
  };

  const [bottomRef, bottomInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  const bottomAnimation = useSpring({
    transform: bottomInView ? "translateY(0px)" : "translateY(50px)",
    from: { transform: "translateY(50px)" },
    config: animationConfig,
  });

  const roleAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(10px)" },
    reset: true,
    config: { duration: 500 },
  });

  return (
    <div className="profile-info">
      <animated.h2 className="mt-3 my-name" style={bottomAnimation}>
        {name}
      </animated.h2>
      <animated.h4 className="mt-4 fw-semibold my-role" style={roleAnimation}>
        {currentRole}
      </animated.h4>
      <animated.p className="email-text mt-4" style={bottomAnimation}>
        <a
          href={`mailto:${email}`}
          className="text-decoration-none text-black-50"
        >
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
