import React from 'react';
import { currencySymbols } from '../Shared/CurrencySymbols';
import Calculate from './Calculate';

import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import DropdownList from '../Shared/DropdownList';
import Grid from '@mui/material/Grid';

export default function Convert() {
   const [fromCurrency, setFromCurrency] = React.useState('AUD');
   const [toCurrency, setToCurrency] = React.useState('AUD');
   const [amount, setAmount] = React.useState(false);

   React.useEffect(() => {
      console.log('coming..');
   }, [toCurrency, fromCurrency]);

   return (
      <Box
         component='form'
         sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
         }}
         noValidate
         autoComplete='off'
      >
         <Grid
            container
            spacing={1}
            sx={{ margin: '3%' }}
            direction='row'
            justifyContent='center'
            alignItems='center'
         >
            <Grid item xs={7} md={4} sx={{ alignSelf: 'center' }}>
               <FormControl
                  variant='standard'
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     justifyContent: 'center',
                     textAlign: 'center',
                  }}
               >
                  <Input
                     id='standard-adornment-amount'
                     placeholder='input amount'
                     type='number'
                     value={amount}
                     sx={{ color: 'white' }}
                     onChange={(e) => setAmount(e.target.value)}
                     startAdornment={
                        <InputAdornment position='start'>
                           {currencySymbols[fromCurrency]}
                        </InputAdornment>
                     }
                  />
               </FormControl>
            </Grid>
            <Grid item xs={7} md={4}>
               <DropdownList
                  name='From'
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
               />
            </Grid>
            <Grid item xs={7} md={4}>
               <DropdownList
                  name='To'
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
               />
            </Grid>
         </Grid>
         <Calculate
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            amount={amount}
         />
      </Box>
   );
}
