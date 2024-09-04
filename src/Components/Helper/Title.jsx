import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Title = ({ text }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for the loading animation
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the loading time as needed

    return () => clearTimeout(loadingTimer);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.h2
      className="motion-title my-4"
      variants={titleVariants}
      initial="hidden"
      animate={isLoading ? "hidden" : "visible"}
    >
      {isLoading ? "Loading..." : text}
    </motion.h2>
  );
};

export default Title;
