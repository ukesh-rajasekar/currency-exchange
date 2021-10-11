import React from 'react';

import Container from '@mui/material/Container';
import Tabs from './components/Shared/Tabs';

function App() {
   return (
      <div className='app'>
         <Container fixed>
            <Tabs />
         </Container>
      </div>
   );
}

export default App;
