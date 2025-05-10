import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, useTheme, useMediaQuery, Slide, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Framer Motion variants
  const navVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="visible"
      style={{ position: 'sticky', top: 0, zIndex: 1200 }}
    >
      <AppBar
        position="static"
        elevation={isScrolled ? 4 : 0}
        sx={{
          bgcolor: isScrolled ? 'background.paper' : 'primary.main',
          color: isScrolled ? 'primary.main' : 'background.paper',
          transition: 'background 0.3s',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: 64 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: isScrolled ? 'primary.main' : 'background.paper',
                letterSpacing: 2,
                transition: 'color 0.3s',
              }}
            >
              Siddhesh
            </Typography>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Box key={item.path} sx={{ position: 'relative' }}>
                  <Button
                    component={Link}
                    to={item.path}
                    sx={{
                      color:
                        location.pathname === item.path
                          ? theme.palette.secondary.main
                          : isScrolled
                          ? 'primary.main'
                          : 'background.paper',
                      fontWeight: 500,
                      fontSize: 16,
                      px: 2,
                      position: 'relative',
                      background: 'none',
                      '&:hover': {
                        color: theme.palette.secondary.main,
                        background: 'none',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                  {/* Animated underline for active link */}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navbar-underline"
                      style={{
                        height: 3,
                        borderRadius: 2,
                        background: theme.palette.secondary.main,
                        position: 'absolute',
                        left: 12,
                        right: 12,
                        bottom: 4,
                      }}
                    />
                  )}
                </Box>
              ))}
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              sx={{ color: isScrolled ? 'primary.main' : 'background.paper' }}
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ position: 'absolute', top: 64, left: 0, right: 0, zIndex: 1201 }}
          >
            <Paper elevation={4} sx={{ bgcolor: 'background.paper', py: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  fullWidth
                  onClick={() => setIsMobileMenuOpen(false)}
                  sx={{
                    color:
                      location.pathname === item.path
                        ? theme.palette.secondary.main
                        : 'primary.main',
                    fontWeight: 500,
                    fontSize: 18,
                    py: 1.5,
                    justifyContent: 'flex-start',
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar; 