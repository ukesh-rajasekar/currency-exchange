import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Rates from './pages/Rates';
import Charts from './pages/Charts';
import Conversion from './pages/Conversion';

import Container from '@mui/material/Container';
import Tabs from './components/Shared/Tabs';
import Navbar from './components/Navbar';

function App() {
   return (
      <div className='app'>
         <Container fixed>
            <Switch>
               <Tabs />
               <Route exact path='/'>
                  <Rates />
               </Route>
               <Route exact path='/Conversion'>
                  <Conversion />
               </Route>
               <Route exact path='/charts'>
                  <Charts />
               </Route>
            </Switch>
         </Container>
      </div>
   );
}

export default App;
