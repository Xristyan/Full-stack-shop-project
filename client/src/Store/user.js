import { createSlice } from "@reduxjs/toolkit";
import useHttp from "../hooks/use-http";
const userSlice = createSlice({
  name: "userSlice",
  initialState: { user: {}, cart: [] },
  reducers: {
    setUser(state, actions) {
      state.user = actions.payload;
      state.cart = actions.payload.cart;
    },
    clearUser(state) {
      state.user = {};
      state.cart = [];
    },
    addtoCart(state, actions) {
      const newItem = actions.payload;
      const findItem = state.cart.find(
        (element) => element.productId === newItem.productId
      );
      if (!findItem) {
        state.cart.push({
          productId: newItem.productId,
          productName: newItem.productName,
          imageName: newItem.imageName,
          price: newItem.price,
          quantity: 1,
        });
      }
      if (findItem) {
        state.cart = state.cart.map((item) => {
          if (item.productId === findItem.productId) {
            item.quantity++;
          }
          return item;
        });
      }
    },
    removeFromCart(state, actions) {
      const newItem = actions.payload;
      const findItem = state.cart.find(
        (element) => element.productId === newItem.productId
      );
      if (findItem.quantity === 1) {
        state.cart = state.cart.filter(
          (item) => item.productId !== findItem.productId
        );
      }
      if (findItem.quantity > 1) {
        findItem.quantity--;
      }
    },
    deleteFromCart(state, actions) {
      state.cart = state.cart.filter((item) => {
        return item.productId !== actions.payload;
      });
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice.reducer;
