import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { theme } from '@chakra-ui/core';
import { CSSReset } from '@chakra-ui/core';
import { ThemeProvider } from '@chakra-ui/core';

import App from './components/App';

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CSSReset />
      <App />
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root')
);
