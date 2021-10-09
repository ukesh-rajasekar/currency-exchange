import React, { useState, useEffect } from 'react';
import { currencySymbols } from './CurrencySymbols';
import { useGetPokemonByNameQuery } from '../services/currencyAPIs';

import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Saved } from '../pages';

export default function Calculate(props) {
   const { fromCurrency, toCurrency, amount } = props;
   const [convertionAmount, setConvertionAmount] = useState(0);
   let myStorage = window.localStorage;
   // let savedObj = {};

   const { data, error, isLoading } = useGetPokemonByNameQuery(
      `currencies/${fromCurrency.toLowerCase()}.json`
   );

   const save = () => {
      let items = {
         from: fromCurrency,
         to: toCurrency,
         amount: amount,
         convertionAmount: convertionAmount,
      };

      if (!myStorage.getItem('saved')) {
         let savedObj = {};
         savedObj[Date.now()] = items;
         myStorage.setItem('saved', JSON.stringify(savedObj));
      } else {
         let savedObj = JSON.parse(myStorage.getItem('saved'));
         alert(savedObj);
         savedObj[Date.now()] = items;
         myStorage.setItem('saved', JSON.stringify(savedObj));
      }
      // myStorage.setItem('saved', JSON.stringify(savedObj));
      console.log(myStorage.getItem('saved'));
   };

   const convert = () => {
      setConvertionAmount(
         Number(amount) *
            data[fromCurrency.toLowerCase()][toCurrency.toLowerCase()]
      );
      save();
   };

   return (
      <div>
         <Button variant='contained' onClick={() => convert()}>
            Convert
         </Button>
         <Typography variant='h4'>
            {' '}
            {currencySymbols[fromCurrency]} {amount} =
         </Typography>
         <Typography variant='h1'>
            {' '}
            {currencySymbols[toCurrency]} {convertionAmount.toFixed(7)}
         </Typography>
      </div>
   );
}
