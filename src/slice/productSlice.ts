import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import product from "../services/productService";

interface initialState {
  error: any;
  success: any;
  loading: boolean;
}

const initialState: initialState = {
  error: false,
  success: false,
  loading: false,
};

export const register = createAsyncThunk<Object, Object>(
  "product/register",
  async (data, ThunkApi) => {
    const response = await product.newProduct(data);
   console.log(response)
    if (response.error) ThunkApi.rejectWithValue(reportError);
    return response;
  }
);

export const update = createAsyncThunk<Object, Object>(
  "product/update",
  async (data, ThunkApi) => {
    const response = await product.updateProduct(data);
    if (response.error) ThunkApi.rejectWithValue(reportError);
    return response;
  }
);

export const slice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: (state) => {
      (state.loading = false), (state.error = false), (state.success = false);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        (state.loading = true), (state.error = false);
      })
      .addCase(register.rejected, (state, action) => {
        (state.loading = false),
          (state.success = false),
          (state.error = action.payload);
      })
      .addCase(register.fulfilled, (state, action) => {
        (state.loading = false),
          (state.error = false),
          (state.success = action.payload);
      })
      .addCase(update.fulfilled, (state, payload) => {});
  },
});

export const { reset } = slice.actions;

export default slice.reducer;
