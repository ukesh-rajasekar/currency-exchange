import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Rates, Charts, Saved } from './pages';

function App() {
   return (
      <div className='app'>
         <Switch>
            <Navbar />
            <Route exact path='/'>
               <Rates />
            </Route>
            <Route path='/saved'>
               <Saved />
            </Route>
            <Route path='/charts'>
               <Charts />
            </Route>
         </Switch>
      </div>
   );
}

export default App;
