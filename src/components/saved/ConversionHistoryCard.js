import * as React from 'react';
import { useSelector } from 'react-redux';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const getDate = (date) => {
   var d = new Date(date);
   return d.toLocaleString();
};

export default function ConversionHistoryCard() {
   let convertionsList = useSelector(
      (state) => state.exchanges.convertionsList
   );
   let arrayForSort = [...convertionsList];

   let len = arrayForSort.length;

   return (
      <Box
         sx={{
            minWidth: 275,
            display: 'flex',
            flexDirection: 'column',
            marginTop: '1%',
         }}
      >
         {len ? (
            arrayForSort.reverse().map((exchange, index) => (
               <Card key={index} variant='outlined'>
                  <CardContent>
                     <Typography
                        sx={{ fontSize: 14 }}
                        color='text.secondary'
                        gutterBottom
                     >
                        {getDate(exchange?.convertionTime)}
                     </Typography>
                     <Typography
                        variant='h6'
                        component='div'
                        textAlign='center'
                        className='conversion-history-record'
                     >
                        {exchange['amount']} {exchange['from']} to{' '}
                        {exchange['convertionAmount']} {exchange['to']}
                     </Typography>
                  </CardContent>
               </Card>
            ))
         ) : (
            <Typography
               sx={{ fontSize: 14, textAlign: 'center' }}
               color='text.secondary'
               gutterBottom
            >
               No previous conversions found!
            </Typography>
         )}
      </Box>
   );
}
