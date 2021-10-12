import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetExchangeRatesByCurrencyQuery } from '../../services/currencyAPIs';
import { currencySymbols } from '../Shared/CurrencySymbols';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { setTableRowData } from '../../app/exchangesSlice';
import { Typography } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
   [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
   },
   [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
   },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
   '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
   },
   // hide last border
   '&:last-child td, &:last-child th': {
      border: 0,
   },
}));

function createData(code, symbol, latest, yesterday, change) {
   return {
      code,
      symbol,
      latest,
      yesterday,
      change,
   };
}

const getResults = (data) => {
   return [data.data, data.error, data.isLoading];
};

const getYesterdaysDate = () => {
   var dateObj = new Date();

   dateObj.setDate(dateObj.getDate() - 2);
   var toDate = dateObj.getDate();
   var toMonth = dateObj.getMonth() + 1;
   var toYear = dateObj.getFullYear();
   var yesterday =
      toYear + '-' + ('0' + toMonth).slice(-2) + '-' + ('0' + toDate).slice(-2);

   return yesterday;
};

export default function ExchangeRateTable(props) {
   const { fromCurrency } = props;

   var MyDateString = getYesterdaysDate();

   const { tableRowData } = useSelector((state) => state.exchanges);
   const dispatch = useDispatch();
   const exchangeRate = useGetExchangeRatesByCurrencyQuery(
      `latest/currencies/${fromCurrency.toLowerCase()}.json`
   );

   const [latestData, latestError, latestIsLoading] = getResults(exchangeRate);

   const yesterdaysExchangeRate = useGetExchangeRatesByCurrencyQuery(
      `${MyDateString}/currencies/${fromCurrency.toLowerCase()}.json`
   );

   const [yesterdaysData, yesterdaysError, yesterdaysIsLoading] = getResults(
      yesterdaysExchangeRate
   );

   const generateTableData = (latest, yesterdays, from) => {
      const rowData = Object.entries(currencySymbols).map(
         ([currency, symbol], index) => {
            return createData(
               currency,
               symbol,
               latest?.[from.toLowerCase()][currency.toLowerCase()],
               yesterdays?.[from.toLowerCase()][currency.toLowerCase()],
               99
            );
         }
      );
      dispatch(setTableRowData(rowData));
   };

   const getPercentageChange = (todaysRate, yesterdaysRate) => {
      if (todaysRate > yesterdaysRate) {
         return 1;
      } else if (todaysRate < yesterdaysRate) {
         return -1;
      } else {
         return 0;
      }
   };

   React.useEffect(() => {
      if (
         !latestData?.[fromCurrency.toLowerCase()] ||
         !yesterdaysData?.[fromCurrency.toLowerCase()]
      ) {
         return null;
      }
      generateTableData(latestData, yesterdaysData, fromCurrency);
   }, [latestData, yesterdaysData]);

   if (yesterdaysError | latestError) {
      return <>Oh! there is an error</>;
   } else if (latestIsLoading | yesterdaysIsLoading) {
      return <>Loading....</>;
   }

   return (
      <TableContainer component={Paper}>
         <Table
            className='table-wrapper'
            sx={{ tableLayout: 'fixed' }}
            aria-label='customized table'
         >
            <TableHead>
               <TableRow>
                  <StyledTableCell className='table-cell'>
                     Currency Code
                  </StyledTableCell>
                  <StyledTableCell className='table-cell' align='right'>
                     Symbol
                  </StyledTableCell>
                  <StyledTableCell className='table-cell' align='right'>
                     Latest Exchange Rate
                  </StyledTableCell>
                  <StyledTableCell className='table-cell' align='right'>
                     Yesterdays Exchange Rate
                  </StyledTableCell>
                  <StyledTableCell className='table-cell' align='right'>
                     % Change
                  </StyledTableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {tableRowData.map((row) => (
                  <StyledTableRow key={row.code}>
                     <StyledTableCell
                        className='table-cell'
                        component='th'
                        scope='row'
                     >
                        {row.code}
                     </StyledTableCell>
                     <StyledTableCell className='table-cell' align='right'>
                        {row.symbol}
                     </StyledTableCell>
                     <StyledTableCell className='table-cell' align='right'>
                        {row.latest.toFixed(3)}
                     </StyledTableCell>
                     <StyledTableCell className='table-cell' align='right'>
                        {row.yesterday.toFixed(3)}
                     </StyledTableCell>

                     {getPercentageChange(row.latest, row.yesterday) > 0 && (
                        <StyledTableCell
                           className='table-cell'
                           align='right'
                           sx={{ color: '#2FE000' }}
                        >
                           +
                           {(
                              ((row.latest - row.yesterday) / row.yesterday) *
                              100
                           ).toFixed(3)}
                           %
                        </StyledTableCell>
                     )}
                     {getPercentageChange(row.latest, row.yesterday) < 0 && (
                        <StyledTableCell
                           className='table-cell'
                           align='right'
                           sx={{ color: '#FF3000' }}
                        >
                           -
                           {(
                              ((row.yesterday - row.latest) / row.yesterday) *
                              100
                           ).toFixed(3)}
                           %
                        </StyledTableCell>
                     )}
                     {getPercentageChange(row.latest, row.yesterday) == 0 && (
                        <StyledTableCell className='table-cell' align='right'>
                           No % change{' '}
                        </StyledTableCell>
                     )}
                  </StyledTableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}
