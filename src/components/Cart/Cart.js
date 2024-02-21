import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './Cart.module.css';
import CartItem from './CartItem';
import AlertBox from '../AlertBox';
import { uiActions } from '../../store/ui-slice';

const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  const dispatchFn = useDispatch();
  const cartIsEmpty = cartData.totalQuantity === 0 ? true : false;

  const closeCartHandler = () => {
    dispatchFn(uiActions.setCartVisibility(false));
  };

  return (
    <div
      className={`${classes.cart} border border-2 rounded border-primary bg-light p-4 mx-auto mt-3 mb-3`}
    >
      <div className={`${classes['cart-header']} text-center p-2`}>
        <h3>Your Cart</h3>
        <button
          className={`${classes['cart-close']} btn btn-primary p-0`}
          onClick={closeCartHandler}
        >
          x
        </button>
      </div>
      {cartIsEmpty && <AlertBox type='danger' message='Your Cart Is Empty.' />}
      {!cartIsEmpty && (
        <div className='cart-items'>
          <div className='cart-items__header d-flex border-bottom border-primary pb-3 text-primary fw-bold'>
            <span className={`${classes['cart-items-header__image']} me-2`}>
              Image
            </span>
            <span className='cart-items-header__title flex-grow-1'>Title</span>
            <span className='cart-items-header__price ms-2 me-2'>Price</span>
            <span
              className={`${classes['cart-items-header__quantity']} d-flex justify-content-center align-items-center ms-3 me-3`}
            >
              Qty
            </span>
            <span className={`${classes['cart-item-header__totalPrice']}`}>
              Total
            </span>
          </div>
          {cartData.itemList.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              imgUrl={item.imgUrl}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              totalPrice={item.totalPrice}
            />
          ))}
          <div className='cart-summary pt-3 pb-3 fw-bold'>
            <div className='cart-summary__item d-flex'>
              <span
                className={`${classes['cart-summary__label']} flex-grow-1 text-right`}
              >
                Total Items:
              </span>
              <span className={classes['cart-summary__value']}>
                {cartData.totalQuantity}
              </span>
            </div>
            <div className='cart-summary__item d-flex'>
              <span
                className={`${classes['cart-summary__label']} flex-grow-1 text-right`}
              >
                Total Amount:
              </span>
              <span className={classes['cart-summary__value']}>
                $ {cartData.total}
              </span>
            </div>
          </div>
        </div>
      )}
      {!cartIsEmpty && (
        <div className='cart-footer d-flex justify-content-end'>
          <button className='btn btn-secondary me-2' onClick={closeCartHandler}>
            Close
          </button>
          <button className='btn btn-primary'>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
