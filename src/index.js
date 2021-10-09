import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { store } from './app/store';

ReactDom.render(
   <Router>
      <Provider store={store}>
         <App />
      </Provider>
   </Router>,
   document.getElementById('root')
);
