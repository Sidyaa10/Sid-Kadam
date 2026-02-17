import React from 'react';
import { Box, Typography, Paper, Chip, Stack, useTheme, Grid, Link } from '@mui/material';
import { motion } from 'framer-motion';
import WebIcon from '@mui/icons-material/Web';
import { ReactComponent as ReactIcon } from '../assets/skills/react.svg';
import { ReactComponent as NodeIcon } from '../assets/skills/javascript.svg';
import { ReactComponent as MongoIcon } from '../assets/skills/mongodb.svg';
import { ReactComponent as JsIcon } from '../assets/skills/javascript.svg';
import { ReactComponent as HtmlIcon } from '../assets/skills/html5.svg';
import { ReactComponent as CssIcon } from '../assets/skills/css3.svg';

export default function Projects() {
  const theme = useTheme();
  return (
    <Box sx={{ 
      minHeight: '80vh', 
      bgcolor: 'background.default', 
      py: { xs: 4, md: 8 },
      px: { xs: 2, md: 4 }
    }}>
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
          sx={{
            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.125rem' }
          }}
        >
          Projects
        </Typography>
        <Paper sx={{ 
          p: { xs: 2, sm: 3, md: 4 }, 
          bgcolor: 'background.paper', 
          boxShadow: 3, 
          mt: 4,
          borderRadius: 2
        }}>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2} 
            alignItems={{ xs: 'flex-start', sm: 'center' }} 
            mb={2}
          >
            <WebIcon color="secondary" sx={{ fontSize: { xs: 32, sm: 40 } }} />
            <Link 
              href="https://wanderlust-road-stories-62.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
            >
              <Typography 
                variant="h5" 
                color="primary.main" 
                fontWeight={600}
                sx={{
                  fontSize: { xs: '1.25rem', sm: '1.5rem' }
                }}
              >
                🌍 Wanderlust Road Stories
              </Typography>
            </Link>
          </Stack>
          <Typography 
            color="text.primary" 
            sx={{ 
              mb: 2,
              fontSize: { xs: '0.875rem', sm: '1rem' },
              textAlign: { xs: 'left', sm: 'justify' }
            }}
          >
            A sleek, interactive travel blog where adventurers share their road trip experiences, stunning visuals, and practical tips. Built with Next.js, featuring dynamic content, smooth animations, and a modern UI.
          </Typography>
          
          <Typography 
            sx={{ 
              mb: 2,
              fontSize: { xs: '0.875rem', sm: '1rem' },
              fontWeight: 600
            }}
          >
            🚀 Features:
          </Typography>
          <ul style={{ marginTop: 0, paddingLeft: 20, marginBottom: 16 }}>
            <li>Dynamic Blog Posts – Browse travel stories with rich text formatting and images</li>
            <li>Smooth Animations – Framer Motion-powered transitions</li>
            <li>Responsive Design – Works on mobile, tablet, and desktop</li>
            <li>Modern UI – Clean, minimalist aesthetic with easy navigation</li>
            <li>Category Filtering – Sort stories by travel type</li>
          </ul>

          <Typography 
            sx={{ 
              mb: 1,
              fontSize: { xs: '0.875rem', sm: '1rem' },
              fontWeight: 600
            }}
          >
            🛠️ Tech Stack:
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Grid container spacing={2} alignItems="center" justifyContent="flex-start">
              <Grid item>
                <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#e9f5e9', borderRadius: '12px', p: 1 }}>
                  <ReactIcon style={{ width: 32, height: 32 }} />
                  <Typography variant="body2" sx={{ ml: 1, color: 'text.primary' }}>React/Next.js</Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#e9f5e9', borderRadius: '12px', p: 1 }}>
                  <NodeIcon style={{ width: 32, height: 32 }} />
                  <Typography variant="body2" sx={{ ml: 1, color: 'text.primary' }}>Node.js</Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#e9f5e9', borderRadius: '12px', p: 1 }}>
                  <MongoIcon style={{ width: 32, height: 32 }} />
                  <Typography variant="body2" sx={{ ml: 1, color: 'text.primary' }}>MongoDB</Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#e9f5e9', borderRadius: '12px', p: 1 }}>
                  <HtmlIcon style={{ width: 32, height: 32 }} />
                  <Typography variant="body2" sx={{ ml: 1, color: 'text.primary' }}>HTML5</Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#e9f5e9', borderRadius: '12px', p: 1 }}>
                  <CssIcon style={{ width: 32, height: 32 }} />
                  <Typography variant="body2" sx={{ ml: 1, color: 'text.primary' }}>CSS3</Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#e9f5e9', borderRadius: '12px', p: 1 }}>
                  <JsIcon style={{ width: 32, height: 32 }} />
                  <Typography variant="body2" sx={{ ml: 1, color: 'text.primary' }}>JavaScript</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Typography 
            sx={{ 
              mb: 1,
              fontSize: { xs: '0.875rem', sm: '1rem' },
              fontWeight: 600
            }}
          >
            🎯 Impact:
          </Typography>
          <ul style={{ color: theme.palette.text.primary, marginLeft: 20 }}>
            <li>A fully functional online platform for furniture stores that streamlines operations and improves customer experience.</li>
            <li>Centralized management of customer data, inventory, and sales processes.</li>
            <li>Enhanced efficiency in handling orders and payments with real-time updates.</li>
            <li>Improved accessibility for users to browse and shop for furniture products online.</li>
          </ul>
        </Paper>
      </motion.div>
    </Box>
  );
} 