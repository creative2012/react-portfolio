import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import LandingPage from './pages/landingPage';
import About from './pages/about';
import Projects from './pages/projects';

function AnimatedRoutes() {
    const location = useLocation();

  return (
    <AnimatePresence intial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="react-portfolio" element={<LandingPage/>} />
            <Route path="/react-portfolio/about" element={<About/>} />
            {/* <Route path="/react-portfolio/contact" element={<Contact/>} /> */}
            <Route path="/react-portfolio/projects" element={<Projects/>} />
          </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;