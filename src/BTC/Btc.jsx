import React from 'react';
import './Btc.css';

const Btc = ({inputChangeUSD, inputBt, sumBtc}) => {
  return (
    <div>
     <form onSubmit={(e) => e.preventDefault()} className="btc">
    <input type="number" className="inputBtc" value={inputBt} placeholder="Введите сумму Bitcoin" onChange={inputChangeUSD}/>
    <span className="sym">{`${(Number(sumBtc).toFixed(2))} грн`}</span>
    </form>
    </div>
  );
};

export default Btc;