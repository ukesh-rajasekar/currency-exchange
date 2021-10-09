import React, { useState, useEffect } from 'react';
import { currencySymbols } from './CurrencySymbols';
import { useGetPokemonByNameQuery } from '../services/currencyAPIs';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function DropdownList2(props) {
   const { name, value, onChange } = props;
   const [currencies, setCurrencies] = React.useState([]);

   const { data, error, isLoading } =
      useGetPokemonByNameQuery('currencies.json');

   useEffect(() => {
      if (data) {
         var obj = {};
         Object.keys(data).filter((name) => {
            if (currencySymbols[name.toUpperCase()] !== undefined) {
               obj[name.toUpperCase()] = data[name];
               return name.toUpperCase();
            }
         });
         setCurrencies(obj);
      }
   }, [data]);

   return (
      <div>
         <TextField
            id='standard-select-currency'
            name={name}
            select
            label={name}
            value={value}
            onChange={onChange}
            helperText='Please select your currency'
            variant='standard'
         >
            {Object.keys(currencies).map((name) => (
               <MenuItem key={name} value={name}>
                  {currencySymbols[name]} {name} - {currencies[name]}
               </MenuItem>
            ))}
         </TextField>
      </div>
   );
}
