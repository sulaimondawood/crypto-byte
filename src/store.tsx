import { configureStore } from "@reduxjs/toolkit";
import CrytpoInitials from "./features/cryptoApi";
export const store = configureStore({
  reducer: {
    crypto: CrytpoInitials,
  },
});
