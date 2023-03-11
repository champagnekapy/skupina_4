import React from "react";
import { motion } from "framer-motion";

function Cart() {
	return (
		<motion.div
			className="Cart"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 1 } }}
		>
			<article>
				<header>Seznam iger</header>
				<img src="ime_igre_1" alt="prva_igra" title="Prva_igra" />
				<p>Ime_prve_igre</p>
				<p>Cena_v_evrih</p>
				<button>Zakljuci_nakup</button>
			</article>
		</motion.div>
	);
}

export default Cart;
