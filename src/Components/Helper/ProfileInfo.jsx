import React from "react";
import { animated, useSpring } from "react-spring";

const ProfileInfo = ({ name, role, email }) => {
  const animationConfig = {
    duration: 1500, // Set the duration to 1.5 seconds
    tension: 200,
    friction: 20,
  };

  const topAnimation = useSpring({
    transform: "translateY(0px)",
    from: { transform: "translateY(-100px)" },
    config: animationConfig,
  });

  const rightAnimation = useSpring({
    transform: "translateX(0px)",
    from: { transform: "translateX(100px)" },
    config: animationConfig,
  });

  const bottomAnimation = useSpring({
    transform: "translateY(0px)",
    from: { transform: "translateY(100px)" },
    config: animationConfig,
  });

  const leftAnimation = useSpring({
    transform: "translateX(0px)",
    from: { transform: "translateX(-100px)" },
    config: animationConfig,
  });

  return (
    <div className="profile-info">
      <animated.h2 className="mt-3" style={topAnimation}>
        {name}
      </animated.h2>
      <animated.p className="mt-3 fw-semibold" style={rightAnimation}>
        {role}
      </animated.p>
      <animated.p className="email-text" style={bottomAnimation}>
        <a href={`mailto:${email}`} className="text-decoration-none text-black-50">{email}</a>
      </animated.p>
      <animated.div className="extra-info" style={leftAnimation}>
        {/* Add more content with left animation */}
      </animated.div>
    </div>
  );
};

export default ProfileInfo;
