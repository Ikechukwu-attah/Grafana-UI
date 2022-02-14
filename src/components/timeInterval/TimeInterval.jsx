import React from 'react';
import './timeInterval.scss'

const TimeInterval = () => {
  return (
  
  <div className='time-interval'>
      <span className="interval">Interval</span>
      <select name="" id="" className="time-select">
          <option value="" className="time-values">auto</option>
          <option value="" className="time-values">10s</option>
          <option value="" className="time-values">20s</option>
          <option value="" className="time-values">1 day</option>
          <option value="" className="time-values">2 days</option>
          <option value="" className="time-values">3 days</option>
      </select>
     


  </div>
  
  );
};

export default TimeInterval;
