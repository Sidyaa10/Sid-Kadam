import React from 'react';
import { Box, Typography, Grid, Paper, Chip, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
import BuildIcon from '@mui/icons-material/Build';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <CodeIcon color="secondary" />,
    skills: ['C Language', 'Java'],
  },
  {
    title: 'Web Development',
    icon: <WebIcon color="secondary" />,
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Database',
    icon: <StorageIcon color="secondary" />,
    skills: ['SQL', 'MongoDB'],
  },
  {
    title: 'Tools & Technologies',
    icon: <BuildIcon color="secondary" />,
    skills: ['Git'],
  },
];

export default function Skills() {
  const theme = useTheme();
  return (
    <Box sx={{ minHeight: '80vh', bgcolor: 'background.default', py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Typography variant="h4" color="secondary.main" fontWeight={700} align="center" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
          {skillCategories.map((cat, idx) => (
            <Grid item xs={12} sm={6} md={3} key={cat.title}>
              <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper', boxShadow: 2 }}>
                <Box sx={{ mb: 1, fontSize: 40 }}>{cat.icon}</Box>
                <Typography variant="h6" color="primary.main" fontWeight={600} gutterBottom>
                  {cat.title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {cat.skills.map((skill) => (
                    <Chip key={skill} label={skill} sx={{ bgcolor: 'accent.main', color: 'background.paper', fontWeight: 500 }} />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
} 