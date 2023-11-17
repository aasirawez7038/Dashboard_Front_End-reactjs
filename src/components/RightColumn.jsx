import React from 'react';
import SalesItem from './SalesItem';
import WebAnalytics from './WebAnalytics';
import Scorelist from './Scorelist';

const RightColumn = () => {
  return (
    <div className="w-full p-2">
      <SalesItem />
      <WebAnalytics />
      <Scorelist />
    </div>
  ); 
};

export default RightColumn;
 