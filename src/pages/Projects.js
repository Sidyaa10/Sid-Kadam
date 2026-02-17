import React from 'react';
import { Box, Typography, Paper, Stack, useTheme, Grid, Link } from '@mui/material';
import { motion } from 'framer-motion';
import WebIcon from '@mui/icons-material/Web';

import { ReactComponent as ReactIcon } from '../assets/skills/react.svg';
import { ReactComponent as NodeIcon } from '../assets/skills/javascript.svg';
import { ReactComponent as MongoIcon } from '../assets/skills/mongodb.svg';
import { ReactComponent as JsIcon } from '../assets/skills/javascript.svg';
import { ReactComponent as TypeScriptIcon } from '../assets/skills/typescript.svg';
import { ReactComponent as HtmlIcon } from '../assets/skills/html5.svg';
import { ReactComponent as CssIcon } from '../assets/skills/css3.svg';

export default function Projects() {
  const theme = useTheme();

  const techStack = [
    { icon: <ReactIcon />, label: 'React / Next.js' },
    { icon: <TypeScriptIcon />, label: 'TypeScript' },
    { icon: <NodeIcon />, label: 'Node.js' },
    { icon: <MongoIcon />, label: 'MongoDB' },
    { icon: <HtmlIcon />, label: 'HTML5' },
    { icon: <CssIcon />, label: 'CSS3' },
    { icon: <JsIcon />, label: 'JavaScript' }
  ];

  return (
    <Box
      sx={{
        minHeight: '80vh',
        bgcolor: 'background.default',
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 4 }
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          maxWidth: 700,
          margin: '0 auto',
          width: '100%'
        }}
      >
        <Typography
          variant="h4"
          color="secondary.main"
          fontWeight={700}
          align="center"
          gutterBottom
        >
          Projects
        </Typography>

        <Paper
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
            bgcolor: 'background.paper',
            boxShadow: 3,
            mt: 4,
            borderRadius: 2
          }}
        >
          {/* Title */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            mb={2}
          >
            <WebIcon color="secondary" sx={{ fontSize: 36 }} />

            <Link
              href="https://wanderlust-road-stories-62.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              <Typography
                variant="h5"
                color="primary.main"
                fontWeight={600}
              >
                🌍 Wanderlust Road Stories
              </Typography>
            </Link>
          </Stack>

          {/* Description */}
          <Typography color="text.primary" sx={{ mb: 2 }}>
            A production-ready full-stack travel storytelling platform where users
            can create, explore, and filter global road trip stories with secure
            authentication and interactive maps.
          </Typography>

          {/* Features */}
          <Typography fontWeight={600} sx={{ mb: 1 }}>
            🚀 Key Features:
          </Typography>

          <ul style={{ marginLeft: 20, marginBottom: 16, color: theme.palette.text.primary }}>
            <li>Secure authentication system with protected routes</li>
            <li>Interactive map integration for location-based storytelling</li>
            <li>Complete CRUD functionality for travel story management</li>
            <li>Responsive UI optimized for all screen sizes</li>
            <li>Smooth animations powered by Framer Motion</li>
          </ul>

          {/* Tech Stack */}
          <Typography fontWeight={600} sx={{ mb: 1 }}>
            🛠️ Tech Stack:
          </Typography>

          <Grid container spacing={2}>
            {techStack.map((tech, index) => (
              <Grid item key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: '#e9f5e9',
                    borderRadius: 2,
                    px: 2,
                    py: 1,
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                >
                  {React.cloneElement(tech.icon, {
                    style: { width: 28, height: 28 }
                  })}
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    {tech.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Impact */}
          <Typography fontWeight={600} sx={{ mt: 3, mb: 1 }}>
            🎯 Impact:
          </Typography>

          <ul style={{ marginLeft: 20, color: theme.palette.text.primary }}>
            <li>Demonstrates full-stack development capability using MERN stack</li>
            <li>Implements scalable MongoDB-based data storage architecture</li>
            <li>Enhances user engagement through dynamic and interactive UI</li>
            <li>Successfully deployed to production using Vercel</li>
          </ul>
        </Paper>
      </motion.div>
    </Box>
  );
}
