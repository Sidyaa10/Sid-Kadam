import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from 'styled-components';

const Section = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(80px, 10vh, 120px) 0;
  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const Description = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: clamp(14px, 2vw, 20px);
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 768px) {
    font-size: clamp(14px, 1.5vw, 18px);
  }
`;

const ProfileImage = styled(motion.img)`
  width: clamp(150px, 20vw, 200px);
  height: clamp(150px, 20vw, 200px);
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

const SocialIcon = styled(motion.a)`
  width: clamp(32px, 5vw, 40px);
  height: clamp(32px, 5vw, 40px);
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
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
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  {
    icon: <GitHubIcon />,
    label: 'GitHub',
    href: 'https://github.com/Sidyaa10',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  {
    icon: <EmailIcon />,
    label: 'Email',
    href: 'mailto:siddheshkadam2018@gmail.com'
  }
];

const Home = () => {
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
              Hi, I&apos;m Siddhesh Anand Kadam<br />
            </Typography>
            <Typography variant="h5" color="secondary.main" component="span">
              Frontend Developer | Full-Stack Engineer | Building scalable and elegant web experiences.
            </Typography>
          </Box>
          <Description variant="body1" sx={{ textAlign: 'center', maxWidth: '600px', mx: 'auto', mt: 2 }}>
            I specialize in building modern, high-performance web applications using React, Next.js, and the MERN stack. I focus on clean architecture, responsive design, and delivering production-ready solutions.
          </Description>
          <SocialLinks>
            {socialLinks.map((link, index) => (
              <SocialIcon
                key={index}
                href={link.href}
                target={link.target}
                rel={link.rel}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </SocialIcon>
            ))}
          </SocialLinks>
        </Section>
      </Box>
    </Section>
  );
};

export default Home;
