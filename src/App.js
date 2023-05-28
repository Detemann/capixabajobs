import React from 'react';

import './App.scss';
import HeaderNavbar from './components/HeaderNavbar/HeaderNavbar';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#00816D',
        dark: '#245652',
      },
      secondary: {
        main: '#e64a19',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <HeaderNavbar showThemeIcons="true" />
    </ThemeProvider>
  );
}

export default App;
