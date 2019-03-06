import React from 'react';
// import {NavLink} from 'react-router-dom';
import './Menu.css';

const Menu = ({usdActive,euroActive}) => {
  return (
    <div>
    <ul className="lister">
    <li className="list" onClick={usdActive}>
       USD
    </li>
    <li className="list" onClick={euroActive}>
       EURO
    </li>
    <li className="list">
       RUR
    </li>
    <li className="list">
       BTC
    </li>
  </ul>
  </div>
  );
};

export default Menu;