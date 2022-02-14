import React from 'react';
import RightSide from '../right/RightSide';
import LeftSide from '../left/LeftSide';
import './home.scss'

const Home = () => {
  return (
  
        <div className='home'>
            <div className="home__container">
                <LeftSide />
                <RightSide />
            </div>

       </div> 
  
  );
};

export default Home;
