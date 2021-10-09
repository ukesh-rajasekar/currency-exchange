import React from 'react';
import { useGetPokemonByNameQuery } from '../services/currencyAPIs';

import { DropdownList } from '../components';

export default function Rates() {
   const { data, error, isLoading } =
      useGetPokemonByNameQuery('currencies.json');

   console.log(typeof data);
   return (
      <div className='App'>
         {error ? (
            <>Oh no, there was an error</>
         ) : isLoading ? (
            <>Loading...</>
         ) : data ? (
            <>
               <DropdownList countries={data} listType='From' />
               <DropdownList countries={data} listType='To' />
            </>
         ) : null}
      </div>
   );
}
