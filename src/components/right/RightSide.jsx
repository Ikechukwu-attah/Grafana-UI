import React from 'react';
import Banks from '../banks/Banks';
import TimeInterval from '../timeInterval/TimeInterval';
import './rightSide.scss'

const RightSide = () => {
  return (
  <div className='rightBar'>
    <TimeInterval />
    <Banks />
  </div>
  );
};

export default RightSide;
