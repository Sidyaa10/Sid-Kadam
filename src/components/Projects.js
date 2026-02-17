import React from 'react';
import { motion } from 'framer-motion';
import {
  Typography,
  Container,
  Paper,
  Box,
  Chip,
  Button
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

// ===== LOGO IMPORTS =====
import reactLogo from "../assets/logos/react.svg";
import nextLogo from "../assets/logos/nextjs.svg";
import nodeLogo from "../assets/logos/nodejs.svg";
import mongoLogo from "../assets/logos/mongodb.svg";
import tailwindLogo from "../assets/logos/tailwind.svg";
import framerLogo from "../assets/logos/framer.svg";
import jwtLogo from "../assets/logos/jwt.svg";
import leafletLogo from "../assets/logos/leaflet.svg";

const Projects = () => {
  const project = {
    title: 'Wanderlust Road Stories',
    description:
      'A production-ready full-stack travel storytelling platform where users can create, explore, and filter global road trip stories with secure authentication and interactive map integration.',

    technologies: [
      { name: 'React', icon: reactLogo },
      { name: 'Next.js', icon: nextLogo },
      { name: 'Node.js', icon: nodeLogo },
      { name: 'MongoDB', icon: mongoLogo },
      { name: 'Tailwind CSS', icon: tailwindLogo },
      { name: 'Framer Motion', icon: framerLogo },
      { name: 'JWT Authentication', icon: jwtLogo },
      { name: 'Leaflet Maps', icon: leafletLogo }
    ],

    outcomes: [
      'Built a full-stack MERN application with secure JWT-based authentication.',
      'Implemented interactive maps using Leaflet for location-based storytelling.',
      'Designed a fully responsive UI using Tailwind CSS and Framer Motion.',
      'Developed complete CRUD functionality for user-generated travel stories.',
      'Deployed on Vercel with MongoDB Atlas backend integration.'
    ],

    liveLink: 'https://wanderlust-road-stories-62.vercel.app',
    githubLink: 'https://github.com/Sidyaa10' // Replace with direct repo if possible
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
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
            Projects
          </Typography>

          <Paper
            elevation={3}
            className="p-8 bg-white rounded-lg hover:shadow-xl transition duration-300"
          >
            <Typography variant="h4" className="font-bold mb-4 text-gray-900">
              {project.title}
            </Typography>

            <Typography variant="body1" className="text-gray-600 mb-6">
              {project.description}
            </Typography>

            {/* Technologies */}
            <Box className="mb-6">
              <Typography variant="h6" className="font-semibold mb-3">
                Technologies Used
              </Typography>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Chip
                    key={index}
                    icon={
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        style={{ width: 22, height: 22 }}
                      />
                    }
                    label={tech.name}
                    className="bg-blue-50 text-blue-700"
                    sx={{
                      transition: "0.3s",
                      "&:hover": {
                        transform: "scale(1.05)"
                      }
                    }}
                  />
                ))}
              </div>
            </Box>

            {/* Key Highlights */}
            <Box className="mb-6">
              <Typography variant="h6" className="font-semibold mb-3">
                Key Highlights
              </Typography>

              <ul className="list-disc list-inside space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="text-gray-600">
                    {outcome}
                  </li>
                ))}
              </ul>
            </Box>

            {/* Buttons */}
            <Box className="flex gap-4 mt-6">
              <Button
                variant="contained"
                color="primary"
                endIcon={<LaunchIcon />}
                href={project.liveLink}
                target="_blank"
              >
                Live Demo
              </Button>

              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                href={project.githubLink}
                target="_blank"
              >
                GitHub
              </Button>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
