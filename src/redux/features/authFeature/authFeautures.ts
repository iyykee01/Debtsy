import { createAsyncThunk } from "@reduxjs/toolkit";
import { storeData } from "../../../helpers/methods";
import AuthService from "../../../services/authServices/authService";
import {
  setLoadingActionCreator,
  setErrorActionCreator,
} from "../loadingFeature/loadingFeature";
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
  async (data: RegisterData, { dispatch }) => {
    try {
      const { email, password } = data;
      dispatch(setLoadingActionCreator(true));
      dispatch(setErrorActionCreator(""));
      await AuthService.signUp(JSON.stringify(data));
      loginUser({ email, password });
    } catch (error) {
      dispatch(setErrorActionCreator(JSON.stringify(error?.response?.message)));
    } finally {
      dispatch(setLoadingActionCreator(false));
    }
  }
);

interface LoginData {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data: LoginData, { dispatch }) => {
    try {
      const { email, password } = data;
      dispatch(setLoadingActionCreator(true));
      dispatch(setErrorActionCreator(""));

      const user = await AuthService.login(email, password);
      storeData("token", user?.record?.token);
      dispatch(setUserActionCreator(JSON.stringify(user?.record)));
    } catch (error) {
      dispatch(setErrorActionCreator(JSON.stringify(error?.response?.message)));
    } finally {
      dispatch(setLoadingActionCreator(false));
    }
  }
);
