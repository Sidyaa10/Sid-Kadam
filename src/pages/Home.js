import React from 'react';
import { Box, Typography, Stack, IconButton, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from 'styled-components';

const StyledIconButton = styled(motion(IconButton))`
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    background: ${({ theme }) => theme.colors.secondary}22;
  }
`;

const Section = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 600;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: clamp(32px, 6vw, 60px);
  }
`;

const Subtitle = styled(Typography)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: clamp(20px, 4vw, 40px);
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: clamp(18px, 3vw, 32px);
  }
`;

const Description = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: clamp(16px, 2vw, 20px);
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 768px) {
    font-size: clamp(14px, 1.5vw, 18px);
  }
`;

const ProfileImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin: 20px auto;
  border: 4px solid ${({ theme }) => theme.colors.secondary};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const SocialLinks = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

const SocialIcon = styled(motion.div)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const socialLinks = [
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/siddhesh-kadam-593444359/',
  },
  {
    icon: <GitHubIcon />,
    label: 'GitHub',
    href: 'https://github.com/Sidyaa10',
  },
  {
    icon: <EmailIcon />,
    label: 'Email',
    href: 'mailto:siddheshkadam2018@gmail.com',
  },
];

const Home = () => {
  const theme = useTheme();

  return (
    <Section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ justifyContent: 'flex-start', minHeight: '100vh', paddingTop: '60px' }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        top: 0,
      }}>
        <Section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <ProfileImage
            src="/profile.jpeg"
            alt="Profile"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <Box sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
            <Typography variant="h5" color="text.primary" component="span">
              Hi, my name is<br />
            </Typography>
            <Typography variant="h5" color="secondary.main" component="span">
              Siddhesh Anand Kadam
            </Typography>
          </Box>
          <Description variant="body1" sx={{ textAlign: 'center', maxWidth: '600px', mx: 'auto', mt: 2 }}>
            I'm a Software Engineer passionate about creating elegant solutions to complex problems. I recently graduated from Kaveri College and I'm always eager to learn and grow in the ever-evolving world of technology.
          </Description>
          <SocialLinks>
            <SocialIcon
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <EmailIcon sx={{ color: 'white' }} />
            </SocialIcon>
            <SocialIcon
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon sx={{ color: 'white' }} />
            </SocialIcon>
            <SocialIcon
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GitHubIcon sx={{ color: 'white' }} />
            </SocialIcon>
          </SocialLinks>
        </Section>
      </Box>
    </Section>
  );
};

export default Home; 