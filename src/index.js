import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { lightTheme, darkTheme } from './configs/themes';

import App from './App';
import { store } from './app/store';

ReactDom.render(
   <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
         <App />
      </ThemeProvider>
   </Provider>,
   document.getElementById('root')
);
