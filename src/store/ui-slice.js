import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "cart-UI-Update",
  initialState: {
    showModal: false,
    notification: null,
  },
  reducers: {
    toggleCart(state) {
      state.showModal = !state.showModal;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export default uiSlice;

export const uiActions = uiSlice.actions;
