import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./apiCalls";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    logoutSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

const resgisterUserSlice = createSlice({
  name: "register",
  initialState: {
    isRegistering: false,
    isError: false,
    isSuccess: false,
  },
  reducers: {
    registerStart: (state) => {
      state.isRegistering = true;
    },
    registerSuccess: (state) => {
      state.isSuccess = true;
    },
    registerFailed: (state) => {
      state.isError = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logoutSuccess } =
  userSlice.actions;

export const { registerStart, registerSuccess, registerFailed } =
  resgisterUserSlice.actions;
//   export default userSlice.reducer;
// export default resgisterUserSlice.reducer;

export const userReducer = userSlice.reducer;
export const resgisterUserReducer = resgisterUserSlice.reducer;

export default {
  userReducer,
  resgisterUserReducer,
};
