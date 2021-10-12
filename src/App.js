import React from 'react';
import './App.css';

import Container from '@mui/material/Container';
import Tabs from './components/Shared/Tabs';

function App() {
   return (
      <div className='app'>
         <Container fixed className='app-wrapper'>
            <Tabs />
         </Container>
      </div>
   );
}

export default App;
