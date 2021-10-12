import React from 'react';
import { useGetExchangeRatesByCurrencyQuery } from '../../services/currencyAPIs';
import { currencySymbols } from '../Shared/CurrencySymbols';
import { addTimeSeries, addAUDExchangeRates } from '../../app/exchangesSlice';
import { useDispatch } from 'react-redux';

const getResults = (data) => {
   return [data.data, data.error, data.isLoading, data.isFetching];
};

const getDate = () => {
   var d = new Date();
   return d.toLocaleString();
};

export default function ChunckCalls(props) {
   const { fromCurrency, toCurrency, pollingInterval } = props;
   const dispatch = useDispatch();

   //polling only 5 countries ....

   const audRates = useGetExchangeRatesByCurrencyQuery(
      `latest/currencies/aud.json`,
      {
         pollingInterval,
      }
   );

   const [audData, audError, audIsLoading, audIsFetching] =
      getResults(audRates);

   const inrRates = useGetExchangeRatesByCurrencyQuery(
      `latest/currencies/inr.json`,
      {
         pollingInterval,
      }
   );

   const [inrData, inrError, inrIsLoading, inrIsFetching] =
      getResults(inrRates);

   const usdRates = useGetExchangeRatesByCurrencyQuery(
      `latest/currencies/usd.json`,
      {
         pollingInterval,
      }
   );

   const [usdData, usdError, usdIsLoading, usdIsFetching] =
      getResults(usdRates);

   const eurRates = useGetExchangeRatesByCurrencyQuery(
      `latest/currencies/eur.json`,
      {
         pollingInterval,
      }
   );

   const [eurData, eurError, eurIsLoading, eurIsFetching] =
      getResults(eurRates);

   const crcRates = useGetExchangeRatesByCurrencyQuery(
      `latest/currencies/crc.json`,
      {
         pollingInterval,
      }
   );

   const [crcData, crcError, crcIsLoading, crcIsFetching] =
      getResults(crcRates);

   const data = [audData, inrData, usdData, eurData, crcData];
   const countries = ['aud', 'inr', 'usd', 'eur', 'crc'];

   //storing data in redux
   const storeExchangeRates = async () => {
      for (var i = 0; i < data.length; i++) {
         //  console.log([countries[i]]);
         if (data[i] !== undefined) {
            Object.keys(data[i][countries[i]]).map((currency) => {
               if (currencySymbols[currency.toUpperCase()] != undefined) {
                  dispatch(
                     addAUDExchangeRates([
                        countries[i],
                        currency,
                        data[i][countries[i]][currency],
                     ])
                  );
               }
            });
         }
      }
      const dateTime = getDate();
      dispatch(addTimeSeries(dateTime));
   };

   React.useEffect(() => {
      if (
         audIsFetching ||
         usdIsFetching ||
         inrIsFetching ||
         eurIsFetching ||
         crcIsFetching
      )
         storeExchangeRates();
   }, [crcIsFetching]);

   if (
      !audData?.[countries[0]] ||
      !inrData?.[countries[1]] ||
      !usdData?.[countries[2]] ||
      !eurData?.[countries[3]] ||
      !crcData?.[countries[4]]
   ) {
      return null;
   }

   return <div></div>;
}
