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
  { name: 'Git', icon: <GitHubIcon style={{ fontSize: 48, color: '#fff' }} />, desc: 'version control' },
];

export default function ShowcaseSkills() {
  return (
    <Box sx={{ width: '100%', bgcolor: '#111', py: 8, px: { xs: 2, md: 8 } }}>
      <Typography variant="h3" align="center" sx={{ color: '#fff', mb: 6, fontWeight: 700, letterSpacing: 2 }}>
        Skills Showcase
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {showcaseSkills.map((skill) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={skill.name}>
            <Paper elevation={0} sx={{
              bgcolor: '#181818',
              borderRadius: 4,
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: 220,
              boxShadow: '0 2px 16px 0 #0008',
            }}>
              <Box sx={{ mb: 2, width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {skill.icon}
              </Box>
              <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600, mb: 1, letterSpacing: 1 }}>
                {skill.name}
              </Typography>
              <Typography variant="body2" sx={{ color: '#aaa', textTransform: 'lowercase', letterSpacing: 1 }}>
                {skill.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
} 