import React from "react";
import { motion } from "framer-motion";

import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <motion.div
      className='navbar'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <Button variant='text'>Text</Button>

      <Checkbox defaultChecked />
    </motion.div>
  );
}

export default Navbar;
