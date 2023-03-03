import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import LandingPage from './pages/landingPage';
import About from './pages/about';

function AnimatedRoutes() {
    const location = useLocation();

  return (
    <AnimatePresence intial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage/>} />
            <Route path="about" element={<About/>} />
          </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;