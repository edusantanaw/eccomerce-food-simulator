import { createSlice } from "@reduxjs/toolkit";

const productsCart = JSON.parse(localStorage.getItem("@App:cart") || "{}");

interface prodInfo {
  _id: string;
  name: string;
  image: [];
  desc: string;
  quantity: 0;
}

interface product {
  products: prodInfo[];
}

const initialState: product = {
  products:
    productsCart.length > 0
      ? productsCart
      : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, payload) => {
      const verify = state.products.filter((prod) => {
        if (prod._id === payload.payload._id) return payload.payload._id;
      });
      verify.length > 0
        ? state.products.map((prod) => {
            if(prod.quantity === undefined) prod.quantity = 0 //quantity was undefined
            prod._id === payload.payload._id ? (prod.quantity += 1) : prod;
            console.log(prod.quantity);
            return prod;
          })
        : state.products.push(payload.payload);
    },
    removeToCard: (state, payload) => {
      state.products = state.products.filter(
        (prod) => prod._id !== payload.payload
      );
    },
  },
});

export const { addToCart, removeToCard } = cartSlice.actions;

export const selectCart = (state: any) => state.product;
export default cartSlice.reducer;
