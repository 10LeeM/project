import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  isLoading: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    start: (state) => {
      state.isLoading = true;
    },
    stop: (state) => {
      state.isLoading = false;
    },
  },
});

export const { start, stop } = loadingSlice.actions;
export const isLoading = (state: RootState) => state.loader.isLoading;
export default loadingSlice.reducer;
