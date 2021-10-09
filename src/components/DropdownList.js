import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropdownList(props) {
   const { countries, listType } = props;

   const [country, setCountry] = React.useState('');
   const [open, setOpen] = React.useState(false);

   const handleChange = (event) => {
      setCountry(event.target.value);
      console.log(country);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const handleOpen = () => {
      setOpen(true);
   };
   return (
      <>
         <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id='demo-controlled-open-select-label'>
               {listType}
            </InputLabel>
            <Select
               labelId='demo-controlled-open-select-label'
               id='demo-controlled-open-select'
               open={open}
               onClose={handleClose}
               onOpen={handleOpen}
               value={country}
               label='Country'
               onChange={handleChange}
            >
               {Object.keys(countries).map((name) => (
                  <MenuItem key={name} value={name}>
                     {name} - {countries[name]}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      </>
   );
}
