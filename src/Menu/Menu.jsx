import React from 'react';
import {NavLink} from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div>
    <ul className="list">
    <li className="btn">
      <NavLink to='/'>USD</NavLink> 
    </li>
    <li className="btn">
      <NavLink to='/euro'>EURO</NavLink> 
    </li>
    <li className="btn">
      <NavLink to='/rub'>RUR</NavLink> 
    </li>
    <li className="btn">
      <NavLink to='/btc'>BTC</NavLink> 
    </li>
  </ul>
  </div>
  );
};

export default Menu;