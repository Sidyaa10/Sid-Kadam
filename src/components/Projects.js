import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Paper, Box, Chip } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';

const Projects = () => {
  const project = {
    title: 'Furniture Store Management System',
    description: 'A comprehensive online platform that automates the process of furniture selling, enabling users to browse, select, and purchase furniture online conveniently.',
    technologies: [
      { name: 'HTML', icon: <WebIcon /> },
      { name: 'CSS', icon: <WebIcon /> },
      { name: 'JavaScript', icon: <CodeIcon /> },
      { name: 'PHP', icon: <CodeIcon /> },
      { name: 'PostgreSQL', icon: <StorageIcon /> }
    ],
    outcomes: [
      'A fully functional online platform for furniture stores that streamlines operations and improves customer experience',
      'Centralized management of customer data, inventory, and sales processes',
      'Enhanced efficiency in handling orders and payments with real-time updates',
      'Improved accessibility for users to browse and shop for furniture products online'
    ]
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

          <Paper elevation={0} className="p-8 bg-white rounded-lg">
            <Typography variant="h4" className="font-bold mb-4 text-gray-900">
              {project.title}
            </Typography>
            
            <Typography variant="body1" className="text-gray-600 mb-6">
              {project.description}
            </Typography>

            <Box className="mb-6">
              <Typography variant="h6" className="font-semibold mb-3">
                Technologies Used
              </Typography>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Chip
                    key={index}
                    icon={tech.icon}
                    label={tech.name}
                    className="bg-blue-50 text-blue-700"
                  />
                ))}
              </div>
            </Box>

            <Box>
              <Typography variant="h6" className="font-semibold mb-3">
                Key Outcomes
              </Typography>
              <ul className="list-disc list-inside space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="text-gray-600">
                    {outcome}
                  </li>
                ))}
              </ul>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects; 