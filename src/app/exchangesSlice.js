import { createSlice, configureStore } from '@reduxjs/toolkit';

const exchangesSlice = createSlice({
   name: 'exchanges',
   initialState: {
      convertionsList: [],
      tableRowData: [],
      ExchangeRatesOverTime: [],
      TimseSeries: [],
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
      addExchangeRatesOverTime: (state, action) => {
         state.ExchangeRatesOverTime.push(action.payload);
      },
      dropExchangeRatesOverTime: (state, action) => {
         state.ExchangeRatesOverTime = [];
      },
      addTimeSeries: (state, action) => {
         state.TimseSeries.push(action.payload);
      },
      dropTimeSeries: (state, action) => {
         state.TimseSeries = [];
      },
   },
});

export const {
   addToConvertions,
   setTableRowData,
   addExchangeRatesOverTime,
   dropExchangeRatesOverTime,
   addTimeSeries,
   dropTimeSeries,
} = exchangesSlice.actions;

export default exchangesSlice.reducer;
