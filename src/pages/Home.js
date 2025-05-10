import React, { useEffect } from 'react';
import { Box, Typography, Stack, Avatar, Chip, IconButton, useTheme } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styled from 'styled-components';

const StyledIconButton = styled(motion(IconButton))`
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: ${props => props.theme.palette.secondary.main}20;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
  }

  &:hover::before {
    width: 100%;
    height: 100%;
  }
`;

const StyledAvatar = styled(motion(Avatar))`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border: 2px solid ${props => props.theme.palette.secondary.main};
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:hover::after {
    opacity: 1;
  }
`;

const avatarUrl = '';

const socialLinks = [
  {
    icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/siddhesh-kadam-593444359/', color: 'secondary.main',
  },
  {
    icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com/Sidyaa10', color: 'secondary.main',
  },
  {
    icon: <EmailIcon />, label: 'Email', href: 'mailto:siddheshkadam2018@gmail.com', color: 'secondary.main',
  },
  {
    icon: <PhoneIcon />, label: 'Phone', href: 'tel:+917972079747', color: 'secondary.main',
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  }),
};

export default function Home() {
  const theme = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '120%',
          height: '120%',
          borderRadius: '50%',
          background: `radial-gradient(circle at 60% 40%, ${theme.palette.accent.main} 0%, transparent 80%)`,
          zIndex: 0,
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: `radial-gradient(circle at 40% 60%, ${theme.palette.primary.main} 0%, transparent 80%)`,
          zIndex: 0,
        }}
      />
      
      <Box sx={{ zIndex: 1, textAlign: 'center', width: '100%', px: 2 }}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <StyledAvatar
            sx={{ width: 120, height: 120, mx: 'auto', mb: 2, bgcolor: 'secondary.main', fontSize: 48 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={textVariants}
            custom={0}
          >
            S
          </StyledAvatar>
          
          <motion.div variants={textVariants} custom={1}>
            <Typography variant="h2" fontWeight={700} color="primary.main" gutterBottom>
              Siddhesh Anand Kadam
            </Typography>
          </motion.div>
          
          <motion.div variants={textVariants} custom={2}>
            <Typography variant="h5" color="secondary.main" gutterBottom>
              Software Engineer
            </Typography>
          </motion.div>
          
          <motion.div variants={textVariants} custom={3}>
            <Typography variant="h6" color="text.primary" sx={{ maxWidth: 600, mx: 'auto', mb: 3 }}>
              Hi! I recently graduated from Kaveri College. I'm a hard worker and always give my hundred percent on the tasks/work I've been assigned. I wish to grow my skills further and gain more experience through my next opportunity.
            </Typography>
          </motion.div>
          
          <motion.div variants={textVariants} custom={4}>
            <Stack direction="row" spacing={2} justifyContent="center" mb={2} flexWrap="wrap" gap={2}>
              {socialLinks.map((item, index) => (
                <StyledIconButton
                  key={item.label}
                  component="a"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: theme.palette.secondary.main, bgcolor: 'background.paper', boxShadow: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  custom={index}
                >
                  {item.icon}
                </StyledIconButton>
              ))}
              <motion.div
                variants={textVariants}
                custom={socialLinks.length}
                whileHover={{ scale: 1.05 }}
              >
                <Chip 
                  icon={<LocationOnIcon />} 
                  label="Pune, Maharashtra" 
                  sx={{ 
                    bgcolor: 'background.paper', 
                    color: 'primary.main', 
                    fontWeight: 500,
                    '&:hover': {
                      bgcolor: 'background.paper',
                      boxShadow: 2,
                    }
                  }} 
                />
              </motion.div>
            </Stack>
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
} 