import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#333333',
      light: '#444444',
    },
    secondary: {
      main: '#549c95',
    },
    text: {
      primary: '#ffffff',
    },
    error: {
      main: '#ff3333',
    },
    background: {
      default: '#444444',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
