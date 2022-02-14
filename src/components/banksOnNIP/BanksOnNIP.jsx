import React from 'react';
import './banksOnNIP.scss'

const BanksOnNIP = ({nip}) => {
  return(
           <div className='bank-nip'>
               <div className="bank-nip__nip-list">
                 <span>{nip.name}</span> 
                <span>Failed : {nip.count}</span>
               </div>
           </div>


  )
};

export default BanksOnNIP;
