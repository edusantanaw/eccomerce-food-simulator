import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
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
    console.log(response);
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

export const order = createAsyncThunk<Object, Object>(
  "product/order",
  async (data, ThunkApi) => {
    const response = await product.order(data);
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
      .addCase(update.pending, (state) => {
        (state.loading = true), (state.error = false), (state.success = false);
      })
      .addCase(update.fulfilled, (state, action) => {
        (state.error = false),
          (state.loading = false),
          (state.success = action.payload);
      })
      .addCase(update.rejected, (state, action) => {
        (state.loading = false),
          (state.success = false),
          (state.error = action.payload);
      })
      .addCase(order.pending, (state) => {
        (state.loading = true), (state.success = false), (state.error = false);
      })
      .addCase(order.fulfilled, (state, action) => {
        (state.loading = false),
          (state.error = false),
          (state.success = action);
      })
      .addCase(order.rejected, (state, action) => {
        (state.loading = false),
          (state.error = action.payload),
          (state.success = false);
      });
  },
});

export const { reset } = slice.actions;

export default slice.reducer;
