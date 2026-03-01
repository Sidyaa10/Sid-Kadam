import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Stack,
  Grid,
  Button,
  Divider,
  Link,
} from '@mui/material';
import { motion } from 'framer-motion';
import WebIcon from '@mui/icons-material/Web';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ReactComponent as ReactIcon } from '../assets/skills/react.svg';
import { ReactComponent as NextIcon } from '../assets/skills/nextdotjs.svg';
import { ReactComponent as NodeIcon } from '../assets/skills/nodedotjs.svg';
import { ReactComponent as MongoIcon } from '../assets/skills/mongodb.svg';
import { ReactComponent as JsIcon } from '../assets/skills/javascript.svg';
import { ReactComponent as TypeScriptIcon } from '../assets/skills/typescript.svg';
import { ReactComponent as HtmlIcon } from '../assets/skills/html5.svg';
import { ReactComponent as CssIcon } from '../assets/skills/css3.svg';

export default function Projects() {
  const taskZenTechStack = [
    { label: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { label: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { label: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { label: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { label: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { label: 'Framer Motion', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/framer.svg' },
    { label: 'Vercel', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vercel.svg' },
  ];

  const deploymentStack = [
    { title: 'Frontend', value: 'Vercel', logo: '/vercel.svg' },
    { title: 'Backend', value: 'Render', logo: '/render.svg' },
    { title: 'Database', value: 'MongoDB Atlas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  ];

  const capabilityItems = [
    'JWT authentication with protected API routes and secure user-specific task isolation.',
    'Calendar-first planning with dynamic month switching and persistent completion state.',
    'Structured task architecture with event reminders, skill goals, deadline projects, and quick tasks.',
    'Analytics dashboards for streaks, completion metrics, and real-time productivity updates.',
  ];

  const wanderlustTechStack = [
    { icon: <ReactIcon />, label: 'React' },
    { icon: <NextIcon />, label: 'Next.js' },
    { icon: <TypeScriptIcon />, label: 'TypeScript' },
    { icon: <NodeIcon />, label: 'Node.js' },
    { icon: <MongoIcon />, label: 'MongoDB' },
    { icon: <HtmlIcon />, label: 'HTML5' },
    { icon: <CssIcon />, label: 'CSS3' },
    { icon: <JsIcon />, label: 'JavaScript' },
  ];

  const cardMotion = {
    whileHover: { y: -4, scale: 1.01 },
    transition: { duration: 0.2 },
  };

  return (
    <Box
      sx={{
        minHeight: '80vh',
        bgcolor: 'background.default',
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 4 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          maxWidth: 980,
          margin: '0 auto',
          width: '100%',
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
            p: { xs: 3, sm: 4, md: 5 },
            bgcolor: 'background.paper',
            boxShadow: '0 16px 36px rgba(20, 40, 30, 0.12)',
            mt: 4,
            borderRadius: 4,
          }}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            mb={1}
          >
            <WebIcon color="secondary" sx={{ fontSize: 36 }} />
            <Box>
              <Typography variant="h5" color="primary.main" fontWeight={700}>
                TASK-ZEN
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Full-Stack Productivity SaaS (Production Deployed)
              </Typography>
            </Box>
          </Stack>

          <Typography color="text.primary" sx={{ mt: 2, lineHeight: 1.8 }}>
            Task-Zen is a production-deployed full-stack productivity platform designed to transform structured
            planning into measurable progress. It combines calendar-first workflows, secure cloud persistence,
            and analytics-driven tracking to support long-term, scalable execution.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 3, mb: 3 }}>
            <Button
              component="a"
              href="https://task-zen-five.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              endIcon={<OpenInNewIcon />}
              sx={{
                borderRadius: 2.5,
                textTransform: 'none',
                fontWeight: 700,
                px: 2,
                py: 1.1,
                boxShadow: '0 10px 24px rgba(86, 105, 79, 0.22)',
                background: 'linear-gradient(135deg, #56694F 0%, #6F8867 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #4C5D45 0%, #627A5C 100%)',
                },
              }}
            >
              https://task-zen-five.vercel.app/
            </Button>
            <Button
              component="a"
              href="https://github.com/Sidyaa10/Task-Zen"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              endIcon={<OpenInNewIcon />}
              startIcon={<GitHubIcon />}
              sx={{
                borderRadius: 2.5,
                textTransform: 'none',
                fontWeight: 700,
                px: 2,
                py: 1.1,
              }}
            >
              GitHub
            </Button>
          </Stack>

          <Divider sx={{ my: 2.5 }} />

          <Typography fontWeight={700} color="primary.main" sx={{ mb: 2 }}>
            Core Capabilities
          </Typography>
          <Grid container spacing={2.2} sx={{ mb: 3 }}>
            {capabilityItems.map((item) => (
              <Grid item xs={12} md={6} key={item}>
                <Paper
                  component={motion.div}
                  elevation={0}
                  {...cardMotion}
                  sx={{
                    p: 2,
                    borderRadius: 2.5,
                    border: '1px solid rgba(86,105,79,0.14)',
                    bgcolor: '#F8FBF6',
                    height: '100%',
                  }}
                >
                  <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                    {item}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Typography fontWeight={700} color="primary.main" sx={{ mb: 2 }}>
            Tech Stack
          </Typography>

          <Grid container spacing={2}>
            {taskZenTechStack.map((tech) => (
              <Grid item xs={12} sm={6} md={4} key={tech.label}>
                <Paper
                  component={motion.div}
                  elevation={0}
                  {...cardMotion}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.25,
                    borderRadius: 2.5,
                    px: 2,
                    py: 1.4,
                    border: '1px solid rgba(86,105,79,0.14)',
                    bgcolor: '#F8FBF6',
                    boxShadow: '0 4px 12px rgba(30, 60, 40, 0.06)',
                  }}
                >
                  <Box
                    component="img"
                    src={tech.logo}
                    alt={tech.label}
                    sx={{ width: 26, height: 26, objectFit: 'contain' }}
                  />
                  <Typography variant="body2" fontWeight={600}>
                    {tech.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Typography fontWeight={700} color="primary.main" sx={{ mt: 4, mb: 2 }}>
            Deployment
          </Typography>
          <Grid container spacing={2}>
            {deploymentStack.map((item) => (
              <Grid item xs={12} md={4} key={item.title}>
                <Paper
                  component={motion.div}
                  elevation={0}
                  {...cardMotion}
                  sx={{
                    p: 2,
                    borderRadius: 2.5,
                    border: '1px solid rgba(86,105,79,0.14)',
                    bgcolor: '#F8FBF6',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 0.8,
                  }}
                >
                  <Box component="img" src={item.logo} alt={item.value} sx={{ width: 24, height: 24, objectFit: 'contain' }} />
                  <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: 0.8 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight={700} color="text.primary">
                    {item.value}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 3 }} />

          <Typography color="text.primary" sx={{ lineHeight: 1.8 }}>
            Engineering impact: Demonstrates production-grade full-stack architecture, secure cloud persistence,
            and scalable separation between frontend, backend, and data layers.
          </Typography>
        </Paper>

        <Paper
          sx={{
            p: { xs: 3, sm: 4, md: 5 },
            bgcolor: 'background.paper',
            boxShadow: '0 16px 36px rgba(20, 40, 30, 0.12)',
            mt: 4,
            borderRadius: 4,
          }}
        >
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
              <Typography variant="h5" color="primary.main" fontWeight={700}>
                Wanderlust Road Stories (Web-App)
              </Typography>
            </Link>
          </Stack>

          <Typography color="text.primary" sx={{ mb: 2, lineHeight: 1.8 }}>
            A production-ready full-stack travel storytelling platform where users can create, explore, and filter
            global road trip stories with secure authentication and interactive maps.
          </Typography>

          <Typography fontWeight={700} color="primary.main" sx={{ mb: 1 }}>
            Key Features:
          </Typography>
          <Box component="ul" sx={{ mt: 0, mb: 2, pl: 3, color: 'text.primary' }}>
            <li>Secure authentication system with protected routes</li>
            <li>Interactive map integration for location-based storytelling</li>
            <li>Complete CRUD functionality for travel story management</li>
            <li>Responsive UI optimized for all screen sizes</li>
            <li>Smooth animations powered by Framer Motion</li>
          </Box>

          <Typography fontWeight={700} color="primary.main" sx={{ mb: 2 }}>
            Tech Stack:
          </Typography>

          <Grid container spacing={2}>
            {wanderlustTechStack.map((tech) => (
              <Grid item xs={12} sm={6} md={3} key={tech.label}>
                <Paper
                  component={motion.div}
                  elevation={0}
                  {...cardMotion}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.25,
                    borderRadius: 2.5,
                    px: 2,
                    py: 1.4,
                    border: '1px solid rgba(86,105,79,0.14)',
                    bgcolor: '#F8FBF6',
                    boxShadow: '0 4px 12px rgba(30, 60, 40, 0.06)',
                  }}
                >
                  {React.cloneElement(tech.icon, {
                    style: { width: 26, height: 26 },
                  })}
                  <Typography variant="body2" fontWeight={600}>
                    {tech.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Typography fontWeight={700} color="primary.main" sx={{ mt: 3, mb: 1 }}>
            Impact:
          </Typography>
          <Box component="ul" sx={{ mt: 0, mb: 0, pl: 3, color: 'text.primary' }}>
            <li>Demonstrates full-stack development capability using MERN stack</li>
            <li>Implements scalable MongoDB-based data storage architecture</li>
            <li>Enhances user engagement through dynamic and interactive UI</li>
            <li>Successfully deployed to production using Vercel</li>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
}
