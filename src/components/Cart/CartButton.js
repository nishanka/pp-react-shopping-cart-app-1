import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatchFn = useDispatch();

  let btnDisabled = 'disabled';

  if (cartQuantity > 0) {
    btnDisabled = '';
  }

  const clickHandler = (e) => {
    e.preventDefault();
    dispatchFn(uiActions.setCartVisibility(true));
  };

  return (
    <button
      className={`btn btn-secondary me-2 ${btnDisabled}`}
      onClick={clickHandler}
    >
      Cart: <span className='badge text-bg-info'>{cartQuantity}</span> Items
    </button>
  );
};

export default CartButton;
