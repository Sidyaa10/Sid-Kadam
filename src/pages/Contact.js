import React from 'react';
import { Box, Typography, Paper, Stack, IconButton, Chip, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const contactLinks = [
  {
    icon: <EmailIcon />, label: 'Email', href: 'mailto:siddheshkadam2018@gmail.com', color: 'secondary.main',
  },
  {
    icon: <PhoneIcon />, label: 'Phone', href: 'tel:+917972079747', color: 'secondary.main',
  },
  {
    icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/siddhesh-kadam-5b0961367/', color: 'secondary.main',
  },
  {
    icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com/Sidyaa10', color: 'secondary.main',
  },
];

export default function Contact() {
  const theme = useTheme();
  return (
    <Box sx={{ minHeight: '80vh', bgcolor: 'background.default', py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: 600, margin: '0 auto' }}
      >
        <Typography variant="h4" color="secondary.main" fontWeight={700} align="center" gutterBottom>
          Contact
        </Typography>
        <Paper sx={{ p: 4, bgcolor: 'background.paper', boxShadow: 3, mt: 4 }}>
          <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
            {contactLinks.map((item) => (
              <IconButton
                key={item.label}
                component="a"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: theme.palette.secondary.main, bgcolor: 'background.default', boxShadow: 1 }}
              >
                {item.icon}
              </IconButton>
            ))}
            <Chip icon={<LocationOnIcon />} label="Pune, Maharashtra" sx={{ bgcolor: 'background.default', color: 'primary.main', fontWeight: 500 }} />
          </Stack>
          <Typography align="center" color="text.primary" sx={{ mb: 2 }}>
            Feel free to reach out to me via email, phone, or social media!
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
} 
