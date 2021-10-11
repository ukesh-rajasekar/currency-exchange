import * as React from 'react';
import DropdownList from '../components/Shared/DropdownList';
import { TimeSeries } from '../components/charts/polling';
import {
   dropExchangeRatesOverTime,
   dropTimeSeries,
   addTimeSeries,
} from '../app/exchangesSlice';
import { useDispatch } from 'react-redux';
import LineCharts from '../components/charts/LineCharts';

import { Paper, Box, Grid, Button } from '@mui/material';

const getDate = () => {
   var d = new Date();
   return d.toLocaleString();
};

export default function Charts() {
   const [fromCurrency, setFromCurrency] = React.useState('AUD');
   const [toCurrency, setToCurrency] = React.useState('AUD');

   const [pollingInterval, setPollingInterval] = React.useState(5000);
   // const dispatch = useDispatch();

   // const GenerateChart = () => {
   //    // dispatch(dropExchangeRatesOverTime());
   //    // dispatch(dropTimeSeries());

   //    setPollingInterval(Number(3000));
   // };
   // dispatch(addTimeSeries(getDate()));

   console.log(toCurrency);

   return (
      <Box
         sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
         }}
         p={1}
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
                     // onClick={(change) => GenerateChart()}
                  >
                     Generate chart
                  </Button>
               </Grid>
            </Grid>

            <TimeSeries
               name={`latest/currencies/${fromCurrency.toLowerCase()}.json`}
               pollingInterval={pollingInterval}
               toCurrency={toCurrency.toLowerCase()}
               fromCurrency={fromCurrency.toLowerCase()}
            />
            <LineCharts toCurrency={toCurrency.toLocaleLowerCase()} />
         </Paper>
      </Box>
   );
}
