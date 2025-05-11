import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/fira-code';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
      <App />
      </StyledThemeProvider>
    </MuiThemeProvider>
  </React.StrictMode>
);

reportWebVitals();