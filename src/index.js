import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { CSSReset } from '@chakra-ui/core';
import { ThemeProvider } from '@chakra-ui/core';
import customTheme from './themes/theme';

import App from './components/App';

render(
  <Provider store={store}>
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <App />
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root')
);
