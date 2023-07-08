import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";
const store = configureStore({
  reducer: { cart: cartSlice, modal: modalReducer },
});

export default store;
