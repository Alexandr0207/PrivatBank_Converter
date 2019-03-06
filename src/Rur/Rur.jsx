import React from 'react';
import './Rur.css';

const Rur = ({inputRu, inputChangeUSD, sumRur}) => {
  return (
    <div>
     <form onSubmit={(e) => e.preventDefault()} className="rur">
    <input type="number" className="inputRur" value={inputRu} placeholder="Введите сумму RUR" onChange={inputChangeUSD}/>
    <span className="sym">{`${(Number(sumRur).toFixed(2))} грн`}</span>
    </form>
    </div>
  );
};

export default Rur;