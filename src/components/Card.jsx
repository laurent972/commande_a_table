import React from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/cartSlice';

function Card(food) {

  const dispatch = useDispatch();


 const id = food.food.id;
 const img = food.food.img;
 const name = food.food.name;
 const price = food.food.price;
 
  return (
    <article className="card drop-shadow align-middle mb-3">
      <div className="row g-0  align-items-center">
        <div className="col-md-4 img-card-display">
          <img src={img} className="img-fluid rounded-start" alt={name} />
        </div>
        <div className="col-md-8 ">
          <div className="card-body ">
            <h4 className="card-title fw-bold text-capitalize">{name}</h4>
            <p className="card-text text-capitalize">
              {food?.food.info}
            </p>
            < div className="d-flex justify-content-between">
              <p className='price-card fs-3 fw-bold '>{price} €</p>
              <button 
              className='btn rounded-circle card-button'
              onClick={()=>dispatch(addToCart({id,img,name,price}))}>
                +
                </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )

}

export default Card