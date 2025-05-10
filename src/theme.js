import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#56694F', // Ebony
      contrastText: '#fff',
    },
    secondary: {
      main: '#963F2E', // Chestnut
      contrastText: '#fff',
    },
    background: {
      default: '#CAEDB8', // Tea Green
      paper: '#EDE490', // Khaki
    },
    text: {
      primary: '#56694F', // Ebony
      secondary: '#963F2E', // Chestnut
    },
  },
  typography: {
    fontFamily: '"Fira Code", monospace',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 500 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
  },
});

// Add custom properties for styled-components
const styledTheme = {
  ...theme,
  colors: {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    background: theme.palette.background.default,
    paper: theme.palette.background.paper,
    text: {
      primary: theme.palette.text.primary,
      secondary: theme.palette.text.secondary,
    },
  },
};

export default styledTheme; 