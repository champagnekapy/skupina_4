import React from "react";
import { motion } from "framer-motion";

function Cart() {
	return (
		<motion.div
			className="Cart"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 1 } }}
		></motion.div>
	);
}

export default Cart;
