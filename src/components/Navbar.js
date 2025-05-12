import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, useTheme } from '@mui/material';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={isScrolled ? 4 : 0}
      sx={{
        bgcolor: theme.palette.primary.main,
        transition: 'all 0.3s ease-in-out',
        boxShadow: isScrolled ? '0 2px 8px rgba(0,0,0,0.1)' : 'none'
      }}
    >
      <Toolbar sx={{ 
        justifyContent: 'center',
        minHeight: { xs: 56, sm: 64 }
      }}>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.background.paper,
            fontWeight: 700,
            textAlign: 'center',
            flexGrow: 1,
            letterSpacing: 2,
            transition: 'color 0.3s',
            fontSize: 'clamp(1rem, 3vw, 1.5rem)'
          }}
        >
          Siddhesh Kadam
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 