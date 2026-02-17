import React from 'react';
import { Box, Typography } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import OnePageSections from './components/OnePageSections';
import styled from 'styled-components';


const AppContainer = styled.div`
  font-family: 'Fira Code', monospace;
  overflow-x: hidden;
  background: #CAEDB8;
  color: #56694F;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

// Error boundary component to catch and display errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ p: 2, bgcolor: '#ffebee', color: '#c62828', borderRadius: 1 }}>
          <Typography variant="h6">Error in {this.props.sectionName}:</Typography>
          <Typography variant="body2">{this.state.error?.toString()}</Typography>
        </Box>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <Router>
      <AppContainer>
        <CustomCursor />
        <Navbar />
        <ErrorBoundary sectionName="OnePageSections">
          <OnePageSections />
        </ErrorBoundary>

      </AppContainer>
    </Router>
  );
}

export default App;
