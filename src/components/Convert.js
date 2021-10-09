import React, { useState, useEffect } from 'react';
import { useGetPokemonByNameQuery } from '../services/currencyAPIs';
import { currencySymbols } from './CurrencySymbols';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import DropdownList2 from './DropdownList2';
import Calculate from './Calculate';

export default function Convert() {
   const [currencies, setCurrencies] = React.useState([]);
   //    const [exchangeRate, setExchangeRate] = React.useState([]);

   const [fromCurrency, setFromCurrency] = React.useState('AUD');
   const [toCurrency, setToCurrency] = React.useState('AUD');
   const [amount, setAmount] = React.useState(0);
   //    const { data, error, isLoading } = useGetPokemonByNameQuery(
   //       `currencies/${fromCurrency.toLowerCase()}.json`
   //    );

   useEffect(() => {}, [toCurrency, fromCurrency]);

   return (
      <Box
         component='form'
         sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
         }}
         noValidate
         autoComplete='off'
      >
         <div>
            <FormControl sx={{ m: 1 }} variant='standard'>
               <InputLabel htmlFor='standard-adornment-amount'>
                  Amount
               </InputLabel>
               <Input
                  id='standard-adornment-amount'
                  placeholder='0.00'
                  helperText='Please select your currency'
                  type='number'
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  startAdornment={
                     <InputAdornment position='start'>
                        {currencySymbols[fromCurrency]}
                     </InputAdornment>
                  }
               />
            </FormControl>
            <DropdownList2
               name='From'
               value={fromCurrency}
               onChange={(e) => setFromCurrency(e.target.value)}
            />
            <DropdownList2
               name='To'
               value={toCurrency}
               onChange={(e) => setToCurrency(e.target.value)}
            />
            {/* <TextField
               id='standard-select-currency'
               name='From'
               select
               label='From'
               value={fromCurrency}
               onChange={handleChange}
               helperText='Please select your currency'
               variant='standard'
            >
               {Object.keys(currencies).map((name) => (
                  <MenuItem key={name} value={name}>
                     {currency_symbols[name]} {name} - {currencies[name]}
                  </MenuItem>
               ))}
            </TextField> */}
            {/* <TextField
               id='standard-select-currency'
               name='To'
               select
               label='TO'
               value={toCurrency}
               onChange={handleChange}
               helperText='Please select your currency'
               variant='standard'
            >
               {Object.keys(currencies).map((name) => (
                  <MenuItem key={name} value={name}>
                     {currency_symbols[name]} {name} - {currencies[name]}
                  </MenuItem>
               ))}
            </TextField> */}
         </div>
         {/* <Button
            variant='contained'
            onClick={() =>
               setConvertionAmount(
                  Number(amount) * exchangeRate[toCurrency.toLowerCase()]
               )
            }
         >
            Convert
         </Button>
         <Typography variant='h1'>
            {' '}
            {currencySymbols[toCurrency]} {convertionAmount}
         </Typography> */}
         <Calculate
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            amount={amount}
         />
      </Box>
   );
}
