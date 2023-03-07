import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import LandingPage from './pages/landingPage';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import ProjectDetail from './pages/projects/projectDetail';

function AnimatedRoutes() {
    const location = useLocation();

  return (
    <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="react-portfolio" element={<LandingPage/>} />
            <Route path="/react-portfolio/about" element={<About/>} />
            <Route path="/react-portfolio/contact" element={<Contact/>} />
            <Route path="/react-portfolio/projects" element={<Projects/>} />
            <Route path="*" element={<LandingPage/>}/>
            <Route path="/react-portfolio/projects/*" element={<ProjectDetail/>}/>
          </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;