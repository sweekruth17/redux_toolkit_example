import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
import { useDispatch } from "react-redux";
import { closeModal } from "../modal/modalSlice";

const initialState = {
  cartItems: cartItems,
  amount: 4, //qty
  total: 111000,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      // console.log("in clear cart");
    },
    removeItem: (state, action) => {
      state.cartItems.map((item, index) => {
        if (item.id === action.payload) {
          state.cartItems.splice(index, 1);
          state.amount--;
          state.total -= item.price;
        }
      });
    },
    incItem: (state, { payload }) => {
      state.cartItems.map((item, index) => {
        if (item.id === payload) {
          state.total += Number(item.price);
          item.amount++;
          state.amount++;
        }
      });
    },
    decItem: (state, { payload }) => {
      state.cartItems.map((item, index) => {
        if (item.id === payload) {
          if (item.amount > 1 && state.amount > 1) {
            state.total -= Number(item.price);
            item.amount--;
            state.amount--;
          }
        }
      });
    },
  },
});

// console.log(cartSlice);
export const { clearCart, removeItem, incItem, decItem } = cartSlice.actions;

export default cartSlice.reducer;
