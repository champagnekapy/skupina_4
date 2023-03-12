import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import Catalog from "./Catalog";
import Game from "./CrazyEights/Game";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Catalog' element={<Catalog />} />
        <Route exact path='/About' element={<About />} />
        <Route exact path='/CrazyEights' element={<Game />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
