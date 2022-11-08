import React from "react";
import logo from '../orderLogo.svg';
import cloche from '../cloche.svg';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


export default function Header() {

  const cart = useSelector((state)=> state.cart);


  const getTotalQuantity = () => {
     let total = 0
     cart.forEach(item => {
       total += item.quantity
     })
     return total
   }


  return (
    <nav className="navbar drop-shadow">
      <div className="container">
        <Link to="/">
          <img src={logo} className="app-logo" alt="logo order"/>
        </Link>
        <div id="cloche" className="position-relative">
          <Link to="/cart">
            <img src={cloche} alt="cart" />
            <p className="cloche-number box-rounded text-center position-absolute">{getTotalQuantity() || 0}</p>
          </Link>
        </div>
      </div>
    </nav>
  )
}
