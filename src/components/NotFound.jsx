import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import slika1 from "./Photos/NotFound1.png";

function NotFound() {
  return (
    <motion.div
      className='notFound'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <h2>Ups!!</h2>
      <p>Ta stran ne obstaja</p>
      <Link to='/'>Nazaj na domačo stran...</Link>
      <div className='notFoundSlika'>
        <Link to='/'>
          <img
            src={slika1}
            alt='not found'
            width='420 px'
            height='480 px'
            margin='10xp'
          />
        </Link>
      </div>
    </motion.div>
  );
}

export default NotFound;
