import React from 'react';
import DropdownList from '../components/Shared/DropdownList';
import ExchangeRateTable from '../components/Rates/ExchangeRateTable';

import { Paper, Box } from '@mui/material';

export default function Rates() {
   const [currencies, setCurrencies] = React.useState([]);
   //    const [exchangeRate, setExchangeRate] = React.useState([]);

   const [fromCurrency, setFromCurrency] = React.useState('AUD');
   const [amount, setAmount] = React.useState();
   return (
      <Box sx={{ display: 'flex', overflowX: 'scroll' }}>
         <Paper elevation={12}>
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
