import { createSlice, configureStore } from '@reduxjs/toolkit';

const exchangesSlice = createSlice({
   name: 'exchanges',
   initialState: {
      convertionsList: [],
      tableRowData: [],
      TimseSeries: [],
      AUDExchangeRates: {
         aud: {},
         usd: {},
         inr: {},
         eur: {},
         crc: {},
      },
   },
   reducers: {
      addToConvertions: (state, action) => {
         // Redux Toolkit allows us to write "mutating" logic in reducers. It
         // doesn't actually mutate the state because it uses the Immer library,
         // which detects changes to a "draft state" and produces a brand new
         // immutable state based off those changes
         state.convertionsList.push(action.payload);
      },
      setTableRowData: (state, action) => {
         state.tableRowData = action.payload;
      },

      addTimeSeries: (state, action) => {
         state.TimseSeries.push(action.payload);
      },

      addAUDExchangeRates: (state, action) => {
         // console.log(action);
         if (
            state.AUDExchangeRates[action.payload[0]][action.payload[1]] !==
            undefined
         ) {
            state.AUDExchangeRates[action.payload[0]][action.payload[1]].push(
               action.payload[2]
            );
         } else {
            state.AUDExchangeRates[action.payload[0]][action.payload[1]] = [
               action.payload[2],
            ];
         }
      },
   },
});

export const {
   addToConvertions,
   setTableRowData,
   addTimeSeries,
   addAUDExchangeRates,
} = exchangesSlice.actions;

export default exchangesSlice.reducer;
