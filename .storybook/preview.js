import { ThemeProvider } from 'styled-components';
import theme from '../src/theme/mainTheme';
import GlobalStyle from '../src/theme/GlobalStyle';
import { addDecorator } from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import React from 'react';

addDecorator((story) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{story()}</ThemeProvider>
    </>
  );
});
