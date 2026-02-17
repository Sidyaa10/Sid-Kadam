import React from 'react';
import { Box, Typography, Paper, Stack, Chip, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import styled from 'styled-components';
import { ReactComponent as HtmlIcon } from '../assets/skills/html5.svg';
import { ReactComponent as CssIcon } from '../assets/skills/css3.svg';
import { ReactComponent as JsIcon } from '../assets/skills/javascript.svg';
import { ReactComponent as JavaIcon } from '../assets/skills/java.svg';
import { ReactComponent as CIcon } from '../assets/skills/c.svg';
import { ReactComponent as SqlIcon } from '../assets/skills/sql.svg';
import { ReactComponent as MongoIcon } from '../assets/skills/mongodb.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ReactComponent as PythonIcon } from '../assets/skills/python.svg';
import { ReactComponent as TypeScriptIcon } from '../assets/skills/typescript.svg';

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
    background: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
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
        py: { xs: 3, md: 4 },
        px: { xs: 2, md: 4 }
      }}
    >
      <StyledPaper
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        sx={{ 
          maxWidth: 800, 
          mx: 'auto', 
          p: { xs: 2, sm: 3, md: 4 }, 
          bgcolor: 'background.paper', 
          boxShadow: 3,
          borderRadius: 2,
          width: '100%'
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
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.125rem' },
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
                fontSize: { xs: '1rem', sm: '1.1rem' },
                textAlign: { xs: 'left', sm: 'justify' }
              }}
            >
              I am a passionate Software Engineer with a strong foundation in frontend and full-stack development. I enjoy transforming complex problems into clean, efficient, and scalable solutions.
              <br />
              <br />
              As a recent Computer Science graduate, I continuously improve my skills by building real-world projects and exploring modern technologies. I aim to contribute to impactful products while growing as an engineer.
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
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
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
              sx={{ 
                mb: 3,
                justifyContent: { xs: 'center', sm: 'flex-start' }
              }}
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
                    fontSize: { xs: '0.875rem', sm: '1rem' },
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
            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
              <StyledChip icon={<CIcon style={{ width: 40, height: 40 }} />} label="" sx={{ bgcolor: 'background.default' }} />
              <StyledChip icon={<JavaIcon style={{ width: 40, height: 40 }} />} label="" sx={{ bgcolor: 'background.default' }} />
              <StyledChip icon={<PythonIcon style={{ width: 40, height: 40 }} />} label="" sx={{ bgcolor: 'background.default' }} />
              <StyledChip icon={<HtmlIcon style={{ width: 40, height: 40 }} />} label="" sx={{ bgcolor: 'background.default' }} />
              <StyledChip icon={<CssIcon style={{ width: 40, height: 40 }} />} label="" sx={{ bgcolor: 'background.default' }} />
              <StyledChip icon={<JsIcon style={{ width: 40, height: 40 }} />} label="" sx={{ bgcolor: 'background.default' }} />
              <StyledChip icon={<TypeScriptIcon style={{ width: 40, height: 40 }} />} label="" sx={{ bgcolor: 'background.default' }} />
              <StyledChip icon={<SqlIcon style={{ width: 40, height: 40 }} />} label="" sx={{ bgcolor: 'background.default' }} />
              <StyledChip icon={<MongoIcon style={{ width: 40, height: 40 }} />} label="" sx={{ bgcolor: 'background.default' }} />
              <StyledChip icon={<GitHubIcon style={{ width: 40, height: 40 }} />} label="" sx={{ bgcolor: 'background.default' }} />
            </Stack>
          </motion.div>
        </motion.div>
      </StyledPaper>
    </Box>
  );
}
