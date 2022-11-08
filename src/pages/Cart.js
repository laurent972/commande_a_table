import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import Total from '../components/Total';
import empty from '../empty.png'

function Cart() {

  const cart = useSelector((state)=> state.cart);

  return (
    <>
      <div className='filter-app'>
      <div className="container p-3">
            <div className='title-h2 font-body text-center'>
               Ma commande
            </div>
      </div>
    </div>
     {cart.length > 0 ?
          <section className="container  p-5">
            {cart?.map((item) =>(
                  <CartItem 
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                  />
            ))}
          </section>
      :
        (<div>
          <img src={empty} className="img-fluid" width={70}/>
          <p>Le panier est vide</p>
        </div>)
      }

      <Total />

    </>
    
  )
}

export default Cart