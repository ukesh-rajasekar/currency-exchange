import React, { useState, useEffect } from 'react';
import { currencySymbols } from './CurrencySymbols';
import { useGetExchangeRatesByCurrencyQuery } from '../../services/currencyAPIs';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';

export default function DropdownList2(props) {
   const { name, value, onChange } = props;
   const [currencies, setCurrencies] = React.useState(null);

   const { data, error, isLoading } = useGetExchangeRatesByCurrencyQuery(
      'latest/currencies.json'
   );

   const getFilteredCurrency = (currencyCode) => {
      if (currencySymbols[currencyCode.toUpperCase()] != undefined) {
         return currencyCode;
      }
   };

   useEffect(() => {
      setCurrencies(data);
   }, [data]);

   return (
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '1%',
         }}
      >
         <InputLabel id='demo-simple-select-autowidth-label'>{name}</InputLabel>
         <Select
            labelId='demo-simple-select-autowidth-label'
            name={name}
            label={name}
            value={value.toUpperCase()}
            onChange={onChange}
            sx={{ color: 'white' }}
         >
            {currencies &&
               Object.keys(currencies)
                  .filter((currency) => getFilteredCurrency(currency))
                  .map((currency) => {
                     return (
                        <MenuItem
                           color='primary'
                           key={currency}
                           value={currency.toUpperCase()}
                        >
                           {currencySymbols[currency.toUpperCase()]}{' '}
                           {currency.toUpperCase()} - {currencies[currency]}
                        </MenuItem>
                     );
                  })}
         </Select>
      </Box>
   );
}
