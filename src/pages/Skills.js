import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
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

// Grouped skills by category
const skillGroups = {
  'Programming Languages': [
    <CIcon key="c" style={{ width: 64, height: 64 }} />,
    <JavaIcon key="java" style={{ width: 64, height: 64 }} />,
    <PhpIcon key="php" style={{ width: 64, height: 64 }} />,
    <PythonIcon key="python" style={{ width: 64, height: 64 }} />
  ],
  'Web Design': [
    <HtmlIcon key="html" style={{ width: 64, height: 64 }} />,
    <CssIcon key="css" style={{ width: 64, height: 64 }} />,
    <JsIcon key="js" style={{ width: 64, height: 64 }} />,
    <TypeScriptIcon key="ts" style={{ width: 64, height: 64 }} />
  ],
  'Database': [
    <SqlIcon key="sql" style={{ width: 64, height: 64 }} />,
    <MongoIcon key="mongo" style={{ width: 64, height: 64 }} />
  ],
  'Server Tools': [
    <GitHubIcon key="git" style={{ width: 64, height: 64 }} />
  ],
  'Frameworks': [
    <ReactIcon key="react" style={{ width: 64, height: 64 }} />
  ]
};

// Removed the unused skillIcons array

export default function Skills() {
  return (
    <Box sx={{ minHeight: '80vh', bgcolor: 'background.default', py: 8 }}>
      <Typography
        variant="h3"
        align="center"
        sx={{
          color: 'secondary.main',
          fontWeight: 700,
          letterSpacing: 2,
          mb: 6,
        }}
      >
        Skills
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', px: 2 }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ maxWidth: 1200 }}>
          {Object.entries(skillGroups).map(([category, icons]) => (
            <Grid item xs={12} sm={6} md={4} key={category}>
              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    color: 'text.primary',
                    fontWeight: 600,
                    mb: 3,
                    pl: 2,
                    position: 'relative',
                    '&:before': {
                      content: '"•"',
                      position: 'absolute',
                      left: 0,
                      color: 'secondary.main',
                      fontSize: '1.5rem'
                    }
                  }}
                >
                  {category}
                </Typography>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                  {icons.map((icon, idx) => (
                    <Grid item xs={4} sm={3} md={2} key={idx} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {icon}
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}