import React, { useState } from 'react';
import { currencySymbols } from '../Shared/CurrencySymbols';
import { useGetExchangeRatesByCurrencyQuery } from '../../services/currencyAPIs';
import { addToConvertions } from '../../app/exchangesSlice';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Calculate(props) {
   const { fromCurrency, toCurrency, amount } = props;
   const [convertionAmount, setConvertionAmount] = useState(0);

   const dispatch = useDispatch();

   const { data } = useGetExchangeRatesByCurrencyQuery(
      `latest/currencies/${fromCurrency.toLowerCase()}/${toCurrency.toLowerCase()}.json`
   );

   const save = (cvtAmount) => {
      setConvertionAmount(cvtAmount);
      let items = {
         from: fromCurrency,
         to: toCurrency,
         amount: amount,
         convertionAmount: cvtAmount,
         convertionTime: Date.now(),
      };

      dispatch(addToConvertions(items));
   };

   const convert = () => {
      save((Number(amount) * data[toCurrency.toLowerCase()]).toFixed(7));
   };

   return (
      <Grid
         container
         spacing={1}
         sx={{ margin: '3%' }}
         direction='row'
         justifyContent='center'
         alignItems='center'
      >
         <Grid
            item
            xs={6}
            md={4}
            sx={{ alignSelf: 'center', textAlign: 'center' }}
         >
            <Button variant='contained' onClick={() => convert()}>
               Convert
            </Button>
         </Grid>

         <Grid
            item
            xs={6}
            md={8}
            sx={{ alignSelf: 'center', textAlign: 'center' }}
         >
            <div>
               <Typography variant='subtitle2'>
                  {' '}
                  {currencySymbols[fromCurrency]} {amount} =
               </Typography>
               <Typography variant='h3'>
                  {' '}
                  {currencySymbols[toCurrency]} {convertionAmount}
               </Typography>
            </div>
         </Grid>
      </Grid>
   );
}
