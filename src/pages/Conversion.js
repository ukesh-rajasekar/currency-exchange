import React from 'react';
import Convert from '../components/saved/Convert';
import ConversionHistoryCard from '../components/saved/ConversionHistoryCard';
import { Paper, Box } from '@mui/material';

export default function Conversion() {
   return (
      <Box
         className='conversion-container'
         sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
         }}
      >
         <Paper elevation={12} className='conversion-wrapper'>
            <Convert />
            <ConversionHistoryCard />
         </Paper>
      </Box>
   );
}
