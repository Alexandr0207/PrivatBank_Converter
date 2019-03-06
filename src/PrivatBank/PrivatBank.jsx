import React from 'react';
import privat from '../img/private.jpg';
import './PrivatBank.css';
import uuid from 'uuidv4';

const PrivatBank = ({data, sumUsd, inputUS, resultUSD, inputChange, sumUS}) => {
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
           <ul className="tr" key={uuid()}>
             <li>{el.ccy}</li>
             <li>{Number(el.buy).toFixed(2)}</li>
             <li>{Number(el.sale).toFixed(2)}</li>
           </ul>) : null
           }
        </div>
      </div>
    );
}

export default PrivatBank;