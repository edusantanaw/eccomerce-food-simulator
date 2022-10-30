import { createSlice, createAsyncThunk, AnyAction } from "@reduxjs/toolkit";
import auth from "../services/authServices";

const user = JSON.parse(localStorage.getItem("@App:user") || "{}");

interface initial {
  user: any;
  error: boolean | unknown;
  success: boolean;
  loading: boolean;
}


const initialState: initial = {
  user: user ? user : null,
  error: false,
  success: false,
  loading: false,
};

export const register = createAsyncThunk<object, object>(
  "auth/register",
  async (user, thunkAPI) => {
    const response = (await auth.createUser(user)) ;
    console.log(response);
    if (response.error) return thunkAPI.rejectWithValue(response.error);
    return response;
  }
);

export const sign = createAsyncThunk<object, object>("auth/sign", async (user, thunkAPI) => {
  const response = (await auth.signin(user));

  if (response.error) return thunkAPI.rejectWithValue(response.error);
  return response;
});

export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      (state.loading = false), (state.error = false), (state.success = false);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.success = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
      })
      .addCase(sign.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(sign.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.user = action.payload;
        state.success = true;
      })
      .addCase(sign.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.user = false;
        state.error = action.payload;
      });
  },
});
export const { reset } = slice.actions;

export const selectUser = (state: any) => state.user;
export default slice.reducer;
