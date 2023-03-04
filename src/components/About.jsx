import React from "react";
import { motion } from "framer-motion";

function Catalog() {
  return (
    <motion.div
      className='catalog'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    ></motion.div>
  );
}

export default Catalog;
