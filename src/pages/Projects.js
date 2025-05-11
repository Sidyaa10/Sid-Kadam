import React from 'react';
import { Box, Typography, Paper, Chip, Stack, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import WebIcon from '@mui/icons-material/Web';

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
            <Typography 
              variant="h5" 
              color="primary.main" 
              fontWeight={600}
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem' }
              }}
            >
              Furniture Store Management System
            </Typography>
          </Stack>
          <Typography 
            color="text.primary" 
            sx={{ 
              mb: 2,
              fontSize: { xs: '0.875rem', sm: '1rem' },
              textAlign: { xs: 'left', sm: 'justify' }
            }}
          >
            <b>Objective:</b> Automates the process of furniture selling. Enables users to browse, select, and purchase furniture online conveniently. Simplifies inventory management, customer management, and order processing for sellers. Integrates payment options such as credit card and cash-on-delivery to facilitate transactions.
          </Typography>
          <Typography 
            sx={{ 
              mb: 1,
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}
          >
            <b>Technology:</b>
          </Typography>
          <Stack direction="row" spacing={1} mb={2}>
            <Chip label="HTML" sx={{ bgcolor: 'accent.main', color: 'background.paper' }} />
            <Chip label="CSS" sx={{ bgcolor: 'accent.main', color: 'background.paper' }} />
            <Chip label="JavaScript" sx={{ bgcolor: 'accent.main', color: 'background.paper' }} />
            <Chip label="PHP" sx={{ bgcolor: 'accent.main', color: 'background.paper' }} />
            <Chip label="PostgreSQL" sx={{ bgcolor: 'accent.main', color: 'background.paper' }} />
          </Stack>
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