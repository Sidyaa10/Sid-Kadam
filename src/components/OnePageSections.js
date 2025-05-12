import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';
import Contact from '../pages/Contact';
import Expose from '../pages/Expose';


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
  if (!Component || typeof Component !== 'function') {
    return fallback;
  }
  return <Component {...props} />;
};

const sections = [
  { id: 'home', component: Home, name: "Home" },
  { id: 'about', component: About, name: "About" },
  { id: 'skills', component: Skills, name: "Skills" },
  { id: 'projects', component: Projects, name: "Projects" },
  { id: 'experience', component: Experience, name: "Experience" },
  { id: 'contact', component: Contact, name: "Contact" },
  { id: 'expose', component: Expose, name: "Expose" },
];

const OnePageSections = () => {
  const containerRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Enable smooth scrolling
    container.style.scrollBehavior = 'smooth';
    document.body.style.overflowY = 'hidden';

    const handleResize = () => {
      // Update viewport dimensions
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };

    const handleScroll = () => {
      setIsScrolling(true);
      
      // Debounce scroll end
      setTimeout(() => {
        setIsScrolling(false);
      }, 300);

      // Calculate current section based on scroll position
      const scrollPosition = container.scrollTop;
      const totalHeight = container.scrollHeight;
      const viewportHeight = window.innerHeight;
      const sectionCount = sections.length;
      
      // Calculate which section is most visible
      const newCurrent = Math.floor((scrollPosition / (totalHeight - viewportHeight)) * sectionCount);
      
      if (newCurrent !== current && newCurrent >= 0 && newCurrent < sectionCount) {
        setCurrent(newCurrent);
      }
    };

    // Initialize dimensions
    handleResize();

    // Add event listeners
    window.addEventListener('resize', handleResize);
    container.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('scroll', handleScroll);
      document.body.style.overflowY = 'auto';
    };
  }, [current]);

  const scrollToSection = (idx) => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        top: idx * window.innerHeight,
        behavior: 'smooth',
      });
      // Update current state after scroll animation completes
      setTimeout(() => setCurrent(idx), 500);
    }
  };

  const handlePrev = () => {
    if (current > 0) scrollToSection(current - 1);
  };

  const handleNext = () => {
    if (current < sections.length - 1) scrollToSection(current + 1);
  };

  return (
    <Box sx={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Vertical scrollable container */}
      <Box
        ref={containerRef}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'auto',
          scrollBehavior: 'smooth',
          msOverflowStyle: 'none', // Hide scrollbar in IE and Edge
          scrollbarWidth: 'none', // Hide scrollbar in Firefox
          '&::-webkit-scrollbar': {
            display: 'none', // Hide scrollbar in Chrome, Safari, and Opera
          },
        }}
      >
        {sections.map((Section, idx) => (
          <Box
            key={idx}
            sx={{
              width: '100%',
              minHeight: '100vh',
              position: 'relative',
              overflow: 'visible',
              paddingTop: idx === 0 ? 0 : '40px',
              paddingBottom: idx === sections.length - 1 ? '80px' : '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              transition: 'opacity 0.5s ease-in-out',
            }}
          >
            <Box sx={{ maxWidth: '1200px', width: '100%', px: 4 }}>
              <ErrorBoundary sectionName={Section.name}>
                <SafeComponent Component={Section.component} fallback={<FallbackSection sectionName={Section.name} />} />
              </ErrorBoundary>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Navigation Dots */}
      <Box
        sx={{
          position: 'fixed',
          right: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1
        }}
      >
        {sections.map((_, idx) => (
          <Button
            key={idx}
            onClick={() => scrollToSection(idx)}
            variant={current === idx ? 'contained' : 'outlined'}
            sx={{
              minWidth: 32,
              minHeight: 32,
              borderRadius: '50%',
              p: 0
            }}
          >
            {idx + 1}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default OnePageSections;