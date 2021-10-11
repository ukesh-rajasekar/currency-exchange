import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { lightTheme, darkTheme } from './configs/themes';

import App from './App';
import { store } from './app/store';

ReactDom.render(
   <Router>
      <Provider store={store}>
         <ThemeProvider theme={darkTheme}>
            <App />
         </ThemeProvider>
      </Provider>
   </Router>,
   document.getElementById('root')
);
