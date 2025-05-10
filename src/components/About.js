import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Box, Grid, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
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
            About Me
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={0} className="p-6 bg-white rounded-lg">
                <Typography variant="h6" className="font-semibold mb-4">
                  Education
                </Typography>
                <Box className="space-y-4">
                  <Box className="flex items-start">
                    <SchoolIcon className="text-blue-600 mr-3 mt-1" />
                    <Box>
                      <Typography variant="subtitle1" className="font-medium">
                        BSc. Computer Science
                      </Typography>
                      <Typography variant="body2" className="text-gray-600">
                        Kaveri College Of Arts, Science and Commerce
                      </Typography>
                      <Typography variant="body2" className="text-gray-500">
                        Jul '21 - Jul '24 • CGPA: 6.64
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="flex items-start">
                    <SchoolIcon className="text-blue-600 mr-3 mt-1" />
                    <Box>
                      <Typography variant="subtitle1" className="font-medium">
                        12th HSC
                      </Typography>
                      <Typography variant="body2" className="text-gray-600">
                        M.E.S Balshikshan Mandir Higher Secondary College
                      </Typography>
                      <Typography variant="body2" className="text-gray-500">
                        Aug '19 - May '21 • 76.50%
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper elevation={0} className="p-6 bg-white rounded-lg">
                <Typography variant="h6" className="font-semibold mb-4">
                  Personal Information
                </Typography>
                <Box className="space-y-4">
                  <Box className="flex items-start">
                    <LocationOnIcon className="text-blue-600 mr-3 mt-1" />
                    <Box>
                      <Typography variant="subtitle1" className="font-medium">
                        Location
                      </Typography>
                      <Typography variant="body2" className="text-gray-600">
                        Pune, Maharashtra
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="flex items-start">
                    <LanguageIcon className="text-blue-600 mr-3 mt-1" />
                    <Box>
                      <Typography variant="subtitle1" className="font-medium">
                        Languages
                      </Typography>
                      <Typography variant="body2" className="text-gray-600">
                        Marathi (Native), Hindi (Native), English (Professional)
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
};

export default About; 