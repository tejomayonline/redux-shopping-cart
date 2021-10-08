import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import cartUIUpdateSlice from "./cart-ui-update-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUIUpdate: cartUIUpdateSlice.reducer,
  },
});

export default store;
