import React from 'react';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const ProductItem = ({ name, id, imgUrl, price }) => {
  const dispatchFn = useDispatch();

  const addToCartHandler = (event) => {
    event.preventDefault();
    dispatchFn(
      cartActions.addToCart({
        name,
        id,
        imgUrl,
        price,
      })
    );
  };

  return (
    <div className='col col-3'>
      <div className='card'>
        <img src={imgUrl} className='card-img-top' alt={name} />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>$ {price}</p>
          <button className='btn btn-primary' onClick={addToCartHandler}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
