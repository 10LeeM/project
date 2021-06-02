import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models/product";
import { RootState } from "../store";

type ICart = {
  cart: IProduct[];
};

const initialState: ICart = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const { payload } = action;
      payload.num = 1;

      let { cart } = state;

      if (cart.find((p) => p.id === payload.id)) {
        cart.map((product) => {
          if (product.id === payload.id)
            if (product.num) product.num += 1;
            else product.num = 1;
          return product;
        });
      } else {
        cart = [...cart, payload];
      }

      state.cart = cart;
    },
    remove: (state, action: PayloadAction<IProduct>) => {
      const { payload } = action;
      let { cart } = state;
      alert(payload.name);

      if (payload.num === 1) {
        cart = cart.filter((prod) => prod.id !== payload.id);
      } else {
        cart = cart.map((prod) => {
          if (prod.id === payload.id) {
            prod.num--;
          }
          return prod;
        });
      }

      state.cart = cart;
    },
    setQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      let { cart } = state;
      const {
        payload: { id, quantity },
      } = action;

      cart = cart.map((prod) => {
        if (prod.id === id) prod.num = quantity;
        return prod;
      });

      state.cart = cart;
    },
  },
});

export const { addToCart, remove, setQuantity } = cartSlice.actions;
export const getCart = (state: RootState) => state.cart.cart;
export const getTotal = (state: RootState) => {
  return state.cart.cart.reduce(
    (sum, el) => sum + parseFloat(el.currentPrice),
    0
  );
};
export default cartSlice.reducer;
