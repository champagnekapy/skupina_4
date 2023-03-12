import React from "react";
import { motion } from "framer-motion";



function Footer() {
{/* Addedd constant values for location informayion */}
const address = 'Some Street Name';
const streeetName = 'Group Four Main Rode';
const [zipCode, city] = [28300, 'Some City'];
{/* Addedd different links for socials in the footer */}
const links = {
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/',
  twitter: 'https://twitter.com/',
  email: 'https://www.google.com/gmail/about/',
};
  console.log(links)
  return (
    <motion.div
      className='footer'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      
      <div className="address">
      <h3>{ address }</h3>
      <p>{ streeetName }</p>
      <p>{ zipCode }, { city }</p>

      </div>

      <div className="links">
      
      <h3>You can find us here:</h3>
      <ul>
        <li><a href={ links['instagram'] }>Instagram</a></li>
        <li><a href={ links['facebook'] }>Facebook</a></li>
        <li><a href={ links['twitter'] }>Twitter</a></li>
        <li><a href={ links['email'] }>Email</a></li>
    </ul>
      </div>

      <div className="contact">
        <h3>Contact</h3>
      </div>
     
    </motion.div>
    
  );
}

export default Footer;
