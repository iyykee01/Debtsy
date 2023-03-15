import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import UserService from "../../../services/userService/userService";
import { RootState } from "../../store";
import {
  setErrorActionCreator,
  setLoadingActionCreator,
} from "../loadingFeature/loadingFeature";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = JSON.parse(action.payload);
    },
  },
});

interface UpdateUserData {
  firstname: string;
  lastname: string;
  username: string;
  phoneNumber: string;
  country: string;
}

//This method will update user
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (data: UpdateUserData, thunkAPi) => {
    const userState = thunkAPi.getState() as RootState;
    const { id } = userState.user.user;
    const { dispatch } = thunkAPi;

    try {
      dispatch(setLoadingActionCreator(true));
      dispatch(setErrorActionCreator(""));
      const res = await UserService.updateUser(id, data);
      dispatch(setUserActionCreator(JSON.stringify(res?.record)));
    } catch (error) {
      console.log(error);
      Alert.alert("Oop!", "Could not update user");
    } finally {
      dispatch(setLoadingActionCreator(false));
    }
  }
);

export const { setUser: setUserActionCreator } = userSlice.actions;
export default userSlice.reducer;
