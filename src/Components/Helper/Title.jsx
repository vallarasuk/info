import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Title = ({ text }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for the loading animation
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(loadingTimer);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.h2
      className="motion-title my-4" // Add any styles you want to apply to the title here
      variants={titleVariants}
      initial="hidden"
      animate={isLoading ? "hidden" : "visible"}
    >
      {isLoading ? " " : text}
    </motion.h2>
  );
};

export default Title;
