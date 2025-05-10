import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Grid, Paper } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
import BugReportIcon from '@mui/icons-material/BugReport';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <CodeIcon className="text-4xl text-blue-600" />,
      skills: ['C Language', 'Java']
    },
    {
      title: 'Web Development',
      icon: <WebIcon className="text-4xl text-blue-600" />,
      skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Database',
      icon: <StorageIcon className="text-4xl text-blue-600" />,
      skills: ['SQL', 'MongoDB']
    },
    {
      title: 'Tools & Technologies',
      icon: <BugReportIcon className="text-4xl text-blue-600" />,
      skills: ['Git', 'Software Testing', 'Data Analytics']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
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
            Skills & Expertise
          </Typography>

          <Grid container spacing={4}>
            {skillCategories.map((category, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  className="p-6 bg-gray-50 rounded-lg h-full hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-center mb-4">{category.icon}</div>
                  <Typography
                    variant="h6"
                    className="font-semibold text-center mb-4"
                  >
                    {category.title}
                  </Typography>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="text-gray-600 text-center"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills; 