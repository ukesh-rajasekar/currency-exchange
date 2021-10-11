import { createTheme } from '@mui/material';
import { colors } from './colors';
// const colors = {
//   lightShade: '#80BFAA',
//   darkShade: '#287075',
//   highlight: '#F7D854',
//   shadow: '#1B4252',
//   success: '#00D909',
//   danger: '#FF3000',
//   primary: '#0085FF',
// };
const { primary, secondary, info, warning, success, error } = colors;

export const lightTheme = createTheme({
   palette: {
      mode: 'light',
   },
});
export const darkTheme = createTheme({
   palette: {
      mode: 'dark',
      primary: {
         main: primary,
      },
      secondary: {
         main: secondary,
      },
      info: {
         main: info,
      },
      warning: {
         main: warning,
      },
      success: {
         main: success,
      },
      error: {
         main: error,
      },
   },

   components: {
      MuiPaper: {
         styleOverrides: {
            // Name of the slot
            root: {
               // Some CSS
               flexGrow: '1',
            },
         },
      },
   },
});
