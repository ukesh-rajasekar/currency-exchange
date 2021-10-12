import * as React from 'react';
import DropdownList from '../components/Shared/DropdownList';
import LineCharts from '../components/charts/LineCharts';

import { Paper, Box, Grid, Typography } from '@mui/material';
import ChunckCalls from '../components/charts/ChunckCalls';

const getDate = () => {
   var d = new Date();
   return d.toLocaleString();
};

export default function Charts() {
   const [fromCurrency, setFromCurrency] = React.useState('AUD');
   const [toCurrency, setToCurrency] = React.useState('USD');

   const [pollingInterval, setPollingInterval] = React.useState(5000);

   return (
      <Box
         className='charts-container'
         sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            overflowX: 'scroll',
         }}
         p={1}
      >
         <Paper elevation={12} className='charts-wrapper'>
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
                     isFiltered={true}
                  />
               </Grid>
               <Grid item xs={12} md={4}>
                  <DropdownList
                     name='To'
                     value={toCurrency}
                     onChange={(e) => setToCurrency(e.target.value)}
                     isFiltered={false}
                  />
               </Grid>
            </Grid>

            <Typography
               sx={{ fontSize: 14, textAlign: 'center' }}
               color='text.secondary'
               gutterBottom
               p={1}
            >
               Graph shows latest exchange rates for {fromCurrency} and{' '}
               {toCurrency} currencies
            </Typography>

            <ChunckCalls
               pollingInterval={pollingInterval}
               toCurrency={toCurrency.toLowerCase()}
               fromCurrency={fromCurrency.toLowerCase()}
            />
            <LineCharts
               toCurrency={toCurrency.toLocaleLowerCase()}
               fromCurrency={fromCurrency.toLowerCase()}
            />
         </Paper>
      </Box>
   );
}
