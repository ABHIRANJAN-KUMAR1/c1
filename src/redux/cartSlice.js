import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1 });
      } else {
        existingItem.quantity++;
      }
      state.totalAmount += newItem.price;
    },
    increase(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      item.quantity++;
      state.totalQuantity++;
      state.totalAmount += item.price;
    },
    decrease(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      if (item.quantity > 1) {
        item.quantity--;
        state.totalQuantity--;
        state.totalAmount -= item.price;
      }
    },
    removeItem(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      state.totalQuantity -= item.quantity;
      state.totalAmount -= item.price * item.quantity;
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  }
});

export const { addItem, increase, decrease, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
