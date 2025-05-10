import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Box, Paper, Link, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  const contactInfo = [
    {
      icon: <EmailIcon className="text-2xl text-blue-600" />,
      label: 'Email',
      value: 'siddheshkadam2018@gmail.com',
      link: 'mailto:siddheshkadam2018@gmail.com'
    },
    {
      icon: <PhoneIcon className="text-2xl text-blue-600" />,
      label: 'Phone',
      value: '+91 7972079747',
      link: 'tel:+917972079747'
    },
    {
      icon: <LocationOnIcon className="text-2xl text-blue-600" />,
      label: 'Location',
      value: 'Pune, Maharashtra',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <LinkedInIcon className="text-2xl" />,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/siddhesh-kadam'
    },
    {
      icon: <GitHubIcon className="text-2xl" />,
      label: 'GitHub',
      link: 'https://github.com/siddhesh-kadam'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            className="text-4xl font-bold text-center mb-12 text-gray-900"
          >
            Get in Touch
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={0} className="p-6 bg-gray-50 rounded-lg">
                <Typography variant="h6" className="font-semibold mb-6">
                  Contact Information
                </Typography>
                <Box className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Box key={index} className="flex items-center space-x-4">
                      {info.icon}
                      <Box>
                        <Typography variant="subtitle2" className="text-gray-500">
                          {info.label}
                        </Typography>
                        {info.link ? (
                          <Link
                            href={info.link}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            {info.value}
                          </Link>
                        ) : (
                          <Typography variant="body1">{info.value}</Typography>
                        )}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper elevation={0} className="p-6 bg-gray-50 rounded-lg">
                <Typography variant="h6" className="font-semibold mb-6">
                  Connect with Me
                </Typography>
                <Box className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact; 