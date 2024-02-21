import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemList: [],
    totalQuantity: 0,
    total: 0,
    showCart: false,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.itemList = action.payload.itemList;
      state.total = action.payload.total;
    },
    addToCart(state, action) {
      state.changed = true;
      const newItem = action.payload;
      const existingItem = state.itemList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
        state.totalQuantity++;
        state.total += newItem.price;
      } else {
        state.itemList.push({
          imgUrl: newItem.imgUrl,
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.totalQuantity++;
        state.total += newItem.price;
      }
    },
    removeFromCart(state, action) {
      state.changed = true;
      const removedItem = action.payload;
      // console.log(removedItem);
      const existingItem = state.itemList.find(
        (item) => item.id === removedItem.id
      );
      state.totalQuantity--;
      state.total -= removedItem.price;

      if (existingItem.quantity === 1) {
        state.itemList = state.itemList.filter(
          (item) => item.id !== removedItem.id
        );
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= removedItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
