import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models/product";
import { RootState } from "../store";

type ICart = {
cart: IProduct[]
}

const initialState: ICart = {
  cart: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
   addToCart: (state, action: PayloadAction<IProduct>) => {
    const {payload} = action
    payload.num = 1;

    let {cart } = state

    if(cart.find(p => p.id === payload.id)){
        cart.map(product => {
            if(product.id === payload.id)
                if(product.num)
                    product.num+=1
                else
                product.num = 1
            return product
        })
    }else{
        cart = [...cart, payload]
    }

    state.cart = cart
   }
  },
});

export const { addToCart } = cartSlice.actions;
export const cart = (state: RootState) => state.cart.cart;
export default cartSlice.reducer;
