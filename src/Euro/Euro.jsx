import React from 'react';
import './Euro.css';

const Euro = ({inputUS, inputChangeUSD, sumUS}) => {
  return (
    <div>
    {/* <p className="title_converter">EURO IN UAH</p> */}
    <form onSubmit={(e) => e.preventDefault()} className="euro">
    <input type="number" className="inputEuro" value={inputUS} placeholder="Введите сумму EURO" onChange={inputChangeUSD}/>
    <span className="sym">{`${(Number(sumUS).toFixed(2))} грн`}</span>
    </form>
  </div>
  );
};

export default Euro;