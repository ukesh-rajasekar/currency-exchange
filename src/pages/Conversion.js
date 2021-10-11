import React from 'react';
import Convert from '../components/saved/Convert';
import ConversionHistoryCard from '../components/saved/ConversionHistoryCard';
import { Paper, Box, Typography } from '@mui/material';

export default function Conversion() {
   return (
      <Box
         sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
         }}
      >
         <Paper>
            <Convert />
            <ConversionHistoryCard />
         </Paper>
      </Box>
   );
}
