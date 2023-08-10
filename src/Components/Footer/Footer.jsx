import React from "react";
import { motion } from "framer-motion";
import HomePageData from "../Constant/HomeContent";

const Footer = () => {
  const { emailTo } = HomePageData;

  const footerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.footer
      className="footer bg-dark text-white py-3"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container text-center">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} All rights reserved
          <a href={emailTo} className="footer-link text-white mx-2">
            vallarasuk.com
          </a>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
