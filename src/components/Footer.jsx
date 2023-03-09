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
      
      <div className="address">
      <h3>Address</h3>
      <p>Some Street 69</p>
      <p>28300 Greensberg</p>

      </div>

      <div className="links">
      
      <ul><h3>You can find us here:</h3>
      <li><i class="fa-brands fa-instagram"></i>  <a href="">Instagram</a></li>
      <li><i class="fa-brands fa-facebook"></i>  <a href="">Facebook</a></li>
      <li><i class="fa-brands fa-twitter"></i>  <a href="">Twitter</a></li>
      <li><i class="fa-solid fa-envelope"></i>  <a href="">Email</a></li>
    </ul>
      </div>

      <div className="contact">
        <h3>Contact</h3>
      </div>
    </motion.div>
    
  );
}

export default Footer;
