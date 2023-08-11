import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Title = ({ text }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for the loading animation
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(loadingTimer);
  }, []);

  // Animation variants for the title motion
  const titleVariantsBounce = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.5 } },
    exit: { opacity: 0, y: 50 },
  };
  

  return (
    <motion.h2
      className="motion-title" // Add any styles you want to apply to the title here
      variants={titleVariantsBounce}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {isLoading ? " " : text}
    </motion.h2>
  );
};

export default Title;
