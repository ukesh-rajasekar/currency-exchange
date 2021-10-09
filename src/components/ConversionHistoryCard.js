import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ConversionHistoryCard() {
   const savedObj = JSON.parse(localStorage.getItem('saved'));
   console.log(savedObj);

   if (!savedObj) {
      return <>Loading...</>;
   }
   return (
      <Box sx={{ minWidth: 275 }}>
         {Object.keys(savedObj).map((time) => (
            <Card variant='outlined'>
               <CardContent>
                  <Typography
                     sx={{ fontSize: 14 }}
                     color='text.secondary'
                     gutterBottom
                  >
                     {time}
                  </Typography>
                  <Typography variant='h5' component='div'>
                     {savedObj[time]['amount']} {savedObj[time]['from']} to{' '}
                     {savedObj[time]['amount']} {savedObj[time]['to']}
                  </Typography>
               </CardContent>
            </Card>
            //   <MenuItem key={name} value={name}>
            //      {name} - {countries[name]}
            //   </MenuItem>
         ))}
      </Box>
   );
}
