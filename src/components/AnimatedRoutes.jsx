import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import Catalog from "./Catalog";
import Crazy8Game from "./Crazy8Game";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Catalog' element={<Catalog />} />
        {/* Added a link to the crazy 8 game */}
        <Route exact path='/Crazy8Game' element={<Crazy8Game />} />
        <Route exact path='/About' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
