import * as React from 'react';
import Rates from '../../pages/Rates';
import Charts from '../../pages/Charts';
import Conversion from '../../pages/Conversion';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Paper } from '@mui/material';

export default function CenteredTabs () {
   const [value, setValue] = React.useState(0);

   const handleChange = (_event, newValue) => {
      setValue(newValue);
   };

   return (
      <Box className='nav-container' sx={{ width: '100%' }}>
         <Paper>
            <Tabs value={value} onChange={handleChange} centered>
               <Tab label='Rates' />
               <Tab label='Charts' />
               <Tab label='Conversion' />
            </Tabs>
            {value === 0 && <Rates />}
            {value === 1 && <Charts />}
            {value === 2 && <Conversion />}
         </Paper>
      </Box>
   );
}
