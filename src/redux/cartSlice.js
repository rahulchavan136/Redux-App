import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  itemCount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      state.itemCount++;
      state.totalPrice += newItem.price;
    },
    removeFromCart: (state, action) => {
      const idToRemove = action.payload;
      const existingItem = state.items.find(item => item.id === idToRemove);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
        } else {
          state.items = state.items.filter(item => item.id !== idToRemove);
        }
        state.itemCount--;
        state.totalPrice -= existingItem.price;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartItems = state => state.cart.items;
export const selectCartItemCount = state => state.cart.itemCount;
export const selectCartTotalPrice = state => state.cart.totalPrice;

export default cartSlice.reducer;
