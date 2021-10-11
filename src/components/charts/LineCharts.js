import * as React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import { Box } from '@mui/system';

export default function LineCharts(props) {
   const { toCurrency, fromCurrency } = props;
   // let exchangeRateOverTime = useSelector(
   //    (state) => state.exchanges.ExchangeRatesOverTime
   // );

   let timeSeries = useSelector((state) => state.exchanges.TimseSeries);

   let exchangeRateOverTime2 = useSelector(
      (state) => state.exchanges.AUDExchangeRates
   );
   console.log(exchangeRateOverTime2[fromCurrency][toCurrency]);
   const plotData = {
      labels: timeSeries,
      datasets: [
         {
            label: 'Change in exchange rate',
            data: exchangeRateOverTime2[fromCurrency][toCurrency],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
         },
      ],
   };

   const options = {
      scales: {
         yAxes: [
            {
               ticks: {
                  beginAtZero: true,
               },
            },
         ],
      },
   };
   return (
      <Box sx={{ display: 'flex' }}>
         <Line data={plotData} options={options} />
      </Box>
   );
}
