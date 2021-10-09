import React from 'react';
import { Convert } from '../components';
import ConversionHistoryCard from '../components/ConversionHistoryCard';

export default function Saved() {
   return (
      <>
         <div>
            <h1>Convert</h1>
            <Convert />
            <ConversionHistoryCard />
         </div>
      </>
   );
}
