import React from "react";
import { motion } from "framer-motion";


function Navbar() {
  return (
    <motion.div
      className='navbar'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >  
      <a href="" className="logo">Logo/Name</a>
      <ul>
        <li><a href="/" className="navHome">Home</a></li>
        <li><a href="/catalog" className="navCatalog">Catalog</a></li>
        <li><a href="/crazy8game" className="navCrazy8Game">Crazy 8 Game</a></li>
        <li><a href="/about" className="navAbout">About</a></li>
      </ul>
    <button className="logIn">Log in</button>

    </motion.div>
  );
}

export default Navbar;
