import React from 'react';
import DropdownList from '../components/Shared/DropdownList';
import ExchangeRateTable from '../components/Rates/ExchangeRateTable';

import { Paper, Box } from '@mui/material';

export default function Rates() {
   const [fromCurrency, setFromCurrency] = React.useState('AUD');
   return (
      <Box
         className='rates-container'
         sx={{ display: 'flex', overflowX: 'scroll' }}
      >
         <Paper elevation={12} className='rates-wrapper'>
            <DropdownList
               name='Base currency'
               value={fromCurrency}
               onChange={(e) => setFromCurrency(e.target.value)}
            />
            <ExchangeRateTable fromCurrency={fromCurrency} />
         </Paper>
      </Box>
   );
}
