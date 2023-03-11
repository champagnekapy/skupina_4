import React from "react";
import { motion } from "framer-motion";

function Home() {
	return (
		<motion.div
			className="home"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 1 } }}
		>
			<h1>Home</h1>
		</motion.div>
	);
}

export default Home;
