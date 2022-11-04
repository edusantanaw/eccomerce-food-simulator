import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import product from "../services/productService";

interface initialState {
    products: [];
    error: any;
    success: any;
    loading: boolean
}

const initialState: initialState = {
  products: [],
  error: false,
  success: false,
  loading: false,
};

export const register = createAsyncThunk<object, object>(
  "product/register",
  async (data, ThunkApi) => {
    const response = await product.newProduct(data);
    if (response.error) ThunkApi.rejectWithValue(reportError);
    console.log(response)
    return response;
  }
);

export const slice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: (state) => {
      (state.loading = false),
        state.products,
        (state.error = false),
        (state.success = false);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state)=>{
        state.loading = true,
        state.error = false
    }).addCase(register.rejected, (state, action)=>{
        state.loading = false,
        state.success = false,
        state.error = action.payload
    }).addCase(register.fulfilled, (state, action)=>{
        state.loading = false,
        state.error = false,
        state.success = action.payload
    })
  }
});

export const { reset } = slice.actions;

export const selectProduct = (state: any) => state.product;
export default slice.reducer;
