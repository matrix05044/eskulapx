import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/mainTheme';

// eslint-disable-next-line react/prop-types
const MainTemplate = ({ children }) => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  </div>
);

export default MainTemplate;
