import { configureStore } from '@reduxjs/toolkit';
 import cartReducer from './cartSlice';  
import productsReducer from './ProductsSlice';
const rootReducer = {
   cart: cartReducer,
  products: productsReducer,
};

const Store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default Store;
