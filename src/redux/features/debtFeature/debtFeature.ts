import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import DebtService from "../../../services/debtServices/debtService";
import {
  setLoadingActionCreator,
  setErrorActionCreator,
} from "../loadingFeature/loadingFeature";

const initialState = {
  debts: null,
};

export const debtSlice = createSlice({
  name: "debt",
  initialState,
  reducers: {
    setDebt: (state, action: PayloadAction<any>) => {
      state.debts = JSON.parse(action.payload);
    },
  },
});

interface CreateDebtData {
  user: string; //user id
  name: string;
  unpaidAmount: string;
  paidAmount: string;
  paymentRate?: number;
  interestRate?: number;
  dueDate?: string;
  frequency?: string;
  isCompleted?: string;
  category: string;
}

//This method will create new debt
export const createDebt = createAsyncThunk(
  "debt/createDebt",
  async (data: CreateDebtData, { dispatch }) => {
    try {
      dispatch(setLoadingActionCreator(true));
      dispatch(setErrorActionCreator(""));
      const res = await DebtService.creatDebts(data);
      //dispatch debt data
    } catch (error) {
      Alert.alert("Oop!", "Could not create debt");
    } finally {
      dispatch(setLoadingActionCreator(false));
    }
  }
);

interface UpdateDebtData {
  id?: string;
  user: string; //user id
  name: string;
  amountOwed: number;
  paymentRate?: number;
  interestRate?: number;
  dueDate?: string;
  frequency?: string;
  isCompleted?: string;
  category: string;
}

/*
  This method will update debt 
  it will take id and data as parameter
  deduct paidDebt from unpaid and update the debt
*/
export const updateDebt = createAsyncThunk(
  "debt/updateDebt",
  async (data: UpdateDebtData, { dispatch }) => {
    const { id } = data;
    try {
      dispatch(setLoadingActionCreator(true));
      dispatch(setErrorActionCreator(""));
      const res = await DebtService.updateDebts(id, data);
      //dispatch debt data
    } catch (error) {
      Alert.alert("Oop!", "Could not update debt");
    } finally {
      dispatch(setLoadingActionCreator(false));
    }
  }
);

//This method will delete debt
export const deleteDebt = createAsyncThunk(
  "debt/updateDebt",
  async (id: string, { dispatch }) => {
    try {
      dispatch(setLoadingActionCreator(true));
      dispatch(setErrorActionCreator(""));
      const res = await DebtService.deleteDebts(id);
      //dispatch debt data
    } catch (error) {
      Alert.alert("Oop!", "Could not delete debt");
    } finally {
      dispatch(setLoadingActionCreator(false));
    }
  }
);

//this method will get all debts without paramaters using only dispatch
interface GetAllDebtsData {
  page: number;
  limit: number;
}
export const getAllDebts = createAsyncThunk(
  "debt/getAllDebts",
  async (data: GetAllDebtsData, { dispatch }) => {
    try {
      dispatch(setLoadingActionCreator(true));
      const { page, limit } = data;
      const res = await DebtService.getAllDebts(page, limit);
      dispatch(setDebtActionCreator(JSON.stringify(res?.items)));
    } catch (error) {
      Alert.alert("Oop!", "Could not get debts");
    } finally {
      dispatch(setLoadingActionCreator(false));
    }
  }
);

export const { setDebt: setDebtActionCreator } = debtSlice.actions;
export default debtSlice.reducer;
