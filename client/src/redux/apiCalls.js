import axios from "axios";
import { publicRequests } from "../serviceLayer/requestMethods";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
  registerStart,
  registerSuccess,
  registerFailed,
} from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequests.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutSuccess());
};

export const registerUser = (dispatch, registerUser) => {
  dispatch(registerStart());
  try {
    const response = publicRequests.post("auth/register", registerUser);
    if (response.status === 200) {
      dispatch(registerSuccess());
    }
  } catch (err) {
    dispatch(registerFailed());
  }
};
