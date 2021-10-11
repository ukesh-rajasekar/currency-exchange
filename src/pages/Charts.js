import * as React from 'react';
import DropdownList from '../components/Shared/DropdownList';
import { TimeSeries } from '../components/charts/polling';
import {
   dropExchangeRatesOverTime,
   dropTimeSeries,
} from '../app/exchangesSlice';
import { useDispatch } from 'react-redux';

import { Paper, Box, Grid, Button } from '@mui/material';

export default function Charts() {
   const [fromCurrency, setFromCurrency] = React.useState('AUD');
   const [toCurrency, setToCurrency] = React.useState('AUD');

   const [pollingInterval, setPollingInterval] = React.useState(false);
   const dispatch = useDispatch();

   const GenerateChart = () => {
      dispatch(dropExchangeRatesOverTime());
      dispatch(dropTimeSeries());

      setPollingInterval(Number(3000));
   };

   return (
      <Box
         sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
         }}
      >
         <Paper>
            <Grid
               container
               spacing={1}
               sx={{ margin: '3%' }}
               direction='row'
               justifyContent='center'
               alignItems='center'
            >
               <Grid item xs={12} md={4}>
                  <DropdownList
                     name='From'
                     value={fromCurrency}
                     onChange={(e) => setFromCurrency(e.target.value)}
                  />
               </Grid>
               <Grid item xs={12} md={4}>
                  <DropdownList
                     name='To'
                     value={toCurrency}
                     onChange={(e) => setToCurrency(e.target.value)}
                  />
               </Grid>
               <Grid item xs={6} md={4}>
                  <Button
                     variant='contained'
                     onClick={(change) => GenerateChart()}
                  >
                     Generate chart
                  </Button>
               </Grid>
            </Grid>
            {pollingInterval && (
               <TimeSeries
                  name={`latest/currencies/${fromCurrency.toLowerCase()}/${toCurrency.toLowerCase()}.json`}
                  pollingInterval={pollingInterval}
                  toCurrency={toCurrency.toLowerCase()}
                  fromCurrency={fromCurrency.toLowerCase()}
               />
            )}
         </Paper>
      </Box>
   );
}
