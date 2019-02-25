import React from 'react';
import privat from '../img/private.jpg';
import './PrivatBank.css'

const PrivatBank = ({data, sumUsd, inputUS, resultUSD, inputChange}) => {
    return (
      <div>
        <div>
          <img className="logo" src={privat} alt="privat"/>
        </div>
        <h2 className="title">Курсы валют <span className="color_PB">ПриватБанка</span></h2>
        <div className="karta">
        <ul className="trd">
             <li className="val">Валюта</li>
             <li>Покупка</li>
             <li>Продажа</li>
           </ul>
           {Array.isArray(data) ?
           data.map(el =>
           <ul className="tr">
             <li>{el.ccy}</li>
             <li>{Number(el.buy).toFixed(2)}</li>
             <li>{Number(el.sale).toFixed(2)}</li>
           </ul>) : null
           }
        </div>
        <div>
      <p className="title_converter">USD in UAH</p>
      <form onSubmit={sumUsd} className="usd">
      <input type="number" className="inputUsd" value={inputUS} placeholder="Введите сумму USD" onChange={inputChange}/>
      <button className="getUsd">Получить сумму в грн</button>
      <span className="sym">{`${Number(resultUSD).toFixed()} грн`}</span>
      </form>
    </div>P
      </div>
    );
}

export default PrivatBank;