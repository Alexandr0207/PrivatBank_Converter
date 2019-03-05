import React from 'react';

const Usd = ({inputUS, inputChange, sumUS}) => {
  return (
    <div>
    <p className="title_converter">USD in UAH</p>
    <form onSubmit={(e) => e.preventDefault()} className="usd">
    <input type="number" className="inputUsd" value={inputUS} placeholder="Введите сумму USD" onChange={inputChange}/>
    <span className="sym">{`${(Number(sumUS).toFixed(2))} грн`}</span>
    </form>
  </div>
  );
};

export default Usd;