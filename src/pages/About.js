import React from 'react';
import { Box, Typography, Paper, Stack, Chip, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import styled from 'styled-components';

const StyledPaper = styled(motion(Paper))`
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${props => props.theme.palette.primary.main}, ${props => props.theme.palette.secondary.main});
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.6s ease;
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
`;

const StyledChip = styled(motion(Chip))`
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default function About() {
  const theme = useTheme();
  
  return (
    <Box 
      sx={{ 
        minHeight: '80vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        bgcolor: 'background.default',
        py: 4,
        px: 2
      }}
    >
      <StyledPaper
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        sx={{ 
          maxWidth: 800, 
          mx: 'auto', 
          p: { xs: 3, md: 4 }, 
          bgcolor: 'background.paper', 
          boxShadow: 3,
          borderRadius: 2
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Typography 
              variant="h4" 
              color="secondary.main" 
              fontWeight={700} 
              gutterBottom
              sx={{ 
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 60,
                  height: 3,
                  background: theme.palette.secondary.main,
                  borderRadius: 2
                }
              }}
            >
              About Me
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography 
              color="text.primary" 
              sx={{ 
                mb: 3,
                lineHeight: 1.8,
                fontSize: '1.1rem'
              }}
            >
              Hi Sir/Madam, my name is Siddhesh Anand Kadam and I recently graduated from Kaveri College. I am a hard worker and always give my hundred percent on the tasks/work I've been assigned. I wish to grow my skills further and gain more experience through my next opportunity.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography 
              variant="h6" 
              color="primary.main" 
              fontWeight={600} 
              sx={{ 
                mt: 3,
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                '&::before': {
                  content: '""',
                  display: 'inline-block',
                  width: 20,
                  height: 20,
                  background: theme.palette.primary.main,
                  borderRadius: '50%',
                  mr: 1,
                  opacity: 0.2
                }
              }}
            >
              Key Skills
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Stack 
              direction="row" 
              spacing={1} 
              flexWrap="wrap" 
              gap={1}
              sx={{ mb: 3 }}
            >
              {['Software Development & Testing', 'Data Analytics', 'Database Management', 'Coding & Troubleshooting'].map((skill, index) => (
                <StyledChip
                  key={skill}
                  icon={<StarIcon />}
                  label={skill}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    bgcolor: 'background.default',
                    '& .MuiChip-icon': {
                      color: theme.palette.secondary.main
                    }
                  }}
                />
              ))}
            </Stack>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography 
              variant="h6" 
              color="primary.main" 
              fontWeight={600} 
              sx={{ 
                mt: 3,
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                '&::before': {
                  content: '""',
                  display: 'inline-block',
                  width: 20,
                  height: 20,
                  background: theme.palette.primary.main,
                  borderRadius: '50%',
                  mr: 1,
                  opacity: 0.2
                }
              }}
            >
              Technical Skills
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Stack 
              direction="row" 
              spacing={1} 
              flexWrap="wrap" 
              gap={1}
            >
              {['C Language', 'Java', 'HTML', 'CSS', 'JavaScript', 'SQL', 'Git', 'MongoDB'].map((skill, index) => (
                <StyledChip
                  key={skill}
                  label={skill}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    bgcolor: 'background.default',
                    color: theme.palette.primary.main,
                    fontWeight: 500
                  }}
                />
              ))}
            </Stack>
          </motion.div>
        </motion.div>
      </StyledPaper>
    </Box>
  );
} 