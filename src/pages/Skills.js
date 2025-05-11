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

const skillIcons = [
  <HtmlIcon key="html" style={{ width: 64, height: 64 }} />,
  <CssIcon key="css" style={{ width: 64, height: 64 }} />,
  <JsIcon key="js" style={{ width: 64, height: 64 }} />,
  <TypeScriptIcon key="ts" style={{ width: 64, height: 64 }} />,
  <ReactIcon key="react" style={{ width: 64, height: 64 }} />,
  <PhpIcon key="php" style={{ width: 64, height: 64 }} />,
  <PythonIcon key="python" style={{ width: 64, height: 64 }} />,
  <JavaIcon key="java" style={{ width: 64, height: 64 }} />,
  <CIcon key="c" style={{ width: 64, height: 64 }} />,
  <SqlIcon key="sql" style={{ width: 64, height: 64 }} />,
  <MongoIcon key="mongo" style={{ width: 64, height: 64 }} />,
  <GitHubIcon key="git" style={{ width: 64, height: 64 }} />,
];

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
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ maxWidth: 900 }}>
          {skillIcons.map((icon, idx) => (
            <Grid item xs={4} sm={3} md={2} key={idx} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {icon}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
} 