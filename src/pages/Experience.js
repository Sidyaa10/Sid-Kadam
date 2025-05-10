import React from 'react';
import { Box, Typography, Paper, Stack, Grid, Chip, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
import InterestsIcon from '@mui/icons-material/SportsCricket';

export default function Experience() {
  const theme = useTheme();
  return (
    <Box sx={{ minHeight: '80vh', bgcolor: 'background.default', py: 8, pt: 16 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: 900, margin: '0 auto' }}
      >
        <Typography variant="h4" color="secondary.main" fontWeight={700} align="center" gutterBottom>
          Experience & Education
        </Typography>
        <Paper sx={{ p: 4, bgcolor: 'background.paper', boxShadow: 3, mb: 4 }}>
          <Stack direction="row" spacing={2} alignItems="center" mb={2}>
            <WorkIcon color="secondary" />
            <Typography variant="h6" color="primary.main" fontWeight={600}>
              Software Engineer (Fresher)
            </Typography>
          </Stack>
          <Typography color="text.primary">
            Looking for a job where I can utilize my knowledge in coding, problem-solving abilities and help resolve other person's problems. I will always give my 101% on the job and put all my effort towards completing the given task.
          </Typography>
        </Paper>
        <Paper sx={{ p: 4, bgcolor: 'background.paper', boxShadow: 3, mb: 4 }}>
          <Typography variant="h6" color="primary.main" fontWeight={600} gutterBottom>
            Education
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <SchoolIcon color="secondary" />{' '}
              <Typography fontWeight={600}>BSc. Computer Science</Typography>
              <Typography>Kaveri College Of Arts, Science and Commerce</Typography>
              <Typography variant="caption">Jul '21 - Jul '24 | 6.64 CGPA</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <SchoolIcon color="secondary" />{' '}
              <Typography fontWeight={600}>12th HSC</Typography>
              <Typography>M.E.S Balshikshan Mandir Higher Secondary College</Typography>
              <Typography variant="caption">Aug '19 - May '21 | 76.50%</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <SchoolIcon color="secondary" />{' '}
              <Typography fontWeight={600}>10th SSC</Typography>
              <Typography>P.Jog English Medium School</Typography>
              <Typography variant="caption">Apr '18 - Jun '19 | 63.60%</Typography>
            </Grid>
          </Grid>
        </Paper>
        <Grid container spacing={2} mb={4}>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" color="primary.main" fontWeight={600} gutterBottom>
                <LanguageIcon color="secondary" /> Languages
              </Typography>
              <Typography>Marathi (Native), Hindi (Native), English (Professional)</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" color="primary.main" fontWeight={600} gutterBottom>
                <InterestsIcon color="secondary" /> Interests
              </Typography>
              <Typography>Swimming, Cricket</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Paper sx={{ p: 3, bgcolor: 'background.paper', boxShadow: 3 }}>
          <Typography variant="h6" color="primary.main" fontWeight={600} gutterBottom>
            Volunteer Experience
          </Typography>
          <Typography>
            Participated in a Diabetes Awareness Campaign organized by Lions Club, raising awareness about health and prevention strategies for diabetes.
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
} 