import React from 'react';

import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = ({ id, imgUrl, name, quantity, price, totalPrice }) => {
  const dispatchFn = useDispatch();

  const decrementCartItem = () => {
    dispatchFn(
      cartActions.removeFromCart({
        id,
        price,
      })
    );
  };

  const incrementCartItem = () => {
    dispatchFn(
      cartActions.addToCart({
        name,
        id,
        price,
      })
    );
  };

  return (
    <div
      className={`d-flex border-bottom border-primary pt-3 pb-3 ${classes['cart-item']}`}
      key={id}
    >
      <div
        className={`border border-primary ${classes['cart-item__image']} me-2`}
      >
        <img src={imgUrl} alt={name} />
      </div>
      <div className={`${classes['cart-item__title']} flex-grow-1`}>
        <span>{name}</span>
      </div>
      <div className={`${classes['cart-item__price']} ms-2 me-2`}>
        <span>$ {price}</span>
      </div>
      <div
        className={`${classes['cart-item__quantity']} d-flex justify-content-center align-items-center ms-2 me-2`}
      >
        <button
          className='btn btn-dark d-flex justify-content-center align-items-center'
          onClick={decrementCartItem}
        >
          <span>-</span>
        </button>
        <span className='flex-grow-1'>{quantity}</span>
        <button
          className='btn btn-dark d-flex justify-content-center align-items-center'
          onClick={incrementCartItem}
        >
          <span>+</span>
        </button>
      </div>
      <span className={`${classes['cart-item__totalPrice']}`}>
        $ {totalPrice}
      </span>
    </div>
  );
};

export default CartItem;
