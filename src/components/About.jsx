import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className='about'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <h1>About</h1>
      <div className="aboutMain">
        <h3>This is us</h3>
      </div>
    </motion.div>
  );
}

export default About;
