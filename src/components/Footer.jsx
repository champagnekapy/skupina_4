import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.div
      className='footer'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <h2>Footer</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum aut quisquam provident! Quis placeat cupiditate quam sunt. Veritatis autem adipisci sint repudiandae esse quia quasi qui aut? Nisi, hic ducimus.</p>
    </motion.div>
    
  );
}

export default Footer;
