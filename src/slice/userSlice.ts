import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import auth from '../services/authServices'
// export const slice = createSlice({
//     name: 'user',
//     initialState: {
//         user: '',
//         isLogged: false,
//     },
//     reducers: {
//         changeUser(state, {payload}){
//             return {...state, isLogged: true, user: payload}
//           },
//           logout(state){
//             return {...state, isLogged: false, user: ''}
//           }
//         }
//     }
// )

const user = JSON.parse(localStorage.getItem('@App:user') || '{}') 


const initialState = {
  user: user ? user : null,
  error: false,
  success: false,
  loading: false
}

export const createUser = createAsyncThunk(
  "/createUser",
  async (user,thunk) = {
    const data = auth.createUser(user)
  
  if(data.errors){
    return thunkAPI.rejectWithValue(data.errors[0]);
  }

  return data;

  }

)

// export const {changeUser, logout} = slice.actions

// export  const selectUser = (state: any) => state.user

// export default slice.reducer