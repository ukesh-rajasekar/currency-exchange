import * as React from 'react';
import { useGetExchangeRatesByCurrencyQuery } from '../../services/currencyAPIs';
import {
   addExchangeRatesOverTime,
   addTimeSeries,
   addAUDExchangeRates,
} from '../../app/exchangesSlice';
import { useDispatch } from 'react-redux';
import { currencySymbols } from '../Shared/CurrencySymbols';

import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const getDate = () => {
   var d = new Date();
   return d.toLocaleString();
};

export const TimeSeries = ({
   name,
   pollingInterval,
   toCurrency,
   fromCurrency,
}) => {
   const { data, error, isLoading, isFetching } =
      useGetExchangeRatesByCurrencyQuery(name, {
         pollingInterval,
      });
   // console.log('here', fromCurrency, data[fromCurrency][toCurrency]);
   const dispatch = useDispatch();

   const storeExchangeRates = async () => {
      const mappings = Object.keys(data[fromCurrency]).map((currency) => {
         // console.log(currency, data[fromCurrency][currency]);

         if (currencySymbols[currency.toUpperCase()] != undefined) {
            dispatch(
               addAUDExchangeRates([currency, data[fromCurrency][currency]])
            );
         }
      });
      const dateTime = getDate();
      dispatch(addTimeSeries(dateTime));
   };
   React.useEffect(() => {
      if (isFetching) storeExchangeRates();
   }, [isFetching]);
   if (!data?.[fromCurrency.toLowerCase()]) {
      return null;
   }
   // dispatch(addExchangeRatesOverTime(data[toCurrency]));

   return (
      <>
         {error ? (
            <>Oh no, there was an error</>
         ) : isLoading ? (
            <>Loading...</>
         ) : data ? (
            <Box sx={{ display: 'flex', flexDirection: 'column' }} p={1}>
               {/* <Typography component='div' color='text.secondary' gutterBottom>
                  Generate chart to see Live Trends on exchange rate from{' '}
                  {fromCurrency.toUpperCase()}(
                  {currencySymbols[fromCurrency.toUpperCase()]}) to{' '}
                  {toCurrency.toUpperCase()}(
                  {currencySymbols[toCurrency.toUpperCase()]}){' '}
                  {isFetching ? '...' : ''}
               </Typography>
               <Typography component='div' variant='h5'>
                  Latest Rate: {data[toCurrency]}
                  {isFetching ? '...' : ''}
               </Typography> */}
            </Box>
         ) : null}
      </>
   );
};
