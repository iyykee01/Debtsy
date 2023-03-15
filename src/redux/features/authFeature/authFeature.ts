import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { deleteData, storeData } from "../../../helpers/methods";
import AuthService from "../../../services/authServices/authService";
import { AppDispatch, RootState } from "../../store";
import { setLoadingActionCreator } from "../loadingFeature/loadingFeature";
import { setUserActionCreator } from "../userFeature/userFeature";

interface RegisterData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  passwordConfirm?: string;
}

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data: RegisterData, thunkAPi) => {
    const { dispatch } = thunkAPi;
    try {
      dispatch(setLoadingActionCreator(true));
      const { email, password } = data;
      await AuthService.signUp(data);
      dispatch(loginUser({ email, password }));
    } catch (error) {
      Alert.alert("Sign Up Error!", "Could not sign up user");
    } finally {
      dispatch(setLoadingActionCreator(false));
    }
  }
);

interface LoginData {
  email: string;
  password: string;
  login?: () => void;
}

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data: LoginData, thunkAPi) => {
    const { dispatch } = thunkAPi;
    const { email, password, login } = data;
    deleteData("token");
    try {
      dispatch(setLoadingActionCreator(true));
      const user = await AuthService.login(email, password);
      storeData("token", user?.token);
      dispatch(setUserActionCreator(JSON.stringify(user?.record)));
      login();
    } catch (error) {
      Alert.alert("Login Error!", "Could not login user");
    } finally {
      dispatch(setLoadingActionCreator(false));
    }
  }
);

// const authSLice = createSlice({
//   name: "auth",
//   initialState: {},
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(registerUser.fulfilled, (state: RootState, action) => {
//       console.log("registerUser.fulfilled", action);
//     });
//     builder.addCase(loginUser.fulfilled, (state, action) => {});
//   },
// });
