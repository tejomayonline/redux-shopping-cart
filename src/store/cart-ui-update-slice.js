import { createSlice } from "@reduxjs/toolkit";

const cartUIUpdateSlice = createSlice({
  name: "cart-UI-Update",
  initialState: {
    showModal: false,
  },
  reducers: {
    toggleCart(state) {
      state.showModal = !state.showModal;
    },
  },
});

export default cartUIUpdateSlice;
export const cartUIUpdateActions = cartUIUpdateSlice.actions;
