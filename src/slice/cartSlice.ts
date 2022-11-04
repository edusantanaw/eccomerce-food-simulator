import { createSlice, createAction } from "@reduxjs/toolkit";

interface product {
    products: Array<object>;
    quantity: Number
}

const initialState: product = {
    products: [],
    quantity: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, {payload})=> {
            state.products.push(payload)
        }
    }
})

export const {
    addToCart
} = cartSlice.actions

export const selectCart = (state: any) => state.product
export default cartSlice.reducer