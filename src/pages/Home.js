import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import Login from '../components/Login/Login';
// import Logout from '../components/Login/Logout';
// import Profile from '../components/Profile';
import ProductList from '../components/Products/ProductList';
import Cart from '../components/Cart/Cart';
import Notification from '../components/Notification';

import { fetchData, sendCartData } from '../store/cart-actions';

let isFirstRender = true;

const Home = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const dispatchFn = useDispatch();
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart);
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatchFn(fetchData());
  }, [dispatchFn]);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    if (cart.changed) {
      dispatchFn(sendCartData(cart));
    }
  }, [cart, dispatchFn]);

  let content;

  if (isLoading) {
    content = (
      <section className='content d-flex justify-content-center align-items-center text-center flex-column'>
        <p className='loading-text text-warning bg-dark rounded fw-semibold p-4 pt-2 pb-2'>
          Loading...
        </p>
      </section>
    );
  } else if (isAuthenticated) {
    content = (
      <section className='content d-flex justify-content-center align-items-center text-center flex-column'>
        {notification && (
          <Notification
            type={notification.type}
            message={notification.message}
          />
        )}
        {cartIsVisible && <Cart />}
        {/* <Profile /> */}
        {/* <Logout /> */}
        <ProductList />
      </section>
    );
  } else {
    content = (
      <section className='content d-flex justify-content-center align-items-center text-center flex-column'>
        <Login />
      </section>
    );
  }

  return <>{content}</>;
};

export default Home;
