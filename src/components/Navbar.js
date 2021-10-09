import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Navbar() {
   return (
      <Box className='nav-container'>
         <AppBar position='relative'>
            <Toolbar>
               <Typography variant='h6' component='div' sx={{ flex: 1 }}>
                  <Link to='/'> Rates</Link>
               </Typography>
               <Typography variant='h6' component='div' sx={{ flex: 1 }}>
                  <Link to='/charts'> Charts</Link>
               </Typography>
               <Typography variant='h6' component='div' sx={{ flex: 1 }}>
                  <Link to='/saved'> Saved</Link>
               </Typography>
            </Toolbar>
         </AppBar>
      </Box>
   );
}
