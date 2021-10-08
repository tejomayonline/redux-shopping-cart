import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, { payload }) {
      // find or create product array
      const productIndex = state.items.findIndex(
        (item) => item.id === payload.id
      );
      if (productIndex > -1) {
        state.items[productIndex] = {
          ...state.items[productIndex],
          count: state.items[productIndex].count + 1,
          totalPrice: Math.floor(
            state.items[productIndex].totalPrice + payload.price
          ),
        };
      } else {
        state.items.push({
          id: payload.id,
          title: payload.title,
          count: 1,
          price: payload.price,
          totalPrice: payload.price,
        });
      }
    },

    updateCart(state, { payload: cart }) {
      state.items.push(...cart);
    },
    removeItem(state, { payload: id }) {
      const productIndex = state.items.findIndex((item) => item.id === id);
      if (productIndex > -1) {
        if (state.items[productIndex].count > 0) {
          state.items[productIndex] = {
            ...state.items[productIndex],
            count: state.items[productIndex].count - 1,
            totalPrice: Math.floor(
              state.items[productIndex].totalPrice -
                state.items[productIndex].price
            ),
          };
        } else {
          state.items.splice(productIndex, 1);
        }
      } else {
        console.log("Item does not exist");
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
