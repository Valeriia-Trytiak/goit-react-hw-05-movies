import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';

const theme = {
  colors: {
    accent: '#7ba7ab',
    buttonAccent: '#1b7e87',
    grey: '#f9f9f9',
    error: '#dc143c',
    bgInput: '#f9f0da',
    white: '#fff',
    textColor: '#212121',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
