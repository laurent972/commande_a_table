import {useSelector} from 'react-redux';

import React from 'react'

function Total() {

   const cart = useSelector((state) => state.cart);
   let total = 0;
   let quantity = 0;
  console.log(cart);
   const getTotal = () =>{

      cart.map((item) =>{
          console.log(item.price);
          quantity += Number(item.quantity)
          total += Number(item.price)*Number(item.quantity)
      })

      return {total, quantity}
   }

   getTotal();
console.log(total, quantity);
  return (
    <>
    <div class="container-fluid text-center bg-white p-5">
      <div className="title-h3">Total <small>({quantity} articles)</small> : {total} €</div>
      <button class="btn button-primary">Commander</button>
    </div>
    </>
  )
}

export default Total