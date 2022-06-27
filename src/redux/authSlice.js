import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const key = "AIzaSyAVXFCmTXP6q1iAggEGjUa7SLw_xKZ99_g";
const signInUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + key;
const signUpUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + key;

export const start = createAsyncThunk('auth/start', (data, thunkAPI) => {
  axios.post(data.method === 'signin' ? signInUrl : signUpUrl, {
    email: data.email,
    password: data.password,
    returnSecureToken: true,
  });
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    localId: null,
    idToken: null,
    error: null,
    loading: false,
  },
  reducers: {
    init: (state, action) => {},
    success: (state, action) => {},
    loading: (state, action) => {},
    error: (state, action) => {}
  }
});


export default authSlice.reducer;