import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart-slice';

const Store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default Store;
