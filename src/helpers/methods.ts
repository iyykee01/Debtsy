import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const storeData = async (keyName: string, value: string) => {
  try {
    await AsyncStorage.setItem(keyName, value);
  } catch (e) {
    throw `Could not save data with keyName:  ${keyName}  and value:  ${value}`;
  }
};

//Get token from storage
export const getData = async (keyName: string) => {
  try {
    const value = await AsyncStorage.getItem(keyName);
    if (value !== null) return value;
  } catch (e) {
    // error reading value
    throw `Could not get data with keyName:  ${keyName}`;
  }
};

export const deleteData = async (keyName: string) => {
  try {
    await AsyncStorage.removeItem(keyName);
  } catch {
    // error reading value
    throw `${keyName}:  could not be cleared..`;
  }
};

// this method will check if token exists in storage
export const checkToken = async () => {
  try {
    const token = await getData("token");
    if (token) return true;
    return false;
  } catch (error) {
    Alert.alert("Error", error);
  }
};

//this method will delete token from storage
export const removeToken = async () => {
  try {
    await deleteData("token");
  } catch (error) {
    Alert.alert("Error", error);
  }
};
