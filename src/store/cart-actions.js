import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';

export const fetchData = () => {
  return async (dispatchFn) => {
    const fetchHandler = async () => {
      const res = await fetch(
        'https://shopping-cart-dc964-default-rtdb.firebaseio.com/cartItems.json'
      );

      if (!res.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await res.json();
      return data;
    };
    try {
      const cartData = await fetchHandler();
      dispatchFn(
        cartActions.replaceCart({
          itemList: cartData.itemList || [],
          totalQuantity: cartData.totalQuantity,
          total: cartData.total,
        })
      );
    } catch (error) {
      dispatchFn(
        uiActions.showNotification({
          open: true,
          type: 'danger',
          message: 'Sending Request failed.',
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatchFn) => {
    dispatchFn(
      uiActions.showNotification({
        open: true,
        type: 'warning',
        message: 'Sending Request to Database...',
      })
    );
    const sendRequest = async () => {
      const res = await fetch(
        'https://shopping-cart-dc964-default-rtdb.firebaseio.com/cartItems.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      dispatchFn(
        uiActions.showNotification({
          open: true,
          type: 'success',
          message: 'Sent Request To Database Successfully.',
        })
      );
    };
    try {
      await sendRequest();
    } catch (err) {
      dispatchFn(
        uiActions.showNotification({
          open: true,
          type: 'danger',
          message: 'Sending Request failed.',
        })
      );
    }
  };
};
