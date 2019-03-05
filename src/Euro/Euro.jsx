import React from 'react';
import './Euro.css';

const Euro = ({inputEuro, inputChangeUSD, sumEuro}) => {
  return (
    <div>
    {/* <p className="title_converter">EURO IN UAH</p> */}
    <form onSubmit={(e) => e.preventDefault()} className="euro">
    <input type="number" className="inputEuro" value={inputEuro} placeholder="Введите сумму EURO" onChange={inputChangeUSD}/>
    <span className="sym">{`${(Number(sumEuro).toFixed(2))} грн`}</span>
    </form>
  </div>
  );
};

export default Euro;