import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Box } from '@mui/material';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <Container maxWidth="lg">
        <Box className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
            >
              Siddhesh Anand Kadam
            </Typography>
            <Typography
              variant="h2"
              className="text-2xl md:text-3xl font-medium mb-8 text-gray-700"
            >
              Software Engineer
            </Typography>
            <Typography
              variant="body1"
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12"
            >
              Passionate about creating elegant solutions to complex problems.
              Always striving to learn and grow in the ever-evolving world of technology.
            </Typography>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="#contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </Box>
      </Container>
    </section>
  );
};

export default Hero; 