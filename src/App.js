import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import CustomCursor from './components/CustomCursor';
import AnimatedSection from './components/AnimatedSection';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
  background: #ffffff;
  color: #000000;
  min-height: 100vh;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <CustomCursor />
        <Navbar />
        <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </Box>
      </AppContainer>
    </Router>
  );
}

export default App;