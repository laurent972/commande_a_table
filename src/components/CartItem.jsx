import React from 'react'

function CartItem({id,img,name,price,quantity=0}) {

   console.log(quantity);

  return (
         <article className="card drop-shadow align-middle mb-3 cart-item">
         <div className="row g-0  align-items-center">
         <div className="col-md-4 img-card-display cart">
            <img src={img} className="img-fluid rounded-start" alt={name} height={50} />
         </div>
         <div className="col-md-8 ">
            <div className="card-body ">
               <h4 className="card-title fw-bold text-capitalize">{name}</h4>
               < div className="d-flex justify-content-between">
               <p className='price-card fs-3 fw-bold '>{price} <small>€</small></p>
               <p className='price-card qty fs-5'>Qté : {quantity}</p>
               </div>
            </div>
         </div>
         </div>
      </article>
  )
}

export default CartItem