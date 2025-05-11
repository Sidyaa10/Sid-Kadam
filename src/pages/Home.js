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
  text-align: center;
  @media (max-width: 768px) {
    font-size: clamp(32px, 6vw, 60px);
  }
`;

const Subtitle = styled(Typography)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: clamp(20px, 4vw, 40px);
  margin-bottom: 30px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: clamp(18px, 3vw, 32px);
  }
`;

const Description = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: clamp(16px, 2vw, 20px);
  max-width: 600px;
  margin: 0 auto 50px;
  line-height: 1.6;
  text-align: center;
  padding: 0 20px;
  @media (max-width: 768px) {
    font-size: clamp(14px, 1.8vw, 18px);
    padding: 0 16px;
  }
`;

const Pfp = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
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
      style={{ justifyContent: 'flex-start', minHeight: '100vh', paddingTop: '240px' }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        top: 0,
      }}>
        <Pfp src="/profile.jpeg" alt="Profile" />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Subtitle theme={theme}>Hi, my name is</Subtitle>
          <Title theme={theme}>Siddhesh Anand Kadam</Title>
          <Description theme={theme}>
            I'm a Software Engineer passionate about creating elegant solutions to complex problems.
            I recently graduated from Kaveri College and I'm always eager to learn and grow in the
            ever-evolving world of technology.
          </Description>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Stack direction="row" spacing={2}>
            {socialLinks.map((item, index) => (
              <StyledIconButton
                key={item.label}
                component="a"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                theme={theme}
              >
                {item.icon}
              </StyledIconButton>
            ))}
          </Stack>
        </motion.div>
      </Box>
    </Section>
  );
};

export default Home; 