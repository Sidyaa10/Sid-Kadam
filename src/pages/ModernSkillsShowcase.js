import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { ReactComponent as HtmlIcon } from '../assets/skills/html5.svg';
import { ReactComponent as CssIcon } from '../assets/skills/css3.svg';
import { ReactComponent as JsIcon } from '../assets/skills/javascript.svg';
import { ReactComponent as TypeScriptIcon } from '../assets/skills/typescript.svg';
import { ReactComponent as PhpIcon } from '../assets/skills/php.svg';
import { ReactComponent as PythonIcon } from '../assets/skills/python.svg';
import { ReactComponent as JavaIcon } from '../assets/skills/java.svg';
import { ReactComponent as CIcon } from '../assets/skills/c.svg';
import { ReactComponent as SqlIcon } from '../assets/skills/sql.svg';
import { ReactComponent as MongoIcon } from '../assets/skills/mongodb.svg';
import { ReactComponent as ReactIcon } from '../assets/skills/react.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from '@mui/material';

const showcaseSkills = [
  { name: 'HTML', icon: <HtmlIcon />, desc: 'web development' },
  { name: 'CSS', icon: <CssIcon />, desc: 'web development' },
  { name: 'JavaScript', icon: <JsIcon />, desc: 'web development' },
  { name: 'TypeScript', icon: <TypeScriptIcon />, desc: 'web development' },
  { name: 'React', icon: <ReactIcon />, desc: 'web development' },
  { name: 'PHP', icon: <PhpIcon />, desc: 'web development' },
  { name: 'Python', icon: <PythonIcon />, desc: 'programming language' },
  { name: 'Java', icon: <JavaIcon />, desc: 'programming language' },
  { name: 'C Language', icon: <CIcon />, desc: 'programming language' },
  { name: 'SQL', icon: <SqlIcon />, desc: 'database' },
  { name: 'MongoDB', icon: <MongoIcon />, desc: 'database' },
  { name: 'Git', icon: <GitHubIcon style={{ fontSize: 48 }} />, desc: 'version control' },
];

export default function ModernSkillsShowcase() {
  const theme = useTheme();
  return (
    <Box sx={{ width: '100%', bgcolor: theme.palette.background.default, py: 6, px: { xs: 1, md: 6 }, minHeight: '100vh' }}>
      <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
        {showcaseSkills.map((skill) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={skill.name}>
            <Paper elevation={0} sx={{
              bgcolor: theme.palette.background.paper,
              borderRadius: 3,
              p: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: 220,
              boxShadow: '0 1px 8px 0 #0001',
              border: `1px solid ${theme.palette.divider}`,
              mt: 4,
              mb: 4,
            }}>
              <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: 4,
                pb: 2,
                minHeight: 120,
              }}>
                <Box sx={{ width: 48, height: 48, mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {skill.icon}
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    fontSize: 20,
                    letterSpacing: 1,
                    textAlign: 'center',
                    mb: 0.5,
                  }}
                >
                  {skill.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: 14,
                    textAlign: 'center',
                    textTransform: 'lowercase',
                    letterSpacing: 1,
                  }}
                >
                  {skill.desc}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
} 