// CartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...item, quantity: 1 });
      }
    },
    deleteFromCart(state, action) {
      return state.filter(cartItem => cartItem.id !== action.payload.id);
    },
    increaseQuantity(state, action) {
      const item = state.find(cartItem => cartItem.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.find(cartItem => cartItem.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    }
  }
});

export const { addToCart, deleteFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
