import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import loader from "./slices/loadingSlice";
import cart from "./slices/cartSlice";
import user from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user,
    loader,
    cart
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
