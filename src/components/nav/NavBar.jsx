import React from 'react';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import WifiProtectedSetupOutlinedIcon from '@mui/icons-material/WifiProtectedSetupOutlined';
import './navBar.scss'

const NavBar = () => {
  return (
  
  <div className='navBar'>
      <div className="navBar__leftSide">
        <GridViewRoundedIcon fontSize='large' className='navBar__leftSideIcon' />
        <span className="navBar__lefSideText">App Monitor  /</span>
        <span className="navBar__lefSideText navBar__lefSideText--textColor"> App Status Summary </span>
        <ArrowDropDownIcon fontSize='large' className='navBar__leftSideIcon' />
      </div>
      <div className="navBar__rightSide">
          <span  className='navBar__rightSideIcon'>
             <StarBorderIcon fontSize='large' />
          </span>
          <span  className='navBar__rightSideIcon'> 
             <ScreenShareOutlinedIcon fontSize='large'  />
          </span>
          <span  className='navBar__rightSideIcon'> 
            <DesktopMacIcon fontSize='large' />
          </span>
          

          <div className="navBar__rightSideIconTextWrapper">
              <div className="navBar__rightSideGroupIconText">
                   <span  className='navBar__rightSideIcon'> <AccessTimeIcon fontSize='large' /> </span>
                    <span className="navBar__rightSideText navBar__rightSideText--textHoverColor">Last 5 Minutes</span>
                    <span className="navBar__rightSideText navBar__rightSideText--textColor ">Refresh every 5s</span>
              </div>
             
                  
              <span  className='navBar__rightSideIcon'>
                    <ZoomOutIcon fontSize='large'/>
              </span>
              <span className='navBar__rightSideIcon'>
                         <WifiProtectedSetupOutlinedIcon fontSize='large'  />
              </span>
                    
              
              
             
          </div>
      </div>
  </div>
  
  
  );
};

export default NavBar;
