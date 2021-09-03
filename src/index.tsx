import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { theme } from 'styles/themes/theme';
import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import GlobalStyles from './styles/global';

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StylesProvider injectFirst>
      <GlobalStyles />

      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </StylesProvider>
  </ThemeProvider>,

  document.getElementById('root')
);
