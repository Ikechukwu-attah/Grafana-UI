import React from 'react';
import './bankList.scss'

const BankList = ({banks}) => {


  
  return (
  
    <div className='bank-list'>

      <div className='bank-item'>
         <span>{banks.name}</span> 
          <span>Failed : {banks.count}</span>
      </div>
    

    </div>
  
  );
};

export default BankList;
