import React from 'react';
import './Usd.css';

const Usd = ({inputUS, inputChangeUSD, sumUS}) => {
  return (
    <div>
    {/* <p className="title_converter">USD in UAH</p> */}
    <form onSubmit={(e) => e.preventDefault()} className="usd">
    <input type="number" className="inputUsd" value={inputUS} placeholder="Введите сумму USD" onChange={inputChangeUSD}/>
    <span className="sym">{`${(Number(sumUS).toFixed(2))} грн`}</span>
    </form>
  </div>
  );
};

export default Usd;