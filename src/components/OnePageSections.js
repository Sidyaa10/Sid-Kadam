import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';
import Contact from '../pages/Contact';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Error boundary component to catch and display errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ p: 2, bgcolor: '#ffebee', color: '#c62828', borderRadius: 1 }}>
          <Typography variant="h6">Error in {this.props.sectionName}:</Typography>
          <Typography variant="body2">{this.state.error?.toString()}</Typography>
        </Box>
      );
    }
    return this.props.children;
  }
}

// Fallback component for sections that fail to render
const FallbackSection = ({ sectionName }) => (
  <Box sx={{ p: 2, bgcolor: '#e3f2fd', color: '#1565c0', borderRadius: 1 }}>
    <Typography variant="h6">Loading {sectionName}...</Typography>
  </Box>
);

// Safe component wrapper to handle missing components
const SafeComponent = ({ Component, fallback, ...props }) => {
  if (!Component) {
    return fallback;
  }
  return <Component {...props} />;
};

const sections = [
  { id: 'home', component: <ErrorBoundary sectionName="Home"><Home /></ErrorBoundary> },
  { id: 'about', component: <ErrorBoundary sectionName="About"><About /></ErrorBoundary> },
  { id: 'skills', component: <ErrorBoundary sectionName="Skills"><Skills /></ErrorBoundary> },
  { id: 'projects', component: <ErrorBoundary sectionName="Projects"><Projects /></ErrorBoundary> },
  { id: 'experience', component: <ErrorBoundary sectionName="Experience"><Experience /></ErrorBoundary> },
  { id: 'contact', component: <ErrorBoundary sectionName="Contact"><Contact /></ErrorBoundary> },
];

const OnePageSections = () => {
  const containerRef = useRef(null);
  const [current, setCurrent] = useState(0);

  // Ensure the container always fills the viewport
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        containerRef.current.childNodes.forEach((child) => {
          if (child.style) {
            child.style.width = window.innerWidth + 'px';
            child.style.height = window.innerHeight + 'px';
          }
        });
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (idx) => {
    setCurrent(idx);
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: idx * window.innerWidth,
        behavior: 'smooth',
      });
    }
  };

  const handlePrev = () => {
    if (current > 0) scrollToSection(current - 1);
  };

  const handleNext = () => {
    if (current < sections.length - 1) scrollToSection(current + 1);
  };

  // Sync scroll position with dot navigation
  const handleScroll = (e) => {
    const idx = Math.round(e.target.scrollLeft / window.innerWidth);
    if (idx !== current) setCurrent(idx);
  };

  return (
    <Box sx={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Horizontal scrollable container */}
      <Box
        ref={containerRef}
        onScroll={handleScroll}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100vw',
          height: '100vh',
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
        }}
      >
        {sections.map((section, idx) => (
          <Box
            key={section.id}
            id={section.id}
            sx={{
              width: '100vw',
              height: '100vh',
              flexShrink: 0,
              scrollSnapAlign: 'start',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'auto',
            }}
          >
            {section.component}
          </Box>
        ))}
      </Box>
      {/* Vertical dot navigation */}
      <Box sx={{ position: 'fixed', top: '50%', right: 24, transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, zIndex: 20 }}>
        {sections.map((section, idx) => (
          <IconButton
            key={section.id}
            size="small"
            onClick={() => scrollToSection(idx)}
            sx={{
              width: 16,
              height: 16,
              bgcolor: idx === current ? 'primary.main' : 'grey.400',
              borderRadius: '50%',
              mb: 1,
              transition: 'background 0.3s',
            }}
          />
        ))}
      </Box>
      {/* Arrow navigation */}
      <IconButton
        onClick={handlePrev}
        sx={{ position: 'absolute', top: '50%', left: 16, zIndex: 10, bgcolor: 'background.paper', opacity: current === 0 ? 0.3 : 1 }}
        disabled={current === 0}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{ position: 'absolute', top: '50%', right: 16, zIndex: 10, bgcolor: 'background.paper', opacity: current === sections.length - 1 ? 0.3 : 1 }}
        disabled={current === sections.length - 1}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default OnePageSections; 