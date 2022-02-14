import React from 'react';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import './leftSide.scss'

const LeftSide = () => {
  return (
           <div className='leftBar'>
              <div className="leftBar__Logos">
              <img src="/assets/grafana_icon.svg" alt="" className="leftBar__Logo1" />
              <GridViewRoundedIcon className='leftBar__icon1' />
              </div>

              <div className="leftBar__Logos2">
                  <img src="/assets/profile.jpg" alt="" className="leftBar__Logo2" />
                  <HelpOutlineIcon className='leftBar__icon1 leftBar__icon1--mbottom' />
                
              </div>
 
            </div>
          );
};

export default LeftSide;
